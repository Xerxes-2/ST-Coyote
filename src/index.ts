/// <reference types="web-bluetooth" />

import "./style.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { Popup } = (globalThis as any).SillyTavern.getContext();
const { getContext } = (globalThis as any).SillyTavern;
// Popup.show.text(message);
const SCALE = 10;
const MAX_POWER = 200;
const extensionName = "ST-Coyote";
const extensionFolderPath = `scripts/extensions/third-party/${extensionName}`;

const B0_CMD_EXAMPLE = [
  0xb0, 0b00001111, 10, 10, 10, 10, 20, 30, 0, 5, 10, 50, 10, 10, 20, 30, 0, 5,
  10, 50,
];

interface B0Command {
  power: number;
  freq: [number, number, number, number];
  level: [number, number, number, number];
}

function extractDeviceContent(str: string) {
  const regex = /<device>([\s\S]*?)<\/device>/g;
  const contents = [];
  let match;
  // find all matches after </thinking>
  const endIndex = str.indexOf("</thinking>");
  if (endIndex !== -1) {
    str = str.slice(endIndex);
  }

  while ((match = regex.exec(str)) !== null) {
    try {
      let json = JSON.parse(match[1]) as B0Command;
      // validate the values
      if (json.power === undefined) {
        continue;
      }
      if (!Array.isArray(json.freq) || json.freq.length !== 4) {
        continue;
      }
      if (!Array.isArray(json.level) || json.level.length !== 4) {
        continue;
      }
      contents.push(json);
    } catch {
      continue;
    }
  }

  return contents;
}

async function send_while(characteristic: BluetoothRemoteGATTCharacteristic) {
  if (!characteristic) {
    console.log("蓝牙未连接");
    return;
  }
  const context = await getContext();

  let inputString = context.chat[context.chat.length - 1].mes as string;

  let result = extractDeviceContent(inputString);
  if (result.length > 0) {
    let b0 = result[result.length - 1];
    console.log(`Coyote: ${b0.power}`);
    console.log(`Coyote: ${b0.freq}`);
    console.log(`Coyote: ${b0.level}`);

    let power = b0.power > MAX_POWER ? MAX_POWER : b0.power;
    let powerScale = Math.floor(power / SCALE);
    let numbers = B0_CMD_EXAMPLE;
    numbers[2] = powerScale;
    // 4 - 7 is freq
    numbers[4] = b0.freq[0];
    numbers[5] = b0.freq[1];
    numbers[6] = b0.freq[2];
    numbers[7] = b0.freq[3];
    // 8 - 11 is level
    numbers[8] = b0.level[0];
    numbers[9] = b0.level[1];
    numbers[10] = b0.level[2];
    numbers[11] = b0.level[3];

    await send_value(characteristic, numbers);
    return 0;
  }
}

async function send_value(
  characteristic: BluetoothRemoteGATTCharacteristic,
  value: number[]
) {
  console.log(new Uint8Array(value));
  return await characteristic.writeValue(new Uint8Array(value));
}

// ...existing code...
let characteristic: BluetoothRemoteGATTCharacteristic | undefined = undefined;

// 这个函数在按钮被点击时被调用
async function onButtonClick() {
  const statusElement = document.getElementById("coyote_connection_status");

  try {
    // Update status to connecting
    if (statusElement) {
      statusElement.textContent = "Connecting...";
      statusElement.className = "connection-status disconnected";
    }

    const device = await navigator.bluetooth.requestDevice({
      filters: [{ namePrefix: "47L121000" }],
      optionalServices: ["0000180c-0000-1000-8000-00805f9b34fb"],
    });

    // Set up disconnect listener
    device.addEventListener("gattserverdisconnected", onDeviceDisconnected);

    const server = await device?.gatt?.connect();
    const service = await server?.getPrimaryService(
      "0000180c-0000-1000-8000-00805f9b34fb"
    );
    if (!service) {
      throw new Error("Service not found");
    }

    characteristic = await service.getCharacteristic(
      "0000150a-0000-1000-8000-00805f9b34fb"
    );

    console.log("蓝牙连接成功");
    Popup.show.text("蓝牙连接成功");

    // Update status to connected
    if (statusElement) {
      statusElement.textContent = "Connected";
      statusElement.className = "connection-status connected";
    }

    setInterval(send_while, 1000, characteristic);
  } catch (error) {
    console.log("蓝牙连接失败", error);
    Popup.show.text("蓝牙连接失败");

    // Update status to disconnected
    if (statusElement) {
      statusElement.textContent = "Disconnected";
      statusElement.className = "connection-status disconnected";
    }

    characteristic = undefined;
  }
}

function onDeviceDisconnected() {
  console.log("蓝牙设备已断开连接");
  Popup.show.text("蓝牙设备已断开连接");

  const statusElement = document.getElementById("coyote_connection_status");
  if (statusElement) {
    statusElement.textContent = "Disconnected";
    statusElement.className = "connection-status disconnected";
  }

  characteristic = undefined;
}

// Modify connectBluetoothDevice function to be internal since we now handle everything in onButtonClick
// or remove it entirely if no longer needed elsewhere

jQuery(async () => {
  const settingsHtml = await $.get(`${extensionFolderPath}/src/index.html`);

  $("#extensions_settings").append(settingsHtml);
  $("#my_button").on("click", onButtonClick);
});

import {
  DESKTHING_EVENTS,
  SETTING_TYPES,
  SocketData,
} from "@deskthing/types";
import { DeskThing } from "@deskthing/server";
import FortuneService from "./fortune";

const start = async () => {
  const fortuneService = FortuneService.getInstance();

  let Data = await DeskThing.getSettings();
  DeskThing.on(DESKTHING_EVENTS.SETTINGS, (newData) => {
    Data = newData.payload;
    if (Data) {
      fortuneService.updateSettings(Data as Record<string, { value: unknown }>);
    }
  });

  // No API keys needed! Just optional settings for refresh interval and category
  if (!Data?.refreshInterval) {
    setupSettings();
  }

  const handleGet = async (request: SocketData) => {
    if (request.request === "fortune_data") {
      console.log("Getting fortune data");
      const fortuneData = fortuneService.getFortuneData();
      if (fortuneData) {
        DeskThing.send({
          type: "fortune_data",
          payload: fortuneData,
        });
      }
    } else if (request.request === "next_fortune") {
      console.log("Getting next fortune");
      const fortuneData = fortuneService.nextFortune();
      if (fortuneData) {
        DeskThing.send({
          type: "fortune_data",
          payload: fortuneData,
        });
      }
    }
  };

  DeskThing.on("get", handleGet);

  const stop = async () => {
    fortuneService.stop();
  };
  DeskThing.on("stop", stop);
};

const setupSettings = async () => {
  DeskThing.initSettings({
    refreshInterval: {
      label: "Auto-Refresh Interval (seconds)",
      id: "refreshInterval",
      description: "Seconds between automatic fortune changes. Set to 0 to disable auto-refresh.",
      type: SETTING_TYPES.NUMBER,
      value: 30,
      max: 300,
      min: 0,
    },
    category: {
      label: "Fortune Category",
      id: "category",
      description: "Filter fortunes by category, or show all.",
      type: SETTING_TYPES.STRING,
      value: "all",
    },
  });
};

// Main Entrypoint of the server
DeskThing.on("start", start);

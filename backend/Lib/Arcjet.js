import arcjet, { shield, detectBot, slidingWindow } from "@arcjet/node";
import 'dotenv/config'

const aj = arcjet({
  key: process.env.ARC_API,
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),
    slidingWindow({
      mode: "LIVE",
      max: 2,
      interval: 60,
    }),
  ],
});

export default aj;

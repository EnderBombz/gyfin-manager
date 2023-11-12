"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = require("./bot");
const express_1 = require("./express");
class StartApp {
    constructor() {
        new express_1.ExpressAppServer();
        new bot_1.DiscordCephalonE();
    }
}
new StartApp();

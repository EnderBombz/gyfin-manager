"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordCephalonE = void 0;
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
dotenv_1.default.config();
class DiscordCephalonE {
    constructor() {
        this.init();
    }
    init() {
        const client = this.getClient();
        this.getFunctionFolders(client);
        this.startHandlers(client);
        this.login(client);
    }
    getClient() {
        const client = new discord_js_1.Client({ intents: discord_js_1.GatewayIntentBits.Guilds });
        client.commands = new discord_js_1.Collection();
        client.commandArray = [];
        return client;
    }
    startHandlers(client) {
        client.handleEvents();
        client.handleCommands();
    }
    getFunctionFolders(client) {
        const functionFolders = fs_1.default.readdirSync('./src/functions');
        for (const folder of functionFolders) {
            const functionFiles = fs_1.default.readdirSync(`./src/functions/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of functionFiles)
                require(`./functions/${folder}/${file}`)(client);
        }
    }
    login(client) {
        const { BOT_TOKEN, } = process.env;
        client.login(BOT_TOKEN);
    }
}
exports.DiscordCephalonE = DiscordCephalonE;

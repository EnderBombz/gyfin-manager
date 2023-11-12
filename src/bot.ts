import { Client, Collection, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import fs from "fs"
dotenv.config();

export class DiscordCephalonE {
    constructor() {
        this.init()
    }
    init() {
        const client: any = this.getClient()

        this.getFunctionFolders(client)
        this.startHandlers(client)
        this.login(client)
    }

    getClient() {
        const client: any = new Client({ intents: GatewayIntentBits.Guilds });
        client.commands = new Collection();
        client.commandArray = [];
        return client
    }

    startHandlers(client) {
        client.handleEvents();
        client.handleCommands();
    }

    getFunctionFolders(client) {
        const functionFolders = fs.readdirSync('./src/functions');

        for (const folder of functionFolders) {
            const functionFiles = fs.readdirSync(`./src/functions/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of functionFiles)
                require(`./functions/${folder}/${file}`)(client)
        }
    }

    login(client) {
        const {
            BOT_TOKEN,
        } = process.env;

        client.login(BOT_TOKEN);
    }

}


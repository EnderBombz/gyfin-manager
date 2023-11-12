var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
require('dotenv').config();
const fs = require('fs');
module.exports = (client) => {
    client.handleCommands = () => __awaiter(this, void 0, void 0, function* () {
        const commandFolders = fs.readdirSync('./src/commands');
        for (const folder of commandFolders) {
            const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith('.js'));
            const { commands, commandArray } = client;
            for (const file of commandFiles) {
                const command = require(`../../commands/${folder}/${file}`);
                commands.set(command.data.name, command);
                commandArray.push(command.data.toJSON());
                console.log(`Command: ${command.data.name} has been passe through the handler`);
            }
        }
        const clientId = '1165474488117383178';
        const guildId = '329405337054609429';
        const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN);
        try {
            console.log("started refreshing application (/) commands.");
            const { commands, commandArray } = client;
            yield rest.put(Routes.applicationCommands(clientId, guildId), {
                body: commandArray,
            });
        }
        catch (err) {
            console.error("[handleCommands]:", err);
        }
    });
};

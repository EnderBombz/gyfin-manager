const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
require('dotenv').config();
const fs = require('fs')

module.exports = (client) => {

    client.handleCommands = async () => {
        const commandFolders = fs.readdirSync('./src/commands');
        
        for (const folder of commandFolders) {
            const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith('.js'));

            const { commands, commandArray } = client;
            for (const file of commandFiles) {

                const command = require(`../../commands/${folder}/${file}`);
                commands.set(command.data.name, command);
                commandArray.push(command.data.toJSON());
                console.log(`Command: ${command.data.name} has been passe through the handler`)

            }
        }

        const clientId = '1165474488117383178';
        const guildId = '329405337054609429';

        const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN)

        try {
            console.log("started refreshing application (/) commands.");
            const { commands, commandArray } = client;

            await rest.put(Routes.applicationCommands(clientId, guildId), {
                body: commandArray,
            })
        } catch (err) {
            console.error("[handleCommands]:",err)
        }
    }
}
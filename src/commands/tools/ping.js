const { SlashCommandBuilder } = require('discord.js');
const { execute } = require('../../events/client/event');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription("Return a ping!"),
    async execute(interaction,client) {
        const message = await interaction.deferReply({
            fetchReply:true
        })

        const newMessage = `API Latency: ${client.ws.ping}\nClient Ping: ${message.createdTimestamp - interaction.createdTimestamp}`
    
        console.log(interaction)

        await interaction.editReply({
            content:newMessage
        })
        
    }
}
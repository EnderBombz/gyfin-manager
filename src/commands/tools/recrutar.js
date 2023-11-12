const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
const { default: RequestModal } = require('../../components/requestModal');
const { execute } = require('../../events/client/event');

// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient()

module.exports = {
    data: new SlashCommandBuilder()
        .setName('recrutar')
        .setDescription("Exibe as regras de convicência no clã."),
    async execute(interaction, client) {

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('1032639462938787880')
                    .setLabel('Gyffin Noria')
                    .setStyle(ButtonStyle.Success),
            );



        const embed = new EmbedBuilder()
            .setColor(5430901)
            .setTitle('Recrutamento')
            .setDescription('Envie uma solicitação para recrutamento ao interagir com os botões:\n\n <@&329423822543519756>');


        await interaction.reply({
            embeds: [embed],
            components: [row],
        });

        //collector.on('end', collected => console.log(`Collected ${collected.size} items`));
    }
}
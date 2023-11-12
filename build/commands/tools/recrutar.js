var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
const { default: RequestModal } = require('../../components/requestModal');
const { execute } = require('../../events/client/event');
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient()
module.exports = {
    data: new SlashCommandBuilder()
        .setName('recrutar')
        .setDescription("Exibe as regras de convicência no clã."),
    execute(interaction, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const row = new ActionRowBuilder()
                .addComponents(new ButtonBuilder()
                .setCustomId('1032639462938787880')
                .setLabel('Cyber Emerald')
                .setStyle(ButtonStyle.Success));
            const embed = new EmbedBuilder()
                .setColor(5430901)
                .setTitle('Recrutamento')
                .setDescription('Envie uma solicitação para recrutamento ao interagir com os botões:\n\n <@&1032639462938787880>');
            yield interaction.reply({
                embeds: [embed],
                components: [row],
            });
            //collector.on('end', collected => console.log(`Collected ${collected.size} items`));
        });
    }
};

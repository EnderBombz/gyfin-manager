"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
class RequestGuild {
    constructor(interaction, client, nickname, user) {
        this.requestChannelId = '1173054230488174703';
        this.nickname = nickname;
        this.init(interaction, client);
    }
    init(interaction, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const channel = client.channels.cache.get(this.requestChannelId);
            const rowAwnser = new discord_js_1.ActionRowBuilder()
                .addComponents(new discord_js_1.ButtonBuilder()
                .setCustomId('accept')
                .setLabel('Aprovar')
                .setStyle(discord_js_1.ButtonStyle.Success), new discord_js_1.ButtonBuilder()
                .setCustomId('deny')
                .setLabel('Recusar')
                .setStyle(discord_js_1.ButtonStyle.Danger));
            const recruitEmbed = {
                fields: [
                    {
                        name: "Nome de família",
                        value: this.nickname,
                        inline: true
                    },
                    {
                        name: "MemberTag",
                        value: `${interaction.user.username}#${interaction.user.discriminator}`,
                        inline: true
                    }
                ],
                timestamp: new Date().toISOString(),
                title: `Nova solicitação de Cargo: ${interaction.user.username}`,
                description: "Nova solicitação para o cargo: <@&1032639462938787880>",
                thumbnail: {
                    url: "https://i.imgur.com/YwgejNq.png"
                },
                color: 5430901
            };
            yield channel.send({
                content: `${interaction.user.id.toString()}`,
                embeds: [recruitEmbed],
                components: [rowAwnser]
            });
            interaction.reply({
                content: "Solcitação enviada com sucesso! ",
                ephemeral: true
            });
        });
    }
}
exports.default = RequestGuild;

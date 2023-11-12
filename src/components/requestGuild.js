import { ActionRowBuilder, ButtonBuilder,ButtonStyle } from "discord.js";


export default class RequestGuild {
    constructor(interaction, client, nickname, user) {
        this.requestChannelId = '1173054230488174703'
        this.nickname = nickname
        this.init(interaction, client)
    }
    async init(interaction, client) {

        const channel = client.channels.cache.get(this.requestChannelId);

        const rowAwnser = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('accept')
                    .setLabel('Aprovar')
                    .setStyle(ButtonStyle.Success),

                new ButtonBuilder()
                    .setCustomId('deny')
                    .setLabel('Recusar')
                    .setStyle(ButtonStyle.Danger)
            );

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
        }

        await channel.send({
            content: `${interaction.user.id.toString()}`,
            embeds: [recruitEmbed],
            components: [rowAwnser]
        });


        interaction.reply({
            content: "Solcitação enviada com sucesso! ",
            ephemeral: true
        })
    }
}
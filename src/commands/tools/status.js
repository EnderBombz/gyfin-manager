const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { execute } = require('../../events/client/event');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription("Exibe as regras de convicência no clã."),
    async execute(interaction, client) {


        const lider = interaction.member.roles.cache.some(r => r.id === "1035693512534016000")
        const viceLider = interaction.member.roles.cache.some(r => r.id === "1032620622666276874")
        const staff = interaction.member.roles.cache.some(r => r.id === "1032620879869394964")
        const founder = interaction.member.roles.cache.some(r => r.id === "1032620500196798544")

        //if (lider || viceLider || staff || founder) {

        const statusEmbed = {

            title: "Status",
            description: `
                <:ColdModBundleIcon:1036004318316343436>
            `,
            color: 3202158,

        };

        await interaction.reply({
            embeds: [statusEmbed]
        })
        /*  } else {
              interaction.reply({
                  content: "Você não possuí permissão para usar este comando",
                  ephemeral: true,
              })
          }*/



    }
}
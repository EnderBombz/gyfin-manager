const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { execute } = require('../../events/client/event');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rules')
        .setDescription("Exibe as regras de convicência no clã."),
    async execute(interaction, client) {


        const lider = interaction.member.roles.cache.some(r => r.id === "1035693512534016000")
        const viceLider = interaction.member.roles.cache.some(r => r.id === "1032620622666276874")
        const staff = interaction.member.roles.cache.some(r => r.id === "1032620879869394964")
        const founder = interaction.member.roles.cache.some(r => r.id === "1032620500196798544")

        if (lider || viceLider || staff || founder) {

            const discordEmbed = {

                title: "Discord Obrigatório",
                description: `
                Prezamos pela convivência e socialização com nossos membros, então, optamos por essa regra.
                
                Caso queira jogar de forma mais privada, não tem problema, desde que saibamos quem você é, não queremos número, queremos uma família.
                `,
                color: 3202158,

            };

            const ruleEmbed = {

                title: "Regras de convivência",
                description: `
                :large_orange_diamond: É vedada toda e qualquer censura de natureza política, ideológica e artística. todos podem expor suas opiniões, contanto que, não incomode os outros.
    
                :large_orange_diamond: Não spame/floode o qualquer chat.
                
                :large_orange_diamond: Peça ajuda de forma agradável, não insista, todos somos jogadores.
                
                :large_orange_diamond: Qualquer conteúdo que seja NSFW não é permitido em canais abertos, apenas em canais direcionados para o conteúdo, caso interessado, solicite o cargo <@&1035749418269429810>.
                
                :large_orange_diamond: Qualquer envolvimento indesejado na vida pessoal de qualquer membro seja descoberto e reportado para qualquer staff, vice-líder e lider, será tomado as devidas providências.
                
                :large_orange_diamond: Qualquer problema causado em outro discord, devem ficar no outro discord, caso seja tomado providências com base em problemas pessoais, será absolvido de staff e banido de todos os meios sem chance de retorno.
            
                :large_orange_diamond: Ficar Offline SEM JUSTIFICATIVA por mais de 15 dias, será removido do clã para dar espaço para um outro membro.
                `,
                color: 3202158,

            };

            await interaction.reply({
                embeds: [discordEmbed,ruleEmbed]
            })
        } else {
            interaction.reply({
                content: "Você não possuí permissão para usar este comando",
                ephemeral: true,
            })
        }



    }
}
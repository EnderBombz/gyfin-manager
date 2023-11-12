var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { execute } = require('../../events/client/event');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('rules')
        .setDescription("Exibe as regras de convicência no clã."),
    execute(interaction, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const guildMaster = interaction.member.roles.cache.some(r => r.id === "728446890718265384");
            const officer = interaction.member.roles.cache.some(r => r.id === "429084869033721859");

            if (guildMaster ||officer ) {
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
                yield interaction.reply({
                    embeds: [discordEmbed, ruleEmbed]
                });
            }
            else {
                interaction.reply({
                    content: "Você não possuí permissão para usar este comando",
                    ephemeral: true,
                });
            }
        });
    }
};

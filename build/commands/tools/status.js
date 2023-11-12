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
        .setName('status')
        .setDescription("Exibe as regras de convicência no clã."),
    execute(interaction, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const lider = interaction.member.roles.cache.some(r => r.id === "1035693512534016000");
            const viceLider = interaction.member.roles.cache.some(r => r.id === "1032620622666276874");
            const staff = interaction.member.roles.cache.some(r => r.id === "1032620879869394964");
            const founder = interaction.member.roles.cache.some(r => r.id === "1032620500196798544");
            //if (lider || viceLider || staff || founder) {
            const statusEmbed = {
                title: "Status",
                description: `
                <:ColdModBundleIcon:1036004318316343436>
            `,
                color: 3202158,
            };
            yield interaction.reply({
                embeds: [statusEmbed]
            });
            /*  } else {
                  interaction.reply({
                      content: "Você não possuí permissão para usar este comando",
                      ephemeral: true,
                  })
              }*/
        });
    }
};

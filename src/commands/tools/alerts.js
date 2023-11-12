const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { execute } = require('../../events/client/event');
import api from 'axios'

module.exports = {
    data: new SlashCommandBuilder()
        .setName('alerts')
        .setDescription("Exibe as regras de convicência no clã."),
    async execute(interaction, client) {


        const response = await api.get('https://api.warframestat.us/pc').then(function (response) {
            return response.data
        });;


        console.log(response.fissures)






        const normalFissuresEmbed = {
            fields: [],
            title: "Normal Fissures",
            author: {
                name: "Cephalon-E",
                icon_url: "https://i.imgur.com/tCcvx8I.png"
            },
            color: 3202158,
            timestamp: new Date().toISOString(),
            footer: {
                icon_url: "https://i.imgur.com/FnfpGUv.png",
                text: "Cyber Emerald"
            }
        };

        const railjackEmbed = {
            fields: [],
            title: "Railjack fissures",
            author: {
                name: "Cephalon-E",
                icon_url: "https://i.imgur.com/tCcvx8I.png"
            },
            color: 3202158,
            timestamp: new Date().toISOString(),
            footer: {
                icon_url: "https://i.imgur.com/FnfpGUv.png",
                text: "Cyber Emerald"
            }
        };

        const steelPathEmbed = {
            fields: [],
            title: "SteelPath fissures",
            author: {
                name: "Cephalon-E",
                icon_url: "https://i.imgur.com/tCcvx8I.png"
            },
            color: 3202158,
            timestamp: new Date().toISOString(),
            footer: {
                icon_url: "https://i.imgur.com/FnfpGUv.png",
                text: "Cyber Emerald"
            }
        };

        response.fissures.forEach((fissure) => {
            console.log(fissure)
            if (fissure.isHard == false && fissure.isStorm == false) {

                let relic = ""

                if(fissure.tier.toUpperCase() == "LITH"){
                    relic = "<:lithrelic:1035367776715554916> LITH"
                }
                if(fissure.tier.toUpperCase() == "NEO"){
                    relic = "<:neorelic:1035367774614200400> NEO" 
                }
                if(fissure.tier.toUpperCase() == "MESO"){
                    relic = "<:mesorelic:1035369060445192253> MESO"
                }
                if(fissure.tier.toUpperCase() == "AXI"){
                    relic = "<:axirelic:1035367781866164315> AXI"
                }
                if(fissure.tier.toUpperCase() == "REQUIEM"){
                    relic = "<:requiemrelic:1035367772600946788> REQUIEM"
                }

                normalFissuresEmbed.fields.push(
                    {
                        name: `${fissure.node} | ${fissure.missionType}` ,
                        value: `${relic} - ${fissure.enemy} - ${fissure.eta}`,
                        inline:false
                    }
                )
            }
            if (fissure.isHard == false && fissure.isStorm == true) {

                let relic = ""

                if(fissure.tier.toUpperCase() == "LITH"){
                    relic = "<:lithrelic:1035367776715554916> LITH"
                }
                if(fissure.tier.toUpperCase() == "NEO"){
                    relic = "<:neorelic:1035367774614200400> NEO" 
                }
                if(fissure.tier.toUpperCase() == "MESO"){
                    relic = "<:mesorelic:1035369060445192253> MESO"
                }
                if(fissure.tier.toUpperCase() == "AXI"){
                    relic = "<:axirelic:1035367781866164315> AXI"
                }
                if(fissure.tier.toUpperCase() == "REQUIEM"){
                    relic = "<:requiemrelic:1035367772600946788> REQUIEM"
                }

                railjackEmbed.fields.push(
                    {
                        name: `${fissure.node} | ${fissure.missionType}` ,
                        value: `${relic} - ${fissure.enemy} - ${fissure.eta}`,
                        inline:false
                    }
                )
            }
            if (fissure.isHard == true && fissure.isStorm == false) {

                let relic = ""

                if(fissure.tier.toUpperCase() == "LITH"){
                    relic = "<:lithrelic:1035367776715554916> LITH"
                }
                if(fissure.tier.toUpperCase() == "NEO"){
                    relic = "<:neorelic:1035367774614200400> NEO" 
                }
                if(fissure.tier.toUpperCase() == "MESO"){
                    relic = "<:mesorelic:1035369060445192253> MESO"
                }
                if(fissure.tier.toUpperCase() == "AXI"){
                    relic = "<:axirelic:1035367781866164315> AXI"
                }
                if(fissure.tier.toUpperCase() == "REQUIEM"){
                    relic = "<:requiemrelic:1035367772600946788> REQUIEM"
                }

                steelPathEmbed.fields.push(
                    {
                        name: `${fissure.node} | ${fissure.missionType}` ,
                        value: `${relic} - ${fissure.enemy} - ${fissure.eta}`,
                        inline:false
                    }
                )
            }

        })

        normalFissuresEmbed.fields.push(
            {
                name: `.\n\n` ,
                value: `.\n\n`,
                inline:false
            }
        )
        railjackEmbed.fields.push(
            {
                name: `.\n\n` ,
                value: `.\n\n`,
                inline:false
            }
        )
        steelPathEmbed.fields.push(
            {
                name: `.\n\n` ,
                value: `.\n\n`,
                inline:false
            }
        )


        await interaction.reply({
            embeds: [
                steelPathEmbed,
                railjackEmbed,
                normalFissuresEmbed
            ]
        })



    }
}
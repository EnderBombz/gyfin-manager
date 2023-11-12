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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { execute } = require('../../events/client/event');
const axios_1 = __importDefault(require("axios"));
module.exports = {
    data: new SlashCommandBuilder()
        .setName('alerts')
        .setDescription("Exibe as regras de convicência no clã."),
    execute(interaction, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get('https://api.warframestat.us/pc').then(function (response) {
                return response.data;
            });
            ;
            console.log(response.fissures);
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
                console.log(fissure);
                if (fissure.isHard == false && fissure.isStorm == false) {
                    let relic = "";
                    if (fissure.tier.toUpperCase() == "LITH") {
                        relic = "<:lithrelic:1035367776715554916> LITH";
                    }
                    if (fissure.tier.toUpperCase() == "NEO") {
                        relic = "<:neorelic:1035367774614200400> NEO";
                    }
                    if (fissure.tier.toUpperCase() == "MESO") {
                        relic = "<:mesorelic:1035369060445192253> MESO";
                    }
                    if (fissure.tier.toUpperCase() == "AXI") {
                        relic = "<:axirelic:1035367781866164315> AXI";
                    }
                    if (fissure.tier.toUpperCase() == "REQUIEM") {
                        relic = "<:requiemrelic:1035367772600946788> REQUIEM";
                    }
                    normalFissuresEmbed.fields.push({
                        name: `${fissure.node} | ${fissure.missionType}`,
                        value: `${relic} - ${fissure.enemy} - ${fissure.eta}`,
                        inline: false
                    });
                }
                if (fissure.isHard == false && fissure.isStorm == true) {
                    let relic = "";
                    if (fissure.tier.toUpperCase() == "LITH") {
                        relic = "<:lithrelic:1035367776715554916> LITH";
                    }
                    if (fissure.tier.toUpperCase() == "NEO") {
                        relic = "<:neorelic:1035367774614200400> NEO";
                    }
                    if (fissure.tier.toUpperCase() == "MESO") {
                        relic = "<:mesorelic:1035369060445192253> MESO";
                    }
                    if (fissure.tier.toUpperCase() == "AXI") {
                        relic = "<:axirelic:1035367781866164315> AXI";
                    }
                    if (fissure.tier.toUpperCase() == "REQUIEM") {
                        relic = "<:requiemrelic:1035367772600946788> REQUIEM";
                    }
                    railjackEmbed.fields.push({
                        name: `${fissure.node} | ${fissure.missionType}`,
                        value: `${relic} - ${fissure.enemy} - ${fissure.eta}`,
                        inline: false
                    });
                }
                if (fissure.isHard == true && fissure.isStorm == false) {
                    let relic = "";
                    if (fissure.tier.toUpperCase() == "LITH") {
                        relic = "<:lithrelic:1035367776715554916> LITH";
                    }
                    if (fissure.tier.toUpperCase() == "NEO") {
                        relic = "<:neorelic:1035367774614200400> NEO";
                    }
                    if (fissure.tier.toUpperCase() == "MESO") {
                        relic = "<:mesorelic:1035369060445192253> MESO";
                    }
                    if (fissure.tier.toUpperCase() == "AXI") {
                        relic = "<:axirelic:1035367781866164315> AXI";
                    }
                    if (fissure.tier.toUpperCase() == "REQUIEM") {
                        relic = "<:requiemrelic:1035367772600946788> REQUIEM";
                    }
                    steelPathEmbed.fields.push({
                        name: `${fissure.node} | ${fissure.missionType}`,
                        value: `${relic} - ${fissure.enemy} - ${fissure.eta}`,
                        inline: false
                    });
                }
            });
            normalFissuresEmbed.fields.push({
                name: `.\n\n`,
                value: `.\n\n`,
                inline: false
            });
            railjackEmbed.fields.push({
                name: `.\n\n`,
                value: `.\n\n`,
                inline: false
            });
            steelPathEmbed.fields.push({
                name: `.\n\n`,
                value: `.\n\n`,
                inline: false
            });
            yield interaction.reply({
                embeds: [
                    steelPathEmbed,
                    railjackEmbed,
                    normalFissuresEmbed
                ]
            });
        });
    }
};

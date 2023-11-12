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
const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
class RequestModal {
    constructor(interaction, client) {
        this.init(interaction, client);
    }
    init(interaction, client) {
        return __awaiter(this, void 0, void 0, function* () {
            // Create the modal
            const modal = new ModalBuilder()
                .setCustomId('nicknameModal')
                .setTitle('Apelido em Jogo');
            // Add components to modal
            // Create the text input components
            const nicknameInput = new TextInputBuilder()
                .setCustomId('nickname')
                // The label is the prompt the user sees for this input
                .setLabel("Digite seu nome de família")
                // Short means only a single line of text
                .setStyle(TextInputStyle.Short);
            // An action row only holds one text input,
            // so you need one action row per text input.
            const firstActionRow = new ActionRowBuilder().addComponents(nicknameInput);
            // Add inputs to the modal
            modal.addComponents(firstActionRow);
            // Show the modal to the user
            yield interaction.showModal(modal);
        });
    }
}
exports.default = RequestModal;

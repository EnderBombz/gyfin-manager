const {
    ActionRowBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle
} = require('discord.js');

export default class RequestModal {
    constructor(interaction, client) {
        this.init(interaction, client)
    }
    async init(interaction, client) {
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
        modal.addComponents(
            firstActionRow,
        );

        // Show the modal to the user
        await interaction.showModal(modal);
    }
}
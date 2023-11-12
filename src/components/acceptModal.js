
const {
    ActionRowBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle
} = require('discord.js');

export default class AcceptModal {
    constructor(interaction, client) {
        this.init(interaction, client)
    }
    async init(interaction, client) {
        // Create the modal

        console.log(interaction)

        const modal = new ModalBuilder()
            .setCustomId('acceptRequestModal')
            .setTitle('Dê boas vindas!');

        // Add components to modal

        // Create the text input components
        /*const userId = new TextInputBuilder()
            .setCustomId('userId')
            // The label is the prompt the user sees for this input
            .setLabel("Digite a ID do usuário requisitante")
            // Short means only a single line of text
            .setStyle(TextInputStyle.Short);*/

        const welcomeMessage = new TextInputBuilder()
            .setCustomId('welcomeMessage')
            .setLabel("Envie uma mensagem")
            // Paragraph means multiple lines of text.
            .setStyle(TextInputStyle.Paragraph);

        // An action row only holds one text input,
        // so you need one action row per text input.
       // const firstActionRow = new ActionRowBuilder().addComponents(userId);
        const secondActionRow = new ActionRowBuilder().addComponents(welcomeMessage);

        // Add inputs to the modal
        modal.addComponents(
            //firstActionRow,
            secondActionRow
        );

        // Show the modal to the user
        await interaction.showModal(modal);
    }
}
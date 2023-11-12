var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { Events, InteractionType } = require('discord.js');
const { default: AcceptModal } = require('../../components/acceptModal');
const { default: DenyModal } = require('../../components/denyModal');
const { default: RequestGuild } = require('../../components/requestGuild');
const { default: RequestModal } = require('../../components/requestModal');
module.exports = {
    name: 'interactionCreate',
    execute(interaction, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const serverId = "329405337054609429";
            const role_gyfinMember = "329423822543519756";
            if (interaction.isChatInputCommand()) {
                const { commands } = client;
                const { commandName } = interaction;
                const command = commands.get(commandName);
                if (!commandName)
                    return;
                try {
                    yield command.execute(interaction, client);
                }
                catch (err) {
                    console.error(err);
                    yield interaction.reply({
                        content: `Something went wrong while executing this command...`,
                        ephemeral: true
                    });
                }
            }
            if (interaction.isButton()) {
                if (interaction.customId === '1032639462938787880') {
                    interaction.member.roles.cache.some(r => {
                        console.log(r.id);
                        //r.name === "1032639462938787880" 
                    });
                    const hasRole = interaction.member.roles.cache.some(r => r.id === "1032639462938787880");
                    console.log(hasRole);
                    if (hasRole) {
                        interaction.reply({
                            content: "Você já está cadastrado",
                            ephemeral: true,
                        });
                    }
                    else {
                        new RequestModal(interaction, client);
                    }
                }
                if (interaction.customId === 'accept') {
                    //await i.deferUpdate();
                    //await i.editReply({ content: 'A button was clicked!', components: [] });
                    console.log("Aceito aceito canal");
                    new AcceptModal(interaction, client);
                }
                if (interaction.customId === 'deny') {
                    console.log("Recusado nesse canal");
                    new DenyModal(interaction, client);
                }
            }
            ;
            if (interaction.type === InteractionType.ModalSubmit) {
                if (interaction.customId === 'nicknameModal') {
                    const response = interaction.fields.getTextInputValue('nickname');
                    console.log(`Yay, your answer is submitted: "${response}"`);
                    new RequestGuild(interaction, client, response);
                    //interaction.reply(`Yay, your answer is submitted: "${response}"`);
                }
                if (interaction.customId === 'acceptRequestModal') {
                    const response = interaction.fields.getTextInputValue('welcomeMessage');
                    console.log(response);
                    console.log("[MESSAGE_ID]:", interaction.message.id);
                    interaction.message.delete().catch(error => {
                        console.error('Erro ao excluir a mensagem:', error);
                    });
                    console.log("[interaction.message.content]:", interaction.message.content);
                    const requestedUserId = interaction.message.content;
                    client.users.fetch(requestedUserId, false).then((user) => {
                        user.send(response);
                    });
                    interaction.reply({
                        content: `Sucesso ao atribuir o cargo <@&${role_gyfinMember}> para <@${interaction.message.content}>`,
                        ephemeral: false
                    });
                    const guild = client.guilds.cache.get(serverId);
                    const member = guild.members.cache.get(requestedUserId);
                    console.log("[USER]:", interaction.user);
                    member.roles.add(role_gyfinMember).then(() => {
                        console.log(`Cargo atribuído com sucesso ao usuário ${member.user.tag}`);
                    })
                        .catch(error => {
                        console.error('Erro ao atribuir cargo:', error);
                    });
                }
                if (interaction.customId === 'denyRequestModal') {
                    const response = interaction.fields.getTextInputValue('denyMessage');
                    const channel = client.channels.cache.get('1173058933137616916');
                    console.log("[MESSAGE_ID]:", interaction.message.id);
                    interaction.message.delete().catch(error => {
                        console.error('Erro ao excluir a mensagem:', error);
                    });
                    const denyEmbed = {
                        fields: [
                            {
                                name: "Nome de família",
                                value: interaction.message.embeds[0].fields[0].value,
                                inline: true
                            },
                            {
                                name: "MemberTag",
                                value: interaction.message.embeds[0].fields[1].value,
                                inline: true
                            }
                        ],
                        timestamp: new Date().toISOString(),
                        title: `Solicitação de cargo recusada`,
                        description: `${response} | Cargo: <@&329423822543519756>`,
                        thumbnail: {
                            url: "https://i.imgur.com/YwgejNq.png"
                        },
                        color: 16711680,
                    };
                    const channelDeny = client.channels.cache.get('1173058933137616916');
                    yield channelDeny.send({
                        content: `${interaction.user.id.toString()}`,
                        embeds: [denyEmbed]
                    });
                    console.log("[131]", response);
                    interaction.reply({
                        content: `Cargo <@&329423822543519756> recusado ao atribuir para <@${interaction.message.content}>, motivo enviado para <#1173058933137616916>`,
                        ephemeral: true
                    });
                }
            }
        });
    }
};

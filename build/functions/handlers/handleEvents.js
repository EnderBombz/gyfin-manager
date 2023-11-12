var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fs = require('fs');
module.exports = (client) => {
    client.handleEvents = () => __awaiter(this, void 0, void 0, function* () {
        const eventFolders = fs.readdirSync('./src/events');
        for (const folder of eventFolders) {
            const eventFiles = fs
                .readdirSync(`./src/events/${folder}`)
                .filter(file => file.endsWith('.js'));
            switch (folder) {
                case 'client':
                    for (const file of eventFiles) {
                        const event = require(`../../events/${folder}/${file}`);
                        if (event.once)
                            client.once(event.name, (...args) => event.execute(...args, client));
                        else
                            client.on(event.name, (...args) => event.execute(...args, client));
                    }
                    break;
                default:
                    break;
            }
        }
    });
};

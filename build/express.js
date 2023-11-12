"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressAppServer = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class ExpressAppServer {
    constructor() {
        this.init();
    }
    init() {
        const app = (0, express_1.default)();
        const port = process.env.PORT;
        this.routes(app, port);
    }
    routes(app, port) {
        app.get('/', (req, res) => {
            const { bot } = req.query;
            res.json(bot);
        });
        app.listen(port, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
        });
    }
}
exports.ExpressAppServer = ExpressAppServer;


import { DiscordCephalonE } from "./bot"
import { ExpressAppServer } from "./express"

class StartApp {
  constructor() {
    new ExpressAppServer();
    new DiscordCephalonE();
  }
}

new StartApp();



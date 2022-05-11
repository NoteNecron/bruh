import type { ArgsOf } from "discordx";
import { Discord, On } from "discordx";
import fs from "fs";

@Discord()
export class messageCreate {
  @On("messageCreate")
  onMessageCreate([message]: ArgsOf<"messageCreate">): void {
    // create a json file with the username, message, and time of the message in the guild
    const data = {
      username: message.author.username,
      message: message.content,
      time: message.createdAt,
    };
    fs.writeFile(`./data/shh.json`, JSON.stringify(data), (err) => {
      if (err) throw err;
    });
  }
}

@Discord()
export class messageDelte {
  @On("messageDelete")
  onMessageDelete([message]: ArgsOf<"messageDelete">): void {
    // update data/shh.json with the message that was deleted with the author, time and guild id
    const data = {
      username: message.author?.username,
      message: message.content,
      time: message.createdAt,
      guild: message.guild?.id,
    };
    fs.writeFile(`./data/shh.json`, JSON.stringify(data), (err) => {
      if (err) throw err;
    });
  }
}

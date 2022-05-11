import { dirname, importx } from "@discordx/importer";
import dotenv from "dotenv";
import { Interaction, Message } from "discord.js";
import { Intents } from "discord.js";
import { Client } from "discordx";
dotenv.config();
export const bruh = new Client({
  botId: "Nagi",

  botGuilds: [(bruh) => bruh.guilds.cache.map((guild) => guild.id)],

  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],

  silent: false,

  presence: {
    status: "dnd", // Status (online, idle, dnd, invisible)
    activities: [
      // Activities to display
      {
        type: "STREAMING", // Type (PLAYING, STREAMING, LISTENING, WATCHING, COMPETING)
        name: "with your bf ;)", // Name of the activity
        url: "https://youtu.be/dQw4w9WgXcQ", // URL of the stream
      },
    ],
  },

  simpleCommand: {
    prefix: "bruh-",
    responses: {
      notFound: "bruh",
      unauthorized: "bruh",
    },
    argSplitter: " ",
  },
});

bruh.on("interaction", (interaction: Interaction) => {
  bruh.executeInteraction(interaction);
});

bruh.on("messageCreate", (message: Message) => {
  bruh.executeCommand(message);
});

async function run() {
  await importx(dirname(import.meta.url) + "/{events,commands}/**/*.{js,ts}");

  if (!process.env.TOKEN) {
    throw Error("bruhhhhhhhhhhhhhhhhh");
  }

  await bruh.login(process.env.TOKEN);
}

run();

require('dotenv').config();
//
const { Client, IntentsBitField } = require('discord.js');

const botClient = new Client({
  intents: [
    // Guilds = Server in Discord
    IntentsBitField.Flags.Guilds,
    // Give Access to members in server
    IntentsBitField.Flags.GuildMembers,
    // Give access to messages in server
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// Send in console when Bot is ready
botClient.on('ready', (client) => {
  console.log(`${client.user.username} is ready and online!`);
});

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'Marco') {
    interaction.reply('Polo!');
  }
})

// Bot password or token
botClient.login(
  process.env.BOT_TOKEN_KEY
);
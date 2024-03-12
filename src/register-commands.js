require('dotenv').config();
const { REST, Routes } = require('discord.js');

// Array of commands (objects)
const commands = [
  {
    name: 'Marco',
    description: 'Replies with Polo!',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN_KEY);

(async () => {
  try {
    console.log('Registering slash commands...');
    
    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands }
    )

    console.log('Commands were registered sucessfully!');
  } catch (error) {
    console.log(`Error in execution: ${error}`);
  }
})();
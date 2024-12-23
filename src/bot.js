require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
      GatewayIntentBits.Guilds, // For basic guild-related events
      GatewayIntentBits.GuildMessages, // For messages in guild channels
      GatewayIntentBits.MessageContent, // To read message content
      GatewayIntentBits.DirectMessages, // For direct messages
    ],
  });

// console.log(process.env.DISCORD_BOT_TOKEN)

client.on('ready', () => {
    console.log(`${client.user.username} has logged in`)
})

client.on('messageCreate', (message) => {

  if(message.author.bot) return;
  console.log(`${message.author.tag} : ${message.content}`)
  const content = message.content.toLowerCase();

  if(content === 'hello') {
    // message.reply("Hello, How may I assist you?")
    message.channel.send("Hello, How may I assist you?")
  }
})

client.login(process.env.DISCORD_BOT_TOKEN);

const { Player } = require('discord-player');
const Genius = require("genius-lyrics");
const { Client, GatewayIntentBits } = require('discord.js');
const token = process.env['token']
const keep_alive = require('./keep_alive.js')

global.client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
    ],
    disableMentions: 'everyone',
});

client.config = require('./config');

const player = new Player(client, client.config.opt.discordPlayer);
global.genius = new Genius.Client();
player.extractors.loadDefault();


require('./src/loader');

client.login(token);

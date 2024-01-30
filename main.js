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
    
    presence: {
        activities: [
            {
                name: '/help',
                type: 'PLAYING',
                assets: {
                    large_image: '/vol 100',
                    large_text: 'use /help to display the commands'
                }
            }
        ],
        status: 'dnd' // Cambia el estado a "no molestar"
    }
});
});

client.config = require('./config');

const player = new Player(client, client.config.opt.discordPlayer);
global.genius = new Genius.Client();
player.extractors.loadDefault();


require('./src/loader');

client.login(token);

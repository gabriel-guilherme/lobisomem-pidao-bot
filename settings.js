const {Client} = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');
const { createAudioPlayer, NoSubscriberBehavior, createAudioResource } = require('@discordjs/voice');
const { Moon } = require('lunarphase-js');
var cron = require("cron");
const bot = new Client({intents: ['Guilds', 'GuildMessages', 'MessageContent', 'GuildVoiceStates']});




module.exports = {
  bot,
  joinVoiceChannel,
  createAudioPlayer,
  NoSubscriberBehavior,
  createAudioResource,
  Moon,
  cron,
};

const {Client} = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');
const { createAudioPlayer, NoSubscriberBehavior, createAudioResource } = require('@discordjs/voice');
const { Moon } = require('lunarphase-js');
var cron = require("cron");
const bot = new Client({intents: ['Guilds', 'GuildMessages', 'MessageContent', 'GuildVoiceStates']});


//func

var {connectVoiceChannel, playSound} = require('./src/script/voiceChatSounds')
var {waitTimeMessage, farinhaCumbuca} = require('./src/script/textChat')
//var {transformCicle} = require('./src/script/jobs/transformCicle')

module.exports = {
  bot,
  joinVoiceChannel,
  createAudioPlayer,
  NoSubscriberBehavior,
  createAudioResource,
  Moon,
  cron,
  connectVoiceChannel,
  playSound,
  waitTimeMessage,
  farinhaCumbuca
  //,transformCicle
};

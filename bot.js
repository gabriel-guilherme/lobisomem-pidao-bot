require('dotenv').config();

const {Client} = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');
const { createAudioPlayer, NoSubscriberBehavior, createAudioResource } = require('@discordjs/voice');
const { Moon } = require('lunarphase-js');
var cron = require("cron");

const bot = new Client({intents: ['Guilds', 'GuildMessages', 'MessageContent', 'GuildVoiceStates']});

connectVoiceChannel = function(){
    const connection = joinVoiceChannel({
        channelId: channelID,
        guildId: server.guild.id,
        adapterCreator: server.guild.voiceAdapterCreator,
    });
    return connection;
}

playAnimals = function(){
    connection = connectVoiceChannel();
    const player = createAudioPlayer();
    const resource = createAudioResource('./src/sound/O_Lobo_pede.mp3');
    player.play(resource);
    connection.subscribe(player);
}

playSecretaria = function(){
    connection = connectVoiceChannel();
    const player = createAudioPlayer();
    const resource = createAudioResource('./src/sound/secretaria.mp4');
    player.play(resource);
    connection.subscribe(player);
}

waitTimeMessage = function(){
    currentTime = new Date();
    currentTime = currentTime.toLocaleTimeString();
    splitTime = currentTime.split(':');

    hour = parseInt(splitTime[0]);
    minute = parseInt(splitTime[1]);
    second = parseInt(splitTime[2]);

    second += 30;
    if(second>60){
        minute+=1;
        if(second%60!=0){
            second = second%60;
        }
        if(minute>60){
            hour+=1
            if(minute%60!=0){
                minute = minute%60
            }
        }
        if(hour>23){
            hour=0
        }
        
    }
    let waitMessage = new cron.CronJob(`${second} ${minute} ${hour} * * *`, ()=>{
        bot.off('messageCreate', farinhaCumbuca);
    });

    waitMessage.start();
}

farinhaCumbuca = function(message){
        if(message.content === 'oq vc quer?'||message.content === 'oq vc quer'){
            message.reply('farinha na cumbuca')
            bot.off('messageCreate', farinhaCumbuca);
        }
}

var $STATE_TRANSFORMATION = 'lobisomem';

bot.on('ready', ()=>{
    console.log(`${bot.user.tag} has logged in.`);
    const guilds = bot.guilds.cache;
    
    let transformarNoite = new cron.CronJob('00 00 18 * * *', ()=>{
        bot.user.setAvatar('./src/img/NOITE.png');
        for(item of guilds){
            let botMember = item[1];
            botMember.members.resolve('1078805742053769286').setNickname('Lobisomem Pidão');
            playAnimals()
            $STATE_TRANSFORMATION = 'lobisomem'
        }
    })

    let transformarDia = new cron.CronJob('00 00 03 * * *', ()=>{
        bot.user.setAvatar('./src/img/DIA.png');
        for(item of guilds){ 
            let botMember = item[1];
            botMember.members.resolve('1078805742053769286').setNickname('Homem');

            $STATE_TRANSFORMATION = 'homem'
        }

    })

    transformarDia.start();
    transformarNoite.start();
})

bot.on('messageCreate', (message)=>{
    if(message.content === 'lobisomem pidao'){
        message.channel.send('hm');

        bot.on('messageCreate', farinhaCumbuca)
        waitTimeMessage();
    }

})

bot.on('messageCreate', (message)=>{
    channelID = message.member.voice.channelId;
    server = bot.channels.cache.get(channelID)
    
    if(message.content === 'QUEM E VOCE!'){
        if($STATE_TRANSFORMATION === 'lobisomem'){
            playAnimals()
        }else{
            playSecretaria()
        }
        
    }
})





bot.login(process.env.DISCORDJS_BOT_TOKEN)
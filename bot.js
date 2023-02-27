require('dotenv').config();
const { bot, joinVoiceChannel, createAudioPlayer, NoSubscriberBehavior, createAudioResource, Moon, cron } = require('./settings');
var { connectVoiceChannel, playSound, waitMessage, farinhaCumbuca, transformCicle } = require('./settings')

var $STATE_TRANSFORMATION = 'lobisomem';

bot.on('ready', ()=>{
    console.log(`${bot.user.tag} has logged in.`);
    const guilds = bot.guilds.cache;
    
    let transformarNoite = new cron.CronJob('00 00 18 * * *', ()=>{
        bot.user.setAvatar('./src/img/NOITE.png');
        for(item of guilds){
            let botMember = item[1];
            botMember.members.resolve('1079533350970216509').setNickname('Lobisomem Pidão - Debugger');
            //playSound('./src/sound/O_Lobo_pede.mp3')
            $STATE_TRANSFORMATION = 'lobisomem'
        }
    })

    let transformarDia = new cron.CronJob('00 00 03 * * *', ()=>{
        bot.user.setAvatar('./src/img/DIA.png');
        for(item of guilds){ 
            let botMember = item[1];
            botMember.members.resolve('1079533350970216509').setNickname('Homem - Debugger');

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
            playSound('./src/sound/O_Lobo_pede.mp3')
        }else{
            playSound('./src/sound/secretaria.mp4')
        }
        
    }
})





bot.login(process.env.DISCORDJS_BOT_TOKEN)
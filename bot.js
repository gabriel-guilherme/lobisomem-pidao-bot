require('dotenv').config();
const { bot, joinVoiceChannel, createAudioPlayer, NoSubscriberBehavior, createAudioResource, Moon, cron } = require('./settings');
var {connectVoiceChannel, playSound, getRandomMeme, customEntryPlay} = require('./src/script/voiceChatSounds')
var {waitTimeMessage, farinhaCumbuca} = require('./src/script/textChat')
//var {transformCicle} = require('./src/script/jobs/transformCicle')


var $STATE_TRANSFORMATION = 'lobisomem';

bot.on('ready', ()=>{
    console.log(`${bot.user.tag} has logged in.`);
    const guilds = bot.guilds.cache;
    
    let transformarNoite = new cron.CronJob('00 00 18 * * *', ()=>{
        bot.user.setAvatar('./src/img/NOITE.png');
        for(item of guilds){
            let botMember = item[1];
            if(process.env.ENV === 'DEV'){
                botMember.members.resolve(process.env.DISCORD_ID_BOT).setNickname('Lobisomem Pidão - Debugger');
            }else{
                botMember.members.resolve(process.env.DISCORD_ID_BOT).setNickname('Lobisomem Pidão');
            }
            //playSound('./src/sound/O_Lobo_pede.mp3')
            $STATE_TRANSFORMATION = 'lobisomem'
        }
    })

    let transformarDia = new cron.CronJob('00 00 03 * * *', ()=>{
        bot.user.setAvatar('./src/img/DIA.png');
        for(item of guilds){ 
            let botMember = item[1];
            if(process.env.ENV === 'DEV'){
                botMember.members.resolve(process.env.DISCORD_ID_BOT).setNickname('Homem - Debugger')
            }else{
                botMember.members.resolve(process.env.DISCORD_ID_BOT).setNickname('Homem')
            }

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
    if(message.content.toLowerCase() === 'quem e voce!'||message.content.toLowerCase() === 'quem e vc!'||message.content.toLowerCase() === 'quem e vc'||message.content.toLowerCase() == 'quem e voce'){
        channelID = message.member.voice.channelId;
        server = bot.channels.cache.get(channelID)
        
        if($STATE_TRANSFORMATION === 'lobisomem'){
            playSound('./src/sound/O_Lobo_pede.mp3')
        }else{
            playSound('./src/sound/secretaria.mp4')
        }
        
    }
})

bot.on('messageCreate', (message)=>{
    if(message.content === 'meme-me'){
        channelID = message.member.voice.channelId
        server = bot.channels.cache.get(channelID)

        playSound(getRandomMeme())
    }
})

bot.on('messageCreate', (message)=>{
    if(message.content === 'teste'){
        try{
            channelID = message.member.voice.channelId;
            server = bot.channels.cache.get(channelID)

            var customEntryVoiceChat = message.member.voice;
            if(channelID==null){
                throw new Error('Out of voice chat')
            }
            message.channel.send('chat de voz setado :^)')
        }catch(error){
            message.reply(`Ta no chat n fio ${message.author}`)
        }
    }
    
})

bot.on('voiceStateUpdate', (oldState, newState)=>{


        if(oldState.channelId !== channelID && newState.channelId === channelID&&newState.channelId == channelID&&newState.member.id!=process.env.DISCORD_ID_BOT){
            //connectVoiceChannel();
            //console.log(newState.member.id)
            customEntryPlay(newState.member.id)
            //throw new Error('sla')
        }

   
})
bot.login(process.env.DISCORDJS_BOT_TOKEN)
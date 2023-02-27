const cron = require('cron');


waitTimeMessage = function(bot){
    var {bot} = require('../../settings.js')
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
    var {bot} = require('../../settings.js')
        if(message.content === 'oq vc quer?'||message.content === 'oq vc quer'){
            message.reply('farinha na cumbuca')
            bot.off('messageCreate', farinhaCumbuca);
        }
}

module.exports = {
    waitTimeMessage,
    farinhaCumbuca
}
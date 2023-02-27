/*const cron = require('cron');
var { playSound } = require('../../../settings')

transformCicle = function(guilds){
    
    var {bot} = require('../../../settings')
    let transformarNoite = new cron.CronJob('30 51 21 * * *', ()=>{
        bot.user.setAvatar('./src/img/NOITE.png');
        for(item of guilds){
            let botMember = item[1];
            botMember.members.resolve('1078805742053769286').setNickname('Lobisomem Pidão');
            //playSound('./src/sound/O_Lobo_pede.mp3')
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
}

module.exports = {
    transformCicle
}*/
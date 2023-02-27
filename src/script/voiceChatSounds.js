const { joinVoiceChannel } = require('@discordjs/voice');
const { createAudioPlayer, NoSubscriberBehavior, createAudioResource } = require('@discordjs/voice');

connectVoiceChannel = function(){
    const connection = joinVoiceChannel({
        channelId: channelID,
        guildId: server.guild.id,
        adapterCreator: server.guild.voiceAdapterCreator,
    });
    return connection;
}

playSound = function(path){
    connection = connectVoiceChannel();
    const player = createAudioPlayer();
    const resource = createAudioResource(path);
    player.play(resource);
    connection.subscribe(player);
}


module.exports = {
    connectVoiceChannel,
    playSound
}
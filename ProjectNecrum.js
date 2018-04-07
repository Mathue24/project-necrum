const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {

    if(message.content.toLowerCase() === 'live my child')
        message.channel.send('Hey ' + message.author + ' you dork!');

    else if(message.content.toLowerCase() === 'foo')
        message.channel.send('bar');

    else if(message.content.toLowerCase() === 'thank')
    message.channel.send('np');


});

client.login(process.env.BOT_TOKEN);

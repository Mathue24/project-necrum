const Discord = require('discord.js');
const bot = new Discord.bot();

bot.on('ready', () => {
    console.log('I am ready!');
});

bot.on('message', message => {

    if(message.content.toLowerCase() === 'live my child')
        message.channel.send('Hey ' + message.author + ' you dork!');

    else if(message.content.toLowerCase() === 'foo')
        message.channel.send('bar');

    else if(message.content.toLowerCase() === 'thank')
    message.channel.send('np');


});

bot.login(process.env.BOT_TOKEN);

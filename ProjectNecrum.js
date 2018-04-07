const Discord = require('discord.js');
const bot = new Discord.bot();

//Bot Settings
const prefix = '~';

//On Startup
bot.on('ready', () => {
    console.log('I am ready!');
});

//On Message
bot.on('message', message => {

    let msg = message.content.toLowerCase();

    if(msg === prefix + 'live my child')
        message.channel.send('Hey ' + message.author + ' you dork!');

    else if(msg === prefix + 'foo')
        message.channel.send('bar');

    else if(msg === prefix + 'thank')
        message.channel.send('np');


});

bot.login(process.env.BOT_TOKEN);

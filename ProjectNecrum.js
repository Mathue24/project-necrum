const Discord = require('discord.js');
const client = new Discord.Client();

client.login(token);

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {

    if(message.content.toLowerCase() === 'live my child')
        message.channel.send('Hey ' + message.author + ' you dork!');

});

client.login(process.env.BOT_TOKEN);

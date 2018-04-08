const Discord = require('discord.js');
const bot = new Discord.Client();

//Bot Settings
const prefix = '~';

//On Startup
bot.on('ready', () => {
    console.log('I am ready!');
});

//On Message
bot.on('message', message => {

    let msg = message.content.toLowerCase();
    
    if(message.author.bot) return;
    else if(message.channel.type === "dm") return;

    else if(msg === prefix + 'live my child')
    {
        message.channel.send('Hey ' + message.author + ' you dork!');
    }

    else if(msg === prefix + 'foo')
    {
        message.channel.send('bar');
    }

    else if(msg === prefix + 'thank')
    {
        message.channel.send('np');
    }

    else if(msg.startsWith(prefix + 'move'))
    {
        let channel = message.content.split(" ").slice(2).join(" ");
        var kickMember = message.mentions.members.first();
        kickMember.setVoiceChannel(channel);
    }
    
    else if(msg.includes('crab'))
    {
        message.channel.send(':crab:CRABS ARE PEOPLE:crab:CLAMS ARE PEOPLE:crab:LEGIT OR QUIT:crab:');
    }


});

bot.login(process.env.BOT_TOKEN);

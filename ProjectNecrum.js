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
        if(!message.member.roles.some(r=>["Administrator", "Member of The Party"].includes(r.name)) )
            return message.reply("Don't talk to me you pathetic worm!");

        message.channel.send('Hello ' + message.author + '!');
    }

    else if(msg === prefix + 'thank')
    {
        if(!message.member.roles.some(r=>["Administrator", "Member of The Party"].includes(r.name)) )
            return message.reply("Don't talk to me you pathetic worm!");

        message.channel.send("Thank you @cmdragon#4261 for your volunteering, your efforts to improve our glorious and pure regime are appreciated! :penguin_face_at_low_resolution:");
    }

    else if(msg.startsWith(prefix + 'tag'))
    {
        if(!message.member.roles.some(r=>["Administrator", "Member of The Party"].includes(r.name)) )
            return message.reply("Don't talk to me you pathetic worm!");

        var member= message.mentions.members.first();
        bot.sendMessage({to: channelID, message: `${user.mention()} message text`});
        // message.channel.send(member.displayName);
        // message.channel.send(member.message.author);
    }

    else if(msg === prefix + 'foo')
    {
        message.channel.send('bar');
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

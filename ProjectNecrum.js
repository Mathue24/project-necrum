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
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);
    
    if(message.author.bot) return;
    else if(message.channel.type === "dm") return;

    else if(msg === prefix + 'live my child')
    {
        if(!message.member.roles.some(r=>["Administrator", "Member of The Party"].includes(r.name)) )
            return message.reply("Don't talk to me you pathetic worm!");

        message.channel.send('Hello ' + message.author + '!');
    }

    else if(msg.startsWith(prefix + 'thank'))
    {
        if(!message.member.roles.some(r=>["Administrator", "Member of The Party"].includes(r.name)) )
            return message.reply("Don't talk to me you pathetic worm!");

        var member= message.mentions.members.first();
        message.channel.send("Thank you " + member.displayName + " for your volunteering, your efforts to improve our glorious and pure regime are appreciated!");
    }

    else if(msg.startsWith(prefix + 'tag'))
    {
        if(!message.member.roles.some(r=>["Administrator", "Member of The Party"].includes(r.name)) )
            return message.reply("Don't talk to me you pathetic worm!");

        var member= message.mentions.members.first();
        message.channel.send(member.displayName);
        // message.channel.send(member.message.author);
    }

    else if(msg === prefix + 'foo')
    {
        message.channel.send('bar*');
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

    else if(msg.includes('my rights'))
    {
        message.channel.send('privileges**');
    }

    else if(msg.includes('minecraft'))
    {
        if(!message.member.roles.some(r=>["Administrator", "Member of The Party"].includes(r.name)) )
        {
            message.delete();
            message.channel.send('Dear '+ message.author + '. Please avoid using forbidden words in the future. May the party remind you, any future transgressions may result in revoking your basic privileges. Have a nice day.');
        }
        else
        {
            message.channel.send('Yeah, '+ message.author + '. You cool.');
        }
    }

    if(msg.startsWith(prefix + 'purge'))
    {
        async function purge() 
        {
            message.delete();
            
            if(!message.member.roles.some(r=>["Administrator", "Member of The Party"].includes(r.name)) )
            {
                message.reply('Do not talk to me you pathetic worm! Only a \`Member of The Party\` can use this command!');
                return;
            }

            if(isNaN(args[0]))
            {
                message.channel.send('Please use a number as your argument. \n Usage: '+ prefix +'purge <ammount>');
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]});
            console.log(fetched.size + ' messages found, deleting...');

            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`));
                
        }

        purge();
    } 


});

bot.login(process.env.BOT_TOKEN);

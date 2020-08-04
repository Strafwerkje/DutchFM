const discord = require('discord.js');

exports.run = async (client, message, args) => {

    /*
        1) Use the messageReactionAdd and messageReactionRemove events to add/remove users roles
        2) Remove the awaitReactions() function as we won't need that anymore
        3) Customize the message a bit more to fit a general welcome channel
    */

    await message.delete().catch(O_o => {});

    const a = message.guild.roles.add('719936328158019585'); // Moderator

    const embed = new discord.MessageEmbed()
        .setTitle('Verify Syteem')
        .setDescription(`
       
        Welkom bij **${message.guild.name}**! Laat je verifieren door op de reactie te klikken!
       🇦 ${a.toString()}
       `)
        .setColor(0xdd9323)
        .setFooter(`Guild ID: ${message.guild.id}`);

    message.channel.send(embed).then(async msg => {

        await msg.react('🇦');
    });
};

exports.help = {
    name: 'verify'
};
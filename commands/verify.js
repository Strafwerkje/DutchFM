const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(! message.member.roles.cache.has("740310661997002753")) return message.reply("Je bent al verified!");

    var verified = new discord.MessageEmbed()
    .setTitle("U bent nu verified, ")
    .setColor("#3de361")
    .setFooter("DutchFM Bot")
    .setTimestamp()
    .setDescription(`${message.author.username} je bent verified!`)
    return message.channel.send(verified);
           
        
    
    if(!role) return;
  
    var role = message.member.roles.cache.add(`719936328158019585`);

    member.roles.add(role);
}

module.exports.help = {
    name: "verify"
}
const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var serverEmbed = new discord.MessageEmbed()
    .setDescription("Dit is al uw infomatie in de server!")
    .setColor("#kleur")
    .addField("Botnaam", "Bot sinds")
return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "botinfo"
}
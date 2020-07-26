const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (client, message, args) => {
    var members = message.guild.members.cache;
    var embed = new discord.MessageEmbed()
 
    .setTitle(`**o Lijst met alle commands**`,)
    .setTimestamp()
    .setFooter(botConfig.footer)
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("#0099ff")

    .addField("_**Server commands**_", [
        `**❓ | help:** Krijg dit command te zien.`,
        `**❓ | serverinfo:** Krijg alle infomatie over de server en uw account te zien.`,
        `**❓ | ticket of new:** Maak een ticket aan waarmee je met staff kunt praten of vragen kunt stellen.`,   
        `\u200b`
        ])
    .setFooter("DutchFM Bot")

        return message.channel.send(embed);
   

}
 
module.exports.help = {
    name: "help",
    description: "dit is Alle Serverinformatie wat u op dit moment nodig Heeft."
}
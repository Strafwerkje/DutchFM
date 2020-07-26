const discord = require("discord.js");
const botConfig = require("./botconfig.json");
 
const fs = require("fs");

const client = new discord.Client();
client.commands = new discord.Collection();

fs.readdir("./commands/", (err, filles) => {

    if(err) console.log(err);

    var jsfilles = filles.filter(f => f.split(".").pop() === "js");

    if(jsfilles.length <=0) {
        console.log("kon geen fout vinden");
        return;
    }

    jsfilles.forEach((f,i) => {

        var fileGet = require (`./commands/${f}`);
        console.log(`de file ${f} is geladen`);

        client.commands.set(fileGet.help.name, fileGet);
    
    })

});


        
        client.on("guildMemberAdd" , member => {


            var role = member.guild.roles.cache.get(`719936328158019585`);
           
             if(!role) return;
           
             member.roles.add(role);
           
             var channel = member.guild.channels.cache.get(`735836005718032444`);
           
             if(!channel) return;
           
             var joinEmbed = new discord.MessageEmbed()
             .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
             .setDescription(`Welkom **${member.user.username}** op de server van DutchFM!`)
             .setColor("#0099ff")
             .setFooter("DutchFM Join Message")
             .setTimestamp()
           
               channel.send(joinEmbed);
           
           
})

 
client.on("ready", async () => {
 
    console.log(`${client.user.username} is online.`);
    client.user.setActivity(`DutchFM | Aantal servers: ${client.guilds.cache.size} `, { type: "LISTENING" });
 
});
 
 
client.on("message", async message => {
 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    var commands = client.commands.get(command.slice(prefix.length));

    if(commands) commands.run(client,message, arguments);
   
   
});

client.login(process.env.token);
//moet ff

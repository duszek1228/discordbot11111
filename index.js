const botconfig = require("./botconfig.json");
const Discord = require("discord.js")
const prefix = "!"
var nazwabota = "GRUPA ZAWADZKA"

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
    console.log(`${nazwabota} jest online!`)
});

bot.on("message", async message => {
    if(message.author.bot) return;

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

if(command == "czlonkowie"){
    message.delete()
    var embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setDescription("Krzysztof Duch - 894-4504\nMarek Banaś - 553-4253\nŁapa Rochna - 154-3295\nDimitri Stolkovic\nJacob Drabina\nMarek Enjezo - 543-5727\nJan Belmondo - 837-6400\nTomy Swayze - 592-5009\nArtur Shalby - 688-6513\nMarek Rura - 392-2114")
    .setTitle("Lista członków", "https://media.discordapp.net/attachments/779050731318935594/780749181341270056/avatars-vctveoCGE4OS1Bzc-x16bAw-t500x500.jpg")
    .setAuthor("GRUPA ZAWADZKA", "https://media.discordapp.net/attachments/779050731318935594/780749181341270056/avatars-vctveoCGE4OS1Bzc-x16bAw-t500x500.jpg")
    .setFooter("grupa_zawadzka - członkowie", "https://media.discordapp.net/attachments/779050731318935594/780749181341270056/avatars-vctveoCGE4OS1Bzc-x16bAw-t500x500.jpg")
    .setTimestamp()

    message.channel.send(embed)
}

if(command == "abotutorial"){
    message.delete()
    var embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setDescription("!abonament [Imię i nazwisko] do [data zakończenia abonamentu]\nnp. !abonament Krzystof Duch do 25.11.2020 15:00")
    .setTitle("Wzór na abonament")
    .setAuthor("Abonament - wzór", "https://media.discordapp.net/attachments/779050731318935594/780749181341270056/avatars-vctveoCGE4OS1Bzc-x16bAw-t500x500.jpg")
    .setFooter("grupa_zawadzka - abonamenty", "https://media.discordapp.net/attachments/779050731318935594/780749181341270056/avatars-vctveoCGE4OS1Bzc-x16bAw-t500x500.jpg")
    .setTimestamp()

    message.channel.send(embed)
}

if (message.content.startsWith(prefix + "announce")) {
    // reading content to be announced
    let announcemessage = message.content.match(/(?<=announce ).*$/)[0];
    let finalmessage = announcemessage.toUpperCase();

    console.log(announcemessage);
    message.delete()
    
    // the embed 
    const announceEmbed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("📣 • OGŁOSZENIE", "https://media.discordapp.net/attachments/779050731318935594/780749181341270056/avatars-vctveoCGE4OS1Bzc-x16bAw-t500x500.jpg")
      .setFooter("grupa_zawadzka - członkowie", "https://media.discordapp.net/attachments/779050731318935594/780749181341270056/avatars-vctveoCGE4OS1Bzc-x16bAw-t500x500.jpg")
      .setTimestamp()
      .setDescription(finalmessage);
      // add more embed configs if you like
    message.channel.send("@everyone")
    message.channel.send(announceEmbed);
  }

  if (message.content.startsWith(prefix + "abonament")) {
    // reading content to be announced
    let announcemessage = message.content.match(/(?<=abonament ).*$/)[0];
    let finalmessage = announcemessage.toUpperCase();

    console.log(announcemessage);
    message.delete()
    
    // the embed 
    const announceEmbed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("🔒 • ABONAMENT", "https://media.discordapp.net/attachments/779050731318935594/780749181341270056/avatars-vctveoCGE4OS1Bzc-x16bAw-t500x500.jpg")
      .setFooter("grupa_zawadzka - abonamnety", "https://media.discordapp.net/attachments/779050731318935594/780749181341270056/avatars-vctveoCGE4OS1Bzc-x16bAw-t500x500.jpg")
      .setTimestamp()
      .setDescription(finalmessage);
      // add more embed configs if you like
    message.channel.send("@everyone")
    message.channel.send(announceEmbed);
  }

});

bot.login(botconfig.token)
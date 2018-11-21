const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**Her Hangi Bir Şey**")
        .setImage("Her Hangi Bir Resim, Gif vb.")
        .setThumbnail("Her Hangi Bir Resim, Gif vb.")
        .setColor(0x00AE86)
        .addField("Her Hangi Bir Şey", "Her Hangi Bir Şey", true)
        .addField("Her Hangi Bir Şeyi", `
        *Her Hangi Bir Şey
   *Her Hangi Bir Şey
   `, true)
   .addField("Her Hangi Bir Şey", `Her Hangi Bir Şey`, true)
   .addField("YAPIMCI", "Sizin Kullanıcı Adınız")
   .addField("Website", "Botunuzun Websitesi")
   .addField("Her Hangi Bir Şey:", "Her Hangi Bir Şey")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'clash', 
  description: 'Botun Tanıtım Kartını Gönderir',
  usage: 'clash'
};
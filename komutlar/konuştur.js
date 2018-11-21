const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);
  
  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let modLog = JSON.parse(fs.readFileSync("./jsonlar/mLog.json", "utf8"));
  let modlog = message.guild.channels.get(modLog[message.guild.id].ml);
  let sRol = JSON.parse(fs.readFileSync("././jsonlar/sRol.json", "utf8"));
  let muteRole = message.guild.roles.get(sRol[message.guild.id]);
  if(!modLog[message.guild.id]) return message.reply('Lütfen **r?mod-log-ayarla** yazarak Moderasyon Kayıtları kanalı ayarlayınız!');
  if (!sRol[message.guild.id]) return message.reply('Lütfen **r?sustur-rol-ayarla** yazarak Susturma Rolü ayarlayınız!');
  if (message.mentions.users.size < 1) return message.reply('Susturmasını kaldıracağın kişiyi etiketlemelisin! \n**Örnek:** r?konuştur <@kişi-etiket>');
  if (user.id === message.author.id) return message.reply('Kendinin susturmasını kaldıramazsın!');
  
  if (!message.guild.member(user).roles.has(muteRole.id)) return message.reply('Bu kişi susturulmamış!');
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('Yapılan İşlem', 'Susturma Kaldırma')
  .addField('Susturması Kaldırılan Kullanıcı', `${user.username}#${user.discriminator} (${user.id})`)
  .addField('Susturmayı Kaldıran Yetkili', `${message.author.username}#${message.author.discriminator}`)
  modlog.send(embed);
  
  message.guild.members.get(user.id).addRole(muteRole)
  
  const embed2 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`<@${user.id}> adlı kullanıcının başarıyla susturulması kaldırıldı!`)
  message.channel.send(embed2)
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["unmute", "sustur-kaldır"],
  permLevel: `Mesajları yönet yetkisine sahip olmak gerekir.`
};

exports.help = {
  name: 'konuştur',
  category: 'moderasyon',
  description: 'Susturulmuş bir kişinin susturmasını kaldırmayı sağlar.',
  usage: 'r?konuştur <@kişi-etiket>'
};
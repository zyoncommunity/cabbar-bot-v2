const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {

  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(`Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`);
  
  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let reason = args.slice(1).join(' ');
  let modLog = JSON.parse(fs.readFileSync("./jsonlar/mLog.json", "utf8"));
  let modlog = message.guild.channels.get(modLog[message.guild.id].ml);
  if(!modLog[message.guild.id]) return message.reply('Lütfen **r?mod-log-ayarla** yazarak Moderasyon Kayıtları kanalı ayarlayınız!');
  if (message.mentions.users.size < 1) return message.reply('Atacağın kişiyi etiketlemelisin! \n**Örnek:** r?kick <@kişi-etiket>');
  if (reason.length < 1) return message.reply('Atma sebebini yazmadın! \n**Örnek:** r?kick <@kişi-etiket> <sebep>');
  if (user.id === message.author.id) return message.reply('Kendini atamazsın!');
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('Yapılan İşlem', 'Atma/Kick')
  .addField('Atılan Kullanıcı', `${user.username}#${user.discriminator} (${user.id})`)
  .addField('Atan Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('Atılma Sebebi', "```" + reason + "```")
  modlog.send(embed);
  
  if (!message.guild.member(user).kickable) return message.reply('Yetkilileri atamam!');
  message.guild.member(user).kick();
  
  const embed2 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`<@${user.id}> adlı kullanıcı başarıyla atıldı!`)
  message.channel.send(embed2)
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["at"],
  permLevel: `Üyeleri at yetkisine sahip olmak gerekir.`
};

exports.help = {
  name: 'kick',
  category: 'moderasyon',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'r?kick <@kişi-etiket> <sebep>'
};
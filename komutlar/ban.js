const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`);
  
  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let reason = args.slice(1).join(' ');
  let modLog = JSON.parse(fs.readFileSync("./jsonlar/mLog.json", "utf8"));
  let modlog = message.guild.channels.get(modLog[message.guild.id].ml);
  if(!modLog[message.guild.id]) return message.reply('Lütfen **r?mod-log-ayarla** yazarak Moderasyon Kayıtları kanalı ayarlayınız!');
  if (message.mentions.users.size < 1) return message.reply('Yasaklayacağın kişiyi etiketlemelisin! \n**Örnek:** r?ban <@kişi-etiket>');
  if (reason.length < 1) return message.reply('Yasaklama sebebini yazmadın! \n**Örnek:** r?ban <@kişi-etiket> <sebep>');
  if (user.id === message.author.id) return message.reply('Kendini yasaklayamazsın!');
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('Yapılan İşlem', 'Yasaklama/Ban')
  .addField('Yasaklanan Kullanıcı', `${user.username}#${user.discriminator} (${user.id})`)
  .addField('Yasaklayan Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('Yasaklanma Sebebi', "```" + reason + "```")
  modlog.send(embed);
  
   if (!message.guild.member(user).bannable) return message.reply('Yetkilileri yasaklayamam!');
  message.guild.ban(user, 2);
  
  const embed2 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`<@${user.id}> adlı kullanıcı başarıyla yasaklandı!`)
  message.channel.send(embed2)
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yasakla"],
  permLevel: `Üyeleri yasakla yetkisine sahip olmak gerekir.`
};

exports.help = {
  name: 'ban',
  category: 'moderasyon',
  description: 'İstediğiniz kişiyi sunucudan yasaklar.',
  usage: 'r?ban <@kişi-etiket> <sebep>'
};
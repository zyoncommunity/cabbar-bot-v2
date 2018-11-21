const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);
  
  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let reason = args.slice(1).join(' ');
  let modLog = JSON.parse(fs.readFileSync("./jsonlar/mLog.json", "utf8"));
  let sRol = JSON.parse(fs.readFileSync("././jsonlar/sRol.json", "utf8"));
  let modlog = message.guild.channels.get(modLog[message.guild.id].modlog);
  let muteRole = message.guild.roles.get(sRol[message.guild.id].sr);
  if(!modLog[message.guild.id]) return message.reply('Lütfen **r?mod-log-ayarla** yazarak Moderasyon Kayıtları kanalı ayarlayınız!');
  if (!sRol[message.guild.id]) return message.reply('Lütfen **r?sustur-rol-ayarla** yazarak Susturma Rolü ayarlayınız!');
  if (message.mentions.users.size < 1) return message.reply('Susturacağın kişiyi etiketlemelisin! \n**Örnek:** r?sustur <@kişi-etiket>');
  if (reason.length < 1) return message.reply('Susturma sebebini yazmadın! \n**Örnek:** r?sustur <@kişi-etiket> <sebep>');
  if (user.id === message.author.id) return message.reply('Kendini susturamazsın!');
  
  if (message.guild.member(user).roles.has(muteRole.id)) return message.reply('Bu kişi zaten susturulmuş!');
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('Yapılan İşlem', 'Susturma')
  .addField('Susturulan Kullanıcı', `${user.username}#${user.discriminator} (${user.id})`)
  .addField('Susturan Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('Susturma Sebebi', "```" + reason + "```")
  modlog.send(embed);
  
  message.guild.members.get(user.id).addRole(muteRole)
  
  const embed2 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`<@${user.id}> adlı kullanıcı başarıyla susturuldu!`)
  message.channel.send(embed2)
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mute"],
  permLevel: `Mesajları yönet yetkisine sahip olmak gerekir.`
};

exports.help = {
  name: 'sustur',
  category: 'moderasyon',
  description: 'İstediğiniz kişiyi susturur.',
  usage: 'r?sustur <@kişi-etiket> <sebep>'
};
const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setDescription(`You can not use commands here.`)
  return message.author.sendEmbed(ozelmesajuyari); }
  if (message.mentions.users.size < 1) return message.channel.send('❎ | Bu komutun kullanımı şu şekildedir > **!!rol-ver @kullanıcı <rolün adı>**').catch(console.error);
  let user = message.mentions.users.first();
  let guild = message.guild
  let yetki = args.slice(1).join(' ');
  let modlog = guild.channels.find('name', 'clash-bot');
  if (!modlog) return message.channel.send('❎ | **clash-bot** kanalı bulunamadı. Yüklemek İçin d!kur').catch(console.error);
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', yetki);
  if (!muteRole) return message.channel.send(`:x: | **${args[1]}** isminde bir rol bulunamadı.`).catch(console.error);
  message.channel.send(`✔ | Başarılı, **${yetki}** isimli rol başarılı bir şekilde **${args[0]}** isimli kullanıcıya verildi.`);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Rol verildi')
    .addField('Rol:', `${yetki}`)
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .setFooter('Darq* | dbot.rf.gd', client.user.avatarURL);

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      guild.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      guild.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  }

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'rol-ver',
  description: 'İstediğiniz kişiye rol verir.',
  usage: 'rol-ver [kullanıcı] [sebeb]'
};
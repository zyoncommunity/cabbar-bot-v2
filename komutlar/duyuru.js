const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
if (message.author.id != 506400580961435649) { return; }
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Birşey Yazmalısınız');
  message.delete();
      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('' + mesaj + '')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [
  ],
  permLevel: 4
};

exports.help = {
  name: 'duyuruemuq',
  description: 'İstediğiniz şeyi bota duyurtur.',
  usage: 'duyuruemuq [duyurmak istediğiniz şey]'
};
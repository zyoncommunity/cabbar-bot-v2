// Discord Modülü
const Discord = require("discord.js");

// Moment modülü
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {

  const duration = moment.duration(client.uptime).format(" D [Gün], H [Saat], m [Dakika], s [Saniye]");

  const embed = new Discord.RichEmbed()

    .addField("Kitaplık Türü", "discord.js (Modül)", true)

    .addField("Sunucular", client.guilds.size.toLocaleString(), true)

    .addField("Kullanıcılar", client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)

    .addField("Kanallar", client.channels.size.toLocaleString(), true)

    .addField("Discord.JS Version", Discord.version, true)

    .setFooter("Çalışma süresi: " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB.")

    .setColor(0xff0000)

    return msg.channel.sendEmbed(embed)};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['durum'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};
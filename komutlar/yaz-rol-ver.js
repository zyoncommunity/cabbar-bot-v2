const Discord = require('discord.js');

exports.run = function(client, message) {
  var role = message.guild.roles.find(role => role.name === "discord.js");
  message.member.addRole(role);
  message.channel.send(':white_check_mark: **DİSCORD.JS İSMİ rolü başarıyla verildi.**');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'discord.js',
  description: 'AÇIKLAMA',
  usage: 'KULLANIM'
};
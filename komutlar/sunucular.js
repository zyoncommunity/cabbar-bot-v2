const Discord = require('discord.js');
const client = new Discord.Client();
const hastebin = require('hastebin-gen');

exports.run = async (client, message) => {
   hastebin(`╔═════════════════════════════════════════════════╗ \n║ - Botun Bulunduğu Sunucu Sayısı [ ${client.guilds.size} ] bulunuyor. -  ║ \n╚═════════════════════════════════════════════════╝ \n \n╔- SUNUCULAR -═══════════════════════════════════╗ \n║ » ${client.guilds.map(m => m.name).join(` \n║ » `)} \n╚════════════════════════════════════════════════╝ \n \n╔═════════════════════════════════════════════════╗ \n║ - Botun Bulunduğu Sunucu Sayısı [ ${client.guilds.size} ] bulunuyor. -  ║ \n╚═════════════════════════════════════════════════╝`).then(r => {
        message.channel.send(`Sunucu listesi çok uzun olduğu için hastebine yüklendi! \nLink: ${r}`);
  }).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu-listesi'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'sunucular',
  category: "bot",
  description: 'Botun bulunduğu sunucuları gösterir.',
  usage: 'r?sunucular'
};
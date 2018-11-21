const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setTitle(`» Sunucuda Bulunan Roller`)
            .setDescription(`${message.guild.roles.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') ? message.guild.roles.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') : 'Bu sunucuda hiç rol bulunmuyor.'}`)
            return message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'roller',
  category: "sunucu",
  description: 'Bulunduğunuz sunucudaki rolleri gösterir.',
  usage: 'r?roller'
};
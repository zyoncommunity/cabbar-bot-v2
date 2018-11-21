const Discord = require('discord.js')
const fs = require('fs');
const ms = require("ms")
exports.run = async (client, message, args) => {
if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`/sunucutanıt` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Bu Komutu kullanmanız için `Sunucu_Yönet` Yetkisine sahip olmalısınız.")
    let kullanildii = JSON.parse(fs.readFileSync('./sunucutanıt.json', 'utf8'));
  if (!kullanildii[message.guild.id]) kullanildii[message.guild.id] = {
    gunlukkullanim: 0
  }
  if (kullanildii[message.guild.id].gunlukkullanim == 0)
  {
        const embed = new Discord.RichEmbed()
  .setTitle('BAŞARILI')
.setDescription('Sunucunuz Başarıyla [Destek Sunucusunda Yani Burada Tanıtıldı](SUNUCUN).\n12 saat Sonra sunucunuzu Tekrardan Tanıtabilirsiniz.')
        .setColor('GREEN')
 message.channel.sendEmbed(embed);
    message.channel.createInvite({maxAge: 0}).then((invite) => {
        const embed = new Discord.RichEmbed()
            .addField(`? Sunucu Sahibi`, message.author.tag, true)
            .addField(`? Sunucu İsmi`, message.guild.name, true)
      .addField(`? Sunucudakı Üye Sayısı`, message.guild.members.size, true)
      .addField(`? Sunucu Davet Linki`, invite.url, true)
            .setColor('RANDOM')
      .setThumbnail(message.guild.iconURL)
       client.channels.get('511985665680998401').send(embed)
            });
  kullanildii[message.guild.id].gunlukkullanim = 1
      fs.writeFile('./sunucutanıt.json', JSON.stringify(kullanildii), (err) => {
      if (err) console.error(err)
    })
  return
  }
  setTimeout(async() => {
    kullanildii[message.guild.id].gunlukkullanim = 0
    fs.writeFile('./sunucutanıt.json', JSON.stringify(kullanildii), (err) => {
      if (err) console.error(err)
    })
  }, ms('12h'));
  
  if (kullanildii[message.guild.id].gunlukkullanim == 1)
  {
  message.channel.send({embed: {
      description: '**SunucuTanıt**\n\nBu Komut Bu Sunucuda 12 Saat İçinde 1 Kere Kullanılmış\n\n**Bu Komutu Sadece 12 Saatte 1 Kez Kullanabilirsiniz**\n\n[Destek Sunucusu](SUNUCUN)\n[destek sunucusuna gelmek için tıkla](https://discord.gg/NBEU98T)'
            }});
  }
};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sunucutanıt'],
    permLevel: 0,
}

exports.help = {
    name: 'sunucutanıt',
    description: 'Sunuzunuzu Tanıtabilirsiniz',
    usage: 'sunucutanıt'
}

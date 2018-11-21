const Discord = require('discord.js')
const fs = require('fs');
var ayarlar = require('../ayarlar.json');
let kanal = JSON.parse(fs.readFileSync("././jsonlar/gc.json", "utf8"));

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  let channel = message.mentions.channels.first()
  
    if (!channel) {
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
	      .setTitle(`» Yanlış Kullanım!`)
	      .addField(`Doğru Kullanım`, `${ayarlar.prefix}giriş-çıkış-ayarla <#kanal>`)
        message.channel.send({embed})
        return
    }

    if(!kanal[message.guild.id]){
        kanal[message.guild.id] = {
            girisCikis: channel.id
        };
    }
  
    fs.writeFile("././jsonlar/gc.json", JSON.stringify(kanal), (err) => {
        console.log(err)
    })
  
    const embed = new Discord.RichEmbed()
    .setDescription(`» Giriş Çıkış kanalı başarıyla ${channel} olarak ayarlandı!`)
    .setColor("RANDOM")
    message.channel.send({embed})
  
  let embed2 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('Kanal "ayarlar" komutuna kaydediliyor...', "_Bu işlem tahminen en fazla 5 saniye sürebilir ve işlem bitene kadar komutlar kullanılamayabilir._")
  await message.channel.send(embed2);
  
  console.log("Kaydediliyor...");

  // you can always leave out this code // (cmd part)
  client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  }); // end of cmd function

  // shut down the bot
  process.exit(1);
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hoş-geldin-ayarla', 'giriş-çıkış-belirle'],
    permLevel: `Yönetici izni gerekiyor.`
}

exports.help = {
    name: 'giriş-çıkış-ayarla',
    category: 'ayarlar',
    description: 'Giriş çıkış kanalını ayarlar.',
    usage: 'r?giriş-çıkış-ayarla <#kanal>'
}
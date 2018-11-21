const Discord = require('discord.js')
const fs = require('fs');
var ayarlar = require('../ayarlar.json');
let gMesaj = JSON.parse(fs.readFileSync("././jsonlar/girisM.json", "utf8"));

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  let gM = args.slice(0).join(' ');
  
    if (!gM) {
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
	      .setTitle(`» Yanlış Kullanım!`)
	      .addField(`Doğru Kullanım`, `${ayarlar.prefix}giriş-mesaj-ayarla <mesaj> \n_**NOT:** Mesajda kişinin geleceği yere **{kullanıcı}** yazınız aksi taktirde kişiyi göstermez._`)
        message.channel.send({embed})
        return
    }

    if(!gMesaj[message.guild.id]){
        gMesaj[message.guild.id] = {
            gm: gM
        };
    }
    fs.writeFile("././jsonlar/girisM.json", JSON.stringify(gMesaj), (err) => {
        console.log(err)
    })
    const embed = new Discord.RichEmbed()
    .setTitle("» Giriş Mesajı Değiştirildi!")
    .addField("Ayarlanan Mesaj", "```" + gM + "```")
    .setColor("RANDOM")
    message.channel.send({embed})
  
  let embed2 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('Mesaj "ayarlar" komutuna kaydediliyor...', "_Bu işlem tahminen en fazla 5 saniye sürebilir ve işlem bitene kadar komutlar kullanılamayabilir._")
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
    aliases: [],
    permLevel: `Yönetici izni gerekiyor.`
  };

  exports.help = {
    name: 'giriş-mesaj-ayarla',
    category: 'ayarlar',
    description: 'Giriş mesajını değiştirmenizi sağlar.',
    usage: 'r?giriş-mesaj-ayarla <mesaj> \n**NOT:** Mesajda kişinin geleceği yere **{kullanıcı}** yazınız aksi taktirde kişiyi göstermez.'
  };
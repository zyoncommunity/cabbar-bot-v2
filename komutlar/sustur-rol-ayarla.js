const Discord = require('discord.js')
const fs = require('fs');
var ayarlar = require('../ayarlar.json');
let rol = JSON.parse(fs.readFileSync("././jsonlar/sRol.json", "utf8"));

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  let role = message.mentions.roles.first()
  
    if (!role) {
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
	      .setDescription(`Yanlış Kullanım!`)
	      .addField(`Doğru Kullanım:`, `${ayarlar.prefix}sustur-rol-ayarla <@rol>`)
        message.channel.send({embed})
        return
    }

    if(!rol[message.guild.id]){
        rol[message.guild.id] = {
            sr: role.id
        };
    }
    fs.writeFile("././jsonlar/sRol.json", JSON.stringify(rol), (err) => {
        console.log(err)
    })
    const embed = new Discord.RichEmbed()
    .setTitle(`» Susturma rolü başarıyla **${role.name}** olarak ayarlandı!`)
    .setColor("RANDOM")
    message.channel.send({embed})
  
  let embed2 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('Rol "ayarlar" komutuna kaydediliyor...', "_Bu işlem tahminen en fazla 5 saniye sürebilir ve işlem bitene kadar komutlar kullanılamayabilir._")
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
    aliases: ['sustur-rol', 'sustur-rol-belirle'],
    permLevel: `Yönetici izni gerekiyor.`
}

exports.help = {
    name: 'sustur-rol-ayarla',
    category: 'moderasyon',
    description: 'Birisi susturulunca verilecek rolü ayarlar.',
    usage: 'r?sustur-rol-ayarla <@rol>'
}
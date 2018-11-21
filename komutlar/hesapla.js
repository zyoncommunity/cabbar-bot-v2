const Discord = require('discord.js');
const math = require('math-expression-evaluator')
const stripIndents = require('common-tags').stripIndents



exports.run = function(client, message, args) {
    var soru = args.join(' ');
    
    if(!soru) return message.reply('Bir işlem belirtin. \n**Doğru Kullanım**: r?hesapla <işlem>')
    else { 
      let cevap;
        try {
            cevap = math.eval(soru)
        } catch(err) {
            message.channel.send(`HATA: \n**${err ? err : "Bilinmiyor"}**`)
        }

        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField('» İşlem', soru ? soru : "İşlem Bulunamadı")
        .addField('» Sonuç', cevap ? cevap : "Hesaplanamadı")
        message.channel.send(embed)
    }


};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["matematik"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'hesapla',
  category: "kullanıcı",
  description: 'Belirtilen işlemi yapar.',
  usage: 'r?hesapla <işlem>'
};
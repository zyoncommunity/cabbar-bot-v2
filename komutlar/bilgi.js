const Discord = require('discord.js');
var ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  
/*var helpers = "";
    for (var i = 0; i < ayarlar.helper.length; i++) {
        var şuanki = client.users.get(ayarlar.helper[i]).tag;
        if (i === 0) {
            helpers += şuanki
        }
        else if (i === ayarlar.helper.length - 1) {
            helpers += ", " + şuanki;
        } else {
            helpers += ", " + şuanki
        }
    }*/
  
        const embed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.addField(`» Botun İsmi/Adı:`, `Rytvex`)
		.addField(`» Botun Sahibi/Yapımcısı:`, `<@${ayarlar.sahip}>`)
    .addField(`» Kodlamada Yardımcı Olanlar:`, `${ayarlar.yardimcilar.map(ayarlar => `<@${ayarlar}>`).join(", ")}`)
    .addField(`» Botun Orjinal Prefixi/Ön-Eki:`, `${ayarlar.prefix}`)
    .addField(`» Rytvex | Destek Sistemi Kurulumu:`, `1- **destek-kanalı** isminde bir metin/yazı kanalı oluşturunuz. \n2- **Destek Ekibi** isminde bir rol oluşturunuz. \n\nBunları yaptıysanız **destek-kanalı** ismindeki metin/yazı kanalına mesaj yazdığınızda otomatik olarak destek talebi açılacaktır. \nDestek Sistemi artık sunucunuzda aktiftir!`)
		.addField(`» Botun Linkleri:`, `[Botu Sunucuna Eklemek İçin Tıkla!](https://discordapp.com/oauth2/authorize?client_id=479240699938734090&scope=bot&permissions=2146958847) \n[Botun Destek Sunucusuna Gelmek İçin Tıkla](https://discord.gg/E9ZBk6D)`)
    .setFooter('© ' + (new Date()).getFullYear() + ' Rytvex')
		.setThumbnail(client.user.avatarURL)
        message.channel.send({embed});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hakkında'],
    permLevel: `Yetki gerekmiyor.`
  };
  
  exports.help = {
    name: 'bilgi',
    category: 'bot',
    description: 'Botun bilgisini gösterir.',
    usage: 'r?bilgi'
  };
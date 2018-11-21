const Discord = require('discord.js');
const fs = require('fs');
let küfürEngel = JSON.parse(fs.readFileSync("././jsonlar/kufurEngelle.json", "utf8"));

var ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {

	//if (message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

	let args = message.content.split(' ').slice(1);
	const secenekler = args.slice(0).join(' ');

	var errembed = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setDescription(`Yanlış Kullanım!`)
	.addField(`Doğru Kullanım:`, `${ayarlar.prefix}küfür-engelle aç veya kapat`)
	if(secenekler.length < 1) return message.channel.send(errembed);
	//if(secenekler === "aç" || "kapat") return message.channel.send(errembed);

	if (secenekler === "aç") {
		message.channel.send(`Küfür Engelleme Sistemi: **açık**!`)
		küfürEngel[message.guild.id] = {
			küfürEngel: "acik"
		  };

		  fs.writeFile("././jsonlar/kufurEngelle.json", JSON.stringify(küfürEngel), (err) => {
			if (err) console.log(err)
		  });
	};

	if (secenekler === "kapat") {
		message.channel.send(`Küfür Engelleme Sistemi: **kapalı**!`)
		küfürEngel[message.guild.id] = {
			küfürEngel: "kapali"
		  };

		fs.writeFile("././jsonlar/kufurEngelle.json", JSON.stringify(küfürEngel), (err) => {
			if (err) console.log(err)
		  });
	};
}




	exports.conf = {
		enabled: true,
		guildOnly: false,
		aliases: ['küfür-engel'],
		permLevel: `Yönetici izni gerekiyor. (${3})`
	  };
	  
	  exports.help = {
		name: 'küfür-engelle',
    category: "ayarlar",
		description: 'Küfür engelleme sistemini açıp kapatmanızı sağlar.',
		usage: '.küfür-engelle <aç> veya <kapat>'
	  };
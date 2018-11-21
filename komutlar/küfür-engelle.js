const Discord = require('discord.js');
const fs = require('fs');

var ayarlar = require('../ayarlar.json');

exports.run = async (client, message) => {

	if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

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
    let küfürEngel = JSON.parse(fs.readFileSync("././jsonlar/kufurEngelle.json", "utf8"));
  if(!küfürEngel[message.guild.id]){
		küfürEngel[message.guild.id] = {
			küfürEngel: "acik"
		  };
  };

		  fs.writeFile("././jsonlar/kufurEngelle.json", JSON.stringify(küfürEngel), (err) => {
			if (err) console.log(err)
		  });
    
    console.log("Kaydediliyor...");

  // you can always leave out this code // (cmd part)
  client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  }); // end of cmd function

  // shut down the bot
  process.exit(1);
  
  let embed2 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('Sistem "ayarlar" komutuna kaydediliyor...', "_Bu işlem tahminen en fazla 5 saniye sürebilir ve işlem bitene kadar komutlar kullanılamayabilir.")
  await message.channel.send(embed2);
	};

	if (secenekler === "kapat") {
		message.channel.send(`Küfür Engelleme Sistemi: **kapalı**!`)
    let küfürEngel = JSON.parse(fs.readFileSync("././jsonlar/kufurEngelle.json", "utf8"));
    if(!küfürEngel[message.guild.id]){
		küfürEngel[message.guild.id] = {
			küfürEngel: "kapali"
		  };
    };

		fs.writeFile("././jsonlar/kufurEngelle.json", JSON.stringify(küfürEngel), (err) => {
			if (err) console.log(err)
		  });
    
    console.log("Kaydediliyor...");

  // you can always leave out this code // (cmd part)
  client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  }); // end of cmd function

  // shut down the bot
  process.exit(1);
  
  let embed2 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('Sistem "ayarlar" komutuna kaydediliyor...', "_Bu işlem tahminen en fazla 5 saniye sürebilir ve işlem bitene kadar komutlar kullanılamayabilir.")
  await message.channel.send(embed2);
	};
}

	exports.conf = {
		enabled: true,
		guildOnly: false,
		aliases: ['küfür-engel'],
		permLevel: `Yönetici izni gerekiyor.`
	  };
	  
	  exports.help = {
		name: 'küfür-engelle',
    category: "ayarlar",
		description: 'Küfür engelleme sistemini açıp kapatmanızı sağlar.',
		usage: 'r?küfür-engelle <aç> veya <kapat>'
	  };
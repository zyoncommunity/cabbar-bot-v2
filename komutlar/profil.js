const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const Jimp = require("jimp");

exports.run = async (client, message) => {
  
  if(message.author.id !== "427400103377108992") return;
  
  let member;
	
    if (message.mentions.users.first()) {
      member = message.mentions.users.first();
    } else {
        member = message.author;
    }
  
  let isim = JSON.parse(fs.readFileSync("././jsonlar/isim.json", "utf8"));
  
  if (!member) return;
  if (!isim[member.id]) return;
  
        var Isim = `Isim: ${isim[member.id].isim ? isim[member.id].isim : "Bilinmiyor."}`

const bg = await Jimp.read("https://media.discordapp.net/attachments/466860194823929856/475257205743157258/profil.png?width=500&height=358");
			const userimg = await Jimp.read(member.avatarURL || member.defaultAvatarURL);
            var font;
            if (member.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
			else if (member.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);

            var font2;
            if (Isim.length < 15) font2 = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
			else if (Isim.length > 15) font2 = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
            else font2 = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);

            await bg.print(font, 200, 52, member.tag);
            await bg.print(font2, 30, 210, Isim)
			      await userimg.resize(150, 150);
            await bg.composite(userimg, 25, 26).write("./img/"+ member.id + ".png");
            setTimeout(function () {
                message.channel.send(new Discord.Attachment("./img/" + member.id + ".png"));
          }, 1000);
          setTimeout(function () {
            fs.unlink("./img/" + member.id + ".png");
          }, 10000);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kimlik'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'profil',
  category: "profile",
  description: 'Profil bilginizi gösterir.',
  usage: 'r?profil veya r?profil <@kişi-etiket>'
};
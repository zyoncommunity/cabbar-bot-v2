const Discord = require('discord.js');
const client = new Discord.Client();
const { stripIndents } = require('common-tags');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message) => {
  let args = message.content.split(' ').slice(1);
  const hata = args.slice(0).join(' ');
  var errembed = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setTitle(`» Yanlış Kullanım!`)
	.addField(`Doğru Kullanım`, `${ayarlar.prefix}hata-bildir <bulduğunuz hata>`)
  if (hata.length < 1) return message.channel.send(errembed);
  let davet;
    if (message.channel.permissionsFor(this.client.user).has("CREATE_INSTANT_INVITE")) {
        await message.channel.createInvite({temporary: false, maxAge: 0, maxUses: 0, unique: false}).then(i => { davet = i.url });
    } else davet = 'Davet linkini almak için yeterli yetkim yoktu alamadım!';

    message.reply(`${this.client.emojis.get('464406478153973770')} Hata Bildirildi! Yakında incelenecektir!`);

    var hataHook = new Discord.WebhookClient("478476657435607040", "p2ArDJEEknIgSE225dKboH217BFkgOlconB0ViG4rQonkqwnK0eHsxbq_SeeZ2ZikJXE")

    hataHook.send(stripIndents`
    **» Bende Bir Hata Bulmuşlar!**
    |**Hata:** _${hata}_
    |**Kullanıcı:** _<@${message.author.id}>_
    |**Kullanıcı Tag:** _${message.author.tag}_
    |**Sunucu Adı:** _${message.guild.name}_
    |**Sunucu ID:** _${message.guild.id}_
    `)
    //|**Sunucu Davet Linki:** _${davet}_

    /*const embed = new RichEmbed()
    .setColor('RANDOM')
    .setAuthor(`_» Bende Bir Hata Bulmuşlar! «_`, this.client.user.avatarURL)
    .addField(`Bildirilen Hata:`, `\`${args.hata}\``)
    .addField(`Bildiren Kullanıcı Hakkında:`, `Kullanıcı ID: ${message.author.id} \nKullanıcı Adı: ${message.author.tag}`)
    .addField(`Bildirilen Sunucu Hakkında:`, `Sunucu ID: ${message.guild.id} \nSunucu Adı: ${message.guild.name}`)
    .addField(`Bildirilen Sunucu Davet Linki:`, `${davet}`)

    this.client.channels.get('470145859871571968').send(embed)*/
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hata', 'bug', 'bug-bildir'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'hata-bildir',
  category: "iletisim",
  description: 'Bottaki bir hatayı/sorunu bildirmenizi sağlar.',
  usage: 'r?hata-bildir <bulduğunuz hata>'
};
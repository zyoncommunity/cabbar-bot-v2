const Discord = require('discord.js');
const client = new Discord.Client();
const { stripIndents } = require('common-tags');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message) => {
  let args = message.content.split(' ').slice(1);
  const tavsiye = args.slice(0).join(' ');
  var errembed = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setTitle(`Yanlış Kullanım!`)
	.addField(`Doğru Kullanım:`, `${ayarlar.prefix}tavsiye <tavsiyeniz>`)
  if (tavsiye.length < 1) return message.channel.send(errembed);
  let davet;
        if (message.channel.permissionsFor(this.client.user).has("CREATE_INSTANT_INVITE")) {
            await message.channel.createInvite({temporary: false, maxAge: 0, maxUses: 0, unique: false}).then(i => { davet = i.url });
        } else davet = 'Davet linkini almak için yeterli yetkim yok.';

    message.reply(`${this.client.emojis.get('464406478153973770')} Tavsiyeniz bildirildi! Tavsiye gönderdiğiniz için teşekkürler!`);

    var tavsiyeHook = new Discord.WebhookClient("478476657435607040", "p2ArDJEEknIgSE225dKboH217BFkgOlconB0ViG4rQonkqwnK0eHsxbq_SeeZ2ZikJXE")
    
    tavsiyeHook.send(stripIndents`
    **» Yeni Bir Tavsiye!**
    |**Tavsiye:** _${tavsiye}_
    |**Kullanıcı:** _<@${message.author.id}>_
    |**Kullanıcı Tag:** _${message.author.tag}_
    |**Sunucu Adı:** _${message.guild.name}_
    |**Sunucu ID:** _${message.guild.id}_
    `)
    //|**Sunucu Davet Linki:** _${davet}_

    /*const embed = new RichEmbed()
    .setColor('RANDOM')
    .setAuthor(`_» Yeni Bir Tavsiye! «_`, this.client.user.avatarURL)
    .addField(`Gönderilen Tavsiye:`, `\`${args.tavsiye}\``)
    .addField(`Gönderen Kullanıcı Hakkında:`, `Kullanıcı ID: ${message.author.id} \nKullanıcı Adı: ${message.author.tag}`)
    .addField(`Gönderilen Sunucu Hakkında:`, `Sunucu ID: ${message.guild.id} \nSunucu Adı: ${message.guild.name}`)
    .addField(`Gönderilen Sunucu Davet Linki:`, `${davet}`)

    this.client.channels.get('470145859871571968').send(embed)*/
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['öneri', 'öner', 'tavsiye-ver', 'öneri-ver', 'öneri-bildir', 'tavsiye-bildir'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'tavsiye',
  category: "iletisim",
  description: 'Bot için tavsiye bildirmenizi sağlar.',
  usage: 'r?tavsiye <tavsiyeniz>'
};
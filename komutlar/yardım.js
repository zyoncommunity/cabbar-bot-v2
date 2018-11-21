const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const { stripIndents, oneLine } = require('common-tags');
const client = new Discord.Client();

var prefix = ayarlar.prefix;
  
exports.run = (bot, message, params) => {
  exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    let help = new Discord.RichEmbed()
    .setAuthor(`${bot.user.username} | Komutlar`, bot.user.avatarURL)
    .setDescription(`[Bir komut hakkında ayrıntılı bilgi için, "[${ayarlar.prefix}yardım <komut adı>](https://www.google.com.tr/)"]`)
    .setColor("RANDOM")
    .addBlankField()
    .addField("_» Kullanıcı Komutları «_", `${bot.commands.filter(cmd => cmd.help.category === 'kullanıcı').map(cmd => `[${cmd.help.name}](https://www.google.com.tr/): ${cmd.help.description}`).join("\n")}`)
    .addField("_» Sunucu Komutları «_", `${bot.commands.filter(cmd => cmd.help.category === 'sunucu').map(cmd => `[${cmd.help.name}](https://www.google.com.tr/): ${cmd.help.description}`).join("\n")}`)
    .addField("_» Bot Komutları «_", `${bot.commands.filter(cmd => cmd.help.category === 'bot').map(cmd => `[${cmd.help.name}](https://www.google.com.tr/): ${cmd.help.description}`).join("\n")}`)
    .addField("_» Eğlence Komutları «_", `${bot.commands.filter(cmd => cmd.help.category === 'eğlence').map(cmd => `[${cmd.help.name}](https://www.google.com.tr/): ${cmd.help.description}`).join("\n")}`)
    .addField("_» Moderasyon Komutları «_", `${bot.commands.filter(cmd => cmd.help.category === 'moderasyon').map(cmd => `[${cmd.help.name}](https://www.google.com.tr/): ${cmd.help.description}`).join("\n")}`)
    .addField("_» Profil Sistemi «_", `[__YAKINDA EKLENECEK!__](https://www.google.com.tr/)`)
    .addField(`_» Müzik Komutları «_`, stripIndents`
		[oynat](https://www.google.com.tr/): Şarkı çalar. (Eğer hiç bir şarkı ismi yazmaz sadece komutu kullanır iseniz otomatik olarak en iyi şarkılardan sunar.)
		[geç](https://www.google.com.tr/): Sıradaki şarkıya geçer.
		[kuyruk](https://www.google.com.tr/): Şarkı kuyruğunu gösterir.
		[duraklat](https://www.google.com.tr/): Şarkıyı duraklatır.
		[devamet](https://www.google.com.tr/): Duraklatılmış şarkıyı devam ettirir.
		[ses](https://www.google.com.tr/): Şarkının sesini ayarlar.
		[durdur](https://www.google.com.tr/): Şarkıyı kapatır.
		`)
    .addField("_» Ayarlamalı Sistemler «_", `${bot.commands.filter(cmd => cmd.help.category === 'ayarlar').map(cmd => `[${cmd.help.name}](https://www.google.com.tr/): ${cmd.help.description}`).join("\n")}`)
    .addField("_» Genel Komutlar «_", `${bot.commands.filter(cmd => cmd.help.category === 'genel').map(cmd => `[${cmd.help.name}](https://www.google.com.tr/): ${cmd.help.description}`).join("\n")}`)
    .addField("_» Bot İletişim/Destek «_", `${bot.commands.filter(cmd => cmd.help.category === 'iletisim').map(cmd => `[${cmd.help.name}](https://www.google.com.tr/): ${cmd.help.description}`).join("\n")}`)
    .addField(`» ${bot.user.username} | Destek Sistemi Kurulumu:`, `1- **destek-kanalı** isminde bir metin/yazı kanalı oluşturunuz. \n2- **Destek Ekibi** isminde bir rol oluşturunuz. \n\nBunları yaptıysanız **destek-kanalı** ismindeki metin/yazı kanalına mesaj yazdığınızda otomatik olarak destek talebi açılacaktır. \nDestek Sistemi artık sunucunuzda aktiftir!`)
    .setFooter(`${bot.user.username} | Gelişmiş Ve İşlevsel Sistemler!`, bot.user.avatarURL)
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`${bot.user.username} | Yardım`, bot.user.avatarURL)
  .setTitle(`_» Özel Mesajlarını Kontrol Et! «_`)
  .setDescription(`_Komutlarımı özel mesaj olarak gönderdim!_`);
    message.channel.sendEmbed(ozelmesajkontrol) }
    message.author.sendEmbed(help);
    /*message.author.sendCode('asciidoc', stripIndents`
    = Rytvex | Yardım =
    
    [Bir komut hakkında ayrıntılı bilgi için, "${ayarlar.prefix}yardım <komut adı>"]

    = Kullanıcı Komutları =
    ${bot.commands.filter(cmd => cmd.help.category === 'kullanıcı').map(cmd => `${cmd.help.name} = ${cmd.help.description}`).join(" \n\n")}
    
    = Bot Komutları =
    ${bot.commands.filter(cmd => cmd.help.category === 'bot').map(cmd => `${cmd.help.name} = ${cmd.help.description}`).join("\n\n")}

    = Moderasyon Komutları =
    ${bot.commands.filter(cmd => cmd.help.category === 'moderasyon').map(cmd => `${cmd.help.name} = ${cmd.help.description}`).join("\n\n")}

    = Profil Sistemi =
    YAKINDA EKLENECEK!
    
    = Ayarlamalı Sistemler =
    ${bot.commands.filter(cmd => cmd.help.category === 'ayarlar').map(cmd => `${cmd.help.name} = ${cmd.help.description}`).join("\n\n")}
    
    = Genel Komutlar =
    ${bot.commands.filter(cmd => cmd.help.category === 'genel').map(cmd => `${cmd.help.name} = ${cmd.help.description}`).join("\n\n")}

    = Bot İletişim/Destek =
    ${bot.commands.filter(cmd => cmd.help.category === 'iletisim').map(cmd => `${cmd.help.name} = ${cmd.help.description}`).join(" \n")}
   `)*/
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      const ozelyardim = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField(`Komut`, `${command.help.name}`)
      .addField(`Açıklama`, `${command.help.description ? command.help.description : "Bilinmiyor."}`)
      .addField(`Kategorisi`, `${command.help.category ? command.help.category : "Bulunmuyor."}`)
      .addField(`Kullanabilmek için Gerekli Yetki`, `${command.conf.permLevel}`)
      .addField(`Doğru Kullanım`, `${command.help.usage ? command.help.usage : "Bilinmiyor."}`)
      .addField(`Komutun Diğer Adları`, `${command.conf.aliases ? command.conf.aliases : "Bulunmuyor."}`)
      message.channel.sendEmbed(ozelyardim);
    }}}
};
  
/*if (message.channel.type !== 'dm') {
  const kontrol = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Özel Mesajlarını Kontrol Et!`)
  .setDescription(`_Komutlarımı özel mesaj olarak gönderdim!_`)
  message.channel.send(kontrol)};
    let help = new Discord.RichEmbed()
    .setAuthor(`Better Bot | Komutlar`)
    .setColor("RANDOM")
    .addField("_» Kullanıcı Komutları «_", `${bot.commands.filter(cmd => cmd.help.category === 'kullanıcı').map(cmd => `**${cmd.help.name}**: ${cmd.help.description}`).join(" \n")}`)
    .addField("_» Bot Komutları «_", `${bot.commands.filter(cmd => cmd.help.category === 'bot').map(cmd => `**${cmd.help.name}**: ${cmd.help.description}`).join(" \n")}`)
    .addField("_» Profil Sistemi «_", `${bot.commands.filter(cmd => cmd.help.category === 'profile').map(cmd => `**${cmd.help.name}**: ${cmd.help.description}`).join(" \n")}`)
    .addField("_» Ayarlamalı Sistemler «_", `${bot.commands.filter(cmd => cmd.help.category === 'ayarlar').map(cmd => `**${cmd.help.name}**: ${cmd.help.description}`).join(" \n")}`)
    .addField("_» Genel Komutlar «_", `${bot.commands.filter(cmd => cmd.help.category === 'genel').map(cmd => `**${cmd.help.name}**: ${cmd.help.description}`).join(" \n")}`)
    .addField("_» Bot İletişim/Destek «_", `${bot.commands.filter(cmd => cmd.help.category === 'iletisim').map(cmd => `**${cmd.help.name}**: ${cmd.help.description}`).join(" \n")}`)
    .setFooter(`Better Bot | Gelişmiş Ve İşlevsel Sistemler!`)
    message.author.send(help);
};*/
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'help', 'y'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'yardım',
  category: 'genel',
  description: 'Tüm komutları listeler.',
  usage: 'Belli bir komut için: r?yardım <komut adı> \nTüm komutlar için: r?yardım'
};
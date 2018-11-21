const express = require('express');
const http = require('http');

const app = express();

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});


app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 100000);







const Discord = require('discord.js');
const {RichEmbed} = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const { stripIndents } = require('common-tags');
const moment = require('moment');

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${chalk.yellow(`»`)} ${message}`);
};

function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

client.on("ready", () => {
  console.log(`${chalk.green(client.user.username)}${chalk.red(",")} ${chalk.blue(client.guilds.size)} ${chalk.yellow("Sunucu'ya")} ${chalk.red("ve")} ${chalk.blue(client.users.size)} ${chalk.yellow("Kullanıcı'ya")} ${chalk.red("hizmet veriyor!")}`)
  client.user.setStatus("dnd");
  client.user.setActivity("Rytvex | Açılmaya Hazırlanıyor...", { type: "WATCHING" });
  
var basladi = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`${client.user.username} Aktif!`, client.user.avatarURL)
.setDescription("Bot başarıyla aktif oldu!")
.addField("Ön-Ek/Prefix", ayarlar.prefix)
.addField("Sunucu Sayısı", client.guilds.size)
.addField("Kullanıcı Sayısı", client.users.size)
.setFooter(`${client.user.username} Gelişmiş ve İşlevsel Sistemler!`, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
client.channels.get("479302815450398750").send(basladi)
});

client.on("message", msg => {
  if (msg.content === ayarlar.prefix + "test") {
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')

// Write "Awesome!"
ctx.font = '30px Impact'
ctx.rotate(0)
ctx.fillText('Canvas\nDeneme!', 30, 60)

// Draw line under text
var text = ctx.measureText('Canvas\nDeneme!')
ctx.strokeStyle = 'rgba(0,0,0)'
ctx.beginPath()    
ctx.lineTo(50, 102)
ctx.lineTo(50 + text.width, 102)
ctx.stroke()
    
    loadImage('https://cdn.glitch.com/9eab4e9f-113d-4c01-8371-391c67fafde8%2Fprofil.png?1534529939353').then((image) => {
  ctx.drawImage(image, 50, 0, 70, 70)
 
msg.channel.send({file:image,name:"deneme.png"})
    })
    }
})

client.on("message", msg => {
  if (!msg.guild) return;
  if (!kufurEngel[msg.guild.id]) return;
  if (kufurEngel[msg.guild.id].küfürEngel === 'kapali') return;
    if (kufurEngel[msg.guild.id].küfürEngel=== 'acik') {
      const kufur = ["göt", "amk", "aq", "orospu", "oruspu", "oç", "sikerim", "yarrak", "piç", "amq", "sik", "amcık", "çocu", "sex", "seks", "amına", "orospu çocuğu", "sg", "siktir git"];
  if (kufur.some(word => msg.content.toLowerCase().includes(word)) ) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
       msg.reply("Bu sunucuda küfürler **Rytvex** tarafından engellenmektedir! Küfür etmene izin vermeyeceğim!").then(message => message.delete(3000));
    }
}
    }

  
  if (!msg.guild) return;
  if (!linkEngel[msg.guild.id]) return;
  if (linkEngel[msg.guild.id].linkEngel === 'kapali') return;
    if (linkEngel[msg.guild.id].linkEngel === 'acik') {
      const swearWords = ["discord.gg", "discord.me", "discordapp.com", "discord.io", "discord.tk"];
    if (swearWords.some(word => msg.content.includes(word))) {
      if (!msg.member.hasPermission("BAN_MEMBERS")) {
        return;
        }else{
return }
    }
    var regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
    if (regex.test(msg.content)==true) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
       msg.reply("Bu sunucuda linkler **Rytvex** tarafından engellenmektedir! Link atmana izin vermeyeceğim!").then(message => message.delete(3000));
    }
}
    }
})

client.on("guildMemberAdd", member => {
  const fs = require('fs');
let girisCikisK = JSON.parse(fs.readFileSync("./jsonlar/gc.json", "utf8"));
let girisM = JSON.parse(fs.readFileSync("./jsonlar/girisM.json", "utf8"));
  
  const hgK = member.guild.channels.get(girisCikisK[member.guild.id].girisCikis)
    if (!hgK) return;
  
  const giris = girisM[member.guild.id]
  
    hgK.send(giris ? giris.replace('{kullanıcı}', `<@${member.user.id}>`) : `<@${member.user.id}> Sunucuya Katıldı! _(**r?giriş-mesaj-ayarla** yazarak giriş mesajı değiştirilebilir.)_`);
});

client.on("guildMemberRemove", member => {
  const fs = require('fs');
let girisCikisK = JSON.parse(fs.readFileSync("./jsonlar/gc.json", "utf8"));
let cikisM = JSON.parse(fs.readFileSync("./jsonlar/cikisM.json", "utf8"));
  
  const hgK = member.guild.channels.get(girisCikisK[member.guild.id].girisCikis)
    if (!hgK) return;
  
  const cikis = cikisM[member.guild.id]
  
    hgK.send(cikis ? cikis.replace('{kullanıcı}', `<@${member.user.id}>`) : `<@${member.user.id}> Sunucuya Katıldı! _(**r?çıkış-mesaj-ayarla** yazarak çıkış mesajı değiştirilebilir.)_`);
});

const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyDSiyHBWZI9dDZBWXloNVhrHbpzTTfa0L8');
const queue = new Map();
var prefix = ayarlar.prefix;

client.on("message", async message => {
  var args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix)) return;
  var searchString = args.slice(1).join(' ');
  var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
  var serverQueue = queue.get(message.guild.id);
    switch (args[0].toLowerCase()) {
      case "oynat":
    var voiceChannel = message.member.voiceChannel;
    const voiceChannelAdd = new RichEmbed()
    .setColor("RANDOM")
    .setTitle(`Hata`)
    .setDescription(`Lütfen herhangi bir sesli kanala katılınız.`)
    if (!voiceChannel) return message.channel.send(voiceChannelAdd);
    var permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT')) {
      const warningErr = new RichEmbed()
      .setColor("RANDOM")
      .setTitle(`Hata`)
      .setDescription(`Herhangi bir sesli kanala katılabilmek için yeterli iznim yok.`)
      return message.channel.send(warningErr);
    }
    if (!permissions.has('SPEAK')) {
      const musicErr = new RichEmbed()
      .setColor("RANDOM")
      .setTitle(`Hata`)
      .setDescription(`Müzik açamıyorum/şarkı çalamıyorum çünkü kanalda konuşma iznim yok veya mikrofonum kapalı.`)
      return message.channel.send(musicErr);
    }
      if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      var playlist = await youtube.getPlaylist(url);
      var videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        var video2 = await youtube.getVideoByID(video.id);
        await handleVideo(video2, message, voiceChannel, true);
      }
      const PlayingListAdd = new RichEmbed()
      .setColor("RANDOM")
      .setTitle(`Oynatma Listesi:`)
      .setDescription(`**${playlist.title}** İsimli şarkı oynatma listesine Eklendi.`)
      return message.channel.send(PlayingListAdd);
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(searchString, 10);
          var index = 0;
          const embed = new RichEmbed()
          .setColor("RANDOM")
          .setTitle(`___**Şarkı Seçimi**___`)
          .setDescription(`${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')} \n\n**Lütfen hangi şarkıyı seçmek istiyorsan \`1\` ile \`10\` arası bir sayı yaz.**`)
          .setFooter(`Şarkı seçimi "10" saniye içinde iptal edilecektir.`)
          message.channel.send({embed})
          try {
            var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
              maxMatches: 1,
              time: 10000,
              errors: ['time']
            });
          } catch (err) {
            console.error(err);
            const NoNumber = new RichEmbed()
            .setColor("RANDOM")
            .setTitle(`Hata`)
            .setDescription(`Hiç bir değer girilmedi şarkı seçimi iptal edildi.`) 
            return message.channel.send(NoNumber);
          }
          const videoIndex = parseInt(response.first().content);
          var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
        } catch (err) {
          console.error(err);
          const songNope = new RichEmbed()
          .setColor("RANDOM")
          .setTitle(`Hata`)
          .setDescription(`Aradığınız isimde bir şarkı bulamadım.`) 
          return message.channel.send(songNope);
        }
      }
      return handleVideo(video, message, voiceChannel);
    }
    break;
      case "geç":
      const err0 = new RichEmbed()
      .setColor("RANDOM")
      .setTitle(`Hata`)
      .setDescription(`Bir sesli kanalda değilsin.`) 
    if (!message.member.voiceChannel) return message.channel.send(err0);
    const err05 = new RichEmbed()
    .setColor("RANDOM")
    .setTitle(`Hata`)
    .setDescription(`Şuanda herhangi bir şarkı çalmıyor.`)
    if (!serverQueue) return message.channel.send(err05);
    const songSkip = new RichEmbed()
    .setColor("RANDOM")
    .setTitle(`Şarkı Geçildi`)
    .setDescription(`Şarkı başarıyla geçildi.`)
    serverQueue.connection.dispatcher.end('g');
    message.channel.send(songSkip)
    return undefined;
break;
      case "durdur":
    const err1 = new RichEmbed()
    .setColor("RANDOM")
    .setTitle(`Hata`)
    .setDescription(`Bir sesli kanalda değilsin.`)  
    if (!message.member.voiceChannel) return message.channel.send(err1);
    const err2 = new RichEmbed()
    .setColor("RANDOM")
    .setTitle(`Hata`)
    .setDescription(`Şuanda herhangi bir şarkı çalmıyor.`)
    if (!serverQueue) return message.channel.send(err2);
    serverQueue.songs = [];
    const songEnd = new RichEmbed()
    .setColor("RANDOM")
    .setTitle(`Şarkı Kapatıldı`)
    .setDescription(`Şarkı başarıyla durduruldu.`)
    serverQueue.connection.dispatcher.end('d');
    message.channel.send(songEnd)
    return undefined;
break;
      case "ses":
      const asd1 = new RichEmbed()
      .setColor("RANDOM")
      .setTitle(`Hata`)
      .setDescription(`Bir sesli kanalda değilsin.`)  
    if (!message.member.voiceChannel) return message.channel.send(asd1);
    const asd2 = new RichEmbed()
    .setColor("RANDOM")
    .setTitle(`Hata`)
    .setDescription(`Şuanda herhangi bir şarkı çalmıyor.`)
    if (!serverQueue) return message.channel.send(asd2);
    const volumeLevel = new RichEmbed()
    .setColor("RANDOM")
    .setTitle(`Ses Seviyesi`)
    .setDescription(`Şuanki Ses Seviyesi: **${serverQueue.volume}**`)
    if (!args[1]) return message.channel.send(volumeLevel);
    serverQueue.volume = args[1];
    if (args[1] > 15) return message.channel.send(`Ses seviyesi en fazla \`15\` olarak ayarlanabilir.`)
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
    const volumeLevelEdit = new RichEmbed()
    .setColor("RANDOM")
    .setTitle(`Ses Seviyesi`)
    .setDescription(`Ayarlanan Ses Seviyesi: **${args[1]}**`)
    return message.channel.send(volumeLevelEdit);
break;
      case "kuyruk":
      var siralama = 0;
    if (!serverQueue) return message.channel.send('Şuanda herhangi bir şarkı çalmıyor.');
    /*const songList10 = new RichEmbed()
    .setColor("RANDOM")
    .addField(`Şarkı Kuyruğu`, `${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}`)
    .addField(`Şuanda Oynatılan`, `${serverQueue.songs[0].title}`)
    return message.channel.send(songList10);*/
    return message.channel.send(stripIndents`
      \`\`\`xl
      ===========================================================================
      "» Şuanda Oynatılan «"
      ${serverQueue.songs[0].title}
      ===========================================================================
      "» Şarkı Kuyruğu «"
      ${serverQueue.songs.map(song => `${++siralama}) ${song.title}`).join('\n')}
      ===========================================================================
      \`\`\`
      `)
break;
case "duraklat":
      if (serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
        const asjdhsaasjdha = new RichEmbed()
    .setColor("RANDOM")
    .setTitle(`Şarkı Duraklatıldı`)
    .setDescription(`Şarkı başarıyla duraklatıldı.`)
      return message.channel.send(asjdhsaasjdha);
    }
    return message.channel.send('Şuanda herhangi bir şarkı çalmıyor.');
break;
      case "devamet":
      if (serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
        const asjdhsaasjdhaadssad = new RichEmbed()
    .setColor("RANDOM")
    .setTitle(`Şarkı Devam Ettiriliyor`)
    .setDescription(`Şarkı başarıyla devam ettiriliyor...`)
      return message.channel.send(asjdhsaasjdhaadssad);
    }
    return message.channel.send('Şuanda herhangi bir şarkı çalmıyor.');
  

  return undefined;
break;
}
async function handleVideo(video, message, voiceChannel, playlist = false) {
  var serverQueue = queue.get(message.guild.id);
  //console.log(video);
  var song = {
    id: video.id,
    title: video.title,
    url: `https://www.youtube.com/watch?v=${video.id}`,
    thumbnail: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
    requester: message.author.id,
  };
  if (!serverQueue) {
    var queueConstruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };
    queue.set(message.guild.id, queueConstruct);

    queueConstruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(message.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(`Ses kanalına giremedim HATA: ${error}`);
      queue.delete(message.guild.id);
      return message.channel.send(`Ses kanalına giremedim HATA: ${error}`);
    }
  } else {
    serverQueue.songs.push(song);
    //console.log(serverQueue.songs);
    if (playlist) return undefined;

    const songListBed = new RichEmbed()
    .setColor("RANDOM")
    .setTitle(`Kuyruğa Eklendi`)
    .setDescription(`**${song.title}** adlı şarkı kuyruğa eklendi.`)
    return message.channel.send(songListBed);
  }
  return undefined;
}
  function play(guild, song) {
  var serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
  //console.log(serverQueue.songs);

  const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
    .on('end', reason => {
      /*if (reason === 'İnternetten kaynaklı bir sorun yüzünden şarkılar kapatıldı.');
      else console.log(reason);*/
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on('error', error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  
  const playingBed = new RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Şarkı Oynatılıyor...`, `http://icons.iconarchive.com/icons/dakirby309/simply-styled/256/YouTube-icon.png`)
  .setDescription(`[${song.title}](${song.url})[<@${song.requester}>]`)
  serverQueue.textChannel.send(playingBed);
}
});

client.on('message', msg => {
  if (msg.author.bot) return;
  const reason = msg.content.split(" ").slice(1).join(" ");
  if (msg.channel.name== 'destek-kanalı') { 
    if (!msg.guild.roles.exists("name", "Destek Ekibi")) return msg.reply(`Bu sunucuda **Destek Ekibi** isminde bir rol bulamıyorum. \nDestek Sisteminin çalışabilmesi için **Destek Ekibi** isminde bir rol oluşturulmalı!`).then(m2 => {
            m2.delete(5000)});
      msg.guild.createChannel(`destek-${msg.author.id}`, "text").then(c => {
      let role = msg.guild.roles.find("name", "Destek Ekibi");
      let role2 = msg.guild.roles.find("name", "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(msg.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });

      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`${client.user.username} | Destek Sistemi`)
      .addField(`Merhaba ${msg.author.username}!`, `Yetkililer burada seninle ilgilenecektir. \nDestek talebini kapatmak için \`${ayarlar.prefix}kapat\` yazabilirsin.`)
      .addField(`» Talep Konusu/Sebebi:`, `${msg.content}`, true)
      .addField(`» Kullanıcı:`, `<@${msg.author.id}>`, true)
      .setFooter(`${client.user.username} | Destek Sistemi`)
      .setTimestamp()
      c.send({ embed: embed })
      c.send(`<@${msg.author.id}> Adlı kullanıcı "\`${msg.content}\`" sebebi ile destek talebi açtı! Lütfen Destek Ekibini bekle, @here`)
      msg.delete()
      }).catch(console.error);
    }
  });
  
client.on('message', message => {
if (message.content.toLowerCase().startsWith(prefix + `kapat`)) {
  if (!message.channel.name.startsWith(`destek-`)) return message.channel.send(`Bu komut sadece Destek Talebi kanallarında kullanılabilir.`);

  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Destek Talebi Kapatma İşlemi`)
  .setDescription(`Destek talebini kapatmayı onaylamak için, \n10 saniye içinde \`evet\` yazınız.`)
  .setFooter(`${client.user.username} | Destek Sistemi`)
  .setTimestamp()
  message.channel.send({embed})
  .then((m) => {
    message.channel.awaitMessages(response => response.content === 'evet', {
      max: 1,
      time: 10000,
      errors: ['time'],
    })
    .then((collected) => {
        message.channel.delete();
      })
      .catch(() => {
        m.edit('Destek talebi kapatma isteği zaman aşımına uğradı.').then(m2 => {
            m2.delete();
        }, 3000);
      });
  });
  }
})

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${chalk.red(files.length)} ${chalk.green("komut yüklenecek.")}`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`${chalk.green("Yüklenen komut:")} ${chalk.blue(props.help.name)}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.TOKEN);

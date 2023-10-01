let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = './Guru.jpg'
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let lkr = `❀🎌° ┄──•Æ86•───╮
      🎌𝗙𝗨𝗝𝗜𝗪𝗔𝗥𝗔 𝐁𝐎𝐓 𝙈𝙀𝙉𝙐🎌  
╰───•Æ86•──┄ °🎌❀    
bot created by ㊗Mirai Fox㊗
┌─⊷ *㊗Æ86㊗*
▢🎌 .blocklist
▢🎌 .info
▢🎌 .owner
▢🎌 .donate
▢🎌 .listprem
▢🎌 .help
▢🎌 .audios
▢🎌 .ping
▢🎌 .runtime
㊗└───────────㊗

┌─⊷ *㊗GAMES㊗*
▢🎌 .dado
▢🎌 .delttt
▢🎌 .Math <mode>
▢🎌 .ppt <stone/paper/scissors>
▢🎌 .slot <gamble>
▢🎌 .tictactoe <tag Someone>
└───────────

┌─⊷ *㊗LEVELS AND ECO㊗*
▢🎌 .adddi <@user>
▢🎌 .addxp <@user>
▢🎌 .balance
▢🎌 .daily
▢🎌 .leaderboard
▢🎌 .levelup
▢🎌 .mine
▢🎌 .rob
▢🎌 .buy
▢🎌 .buyall
▢🎌 .transfer [tip] [amount] [@tag]
▢🎌 .work
㊗└───────────㊗

┌─⊷ *㊗REGISTER㊗*
▢🎌 .reg <name.age>
▢🎌 .mysn
▢🎌 .unreg <Num Serie
㊗└──────────㊗

┌─⊷ *㊗STICKER㊗*
▢🎌 .attp <text>
▢🎌 .emojimix <emoji+emoji> (ⓓ)
▢🎌 .getsticker (ⓓ)
▢🎌 .smaker (ⓓ)
▢🎌 .sticker
▢🎌 .toimg <sticker>
▢🎌 .tovid
▢🎌 .trigger <@user>
▢🎌 .ttp <text>
▢🎌 .take <name>|<author>
㊗└───────────㊗

┌─⊷ *㊗IMAGE㊗*
▢🎌 .tvid (ⓓ)
▢🎌 .imagen (ⓓ)
▢🎌 .girl (ⓓ)
▢🎌 .meme (ⓓ)
▢🎌 .pinterest
▢🎌 .wallpaper (ⓓ)
㊗└───────────㊗

┌─⊷ *㊗MAKER㊗*
▢🎌 .logololi (ⓓ)
▢🎌 .neon (ⓓ)
▢🎌 .devil (ⓓ)
▢🎌 .wolf (ⓓ)
▢🎌 .phlogo (ⓓ)
㊗└───────────㊗

┌─⊷ *㊗PREMIUM㊗*
▢🎌 .gdrive (ⓓ) (Ⓟ)
▢🎌 .mediafire <url> (ⓓ)
▢🎌 .xvid (ⓓ) (Ⓟ)
▢🎌 .xnxx (ⓓ) (Ⓟ)
㊗└───────────㊗

┌─⊷ *㊗GROUP*
▢🎌 .add
▢🎌 .delete
▢🎌 .delwarn @user
▢🎌 .demote (@tag)
▢🎌 .infogp
▢🎌 .hidetag
▢🎌 .invite <917xxx>
▢🎌 .kick @user
▢🎌 .link
▢🎌 .poll <Guru|piro|xd>
▢🎌 .perfil
▢🎌 .promote
▢🎌 .resetlink
▢🎌 .setbye <text>
▢🎌 .group *open/close*
▢🎌 .setwelcome <text>
▢🎌 .simulate <event> @user
▢🎌 .staff
▢🎌 .tagall
▢🎌 .totag
▢🎌 .warn @user
▢🎌 .warns
▢🎌 .checkexpired
㊗└───────────㊗

┌─⊷ *㊗EN/DISABLE OPTIONS㊗*
▢🎌 .enable <option>
▢🎌 .disable <option>
└───────────

┌─⊷ *㊗ANIME㊗*
▢🎌 .waifu (ⓓ)
▢🎌 .neko (ⓓ)
▢🎌 .megumin (ⓓ)
▢🎌 .loli (ⓓ)
㊗└───────────㊗

┌─⊷ *㊗ANIME REACTIONS㊗*
▢🎌 .kill @tag (ⓓ)
▢🎌 .kiss @tag (ⓓ)
▢🎌 .pat @tag (ⓓ)
▢🎌 .slap @tag (ⓓ)
㊗└───────────㊗

┌─⊷ ㊗*DOWNLOADERS㊗*
▢🎌 .facebook <url> (ⓓ)
▢🎌 .gdrive (ⓓ) (Ⓟ)
▢🎌 .gitclone <url> (ⓓ)
▢🎌 .igstalk
▢🎌 .instagram <link ig> (ⓓ)
▢🎌 .mediafire <url> (ⓓ)
▢🎌 .play
▢🎌 .play2
▢🎌 .tiktok (ⓓ)
▢🎌 .tiktokstalk
▢🎌 .twitter <url> (ⓓ)
▢🎌 .ytmp3 <url> (ⓓ)
▢🎌 .ytsearch
▢🎌 .ytmp4 <link yt> (ⓓ)
㊗└───────────㊗

┌─⊷ *㊗TOOLS㊗*
▢🎌 .cal <equation>
▢🎌 .google (ⓓ)
▢🎌 .lyrics
▢🎌 .readmore <text1>|<text2>
▢🎌 .ssweb <url> (ⓓ)
▢🎌 .tourl
▢🎌 .trad <leng> <text>
▢🎌 .tts <lang> <teXTSs>
▢🎌 .wikipedia
㊗└───────────㊗

┌─⊷ *㊗FUN㊗*
▢🎌 .afk <razon>
▢🎌 .tomp3
▢🎌 .toav
▢🎌 .gay @user
▢🎌 .pregunta
▢🎌 .bot
㊗└───────────㊗

┌─⊷ *㊗DATABASE㊗*
▢🎌 .listcmd
▢🎌 .setcmd <txt>
㊗└───────────㊗

┌─⊷ *㊗NSFW +18㊗*
▢🎌 .xwaifu (ⓓ)
▢🎌 .xneko (ⓓ)
▢🎌 .blowjob (ⓓ)
▢🎌 .ass (ⓓ)
▢🎌 .boobs (ⓓ)
▢🎌 .lesbian (ⓓ)
▢🎌 .pussy (ⓓ)
▢🎌 .pack (ⓓ)
▢🎌 .chut (ⓓ)
▢🎌 .gand (ⓓ)
㊗└───────────㊗

┌─⊷ *㊗OWNER㊗*
▢🎌 .expired <days>
▢🎌 .addprem <@tag>
▢🎌 .banchat
▢🎌 .listban
▢🎌 .ban @user
▢🎌 .tx
▢🎌 .cleartmp
▢🎌 .delexpired
▢🎌 .delprem @user
▢🎌 .getplugin <name file>
▢🎌 .getfile <name file>
▢🎌 .join <chat.whatsapp.com> <dias>
▢🎌 .reset <54xxx>
▢🎌 .restart
▢🎌 .unbanchat
▢🎌 .unban @user
▢🎌 .update
㊗└───────────㊗

┌─⊷ *㊗ADVANCED㊗*
▢🎌 >
▢🎌 =>
▢🎌 $
㊗└───────────㊗  
  🎌Mirai fox🎌 
㊗Initial•D•First•Stage㊗`
conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })
m.react(done)
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['list', 'all menu'] 

export default handler

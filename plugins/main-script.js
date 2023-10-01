import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`

*FUJIWARA bot God v2.0 WHATSAPP USER BOT 💃🏻♥️*

FUNIWARA Is a Multi device Whatsapp User Bot created By kinflux digital, , _
ᴘʟᴇᴀꜱᴇ ꜱᴛᴀʀ ᴛʜᴇ ʀᴇᴘᴏ ᴀɴᴅ ꜰᴏʟʟᴏᴡ ᴍᴇ ᴏɴ ɢɪᴛʜᴜʙ:

  ▢ Git : ${_package.homepage}


⭐ Total Stars: *6*
🍽️ Forks: *100*
💭 language : *JavaScript* 
⚖️ license : *MIT License* 
⚙️ Branch : *main*
🧰 Last Updated :2023-08-29T05:10:54Z 
🚁 owner number : https://wa.me/918618971837
                : https://wa.me/6797309646
 🎌 bot group https://chat.whatsapp.com/CVOvwAiCcXIDX7jQrn5whC
              
      
*👸Thanks for using Fujiwara bot*

*® mirai fox*
*© 2023 mirai fox*

`.trim())
    
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['sc', 'git', 'script'] 

export default handler

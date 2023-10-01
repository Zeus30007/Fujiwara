import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Asia/Kolkata').format('HH')
let wib = moment.tz('Asia/Kolkata').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = './kinfluxbot.jpg'
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let totaluser = Object.values(global.db.data.users).length 
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let greeting = ucapan()
let quote = quotes[Math.floor(Math.random() * quotes.length)];

let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
🎌 *_you leveled up ${name}, ${greeting}! We're going on a pro racer!_* 🎌

🎌 *_Quote of the day: ${quote}_* 🎌

┏─────────────────⬣
┆ 𝑯𝒂𝒊, ${name}  
┗┬──────────────┈ ⳹
┏┤ 🎌Bot Info  
┆┗──────────────┈ ⳹
┆🎌 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botname}
┆🎌 𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : ${author}
┆🎌 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 𝗡𝗮𝗺𝗲 : Mirai fox
┆🎌 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 :linux 
┆🎌 *Uptime* : ${uptime}
┆🎌 *Experience:* ${exp}
┆🎌 *Rank:* ${role}
┆🎌 *Diamonds:* ${diamond}
┆🎌 *Total users:* ${rtotalreg}
┗┬──────────────┈ ⳹
┏┤   🎌User Info
┆┗──────────────┈ ⳹ 
┆🎌 𝗡𝗮𝗺𝗲 :${name}
│🎌 𝗡𝘂𝗺𝗯𝗲𝗿 : ${taguser}
│🎌 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 : ${user.premium = 'true' ? '✅' : '❌'}
┗┬──────────────┈ ⳹
┏┤ 🎌Calender
┆┗──────────────┈ ⳹
┆🎌Time :${wib} 
┆🎌𝗗𝗮𝘁𝗲 :${date} 
┗─────────────────
 Æ86
┆──────────────┈ ⳹
┆type /list to
┆to see all cmd
💡 *_Remember, when in doubt, use ${usedPrefix}list or ${usedPrefix}help2. It's like my magic spell book!_* 💡
`


    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, null, rpyt)
    m.react(done)

}
handler.help = ['main']
handler.tags = ['group']
handler.command = ['menu', 'help','h','command'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
    
    function ucapan() {
      const time = moment.tz('Asia/Kolkata').format('HH')
      let res = "happy early in the day☀️"
      if (time >= 4) {
        res = "Good Morning 🌄"
      }
      if (time >= 10) {
        res = "Good Afternoon ☀️"
      }
      if (time >= 15) {
        res = "Good Afternoon 🌇"
      }
      if (time >= 18) {
        res = "Good Night 🌙"
      }
      return res
    }
    const quotes = [
1. "I'm not lazy; I'm just cruising in energy-saving mode."
2. "Life's a short race; keep smiling while you've still got teeth."
3. "I may be a wild influence, but boy, am I a thrilling drift!"
4. "I'm on a whiskey speedway; lost three days already."
5. "Why don't some couples hit the touge? Some relationships just don't have the horsepower."
6. "Told my partner to embrace their mistakes; they hugged it out on the hairpin."
7. "I'm a pro at multitasking: wasting time, being unproductive, and procrastinating, all in one drift."
8. "When you bend to tie your shoelaces and wonder what else you could do down there, you know you're getting old on the circuit."
9. "I'm so good at racing; I can do it with my eyes closed."
10. "If you think nobody cares if you're in the race, try missing a couple of laps."
11. "I used to think I was indecisive, but now I'm not so sure about it."
12. "If you can't overtake them, make the track so confusing they lose their way in the corners."
13. "Told my partner her eyebrows were too high; she looked surprised on the straightaway."
14. "I'm not clumsy; I'm just on a mission to test the limits of gravity on the racetrack."
15. "Told my partner to do more push-ups; she said she could do a hundred! So, I counted to ten and hit the brakes."
16. "Life is like a fast car; it doesn't last long when you're hungry for the win."
17. "I'm not saying I'm Takumi Fujiwara; I'm just saying no one's seen me and Takumi on the same touge."
18. "Why do they call it beauty sleep? You wake up looking like a race car in need of a pit stop."
19. "I don't always lose my phone, but when I do, it's always on silent in the pit lane."
20. "My bed is a pit stop where I suddenly remember everything I was supposed to do on the track."
21. "I love the sound of your silence, just like a race car engine at the starting line."
22. "I'm not arguing; I'm just explaining why I'm leading the pack."
23. "I'm not a complete rookie; some parts are just upgraded for maximum speed."
24. "When life hands you lemons, squirt someone in the eye with lemonade."
25. "I don't need anger management; you just need to stop getting in my way on the track."
26. "I'm not saying I'm Takumi Fujiwara; I'm just saying no one's seen me and Takumi racing side by side."
27. "I'm not saying I'm Ryosuke Takahashi; I'm just saying no one's seen me and Ryosuke blazing through the circuit together."
28. "I'm not saying I'm Keisuke Takahashi; I'm just saying no one's seen me and Keisuke navigating the racetrack in tandem."
29. "I'm not saying I'm a racing legend; I'm just saying no one's seen me and a legend dueling for the championship."

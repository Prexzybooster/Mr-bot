/*####################################
                 F E N I X - V 15
             MADE BY F E N I X ID SERVER
       
✅ WhatsApp: wa.me/94773010580
👥 Github: https://github.com/Fenix-server
👥 Github: https://github.com/Botdevillozan
🤖 Youtube https://youtube.com/@fenix_programmer
#####################################*/


const fs = require('fs')
const chalk = require('chalk')

global.ownernomer = "2349159895444"
global.ownername = "PRECIOUS"
global.ytname = "YT: Fenix_Programmer "
global.socialm = "GitHub: Fenix-server"
global.location = "Osogbo, Nigeria, Nigeria"

global.ownernumber = '2349159895444'  //creator number
global.ownername = 'PRECIOUS' //owner name
global.botname = 'PRECIOUS ID V17' //name of the bot

global.packname = 'V17'
global.author = 'ꜰᴇɴɪx ɪᴅ ꜱᴇʀᴠᴇʀ : 🌍'

global.themeemoji = '🪀'
global.wm = "Its Fuck.inc."

global.link = 'https://whatsapp.com/channel/0029VaaUfPO8qIzztuf42D04'


global.prefa = ['','!','.','#','&']

global.autoRecording = false 
global.autoTyping = false 
global.autorecordtype = true
global.autoread = false 
global.autobio = false 
global.anti92 = false 
global.autoswview = true

global.typemenu = 'v2'

global.mess = {
    done: 'ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟ…!',
    prem: 'ᴀᴄᴄᴇꜱꜱ ᴅɪɴᴇᴅ ɪꜱ ᴘʀᴇᴍɪᴜᴍ',
    admin: 'ᴀᴄᴄᴇꜱꜱ ᴅɪɴᴇᴅ ɪꜱ ᴀᴅᴍɪɴ…!',
    botAdmin: 'ᴀᴄᴄᴇꜱꜱ ᴅɪɴᴇᴅ ɪꜱ ᴍʏ ᴏᴡɴᴇʀ…!',
    owner: 'ᴀᴄᴄᴇꜱꜱ ᴅɪɴᴇᴅ ɪꜱ ᴍʏ ᴏᴡɴᴇʀ…!',
    group: 'ᴀᴄᴄᴇꜱꜱ ᴅɪɴᴇᴅ ɪꜱ ɢʀᴏᴜᴘ…!',
    private: 'ᴀᴄᴄᴇꜱꜱ ᴅɪɴᴇᴅ ɪꜱ ᴘʀɪᴠᴀᴛᴇ…!',
    wait: 'ᴀᴄᴄᴇꜱꜱ ᴠᴇʀɪꜰʏᴇᴅ ᴡᴀɪᴛ… ',    
    error: 'ʏᴇʜ ɪ ɢᴇᴛ ᴇʀʀᴏʀ',
}

global.thumb = fs.readFileSync('https://telegra.ph/file/c3367b00001035677cc6b.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})

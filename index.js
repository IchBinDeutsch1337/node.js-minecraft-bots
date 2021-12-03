const mineflayer = require('mineflayer');
let interdal;
let bot;
let name;
let i = 0;

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

interdal = setInterval(()=>{
    i++;
    if(i > 200) return;
    name = makeid(8);
    bot = mineflayer.createBot({
        host: process.env.ip,
        port: 25565,
        username: name,
        version: "1.8.8",
    })
    bot.once('spawn', () => {
        bot.chat('/register bruh123! bruh123!')
    })
},2000)
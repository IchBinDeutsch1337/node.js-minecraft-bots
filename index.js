const mineflayer = require('mineflayer');
let makeBots;
let tick;
var bot = [];
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

makeBots = setInterval(()=>{
    i++;
    if(i > process.env.limit) return;
    name = "tacobell" + makeid(5);
    bot[i] = mineflayer.createBot({
        host: process.env.ip,
        port: 25565,
        username: name,
        version: "1.8.8",
    })
},500)

tick = setInterval(()=>{
    for (let index = 1; index < bot.length; ++index) {
        if(name != "undefined") {
            bot[index].on('spawn', () => {
                console.log(name)
                bot[index].chat('/register balls123! balls123!')
            })
        }
    }
},1500)

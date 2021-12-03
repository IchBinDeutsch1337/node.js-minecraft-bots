const mineflayer = require('mineflayer');
let interdal;
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

interdal = setInterval(()=>{
    i++;
    if(i > 200) return;
    name = makeid(15);
    bot[name] = mineflayer.createBot({
        host: process.env.ip,
        port: 25565,
        username: name,
        version: "1.8.8",
    })
    console.log(name,"is logging in");
},500)

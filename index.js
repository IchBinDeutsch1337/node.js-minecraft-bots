const mineflayer = require('mineflayer');
var AutoAuth = require('mineflayer-auto-auth')
let makeBots;
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
    if(i < process.env.limit) {
        i++;
        name = "gerogefloyd" + makeid(5);
        mineflayer.createBot({
            plugins: [AutoAuth],
            AutoAuth: {
                logging: true,
                password: 'password',
                ignoreRepeat: true
            },
            host: process.env.ip,
            port: 25565,
            username: name,
            version: "1.8.8",
        });
    }
},500)

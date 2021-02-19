const Discord = require('discord.js'); 

const bot = new Discord.Client();
let config = require('./botconfig.json')
let token = config.token;
let prefix = config.prefix;

bot.on('ready', () => { 
    console.log(`ready to work ${bot.user.username}`);
    bot.generateInvite(["ADMINISTRATOR"]).then(link => { 
        console.log(link);
    });
});

bot.on('message', msg => {
    if (msg.content === 'checkSite'){               
    const request = require('request')

function getStatus() {
    request('http://api.handwriter.ru/verify', function(error, response, body) {

        result = response.statusCode;

        if(!error && response.statusCode == 200) {
            msg.reply('The Site Is Up');
            console.log(result);
        } else {
            msg.reply('The Site Is Down');
        }
    });
}}});
bot.login(token);
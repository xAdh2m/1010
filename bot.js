const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**Welcome to NewEra**
https://discord.gg/Th8YJcu                            
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
Welcome to NewEra
https://discord.gg/Th8YJcu                          
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
    }
});

client.login(process.env.BOT_TOKEN);

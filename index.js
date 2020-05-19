const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
let rawdata = fs.readFileSync('contests.json');
let users = JSON.parse(rawdata);
const {
    token, channel, role
} = require('./config.json');
//Nur fuer Bot test da
client.on("message", message => {
    if(message.author.id === '232186922812833792') {
        if(message.content.startsWith('-S')) {
            message.delete()
            .then(client.destroy());
        }
    }
});
//Startup log
client.on("ready", () => {
    console.log('Logged in as '+ client.user.tag);
});
//Check ob und wie weit man beim Contest ist
client.step = require('./contests.json');
client.on("message", message => {
    if(message.author.bot) return;
        if(message.channel.name === channel) {
            client.step[id];
            if(message.member.roles.cache.find(r => r.name === role)) {
                var id = message.author.id;
                if(!client.step[id]) {
                    client.step[id] = {
                        step: '0',
                        part: 'false'
                    }
                    fs.writeFile("./contests.json", JSON.stringify (client.step, null, 4), err => {
                        if(err) throw err;
                    });
                    message.delete();
                    return;
                } 
                let _msg = client.step[id].step;
                let _con = client.step[id].part;
                if(!_msg) {
                    client.step[id] = {
                        step: '0',
                        part: 'false'
                    }
                    fs.writeFile("./contests.json", JSON.stringify (client.step, null, 4), err => {
                        if(err) throw err;
                    });
                    message.delete();
                    return;
                }
                if(!_con) {
                    client.step[id] = {
                        step: '0',
                        part: 'false'
                    }
                    fs.writeFile("./contests.json", JSON.stringify (client.step, null, 4), err => {
                        if(err) throw err;
                    });
                    message.delete();
                    return;
                }
                    if(_msg === '0') { 
                        if(_con === 'false') {
                        if(message.attachments.size > 0) {
                            if(message.attachments.size = 0) return;
                            if (message.attachments.every(attachIsImage)){
                                client.step[id] = {
                                    step: '1',
                                    part: 'false'
                                }
                                fs.writeFile("./contests.json", JSON.stringify (client.step, null, 4), err => {
                                    if(err) throw err;
                                });
                                message.author.send('Please continue to send 2 Images and 2 text to enter the contest');
                            }
                        
                    } else {
                        message.author.send('Please send 3 Images and 2 texts to enter the contest')
                        .then (message.delete());
                    }
                } else {
                    message.author.send('You have already entered the giveaway.');
                    message.delete();
                }
            } if(_msg === '1') {
                if(_con === 'false') {
                if(message.attachments.size > 0) {
                    if (message.attachments.every(attachIsImage)){
                        client.step[id] = {
                            step: '2',
                            part: 'false'
                        }
                        fs.writeFile("./contests.json", JSON.stringify (client.step, null, 4), err => {
                            if(err) throw err;
                        });
                        message.author.send('Please continue to send 1 Image and 1 text to enter the contest');   
                    }
            } else {
                message.author.send('Please send 3 Images and 2 texts to enter the contest')
                .then (message.delete());
            }
        } else {
            message.author.send('You have already entered the giveaway.');
            message.delete();
        }
    } if(_msg === '2') {
        if(_con === 'false') {
        if(message.attachments.size > 0) {
            if (message.attachments.every(attachIsImage)){
                client.step[id] = {
                    step: '3',
                    part: 'false'
                }
                fs.writeFile("./contests.json", JSON.stringify (client.step, null, 4), err => {
                    if(err) throw err;
                });
                message.author.send('Please continue to send 2 texts to enter the contest');
            }
    } else {
        message.author.send('Please send 3 Images and 2 texts to enter the contest')
        .then (message.delete());;
        
    }
} else {
    message.author.send('You have already entered the giveaway.');
    message.delete();
}
}   if(_msg === '3') {
    if(_con === 'false') {
    if (message.attachments.size > 0) {
        if (message.attachments.every(attachIsImage)){
            message.author.send('Please continue to send 2 texts to enter the contest');
            message.delete();
            return;
        }
    }
            client.step[id] = {
                step: '4',
                part: 'false'
            }
            fs.writeFile("./contests.json", JSON.stringify (client.step, null, 4), err => {
                if(err) throw err;
            });
            message.author.send('Please continue to send a text to enter the contest');
            
            //message.channel.overwritePermissions(message.author, {SEND_MESSAGES: false});
        } else {
            message.author.send('You have already entered the giveaway.');
            message.delete();
        }
}if(_msg === '4') {
    if(_con === 'false') {
    if (message.attachments.size > 0) {
        if (message.attachments.every(attachIsImage)){
            message.author.send('Please continue to send 2 texts to enter the contest');
            message.delete();
            return;
        }
    }
            client.step[id] = {
                step: '5',
                part: 'true'
            }
            fs.writeFile("./contests.json", JSON.stringify (client.step, null, 4), err => {
                if(err) throw err;
            });
            message.author.send('You are now participating in the contest, good luck!');
            message.member.roles.remove(message.member.roles.cache.find(r => r.name === role));
            // message.channel.overwritePermissions({permissionOverwrites:[{
            //     id: message.author.id,
            //     deny: ['ADD_REACTIONS', 'SEND_MESSAGES'],
            // }]});
        } else {
            message.author.send('You have already entered the giveaway.');
            message.delete();
        }
}
        } else {
            message.delete();
            message.author.send('You need the contest role to enter the contest!');
            
        }
    }
    if(message.channel.name === channel) {
        client.step[id];
        let _con = client.step[id].part;
        if(_con === 'true') {
            message.author.send('You have already entered the giveaway.');
            message.delete();
            return;
        }
    }
});
function attachIsImage(msgAttach) {
    var url = msgAttach.url;
    //True if this url is a png image.
    return url.indexOf("png", url.length - "png".length || "jpg", url.length - "jpg".length/*or 3*/ ) !== -1;
}
client.login(token);
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'VAJIRA-MD=DVFx0bzb#38b2L9k6grglvxxrF2B-suzVElo6PdnWjoRdW0aMX1M' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '7090462940' : process.env.OWNER_NUMBER,
N_JID: process.env.N_JID=== undefined ? '‌': process.env.N_JID,    
PREFIX: process.env.PREFIX || '!' ,
FOOTER: process.env.FOOTER=== undefined ? '‌👨‍💻 ᴊᴇꜰꜰ ᴘᴠᴛ ʙᴏᴛ 👨‍💻': process.env.FOOTER,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,   
MAX_SIZE: 500,
PAIR: 'https://vajiraqrveb-1d064bcd8502.herokuapp.com/code?number=',       
ALIVE:  process.env.ALIVE  || '> ᴊᴇꜰꜰ ᴘᴠᴛ ʙᴏᴛ'  ,    
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '7090462940' : process.env.DELETEMSGSENDTO        
};

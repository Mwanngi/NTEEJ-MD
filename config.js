//Nteej code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUtlSTNIc2l2YWwwN1ViQ0dRZDBuSjBFVmR1b0RYTnVjZllrNHhZaWdVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVhLZWFOSWtkaCtaQU9qNmJ6Y3NtRVRLOXl3V21TWDd6QkJNTzQwTWhrWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRVB4WkZtV1RWL2xpNUs4Y1VyZllNMXVUYktEbHEwb2JKNW9WZTZaWlhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTUtKRW1xNVpCV295SGZwVFFVMjFMSWdleGxUVk9mN3d3SXN3V3Z3UHdvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllEZEx2VDJ3NGRLbG55V3FFMmlSK2RJVGxTeHIvVXJBU3RaSEJXdEFoMVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRUaVMzSUJIYkc1VzVLbUJEREJ2MXJvUUVZZGRQZVd2RnF5RXRJcWNaRTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0FpZyswckhoZ0FXSFBZcGYrViszd0N1aENJRzdVTkhtUjFiendSY2dtYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1lpSWFNMHJvbXhaMEFBd2ZtTWFyclZpKzdUVlg4U3YvdGhLWkI4ZmJHbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJsNW9OdmU4ZUI1c1VST2R2bU9JeUYvR0p5cXVrM1dKenoxMmtQaXpnN0lhZkRVOWllVzkxdjNKYWRyUnVobVBnOGVzdG0yM3J3aUdrWXBOYmxkSkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI0LCJhZHZTZWNyZXRLZXkiOiJWWDB0R21CR3NOZTk2bmZodUIxSnEwM2wrKzNhWFVSNGtyUHF1SEZnNFpnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc4MTI2Mzc1M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzOTgxMDM5NTY0NUY4RDA2QkM1Rjc5MzNDNDZCN0EwQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNzU3NDA5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3ODEyNjM3NTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTVGMTY2M0JCNkU5Qjc2MEM1RkVEREIzN0MwNEU4QjEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjc1NzQwOX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSGlWV2lqZVpUNGFjQnZwMHRYb0plZyIsInBob25lSWQiOiJlYTFmNzFkYS02YmYyLTQyNjctOTMxMi02ODQ0NWVhMmY4NDciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWJwbmRCYUpNMHdlSTVObGVhdndLWEJUTXhrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxDT0hhSU50cmVMVks4bHFSbTA0TENwR09Oaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJTOUZUNE5XTiIsIm1lIjp7ImlkIjoiMjU0NzgxMjYzNzUzOjI4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1pc3RhaCBYLiBCb3QifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1B5VXd3UVFrZUs4dFFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkJvVndTbXY0SHRKek9Pd0xUVDV4ZEc5djJUYVRvS216c2NESmloQUZlakE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjAweG50anBLaGNGVkNwdXF5bjlzaWVnTHBVOHBKaCtHRUs5bkRVckM5SHR6R05nWjNtcm1scHAyekRQeEFudWlGS1FKOFEyT2JvTGhJb2haTzhEaEF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVOTBWRmR6dTZGbFRWN1VCa2dqQndQWHN5cGVESmh2bjZHMWlFQTR6ZVZ5UTE2ZG5qSGM2WE90aFlpd0pCZElKOVNJdVlsNjg1Mk56RFpQZmtnTjZEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc4MTI2Mzc1MzoyOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRYUZjRXByK0I3U2N6anNDMDArY1hSdmI5azJrNkNwczdIQXlZb1FCWG93In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNzU3NDA2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJpMSJ9";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "254781263753";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NTEEJ-MD`",
  author: process.env.PACK_AUTHER || "NTEEJ-MD",
  packname: process.env.PACK_NAME || "NTEEJ",
  botname: process.env.BOT_NAME || "NTEEJ-MD",
  ownername: process.env.OWNER_NAME || "ALVIN",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Ntee-j01/NTEEJ-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vae3GZF9Bb658QgSCl1I";
global.website = process.env.GURL || "https://chat.whatsapp.com/Er6RNNNVWV5LORN9Nr6hL7";
global.devs = "263714497545";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

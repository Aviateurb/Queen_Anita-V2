//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "242065069943";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://tenor.com/view/power-chainsawman-gif-25501450";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU8zNDc0MXMzUzJmcEN3UW5EY0ZlSHJuTDFzVktrZEUyb1NzcDZJVVcwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXB2MWtBbzMwZ00yWVFtbGJQYWo0blRpV3g5QW44aEZXaVJWZEVtbGhEUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRUNkV1FyRUJPR3hKU0ZXQjljWXpqdXhJWEdKaDc0TlBaTVhCZ3lMcTFzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIUkZWR05aMitGTEZtcEJlNDFRNGRMYlpUVDRYMG84U1pyM3VBeUV1N0hJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNDZDJ0ZTN1WHozTmVMM0pCMFh4VVRjQjVrbFBzZENwVmdKNnEzcnFvRjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilp4aWV1VmlDUzVPczNOVndtVlpqYkk4Z3NZZHRKRXlDZnpiQjc3MWw5aDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUVaUk9ENEpKVmgrN3NBdkU5ZVNWQ1RYRVhSSmRVS2lJYWdLT2lybE5HRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjNIb1BKdjNxZTE0YkZEZjZMRjJFQUpxczRFZk5lZyt1ZnZpU1lJNmpXVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktBZlN0RDRQR3pDTFA5UHE1dThPTWc5RlpSRVpkblVkdXhKYnRJUUVTS2xFZzVhTkYvRFEwYWVpcFVNWTVuYjlEM2JOYU15TjdVQVdXN25PQWFJc0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ2LCJhZHZTZWNyZXRLZXkiOiJzUFM3NmFQTUJRWG53QnltYjk5TUtGSHk5SkZkNnBSWjlXbVArS0ljZlBFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI0MjA2NTA2OTk0M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGQTQyMjRDNjU4REQxMDc5MjM5QTBCMTcxNUYxNjU0NCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNzExNjUwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKanY0ZzFSVVFWMkIwTl84MHdyeGh3IiwicGhvbmVJZCI6IjJjYTFmODY2LTM3MDgtNGNmZC04NDc2LTJlMTYwNGFjOGY2NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1bzVFZURzU3l4UUFrNUhlQ3NXNTcyWVZPS0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk5NMzRyVlE3T0VGdE94SVczRlV2dExYMEJFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdQSlZSSDgxIiwibWUiOnsiaWQiOiIyNDIwNjUwNjk5NDM6OUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUDZrK0pZSEVOSDh1YlVHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV3dtTkpUZ1Vhdzc5eU0yclQwUVdpK1ppU253Sk1ONG5jU1lNRVdTcGNWZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZG0vcnQwNmNGNGNrNk5kdDZ4dzhXaDYyYTJibG1KRk16MFg5bVBKQTNuTTd0NmNxbTJVcFdSN0VmL1NpVjB2M2NhTms4U1ArMzJ0U3JPaHJpWUZTQnc9PSIsImRldmljZVNpZ25hdHVyZSI6InNhMytleEJzbFd1SVZaekJrVTdoejY4em1UN1I1NUEzdXZVVUt1L0RaVTZ1eUU4SDZ2MDNHTC9tV0Y5S011ME1zejB4L1U2eDJ6SjVSdlA5K2F1WkRRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQyMDY1MDY5OTQzOjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVnNKalNVNEZHc08vY2pOcTA5RUZvdm1Za3A4Q1REZUozRW1EQkZrcVhGWSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjcxMTY0NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEdncifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ":",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "MURKY SHIGARAKI",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "MURKY SHIGARAKI",
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
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

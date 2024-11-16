const { PREFIX } = require("../../config");

module.exports = {
  name: "hide-tag",
  description: "Para mencionar a todos",
  commands: ["krampus-bot", "todos"],
  usage: `${PREFIX}hidetag motivo`,
  handle: async ({ fullArgs, sendText, socket, remoteJid, sendReact }) => {
    const { participants } = await socket.groupMetadata(remoteJid);

    const mentions = participants.map(({ id }) => id);

    await sendReact("📢");

    await sendText(`🦇 𝙷𝚎 𝚕𝚕𝚊𝚖𝚊𝚍𝚘 𝚊 𝚝𝚘𝚍𝚘𝚜!\n\n${fullArgs}`, mentions);
  },
};

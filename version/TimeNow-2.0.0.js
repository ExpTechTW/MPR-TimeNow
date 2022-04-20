'use strict'

const Plugin = {
    "name": "TimeNow",
    "version": "2.0.0",
    "depends": {
        "pluginLoader": "2.2.X"
    },
    "Events": ["messageCreate"],
    "Commands": [
        {
            "name": "$time now",
            "note": "查看現在時間"
        }
    ],
    "author": ["whes1015"],
    "link": "https://github.com/ExpTechTW/MPR-TimeNow",
    "resources": ["AGPL-3.0"],
    "description": "顯示現在時間"
}


const pluginLoader = require('../Core/pluginLoader')

async function messageCreate(client, message) {
    if (message.content == "$time now") {
        let now = new Date()
        let Now = now.getFullYear() +
            "/" + (now.getMonth() + 1) +
            "/" + now.getDate() +
            " " + now.getHours() +
            ":" + now.getMinutes() +
            ":" + now.getSeconds()
        message.reply(await pluginLoader.embed(Now, null, Plugin.author.toString().replaceAll(",", " "), "https://raw.githubusercontent.com/ExpTechTW/API/%E4%B8%BB%E8%A6%81%E7%9A%84-(main)/image/Icon/ExpTech.png"))
    }
}

module.exports = {
    Plugin,
    messageCreate
}

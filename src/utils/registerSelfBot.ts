import { Client } from "discord.js-selfbot-v13";
import isProduction from "./isProduction";

export default async () => {
    if (!isProduction()) {
        return;
    }
    const client: Client = new Client({ checkUpdate: false, autoRedeemNitro: true });
    client.on("ready", async () => {
        console.log(`${client.user?.username ?? "(Undefined)"} is ready`);
        client.user?.setAfk(true);
    });
    client.login("NDU0OTI3MDAwNDkwOTk5ODA5.G29GIS.ktIYvJ0kUPby_JzDfZlBQLX7JFJaYQ-mC4iK8A");
};

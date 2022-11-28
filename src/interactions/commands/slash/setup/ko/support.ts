import type { TextBasedChannel } from "discord.js";
import { ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";
import { ActionRow } from "structure/ActionRow";
import { SubCommand } from "structure/interaction/command/SubCommand";

export default new SubCommand({
    name: "support",
    execute(interaction) {
        interaction.deferReply().then(() => interaction.deleteReply());

        if (!interaction.channel) return;

        sendSupportInstruction(interaction.channel);
    },
});

const sendSupportInstruction = async (channel: TextBasedChannel) => {
    const embed = new EmbedBuilder()
        .setTitle("문의하기")
        .setDescription(`서버에 대한 문의사항/신고사항이 있으신가요?
밑의 버튼을 눌러 문의 카테고리를 선택해 주세요!`);
    const row = new ActionRow(
        new ButtonBuilder()
            .setCustomId("create_ticket_check")
            .setEmoji("🔍")
            .setLabel("문의하기")
            .setStyle(ButtonStyle.Primary),
    );

    await channel.send({ embeds: [ embed ], components: [ row ] });
};

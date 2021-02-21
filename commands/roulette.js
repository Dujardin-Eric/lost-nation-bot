module.exports = {
    name: 'roulette',
    description: 'Test Command.',
    execute(message) {

        const str = message.content
        const user = message.guild.members.random()

        message.channel.send(`La réponse à "*${str.substring(10)}*" est <@${user.id}> !`);
    }
};

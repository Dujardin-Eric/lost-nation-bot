/*
BOT DISCORD by Eric Dujardin
 */

const fs = require('fs');

const Discord = require('discord.js');

const { prefix, token } = require('./config.json');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

bot.once('ready', () => {
    console.log('Ready!')
});

bot.on('ready', function() {
    bot.user.setActivity("Canal +", {type: "WATCHING"}).
    catch(console.error)
});

bot.on('guildMemberAdd', member => {

    console.log("Un nouveau membre est arrivé")

    member.roles.add("528689152560988161").then(mbr => {
        console.log("Rôle attribue avec succès à " + mbr.displayName)
    }).catch(() => {
        console.log("Le rôle n'a pu être assigné")
    });

    member.createDM().then(function (channel) {
        return channel.send("Bienvenue sur le Discord Lost Nation **" + member.displayName + "** n'oublie pas de mentionner en note perso le nom de ton parrain")
    }).catch(console.error)

});

bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        if (!bot.commands.has(command)) return;

        try {
            bot.commands.get(command).execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply("Une erreur s'est produite pendant l'exécution de la commande !");
        }
});

bot.login(process.env.TOKEN);

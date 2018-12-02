const Discord = require('discord.js'); //permet l'utilisation de ce fichier par discord


var bot = new Discord.Client();
var test = (" with SWAT");
var prefix = ("!");
let niveau;


bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'SCUM' + test, type: 0}}); //permet de dire que le robot joue à "  "
    console.log("Bot du SWAT prêt!");
});

bot.login('NTE4NDY4NzE5ODk5MzEyMTI4.DuRPQg.RAC8KYRBMEz3Tum1C5B3IhRJr-c'); //copier/coller le token

bot.on('message', message => {

    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");
    
        if(message.channel.name === "journal-du-swat"){

            if(message.content === prefix + 'niveau 0'){
                niveau = 0;
                message.channel.send('Le Niveau Vigipirate est passé au Niveau 0');
                console.log('Niveau ' + niveau);
            };
            if(message.content === prefix + 'niveau 1'){
                niveau = 1;
                message.channel.send('Le Niveau Vigipirate est passé au Niveau 1');
                console.log('Niveau ' + niveau);
            };
            if(message.content === prefix + 'niveau 2'){
                niveau = 2;
                message.channel.send('Le Niveau Vigipirate est passé au Niveau 2');
                console.log('Niveau ' + niveau);
            };
            if(message.content === prefix + 'niveau 3'){
                niveau = 3;
                message.channel.send('Le Niveau Vigipirate est passé au Niveau 3');
                console.log('Niveau ' + niveau);
            };   
        }

    switch (args[0].toLowerCase()){
        
        case "vigi":    
        
            if(niveau === 0){
                var niv0_embed = new Discord.RichEmbed()
                    .setColor('#FFFFFF')
                    .setTitle(`Niveau 0`) 
                    .setDescription("Le Niveau Vigipirate est de Niveau 0") 
                    .addField("Description du Niveau 0", `Absence de Menace: Le SWAT procède à des contrôles faibles, ils ont une tenue standard et les armes sont rangées.`) 
                message.channel.send({embed: niv0_embed});
                console.log('vigi ' + niveau);
            }else if(niveau === 1){
                var niv1_embed = new Discord.RichEmbed()
                    .setColor('#FFFE00')
                    .setTitle(`Niveau 1`) 
                    .setDescription("Le Niveau Vigipirate est de Niveau 1") 
                    .addField("Description du Niveau 1", `Menace faible: Le SWAT procède à des contrôles normaux, ils ont une tenue standard et les armes sont rangées.`) 
                message.channel.send({embed: niv1_embed});
                console.log('Vigi ' + niveau);
            }else if(niveau === 2){
                var niv2_embed = new Discord.RichEmbed()
                    .setColor('#FE8800')
                    .setTitle(`Niveau 2`) 
                    .setDescription("Le Niveau Vigipirate est de Niveau 2") 
                    .addField("Description du Niveau 3", `Menace potentielle: Le SWAT procède à des contrôles systématiques, ils ont une tenue d'intervention et les armes sont à la main.`) 
                message.channel.send({embed: niv2_embed});               
                console.log('Vigi ' + niveau);
            }else if(niveau === 3){
                var niv3_embed = new Discord.RichEmbed()
                    .setColor('#FF0000')
                    .setTitle(`Niveau 3`) 
                    .setDescription("Le Niveau Vigipirate est de Niveau 3") 
                    .addField("Description du Niveau 3", `Menace réelle: Le SWAT procède à des contrôles systématiques, ils ont une tenue d'intervention et les armes sont "en joue".`) 
                message.channel.send({embed: niv3_embed});
                console.log('Vigi ' + niveau); 
            }; 
        break;
    }
}); 

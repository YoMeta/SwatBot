const Discord = require('discord.js'); //permet l'utilisation de ce fichier par discord


var bot = new Discord.Client();
var test = (" with SWAT");
var prefix = ("!");
let niveau = 0;


bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'SCUM [!help]', type: 0}}); //permet de dire que le robot joue à "  "
    console.log("Bot du SWAT prêt!");
});

bot.login(process.env.TOKEN); //copier/coller le token

bot.on('message', message => {

    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");
    var msgauthor = message.author.username.toString();
    
    if (message.content === prefix + "help"){
        var help1_embed = new Discord.RichEmbed()
            .setColor('#FF6E0A')
            .setTitle(`Liste des Commandes du Bot`) //autre possibilité pour le titre
            .addField("Liens Utiles:", `- !forum : Permet d'afficher le lien du forum. \n- !map : Permet d'afficher le lien de la ScumMap. \n- !don : Permet d'afficher le lien de la Cagnotte du serveur. \n- !top : Permet d'afficher le lien du Top Serveur. \n- !monnaie : Permet d'afficher le lien vers la Valeur Monétaire.`)
            .addField('VigiPirate', `- !vigi : Permet d'afficher le niveau de VigiPirate dans la Capitale.`)
            .addField('Au cas où...', '- !lapin : Si jamais il vous embête trop...')
            console.log(`Commande Help Demandée`);
        message.channel.send(help1_embed);
    }
    if (message.content === prefix + "forum"){
        var forum_embed = new Discord.RichEmbed()
            .setColor('#00B6E5')
            .setTitle(`Forum des Cons-Damnés`)
            .setDescription("https://lescondamnes.fr/index.php")
        message.channel.send(forum_embed);
        console.log("Commande Forum demandée");
    }
    if (message.content === prefix + "map"){
        var map_embed = new Discord.RichEmbed()
            .setColor('#F31A68')
            .setTitle(`Map Interactive (mais pas des Cons-Damnés)`)
            .setDescription("https://maps.devzupa.be/en/scum/86/scumisland/#3/-1721.00/1174.00")
        message.channel.send(map_embed);
        console.log("Commande Map demandée");
    }
    if (message.content === prefix + "don"){
        var don_embed = new Discord.RichEmbed()
            .setColor('#006AD7')
            .setTitle(`Cagnotte des Cons-Damnés`)
            .setDescription("https://www.paypal.com/pools/c/89ScNuC7i4")
        message.channel.send(don_embed);
        console.log("Commande Don demandée");
    }
    if (message.content === prefix + "top"){
        var top_embed = new Discord.RichEmbed()
            .setColor('#CEB60B')
            .setTitle(`Top Serveur des Cons-Damnés`)
            .setDescription("https://scum.top-serveurs.net/fr-18-les-con-damnes-zones-de-pvp-d1-d2-d3-d4-discord-httpsdiscordggn6ssg7w")
        message.channel.send(top_embed);
        console.log("Commande top demandée");
    }
    if (message.content === prefix + "monnaie"){
        var mon_embed = new Discord.RichEmbed()
            .setColor('#1C9619')
            .setTitle(`Monnaie des Cons-Damnés`)
            .setDescription("https://lescondamnes.fr/index.php?threads/valeur-mon%C3%A9taire.50/")
        message.channel.send(mon_embed);
        console.log("Commande monnaie demandée");
    }
    if (message.content === prefix + "tg"){
        message.channel.send(`Toi tu fermes ta gueule, Connard. Tu laisses mon ${msgauthor} tranquille!`);
        console.log("tg");
    }
    if (message.content === prefix + "lapin"){
        random(); //déclence la fonction Random
        if (randnum == 1){
            message.channel.send(`Lapin, de la part de ${msgauthor}, tu es un gros con.`);
            console.log(`lapin ${randnum}`);
        }
        if (randnum == 2){
            message.channel.send("Lapin... Ta Gueule!");
            console.log(`lapin ${randnum}`);
        }
        if (randnum == 3){
            message.channel.send("De toute façon Lapin, tu n'es là que pour la prime...");
            console.log(`lapin ${randnum}`);
        }
    }
    
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
            if(message.content === prefix + 'niveau 4'){
                niveau = 4;
                message.channel.send('Le Niveau Vigipirate est passé au Niveau 4');
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
                    .addField("Description du Niveau 2", `Menace potentielle: Le SWAT procède à des contrôles systématiques, ils ont une tenue d'intervention et les armes sont à la main.`) 
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
            }else if(niveau === 4){
                var niv4_embed = new Discord.RichEmbed()
                    .setColor('#000000')
                    .setTitle(`Niveau 4`) 
                    .setDescription("Le Niveau Vigipirate est de Niveau 4") 
                    .addField("Description du Niveau 4", `La capitale est totalement fermé. Sauf accord, il est interdit d'y rentrer.`) 
                message.channel.send({embed: niv4_embed});
                console.log('Vigi ' + niveau); 
            }; 
        break;  
    }
    setInterval(function() {
        var date = new Date();
        var heure = date.getHours();
        var min = date.getMinutes();
        if(heure === 15) {
            if(min === 0){
                if(message.channel.name === "journal-du-swat") return;
                message.channel.send('On répète mais ça nous aide: ça prend deux secondes pour nous envoyer au sommet! \n https://scum.top-serveurs.net/fr-18-les-con-damnes-zones-de-pvp-d1-d2-d3-d4-discord-httpsdiscordggn6ssg7w');
                min = 1;
            }
        }else
        if(heure === 18) {
            if(min === 0){
                if(message.channel.name === "journal-du-swat") return;
                message.channel.send('On répète mais ça nous aide: ça prend deux secondes pour nous envoyer au sommet! \n https://scum.top-serveurs.net/fr-18-les-con-damnes-zones-de-pvp-d1-d2-d3-d4-discord-httpsdiscordggn6ssg7w');
                min = 1;
            }
        }else
        if(heure === 21) {
            if(min === 0){
                if(message.channel.name === "journal-du-swat") return;
                message.channel.send('On répète mais ça nous aide: ça prend deux secondes pour nous envoyer au sommet! \n https://scum.top-serveurs.net/fr-18-les-con-damnes-zones-de-pvp-d1-d2-d3-d4-discord-httpsdiscordggn6ssg7w');
                min = 1;
            }
        }else    
        if(heure === 0) {
            if(min === 0){
                if(message.channel.name === "journal-du-swat") return;
                message.channel.send('On répète mais ça nous aide: ça prend deux secondes pour nous envoyer au sommet! \n https://scum.top-serveurs.net/fr-18-les-con-damnes-zones-de-pvp-d1-d2-d3-d4-discord-httpsdiscordggn6ssg7w');
                min = 1;
            }
        }else
        if(heure === 3) {
            if(min === 0){
                if(message.channel.name === "journal-du-swat") return;
                message.channel.send('On répète mais ça nous aide: ça prend deux secondes pour nous envoyer au sommet! \n https://scum.top-serveurs.net/fr-18-les-con-damnes-zones-de-pvp-d1-d2-d3-d4-discord-httpsdiscordggn6ssg7w');
                min = 1;
            }
        }else
        if(heure === 6) {
            if(min === 0){
                if(message.channel.name === "journal-du-swat") return;
                message.channel.send('On répète mais ça nous aide: ça prend deux secondes pour nous envoyer au sommet! \n https://scum.top-serveurs.net/fr-18-les-con-damnes-zones-de-pvp-d1-d2-d3-d4-discord-httpsdiscordggn6ssg7w');
                min = 1;
            }
        }else
        if(heure === 9) {
            if(min === 0){
                if(message.channel.name === "journal-du-swat") return;
                message.channel.send('On répète mais ça nous aide: ça prend deux secondes pour nous envoyer au sommet! \n https://scum.top-serveurs.net/fr-18-les-con-damnes-zones-de-pvp-d1-d2-d3-d4-discord-httpsdiscordggn6ssg7w');
                min = 1;
            }
        }else 
        if(heure === 12) {
            if(min === 0){
                if(message.channel.name === "journal-du-swat") return;
                message.channel.send('On répète mais ça nous aide: ça prend deux secondes pour nous envoyer au sommet! \n https://scum.top-serveurs.net/fr-18-les-con-damnes-zones-de-pvp-d1-d2-d3-d4-discord-httpsdiscordggn6ssg7w');
                min = 1;
            }
        }
    }, 60000);
}); 

function random(min, max) { //Permet de créer une fonction qui va calculer un chiffre entier entre deux nombres entiers définis
    min = Math.ceil(1);  //valeur min
    max = Math.floor(3); //valeur max
    randnum = Math.floor(Math.random() * (max - min + 1) + min);  //calcul le chiffre random dans le cas ou min = 1 et max = 3, réponse 1, 2, ou 3 possible
}

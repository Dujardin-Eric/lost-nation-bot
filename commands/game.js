module.exports = {
    name: 'game',
    description: 'Test Command.',
    execute(message) {
        message.channel.send("C'est partie pour un juste prix ! Tu as 10 essais");
        function jeu() {
            function nb_aleatoire(min,max) {
                var nb = min + (max-min+1)*Math.random();
                return Math.floor(nb);
            }

            // Initialitation
            var nb_coup = 1;
            var min = 1;
            var max = 100;
            var nombre = 5;
            var nb = nb_aleatoire(min, max);

            while(nombre != nb) {
                var nombre = prompt("Entrer un nombre [Nombre de coup(s) : "+ nb_coup +"]" , "Nombre");
                nb = 6;

                if (nombre == "Nombre compris entre 1 et 100") {
                    message.channel.send("Entrer un nombre entre 1 et 100");
                }
                if (nombre == null) {
                    message.channel.send("bye");
                    return;
                }
                if (isNaN(nombre)) {
                    message.channel.send("\"" + nombre + "\" n'est pas un nombre");
                }
                if (nombre < 1) {
                    message.channel.send( + nombre + " est trop petit !");
                }
                if (nombre >100) {
                    message.channel.send(+ nombre + " est trop grand !");
                }
                if (nombre < nb) {
                    message.channel.send("C'est plus !");
                    nb_coup ++;
                }
                if (nombre > nb ) {
                    message.channel.send("C'est moins !");
                    nb_coup ++;
                }
                if (nombre == nb) {
                    message.channel.send("Bravo le nombre était"+ nb);
                    return
                }
            }
        }
    }
};

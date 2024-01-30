
const myButton = document.querySelector(".btn");
myButton.addEventListener("click",
    function () {
        let nomeCognome = document.getElementById("inputName").value;
        let namePassenger = document.getElementById("name")
        let kmDaPercorrere = document.getElementById("inputKm").value;
        let ageSelect = document.getElementById("age-select");
        let costTicket =  document.getElementById("price-ticket");
        let typeOfTicket= document.getElementById("type-ticket");
        let choiceUser = ageSelect.value;

        const priceKm = 0.21;

        let priceTicket = kmDaPercorrere * 0.21;
        // console.log('Il prezzo per gli utenti di età compresa tra 18 e 65 è:' + priceTicket);

        // prezzo minorenni

        const percentageMinors = 20;
        const discountMinors = ((percentageMinors / 100) * priceTicket);
        const priceMinors = (priceTicket - discountMinors).toFixed(2);
        // console.log('Il prezzo scontato per minoreenni è:€' + priceMinors);

        // fine prezzo minorenni

        // prezzo over 65

        const percentageOver65 = 40;
        const discountOver65 = ((percentageOver65 / 100) * priceTicket);
        const priceOver65 = (priceTicket - discountOver65).toFixed(2);
        // console.log('Il prezzo scontato per over 65 è:€' + priceOver65);


        // fine prezzo over 65

        if (choiceUser==1) {
            namePassenger.innerHTML= (nomeCognome);
            console.log("Nome passeggero")
            costTicket.innerHTML="€ " + priceTicket;
            typeOfTicket.innerHTML="Biglietto standard"
            console.log("Prezzo utente tra 18 e 65 anni: € " + priceTicket)
            
        } else if (choiceUser==2) {
            namePassenger.innerHTML= (nomeCognome);
            console.log("Nome passeggero")
            costTicket.innerHTML="€ " + priceMinors;
            typeOfTicket.innerHTML="Biglietto scontato del 20%"

            console.log("Prezzo utente minorenne: € " + priceMinors)
           

        } else if (choiceUser==3) {
            namePassenger.innerHTML= (nomeCognome);
            console.log("Nome passeggero")
            costTicket.innerHTML="€ " + priceOver65;
            typeOfTicket.innerHTML="Biglietto scontato del 40%"

            console.log("Prezzo utente over 65: € " + priceOver65)
            

        }
    })
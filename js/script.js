



const myButton = document.querySelector(".btn");
myButton.addEventListener("click",
    function () {
        let nomeCognome = document.getElementById("inputName").value;
        let kmDaPercorrere = document.getElementById("inputKm").value;
        let ageSelect = document.getElementById("age-select");
        let choiceUser = ageSelect.value;
        
        // ageSelect.addEventListener("change", 
        //     function(){
        //         const choiceUser = ageSelect.value;

        //         console.log("scelta dell'utente:", choiceUser);
        //     }
        // )


        const priceKm = 0.21;

        const priceTicket = kmDaPercorrere * 0.21;
        console.log('Il prezzo per gli utenti di età compresa tra 18 e 65 è:' + priceTicket);

        // prezzo minorenni

        const percentageMinors = 20;
        const discountMinors = ((percentageMinors / 100) * priceTicket);
        const priceMinors = (priceTicket - discountMinors).toFixed(2);
        console.log('Il prezzo scontato per minoreenni è:€' + priceMinors);

        // fine prezzo minorenni

        // prezzo over 65

        const percentageOver65 = 40;
        const discountOver65 = ((percentageOver65 / 100) * priceTicket);
        const priceOver65 = (priceTicket - discountOver65).toFixed(2);
        console.log('Il prezzo scontato per over 65 è:€' + priceOver65);


        // fine prezzo over 65

        if (choiceUser==1) {
            console.log("L'utente ha un'età compresa tra 18 e 65 anni")
        } else if (choiceUser==2) {
            console.log("L'utente è minorenne")

        } else if (choiceUser==3) {
            console.log("L'utente ha più di 65 anni")

        }
    })
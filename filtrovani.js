var receptyRAW = [
    {
        suroviny: ["brambory", "zelenina","mleko"],
        name: "HokajdoPolevka",
        selector: "#recept-1",
    },
    {
        suroviny: ["maslo","vejce","zelenina","syr","sunka",],
        name: "VajickovaPomazanka",
        selector: "#recept-2",
    },
    {
        suroviny: ["precliky","salam","zelenina","syr"],
        name: "Desetiminutovepizzoveprecliky ",
        selector: "#recept-3",
    },
    {
        suroviny: ["zelenina","maslo","vejce","mleko"],
        name: "HouskoveKnedlikySVajickem",
        selector: "#recept-4",
    },
    {
        suroviny: ["vejce", "zelenina"],
        name: "SendvicSVajickem",
        selector: "#recept-5",
    },
    {
        suroviny: ["prase", "zelenina","testoviny"],
        name: "BolonskeSpagety",
        selector: "#recept-6",
    },
    {
        suroviny: ["vejce","prase","zelenina","maslo"],
        name: "ToustSeZtracenymVajcem",
        selector: "#recept-7",
    },
    {
        suroviny: ["vejce","prase","zelenina","maslo"],
        name: "HamAndEggs",
        selector: "#recept-8",
    },
    {
        suroviny: ["vejce", "zelenina","testoviny"],
        name: "PolivkaProZacatecniky",
        selector: "#recept-9",
    },
    {
        suroviny: ["zelenina"],
        name: "PecenePaprikoveBrambory",
        selector: "#recept-10",
    },
    {
        suroviny: ["zelenina"],
        name: "FazolovySalatsCuketou",
        selector: "#recept-11",
    },
    {
        suroviny: ["zelenina","syr","testoviny"],
        name: "SpagetyAglioOlio",
        selector: "#recept-12",
    },
    {
        suroviny: ["kure","maso","mouka","vejce","mleko"],
        name: "KureciRizek",
        selector: "#recept-13",
    },
    {
        suroviny: ["prase","mouka","vajicka"],
        name: "Vepřový řízek",
        selector: "#recept-14",
    },
    {
        suroviny: ["vejce","syr"],
        name: "LehkyJaponskyKolac",
        selector: "#recept-15",
    },
    {
        suroviny: ["vejce","maslo"],
        name: "MichanaVejce",
        selector: "#recept-16",
    },
    {
        suroviny: ["zelenina","mouka"],
        name: "CuketovePlacky",
        selector: "#recept-17",
    },
    {
        suroviny: ["zelenina"],
        name: "CockovySalatSCibuliACherryRajcatky",
        selector: "#recept-18",
    },
    {
        suroviny: ["zelenina"],
        name: "RajcatovaBruschetta",
        selector: "#recept-19",
    },
    {
        suroviny: ["zelenina"],
        name: "Rajcatovo-okurkovySalatSAvokadem",
        selector: "#recept-20",
    },
    {
        suroviny: ["zelenina","kure","maslo","smetana"],
        name: "HraskovaPolevka",
        selector: "#recept-21",
    },
    {
        suroviny: ["zelenina","smetana"],
        name: "SmetanoveTestovinySNivou.",
        selector: "#recept-22",
    },
     
];

function vyberRecepty(vyberSurovin, recepty) {
    var odpovidajiciRecepty = [];

    for (var i = 0; i < recepty.length; i++) {
        var recept = recepty[i];
        var obsahujeSurovinu = false;

        for (var j = 0; j < vyberSurovin.length; j++) {
            var surovina = vyberSurovin[j];
            if (recept.suroviny.indexOf(surovina) !== -1) {
                obsahujeSurovinu = true;
                break;
            }
        }

        if (obsahujeSurovinu) {
            odpovidajiciRecepty.push(recept);
        }

    }

    return odpovidajiciRecepty
}


var formular = document.querySelector("#formSuroviny");
formular.addEventListener("change", function (e) {
    var formData = new FormData(formular);
    var surov = formData.getAll("suroviny");
    var receptHlaskaPrazdne = document.querySelector(".recepty-nic");
    var nenalezeno = document.querySelector(".recepty-nenalezeno")
    
    //zobrazeni hlasky prazna lednice
    if (surov.length == 0) {
        receptHlaskaPrazdne.style.display = "block";
    }
    else {
        receptHlaskaPrazdne.style.display = "none";
    }
    
    //konec zobrazeni hlasky prazdna lednice
    var DoporuceneRecepty = vyberRecepty(surov, receptyRAW);
    var recepty = document.querySelectorAll(".recept");
    
    //zobrazeni receptu
    for (var i = 0; i < recepty.length; i++) {
        recepty[i].parentNode.style.display = "none";
    }
    
    //filtrace receptu
    for (var i = 0; i < DoporuceneRecepty.length; i++) {
        document.querySelector(DoporuceneRecepty[i].selector).parentNode.style.display = "block";
    }
    
    // zbrazeni hlasky o to)m, ze nic nealezeno
    if (surov.length && DoporuceneRecepty.length == 0) {
        nenalezeno.style.display = "block";
        receptHlaskaPrazdne.style.display = "none";
    }
    else {
        nenalezeno.style.display = "none";
    }
    //konec zobrazeni hrlasky nenalezeno

})
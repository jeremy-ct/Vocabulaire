// Copies des listes initiales pour éviter de modifier les originales
let motsDisponibles = [...listeDeMot];
let phrasesDisponibles = [...listeDePhrase];


function AfficheScore(score, essaie, tailleTableau)
{
    return "Vous avez reussi a trouver " + score + " mot(s) avec vos " + essaie + " essaies sur les " + tailleTableau + " mot(s)"
}

function randomVal(min,max)
{
    return Math.floor(Math.random() * (max - min) + min)
}

function ChoisirChaine(listeMots)
{
    if (listeMots.length === 0) {
        console.log("Tous les mots ou phrases ont déjà été utilisés !");
        return null;
    }
    
    const index =  randomVal(0,listeMots.length)
    const element = listeMots[index]

     // Retirer l'élément utilisé de la liste
     listeMots.splice(index, 1);   

    return element
    
}

function choisirMode(saisieUtilisateur,mode = null)
{
    switch (saisieUtilisateur)
    {
    case "q":
    case "exit": 
        console.log("quitter")
        break
    case "mot":
    case "phrase":
        console.log("lancement de la partie avec le mode " + saisieUtilisateur)
        jeu(saisieUtilisateur)
        break
    case "o":
        if (mode == "phrase" || mode == "mot")
        {
            console.log("lancement de la partie avec le mode " + saisieUtilisateur)
            jeu(mode)
        }
        break
    default:
        console.log("la valeur saisie n'est pas attendu")
    }
}

// le tableau de listeDeMot est definis dans le fichier config.js
// le tableau listeDePhrase est definis dans le fichier config.js
function jeu(mode)
{
    let chaine = null
    let saisieUtilisateur = null
    let phraseAffiche = null
    let NombreEssaie = 0

    if(mode == "phrase")
    {
        chaine = ChoisirChaine(phrasesDisponibles)
    } else if (mode == "mot")
    {
        chaine = ChoisirChaine(motsDisponibles)
    }

    if (chaine == null)
    {
        prompt(`fin de partie, il n'y a plus de ${mode}`)
        return
    }

    phraseAffiche = "Veuillez saisir : " + chaine 

    while ( saisieUtilisateur !== chaine && saisieUtilisateur !== "q")
    {
        NombreEssaie += 1
        saisieUtilisateur = prompt( phraseAffiche)
    }
 
    saisieUtilisateur = null
    phraseAffiche = "Vous avez correctement saisie la chaine au bout de " + NombreEssaie + " essaie(s)" +
                    "\n pour rejouer tapez : o " + 
                    "\n pour changer de mode tapez : mot ou phrase" +
                    "\n pour quitter tapez : q"

    while ( saisieUtilisateur !== "o" && saisieUtilisateur !== "mot" && saisieUtilisateur !== "phrase" && saisieUtilisateur !== "q" && saisieUtilisateur !== "exit")
    {
        saisieUtilisateur = prompt(phraseAffiche)
    }
    choisirMode(saisieUtilisateur,mode)

}


function lancerJeu()
{
    let saisieUtilisateur = null
    phraseAffiche = "Vous voulez un mot ou une phrase"
    while ( saisieUtilisateur !== "mot" && saisieUtilisateur !== "phrase" && saisieUtilisateur !== "q" && saisieUtilisateur !== "exit")
    {
        saisieUtilisateur = prompt( phraseAffiche)
        console.log(saisieUtilisateur)
    }
    choisirMode(saisieUtilisateur)
}
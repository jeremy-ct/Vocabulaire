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
    return listeMots[randomVal(0,listeMots.length)] 
    
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
        chaine = ChoisirChaine(listeDePhrase)
    } else if (mode == "mot")
    {
        chaine = ChoisirChaine(listeDeMot)
    }

    phraseAffiche = "Veuillez saisir : " + chaine 

    while ( saisieUtilisateur !== chaine && saisieUtilisateur !== "q")
    {
        NombreEssaie += 1
        saisieUtilisateur = prompt( phraseAffiche)
    }
 
    saisieUtilisateur = null
    phraseAffiche = "Vous avez correctement saisie la chaine au bout de " + NombreEssaie + 
                    "\n pour rejouer tapez : o " + 
                    "\n pour changer de mode tapez : mot ou phrase" +
                    "\n pour quitter tapez : q"

    while ( saisieUtilisateur !== "o" && saisieUtilisateur !== "mot" && saisieUtilisateur !== "phrase" && saisieUtilisateur !== "q" && saisieUtilisateur !== "exit")
    {
        saisieUtilisateur = prompt(phraseAffiche)
    }
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
    default:
        console.log("la valeur saisie n'est pas attendu")
    }

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
    default:
        console.log("la valeur saisie n'est pas attendu")
    }


}


lancerJeu()





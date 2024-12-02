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


function choisirMode()
{
    console.log(`Option sélectionnée : ${selectedOption.id} (${selectedOption.value})`)
    jeu(selectedOption.id)
}

// Ajouter un écouteur d'événements pour les changements dans la zone des options
zoneOptions.addEventListener('change', (event) => {
    if (event.target.name === 'optionSource') {
            choisirMode()
        }
    })


// phraseDisponible et motDisponible sont des variables globales definis en haut du fichier
function jeu(mode)
{
    let chaine = null
    let phraseAffiche = null
    let modeJeu =null

    if(mode == "phrases") { modeJeu = phrasesDisponibles } 
    if (mode == "mots") { modeJeu = motsDisponibles }
    
    if (modeJeu)
    {
        chaine = ChoisirChaine(modeJeu)
    }
    else
    {
        return
    }
    console.log(chaine)
    if (chaine == null)
    {
        return
    }
    zoneProposition.textContent = chaine
    phraseAffiche = "Veuillez saisir : " + chaine 

    return
}


function lancerJeu()
{
    choisirMode()
}
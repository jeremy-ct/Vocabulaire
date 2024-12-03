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


    console.log(`Option sélectionnée : ${selectedOption.id} `)
    jeu(selectedOption.id)
}

// Ajouter un écouteur d'événements pour les changements dans la zone des options
zoneOptions.addEventListener('change', (event) => {
    if (event.target.name === 'optionSource') {
            //select option a du être redefinis ici pour qu'il puisse s'actualiser
            selectedOption  = zoneOptions.querySelector('input[name="optionSource"]:checked')

            choisirMode()
        }
    })

// Ajouter un événement "click" au bouton
btnValiderMot.addEventListener('click', () => {
    const valeurSaisie = inputEcriture.value
    let verif = false
    console.log("Valeur saisie : ", valeurSaisie)
    verif = verifChaine()
    console.log(verif)
    inputEcriture.value = null
    if (verif)
    {
        score++
        nbEssaies++
        choisirMode()
    }
    else
    {
        nbEssaies++
    }
    actualiseScore()
})

// creer une fonction actualise score 
function actualiseScore()
{
    zoneScore.textContent = `${score} / ${nbEssaies}`
}

// Ajouter un écouteur d'événements sur la touche entrer
inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      btnValiderMot.click();
    }
  });


function verifChaine()
{
    const inputVal = inputEcriture.value
    const proposition = zoneProposition.textContent
    //console.log(inputVal)
    //console.log(proposition)
    if (inputVal === proposition)
    {
        return true
    }
    return false
}

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


    return
}


function lancerJeu()
{
    choisirMode()
}
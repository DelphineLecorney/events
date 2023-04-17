/*
Open the script.js file and edit it, so that:

Everytime the user clicks on one of the action squares
Create a new <div> with a class .displayedsquare and the corresponding 
clicked color in the div above (.displayedsquare-wrapper)
Create a new <li> in the log below to state when the action was done

Add an event listener on the document <body>, listening for the keypress event. 
When the spacebar is hit randomly change the background color of the whole page
Log when the spacebar is used the same way you used for the generated squares.
When the l key is pressed the log gets deleted (erases the generated <li>s). 
Mind you: using a delete in a for loop might cause issues (as the amount of 
    items to loop over changes), so a while loop might be a good choice instead.
When the s key is pressed the squares get deleted (erases the generated squares)
Create a system so that when a user clicks on a generated square an alert pops-up 
with the color of that square
*/




// L'heure actuelle est stockée dans _initTime
const _initTime = Date.now();

// Calcul du temps de l'exécution à 2 décimales près
const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

// Lors d'un clic sur un carré, la fonction clickOnSquare est appelée
const clickOnSquare = (e) => {
  // La couleur du carré cliqué est stocké dans "eventClick"
  const eventClick = e.target.classList[1];
  console.log(eventClick);
  console.log(getElapsedTime());

  // Création d'un nouveau div avec la classe .displayedsquare et la couleur correspondant au carré cliqué
  const displayedSquareWrapper = document.querySelector(".displayedsquare-wrapper");
  const displayedSquare = document.createElement("div");
  displayedSquare.classList.add("displayedsquare", eventClick);
  displayedSquareWrapper.appendChild(displayedSquare);

  // Ajout de li au journal indiquant l'action effectuée et le temps écoulé depuis l'initialisation de la page
  const actionLog = document.querySelector("ul");
  const actionLogEntry = document.createElement("li");
  const actionTime = getElapsedTime();
  actionLogEntry.innerText = "Click " + eventClick + " square " + actionTime;
  actionLog.appendChild(actionLogEntry);
};

// Lorsqu'une touche est pressée sur le document body, la fonction changeBackgroundColor est appelée si la touche est la barre d'espace
document.body.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    changeBackgroundColor();
  } else if (event.code === 'l'){
        deleteActionLog();
    }else if (event.code === 's')
        deleteSquares();
}); 

// Change la couleur de fond de la page en une couleur aléatoire et ajoute un élément li au journal indiquant l'action effectuée et le temps écoulé depuis l'initialisation de la page
const changeBackgroundColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;

  const actionLog = document.querySelector("ul");
  const actionLogEntry = document.createElement("li");
  const actionTime = getElapsedTime();
  actionLogEntry.innerText = "Appui sur la barre espace " + actionTime;
  actionLog.appendChild(actionLogEntry);
};

// Supprime tous les éléments li du journal
const deleteActionLog = () => {
    const actionLog = document.querySelector("ul");
        while (actionLog.firstChild){
        actionLog.removeChild(actionLog.firstChild);
    }
  };

  // Supprime tous les carrés générés et les éléments li du journal
const deleteSquares = () => {
    const displayedSquares = document.querySelectorAll(".displayedsquare");
    if (displayedSquares.length > 0) {
    for (let displayedSquare of displayedSquares) {
    displayedSquare.remove();
    }
}
}

// La boucle itère sur tous les éléments "actionsquare" pour ajouter un event et appelé la fonction clickOnSquare
const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}


// Dernières fonction pas encore fonctionnelles
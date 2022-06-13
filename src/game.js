const shipSpritesPath = "../resources/ships/gray/";
const shipSpriteExt = ".png";

const gameArea = getGameArea();
const shipElement = getShipElement();

activateShipControl();

function activateShipControl() {
    gameArea.onkeydown = function (eventInfo) {
        const code = eventInfo.code;
        console.log(code);

        if (code === "KeyD") {
            flyRight();
        } else if (code === "KeyA") {
            flyLeft();
        } else if (code === "KeyW") {
            flyForward();
        } else if (code === "KeyS") {
            flyBack();
        }

    }

    gameArea.onkeyup = function (eventInfo) {
        normalizeFlight();
    }
}

function getShipElement() {
    return document.getElementById("theShip");
}

function getGameArea() {
    return document.getElementById("theGameArea");
}

function flyRight() {
    moveShip(20, 0);

    shipElement.src = shipSpritesPath + "right" + shipSpriteExt;;
}

function flyLeft() {
    moveShip(-20, 0);

    shipElement.src = shipSpritesPath + "left" + shipSpriteExt;
}

function flyForward() {
    moveShip(0, 20);
}

function flyBack() {
    moveShip(0, -20);
}

function normalizeFlight() {
    shipElement.src = shipSpritesPath + "normal" + shipSpriteExt;
}

function moveShip(x, y) {
    if (x !== 0) {
        const prevX = convertToNumber(shipElement.style.left);

        shipElement.style.left = (prevX + x) + "px";
    }

    if (y !== 0) {
        const prevY = convertToNumber(shipElement.style.bottom);

        shipElement.style.bottom = (prevY + y) + "px";
    }
}

function convertToNumber(str) {
    const result = parseInt(str);
    if (Number.isNaN(result)) return 0;
    return result;
}

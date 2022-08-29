const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function IslampBroken () {
    return lamp.src.indexOf ('quebrada') > -1

}
function lampOn () {
    if ( !IslampBroken () ) {  // ! = negação
    lamp.src = './img/ligada.jpg';
    }
}

function lampOff () {
    if ( !IslampBroken () ) {  // ! = negação
    lamp.src = './img/desligada.jpg';
    }
}
function lampBroken () {
    lamp.src = './img/quebrada.jpg'
}

turnOn.addEventListener ( 'click', lampOn)
turnOff.addEventListener ( 'click', lampOff)
lamp.addEventListener ( 'dblclick', lampBroken)

// Welcome Message:

alert('Welcom to my Keycode Generator');
 

const eventKey = document.getElementById('eventKey');
const eventCode = document.getElementById('eventCode');
const eventWhich = document.getElementById('eventWhich');
const keycodeLarge = document.getElementById('keycodeLarge');

document.addEventListener('keypress', (e) => {
    eventKey.innerHTML = e.key;
    console.log(e.key);
})

document.addEventListener('keypress', (e) => {
    eventCode.innerHTML = e.code;
})

document.addEventListener('keypress', (e) => {
    eventWhich.innerHTML = e.which;
})

document.addEventListener('keypress', (e) => {
    keycodeLarge.textContent = e.which;
})


function CheckPhone() {
    if(document.querySelector('#telephone').value === '' 
    || document.querySelector('#telephone').value.length !== 19
    || document.querySelector('#telephone').value.indexOf('_') !== -1) {
        document.querySelector('.wrapper__footer > div > form > label').style.color = 'red';
    } else {
        document.querySelector('.wrapper__footer > div > form > label').style.color = '#56565E';
        document.querySelector('#telephone').value = '';
        OpenCloseModalPhone('open');
    } 
}

function OpenCloseModalPhone(arg) {
    if(arg === 'open') {
        document.querySelector('.modal-wrapper').style.display = 'flex';
    } else if(arg === 'close') {
        document.querySelector('.modal-wrapper').style.display = 'none';
    }
}
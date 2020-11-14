function changeImage() {
    if(!document.querySelector('#furniture').checked) {
        document.querySelector('#technics').disabled = true;
        document.querySelector('#technics').checked = false;
    } else {
        document.querySelector('#technics').disabled = false;
    }
    if(document.querySelector('#furniture').checked) {
        document.querySelector('.img-furniture').style.display = 'block';
    } else {
        document.querySelector('.img-furniture').style.display = 'none';
    }
    if(document.querySelector('#technics').checked) {
        document.querySelector('.img-technics').style.display = 'block';
    } else {
        document.querySelector('.img-technics').style.display = 'none';
    }
}
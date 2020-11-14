function Calculate() {
    let kitchenBase = kitchenFurniture = kitchenTechnics = bathroomBase = bathroomFurniture = bathroomTechnics = addedKitchenBase = addedKitchenFurniture = addedKitchenTechnics = addedBathroomBase = addedBathroomFurniture = addedBathroomTechnics = 0;
    const kitchenBaseConst = 164;
    const kitchenFurnitureConst = 2900;
    const kitchenTechnicsConst = 1400;
    const bathroomBaseConst = 455;
    const bathroomFurnitureConst = 0;
    const bathroomTechnicsConst = 700;

    const vKitchen = Number(document.querySelector('#kitchen').value);
    const vBathroom = Number(document.querySelector('#bathroom').value);
    let vAddedKitchen = 0;
    let vAddedBathroom = 0;

    let result = 0;

    addedBathroomFurniture = bathroomFurniture = bathroomFurnitureConst;

    function calculateKitchenFurniture(arg1) {
        let tmp;
        if(Number(document.querySelector(arg1).value) < 15) {
            tmp = kitchenFurnitureConst * 1;
        } else if(Number(document.querySelector(arg1).value) >= 15 && Number(document.querySelector(arg1).value) < 30) {
            tmp = kitchenFurnitureConst * 1.2;
        }else if(Number(document.querySelector(arg1).value) >= 30 && Number(document.querySelector(arg1).value) < 50) {
            tmp = kitchenFurnitureConst * 1.5;
        }else if(Number(document.querySelector(arg1).value) >= 50) {
            tmp = kitchenFurnitureConst * 1.8;
        }

        if(arg1==='#kitchen') {
            kitchenFurniture = tmp;
        } else {
            addedKitchenFurniture = tmp;
        }
    }

    if(vKitchen !== 0 && vBathroom !== 0) {
        kitchenBase = kitchenBaseConst * vKitchen;
        bathroomBase = bathroomBaseConst * vBathroom;

        if(document.querySelector('#added-kitchen').style.display = 'block') {
            if(document.querySelector('#added-kitchen').value !== '') {
                vAddedKitchen = Number(document.querySelector('#added-kitchen').value);
                addedKitchenBase = kitchenBaseConst * vAddedKitchen;
            }
        }
        if(document.querySelector('#added-bathroom').style.display = 'block') {
            if(document.querySelector('#added-bathroom').value !== '') {
                vAddedBathroom = Number(document.querySelector('#added-bathroom').value);
                addedBathroomBase = bathroomBaseConst * vAddedBathroom;
            }
        }

        if(document.querySelector('#furniture').checked) {
            calculateKitchenFurniture('#kitchen');
            if(vAddedKitchen !== 0) {
                calculateKitchenFurniture('#added-kitchen');
            }
        }

        if(document.querySelector('#technics').checked) {
            kitchenTechnics = kitchenTechnicsConst;
            bathroomTechnics = bathroomTechnicsConst;
    
            if(vAddedKitchen !== 0) {
                addedKitchenTechnics = kitchenTechnicsConst;
                addedBathroomTechnics = bathroomTechnicsConst;
            }

            if(vAddedBathroom !== 0) {
                addedBathroomTechnics = bathroomTechnicsConst;
            }
        }
        
    } 
    result = Math.round(kitchenBase + kitchenFurniture + kitchenTechnics + bathroomBase + bathroomFurniture + bathroomTechnics + addedKitchenBase + addedKitchenFurniture + addedKitchenTechnics + addedBathroomBase + addedBathroomFurniture + addedBathroomTechnics / vKitchen + vBathroom + vAddedKitchen + vAddedBathroom);
    
    if(document.querySelector('.kitchen-box').style.display === 'flex') {
        if(Number(document.querySelector('#added-kitchen').value) === 0) {
            result = 0;
        }
    }
    if(document.querySelector('.bath-box').style.display === 'flex') {
        if(Number(document.querySelector('#added-bathroom').value) === 0) {
            result = 0;
        }
    }
    if(vKitchen === 0 || vBathroom === 0) {
        result = 0;
    }
    if(result !== 0) {
        document.querySelector('.wrapper__main-content').style.display = 'none';
        document.querySelector('.payment').style.display = 'flex';
        document.querySelector('.low-price').innerHTML = `${result}<span>$</span>`;
        document.querySelector('.high-price').textContent = Math.round(result * 1.5);
    } else document.querySelector('.calculate').value = 'Заполните все поля'
}

function OpenCloseModal(arg) {
    const reg = /^\w+@\w+\.\w{2,4}$/i;

    if(arg === 'open') {
        if(reg.test(document.querySelector('#email').value) ) {
            document.querySelector('.modal-calculate').style.display = 'flex';
            document.querySelector('.payment').style.display = document.querySelector('.wrapper').style.display = 'none';
        }else document.querySelector('.payment__email-block > input').value = 'Введите корректную почту';    
    } else if(arg === 'close') {
        document.querySelector('.modal-calculate').style.display = 'none';
        document.querySelector('.wrapper__main-content').style.display = document.querySelector('.wrapper').style.display = 'flex';
    }
}
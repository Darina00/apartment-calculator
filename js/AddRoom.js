document.querySelector('.kitchen-box').style.display = document.querySelector('.bath-box').style.display = 'none';
function showListRooms() {
    if(document.querySelector('.kitchen-box').style.display === 'flex' && document.querySelector('.bath-box').style.display === 'flex') {
        return null;
    } else {
        document.querySelector('.list-rooms').style.display = 'flex';
        document.querySelector('.add-room-small').style.display = 'block';
        document.querySelector('.add-room').style.display = 'none';
        document.querySelector('.added-rooms').style.display = 'none';    
    }
}

function showAddedRooms(arg) {
    document.querySelector('.list-rooms').style.display = 'none';
    document.querySelector('.added-rooms').style.display = 'flex';
    if(arg === 'kitchen') {
        document.querySelector('.kitchen-box').style.display = 'flex';
        document.querySelector('.kitchen-icon').style.display = 'none';
    } else if(arg === 'bath') {
        document.querySelector('.bath-box').style.display = 'flex';
        document.querySelector('.bath-icon').style.display = 'none';
    }
}

function deleteRoom(arg) {
    if(arg === 'kitchen') {
        document.querySelector('.kitchen-box').style.display = 'none';
        document.querySelector('.kitchen-icon').style.display = 'flex';
    } else if(arg === 'bath') {
        document.querySelector('.bath-box').style.display = 'none';
        document.querySelector('.bath-icon').style.display = 'flex';
    }

    if(document.querySelector('.kitchen-box').style.display === 'none' && document.querySelector('.bath-box').style.display === 'none') {
        document.querySelector('.added-rooms').style.display = 'none';   
        document.querySelector('.add-room').style.display = 'block'; 
        document.querySelector('.add-room-small').style.display = 'none'; 
    }
}
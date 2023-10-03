let recList = document.getElementById('recList');


let a = (e) => {
    console.log(e.target.parentNode);
    if(e.target.parentNode === ''){}
}

fetch('http://localhost:5000/api/numbers/getnumbers' , {
    method:'GET',
    headers:{
        'Content-Type':'application/json'
    }
}).then((response) => {
    return response.json()
}).then((data) => {
    data.forEach(element => {
        let newElem = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        td3.onclick = a;
        
        td3.style.textAlign = 'center';
        td1.innerHTML = `${element.name}`;
        td2.innerHTML = `${element.phone_number}`
        td3.innerHTML = `<img src="image/delete-icon.png" class='delete-icon'>`

        newElem.append(td1);
        newElem.append(td2);
        newElem.append(td3);
        recList.append(newElem)
    });
})


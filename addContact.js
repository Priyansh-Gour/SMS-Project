let addNumForm = document.getElementById('addNumForm');

addNumForm.addEventListener('submit' , async (e) => {
    e.preventDefault();
    let Sname = document.getElementById('name');
    let Snumber = document.getElementById('number');

    await fetch('http://localhost:5000/api/numbers/createnumber' , {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify({
            name:Sname.value,
            phone_number: Snumber.value
        })
    }).then((response => {
        return response.json();
    })).then(data => {
        alert(data.msg);
    })
    Sname.value = "";
    Snumber.value = "";
})

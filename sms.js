let recList = document.getElementById("recList");

let deleteUser = async (e) => {
  let userid = e.id;
  e.parentNode.parentNode.remove();
  await fetch("http://localhost:5000/api/numbers/deletenumber", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: userid,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      alert(data.msg);
    });
};

fetch("http://localhost:5000/api/numbers/getnumbers", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((element) => {
      let newElem = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");

      td3.style.textAlign = "center";
      td1.innerHTML = `${element.name}`;
      td2.innerHTML = `${element.phone_number}`;
      //   td3.innerHTML = `<img src="image/delete-icon.png" onclick="deleteUser(this)" id="${element.phone_number}" class='delete-icon'>`;
      td3.innerHTML = `<i class="fa-solid fa-trash delete-icon" onclick="deleteUser(this)" id="${element.phone_number}"></i>`;

      newElem.append(td1);
      newElem.append(td2);
      newElem.append(td3);
      recList.append(newElem);
    });
  });

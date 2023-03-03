const table= document.querySelector("table");
const inputArr = document.querySelectorAll("input");
const th = document.querySelectorAll("th") ;

document.querySelector(".update_btn").addEventListener("click", (event) =>{
    console.log("datml") ;
    let name = inputArr[0].value ; console.log(name) ;
    let STCode = inputArr[1].value ; console.log(STCode) ;
    let position = inputArr[2].value ; console.log(position) ;
    let tbody = document.createElement("tbody") ;
    tbody.innerHTML = `
         <tr>
                                  <th>${th.length}</th>
                                  <td>${name}</td>
                                  <td>${STCode}</td>
                                  <td>${position}</td>
        </tr>
    `
    name = "" ; STCode = "" ; position = "" ;
})


const tbody = document.querySelector("tbody");
const inputArr = document.querySelectorAll("input");

document.querySelector(".update_btn").addEventListener("click", (event) =>{
    let name = inputArr[0].value ; 
    let STCode = inputArr[1].value ; 
    let position = inputArr[2].value ; 
    if(name==""||STCode==""||position=="") return ; 
    let tr = document.createElement("tr") ;
    tr.innerHTML = `
                                  <th>${document.querySelectorAll("th").length-3}</th>
                                  <td>${name}</td>
                                  <td>${STCode}</td>
                                  <td>${position}</td>
    `
    tbody.append(tr) ;
    inputArr.forEach( (element) => {
        element.value = "" ;
    })
})

document.querySelector(".delete_btn").addEventListener("click" , (event) => {  
    let name = inputArr[0].value ; 
    let STCode = inputArr[1].value ; 
    let position = inputArr[2].value ; 
    tbody.querySelectorAll("td").forEach( (element,index,array) => {
        // console.log(name.trim(),"==",element.innerText,"\t",name.trim()==element.innerText) ;
        if(element.innerText==name.trim() && array[index+1].innerText==position.trim() && array[index+2].innerText==STCode.trim()) {
            tbody.removeChild(element.parentNode) ;
        } 
    })
    let pos = 1 ; 
    document.querySelectorAll("th").forEach( (element,index,array) => {
        if(index>3) {
            element.innerText = pos; pos++ ;  
        } 
    })
})
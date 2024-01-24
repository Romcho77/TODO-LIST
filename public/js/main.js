let enCours = document.querySelector("#enCours")
let fini = document.querySelector("#fini")
let tous = document.querySelector("#tous")
let enter = document.querySelector(".enter")
let input = document.querySelector(".input")
let bottomList = document.querySelector(".bottom")
let div
let div2
let button
let counter = 0
let allTasks



enter.addEventListener("click", ()=>{
    if(input.value == ""){
        alert("T'as rien mis comme texte")
    }else{
        div = document.createElement("div")
        div2 = document.createElement("div") //taskDivButtons
        div2.className = "taskDivButtons"
        div.setAttribute("class", "taskDiv" + counter)
        counter++
        div.classList.add("taskDiv")
        let p = document.createElement("p")
        p.setAttribute("class", "taskText") // taskText
        p.innerText = input.value
        input.value = ""
        let i = document.createElement("i") //<i class="fa-solid fa-list-check"></i>
        i.className = "taskLogo fa-solid fa-list-check" // taskLogo
        
    
        // p.innerText = "FIRST TASK"
        div.appendChild(i)
        div.appendChild(p)
        div.appendChild(div2)
    
        for (let index = 0; index < 4; index++) {
            button = document.createElement("button")
            button.className = "taskButton" + (index+1) //taskButton 1 2 3
            switch (index) {
                case 0:
                    button.innerText = "VALID"
                    break;
                case 1:
                    button.innerText = "MODIFY"
                    break;
                case 2:
                    button.innerText = "DELETE"
                    break;
                case 3:
                    button.innerText = "FINITO"
                    
                    break;    
                default:
                    break;
            }
            div2.appendChild(button)
    
        }
    
        bottomList.appendChild(div)
        // fini creation  des cases
        


    }
    // let allTasks = bottomList.querySelectorAll(".taskDiv")
    // let oneTasks = document.querySelector(".taskDiv")

    
    // // allTasks.forEach(element => {
    //     // let valid = allTasks.querySelector(".taskDivButtons").querySelectorAll("button")[0]
    //     let allValid = document.querySelector(".taskButton0")

    //     // 
    //     if(button.className == "taskButton1"){

    //         allValid.addEventListener("click", ()=>{
    //             console.log(allValid);
    //             // div.setAttribute("statut","valid")
    //             console.log("Cest valid mtn");
    //             div.classList.toggle("divGreen")
    //         });
    //     }
    allTasks = bottomList.querySelectorAll(".taskDiv")
    let element
    for (let index = 0; index < allTasks.length; index++) {
        allTasks = bottomList.querySelectorAll(".taskDiv")
        element = allTasks[index]
        
        let valid = element.querySelector(".taskDivButtons").querySelectorAll("button")[0]
        console.log(valid);
        valid.addEventListener("click", ()=>{
            if(element.statut != "valid"){
                element.setAttribute("statut","valid")
                console.log("Cest valid mtn");
                valid.parentElement.parentElement.classList.toggle("divGreen")
                valid.parentElement.parentElement.classList.add("enCours")
                valid.parentElement.parentElement.classList.remove("fini")
            }else{
                element.setAttribute("statut", "notValid")
                valid.parentElement.parentElement.classList.remove("enCours")
                valid.parentElement.parentElement.classList.add("fini")
            }

            // index = 999
            // // if(element.style.backgroundColor != "green"){
            //     element.style.backgroundColor = "green"
            // }else{
            //     element.style.backgroundColor = "rgba(255, 228, 196, 0.4)"
            // }
            
        })
        let notValid = element.querySelector(".taskDivButtons").querySelectorAll("button")[3]
        console.log(valid);
        notValid.addEventListener("click", ()=>{
            if(element.statut != "notValid"){
                element.setAttribute("statut","notValid")
                console.log("Cest pas valid mtn");
                notValid.parentElement.parentElement.classList.toggle("divRed")
                notValid.parentElement.parentElement.classList.remove("enCours")
                notValid.parentElement.parentElement.classList.add("fini")
                // index = 999
            }else{
                element.setAttribute("statut", "valid")
                notValid.parentElement.parentElement.classList.add("enCours")
                notValid.parentElement.parentElement.classList.remove("fini")
            }

            
        })

        let modify = element.querySelector(".taskDivButtons").querySelectorAll("button")[1]
        modify.addEventListener('click', ()=>{
            modify.parentElement.parentElement.querySelector("p").innerText = prompt("entre un texte")
            index=allTasks.length-1

        })

        let deleter = element.querySelector(".taskDivButtons").querySelectorAll("button")[2]
        deleter.addEventListener('click', ()=>{
            valid.parentElement.parentElement.remove()
            index--
        })
        
        
    }
    allTasks = document.querySelector(".bottom").querySelectorAll(".taskDiv")
    enCours.addEventListener('click', ()=>{
        allTasks.forEach(element => {
            if(element.classList.contains("enCours")){
                element.style.display = "flex"
            }else{
                element.style.display = "none"
            }
        });
    })
    allTasks = document.querySelector(".bottom").querySelectorAll(".taskDiv")
    fini.addEventListener('click', ()=>{
        allTasks.forEach(element => {
            if(element.classList.contains("fini")){
                element.style.display = "flex"
            }else{
                element.style.display = "none"
            }
        });
    })
    allTasks = document.querySelector(".bottom").querySelectorAll(".taskDiv")
    tous.addEventListener('click', ()=>{
        allTasks.forEach(element => {

            element.style.display = "flex"

        });
    })

})



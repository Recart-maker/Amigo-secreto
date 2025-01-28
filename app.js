// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let friends = [];


function add() {
    let friend = document.getElementById("amigo").value;


    if(friend == "") {
        alert("Por favor, inserte un nombre"); 
    } 
    else{
        friends.push(friend);
        document.getElementById("amigo").value = "";
        createList(friends);
    }
}


function createList (friends){

    let list = document.getElementById("listaAmigos");
    list.innerHTML = "";

    for (let index = 0; index < friends.lenght; index++) {
        let element = document.createElement("li");
        element.innerHTML = friends[index];
        list.appendChild(element);
    }
}


function drawFriend(friends){

    if ( friends == "" ){
        alert("Añade un amigo antes de sortear")
    }
    else{

        let randomIndex = Math.floor(Math.random() * friends.lenght);
        let friendRandom = friends[randomIndex];
        console.log(friendRandom);

       
        let result = document.getElementById("resultado");
        result.innerHTML = "";
        let element = document.createElement("li");
        element.innerHTML = friendRandom;
        result.appendChild(element);
    }
 }





    
   




    





  
const linkShow = document.getElementById('link-show');
const myDialog = document.getElementById('user-list');
const closeDialogButton = document.getElementById('closeDialog');

const numberVerify = function () {
    let listVerifyNumber = JSON.parse(localStorage.getItem('listVerifyNumber')) || [];
    userNumber = document.getElementById("user-number").value;
    //reverse the text
    userNumber = userNumber.split("").reverse("").join("");
    let i = 2;
    let totSum = 0;
    for(let number of userNumber){// of give the value in give the key
        totSum += parseInt(number)*i;
        i++; 
        if(i > 7){
            i = 2;
        }
    }
    totSum %= 11;
    totSum = 11- totSum;
    userNumber = userNumber.split("").reverse("").join("");
    let result = userNumber+"-"+totSum.toString();
    let numberFound = false;
    for(let number of listVerifyNumber){
        if(number === result ){
            result = "Already in the database"
            numberFound = true;
        }
    }
    if(!numberFound){
        listVerifyNumber.push(result);
        localStorage.setItem('listVerifyNumber', JSON.stringify(listVerifyNumber));
    }
    document.getElementById("result-verify").innerHTML="Result: "+result;
    event.preventDefault();
};

function login(){
    let listVerifyNumber = JSON.parse(localStorage.getItem('listVerifyNumber')) || [];
    userNumber = document.getElementById("user-number").value;
    let result = "Number not in the database";
    for(let number of listVerifyNumber){
        if(number == userNumber){
            result = "Login succesfull";
            break
        }
    }
    document.getElementById("result-verify").innerHTML="Result: "+result;
    event.preventDefault();
}

function show(){
    let listVerifyNumber = JSON.parse(localStorage.getItem('listVerifyNumber')) || [];
    myDialog.showModal(); // Open the dialog
    myDialog.classList.add('state');
    let divBefore = document.querySelectorAll(".holder");
    n = divBefore.length;
    for(let i = 0;i < n;i++){
        divBefore[i].remove();
    }
    for(let num of listVerifyNumber) {
        
        let newDiv = document.createElement("div");
        newDiv.classList.add("holder");
        let newContent = document.createTextNode(num); 
        newDiv.appendChild(newContent);
        document.getElementById("user-list").insertBefore(newDiv, document.getElementById("user-list").firstElementChild);
    }
};


function endDialog() {
    myDialog.close(); // Close the dialog
    myDialog.classList.remove('state');
}

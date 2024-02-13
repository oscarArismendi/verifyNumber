

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
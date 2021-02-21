
function question1(){
    let text = document.getElementById("question1").textContent;
    let value = text.length == 0 ? "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.": "";
    document.getElementById("question1").innerHTML=value;
}


function question2(){
    let text = document.getElementById("question2").textContent;
    let value = text.length == 0 ? "No more than 2GB. All files in your account must fit your allotted storage space.": "";
    document.getElementById("question2").innerHTML=value;
}


function question3(){
    let text = document.getElementById("question3").textContent;
    let value = text.length == 0 ? "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.": "";
    document.getElementById("question3").innerHTML=value;
}


function question4(){
    let text = document.getElementById("question4").textContent;
    let value = text.length == 0 ? "Yes! Send us a message and we’ll process your request no questions asked.": "";
    document.getElementById("question4").innerHTML=value;
}

function question5(){
    let text = document.getElementById("question5").textContent;
    let value = text.length == 0 ? "Chat and email support is available 24/7. Phone lines are open during normal business hours.": "";
    document.getElementById("question5").innerHTML=value;
}


function changeImg(screen){
    if(screen.matches){
        document.getElementById("woman").src ="./images/illustration-woman-online-mobile.svg";
    }else{
        document.getElementById("woman").src ="./images/illustration-woman-online-desktop.svg";
    }
}

function changeShadow(screen){
    if(screen.matches){
        document.getElementById("shadow").src ="./images/bg-pattern-mobile.svg";
    }else{
        document.getElementById("shadow").src ="./images/bg-pattern-desktop.svg";
    }
}

var screen = window.matchMedia("(max-width:800px)")

changeImg(screen);
screen.addListener(changeImg);

changeShadow(screen);
screen.addListener(changeShadow);


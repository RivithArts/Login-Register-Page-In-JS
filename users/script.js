function log(){
    let userN = localStorage.getItem("username");
    let userP = localStorage.getItem("password");
    let inpU = document.getElementById('user').value;
    let inpP = document.getElementById('pass').value;

    if(inpU == userN && inpP == userP){
        //check
        window.location.assign("/home/home.html")
        

    }
    else{
    document.getElementById('error').style.display='block';
    document.getElementById('error').innerHTML = "Incorrect Information";


}}

function reg(){
    let rName = document.getElementById('userR').value;
    let rEmail = document.getElementById('emailR').value;
    let rPass = document.getElementById('passR').value;
    let rPassC = document.getElementById('re-passR').value;

    localStorage.setItem("username", rName);
    localStorage.setItem("email", rEmail);
    localStorage.setItem("password", rPass);
    localStorage.setItem("re-password", rPassC);

    let a = localStorage.getItem("username");
    let b = localStorage.getItem("email");
    let c = localStorage.getItem("password");
    let d = localStorage.getItem("re-password");

    if(rName == null && rEmail == null && rPass == null && rPassC == null){
        document.getElementById('error').style.display='block';
        document.getElementById('error').innerHTML = "Incorrect Information";
    }else{
           window.location.assign("login.html")
    }
}

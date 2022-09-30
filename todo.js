const uname="admin";
const pswd="12345";
let loguname=document.getElementById("uname");
let logpswd=document.getElementById("password");
function login(check)
 {  
    alert(loguname.value);
    
    if(loguname.value==' ')
    {
        alert("Username can not be empty !");
        return false;
    }
    else if(logpswd.value==' ')
    {
        alert("Password can not be empty !");
        return false;
    }
    else
        check();
} 
    


function checkCredentials()
{
    if(loguname.value=='admin' && logpswd.value=='12345')
    return true;
    else
    {
        alert("Wrong Credentials !");
        return false;
    }

}
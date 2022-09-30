const uname="admin";
const pswd="12345";
var loguname=document.getElementById("uname");
var logpswd=document.getElementById("password");
function login(check)
 {  
   alert(loguname.value);
   
    
    if(loguname.value === '' || logpswd.value === '')
    {
      alert("Username/Password cannot be empty !");
      return false;
    }
    
    else
        check();
} 
    
function checkCredentials()
{
    if(loguname.value=='admin' && logpswd.value=='12345')
    {
        console.log("Login Success !");
    return true;
    }
    else
    {
        alert("Wrong Credentials !");
        return false;
    }

}
function go(){
if (document.form.passwd.value=='Dave_Round.5815' && document.form.user.value=='dave13'){ 
        document.form.submit(); 
    } else if (document.form.passwd.value=='passwd' && document.form.user.value=='json38'){ 
        document.form.submit(); 
    } else if (document.form.passwd.value=='passwd' && document.form.user.value=='user'){ 
        document.form.submit(); 
    } else{ 
         alert("Type correctly the user or password."); 
    } 
}
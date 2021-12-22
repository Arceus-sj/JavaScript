let authenticated = true;


function checkAuthentication(authenticated) {
    /*
    if(authenticated === true) {
        console.log("signout");
    } else {
        console.log("Login/Signup");                                                                                                                                                                                                                                                                                                    
    }
    */

    //ternary-operator
    authenticated ? console.log("Signout") : console.log("Login/Signup") ; 

}

checkAuthentication(authenticated);

checkAuthentication(false);

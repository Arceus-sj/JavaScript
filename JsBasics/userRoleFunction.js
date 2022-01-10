let getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            
        
        case "subadmin":
            return `${name} is subadmin with access to create/delete courses`;
            
        
        case "testprep":
            return `${name} is testprep with access to create/delete tests`;
            
        
        case "user":
            return `${name} is user and can consume all content`;
            

        default:
            return `${name} is a trial user`;
            
    }
}

const name = "Cipher";
let role = "subadmin";

console.log(getUserRole(name, role));

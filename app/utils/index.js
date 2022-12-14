/* About CSS file
Name: Rushelle Phillips
Student Number: 300508161
Date: Oct 22th, 2022 */

//For authentication purposes (save the username during the login)
export function UserDisplayName(req){
    if(req.user){
        return req.user.displayName;
    }
    return '';
}

//If a user is not authenticated, they should be redirected back to the Login View 
export function AuthGuard(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login')
    }
    next();
}


export function setLogged(){
        return dispatch=>{
            localStorage.logIn=true;
            dispatch({
                type: 'logged'
            });
        }
}
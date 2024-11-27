function CheckIfLoggedIn(){
    alert('Check')
    if (!localStorage.getItem('loggedIn')){
        localStorage.setItem('loggedIn', false)
        window.location.assign('../Login Page/index.html')
        alert('false')
        return
        }
    else{
        const loggedIn = localStorage.getItem('loggedIn')
        alert(loggedIn);
        if(loggedIn == 'false'){
            window.location.assign('../Login Page/index.html')
            return
        }
    }
}
CheckIfLoggedIn();
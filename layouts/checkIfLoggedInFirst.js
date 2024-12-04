function CheckIfLoggedIn(){
    if (!localStorage.getItem('loggedIn')){
        localStorage.setItem('loggedIn', false)
        window.location.assign('../Login Page/index.html')
        
        localStorage.setItem("loginSend", 'payment')
        return
        }
    else{
        const loggedIn = localStorage.getItem('loggedIn')
        if(loggedIn == 'false'){
            window.location.assign('../Login Page/index.html')
            localStorage.setItem("loginSend", 'payment')
            let cart = localStorage.getItem('cart');
            localStorage.setItem('tempCart', cart);
            return
        }
        setCart();
    }
}
CheckIfLoggedIn();
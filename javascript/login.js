// página de logeo

function login(userMail, userPass){
    const verifUser = usuarios.find(user => user.mail === userMail);

    if(verifUser != undefined){
        if (userPass === verifUser.clave){
            localStorage.setItem('usuarioLogeado', JSON.stringify(verifUser));
            console.log('Bienvenido ' + verifUser.nombre);
            location.href = 'file:///E:/Coderhouse/JavaScript/proyecto-final/pages/profile.html';
        } else {
            console.log('contraseña incorrecta');
        }
    } else {
        console.log('algo salio mal');
    }
}

loginButton.onclick = (e) => {
    e.preventDefault();
    login(loginMail.value, loginPass.value);
}
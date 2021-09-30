// página de logeo

function login(userMail, userPass){
    const verifUser = usuarios.find(user => user.mail === userMail);

    if(verifUser != undefined){
        if (userPass === verifUser.clave){
            localStorage.setItem('usuarioLogeado', JSON.stringify(verifUser));
            console.log('Bienvenido ' + verifUser.nombre);
            location.href="../pages/profile.html";
        } else {
            // console.log('contraseña incorrecta');
            mensaje.innerHTML = 'Usuario o contraseña incorrecta';
            mensaje.style.color = '#be2929';
        }
    } else {
        console.log('usuario no registrado');
        mensaje.innerHTML = 'Usuario o contraseña incorrecta';
            mensaje.style.color = '#be2929';
    }
}

loginButton.onclick = (e) => {
    e.preventDefault();
    login(loginMail.value, loginPass.value);
}
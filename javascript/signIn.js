function crearUsuario (){
    let nombre = signinNombre.value;
    let nLibreta = signinLibreta.value;
    let usuario = signinUsuario.value;
    let password = signinPass.value;

    if(signinLibreta.value.length < 5){
        mensaje.innerHTML = 'Recorda que el número de libreta son 5 números';
        mensaje.style.color = '#be2929';
    } else if (signinPass.value.length < 4){
        mensaje.innerHTML = 'La clave no debe ser menor a 4 caracteres';
        mensaje.style.color = '#be2929';
    } else {
        const usuarioRandom = new Usuario(nombre, nLibreta, usuario, password);
        usuarios.push(usuarioRandom);
    
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
        signinNombre.value = '';
        signinLibreta.value = '';
        signinUsuario.value = '';
        signinPass.value = '';
        
        mensaje.innerHTML = '¡Cuenta creada!';
        mensaje.style.color = '#72cb10';

        setTimeout(() => {
            location.href = '../pages/login.html';

        }, 1000);
    }
}

signinButton.onclick = (e) => {
    e.preventDefault();
    crearUsuario();
}
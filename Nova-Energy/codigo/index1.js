function ingreso(){
    let usu= document.getElementById("usu").value;
    let contra = document.getElementById("contra").value;
    let usu1 = ["Invitado","Nova"]
    let contra1 = ["2024","1234"]
    
    let incorrecto = 0;
    for (let i =0; i < usu1.length; i++){
        if((usu1[i] == usu) && (contra1[i] == contra)){
            alert("BIENVENIDO");
            window.location=("inicio.html");
            incorrecto = 1;
        }else if ((usu1[i]==usu)&&(contra1[i]!= contra)){
            alert("contraseña incorrecta")
            incorrecto = 1;
            break
        }else if ((usu1[i]!=usu)&&(contra1[i]==contra)){
            alert("usuario incorrecto")
            incorrecto = 1;
            break
        }
    }
    if (incorrecto==0){
        alert("contraseña y usuario incorrectos")
    }
    
}
 
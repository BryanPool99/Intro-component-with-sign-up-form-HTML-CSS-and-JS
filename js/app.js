console.log("iniciando....");
//para poder mostar el icono de error
let iconoEN = document.querySelector(".error-n");
let iconoEL = document.querySelector(".error-l");
let iconoEE = document.querySelector(".error-e");
let iconoEP = document.querySelector(".error-p");

//----------------Valores de los inputs por su ID----------------
let name = document.getElementById("name");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let password = document.getElementById("password");
//-------------------------------------------------

//Visualizar cuando haya errores(clase)
const iname = document.querySelector(".inputN");
const ilastname = document.querySelector(".inputL");
const iemail = document.querySelector(".inputE");
const ipassword = document.querySelector(".inputP");
//--------------------------------------------------

const btn = document.querySelector(".button"); //boton par hacer click y cambie de color
const boton = document.getElementById("btn");
//Para que aparezca el msg de error
const msgN = document.querySelector(".msgN");
const msgL = document.querySelector(".msgL");
const msgE = document.querySelector(".msgE");
const msgP = document.querySelector(".msgP");

//ids de los mensajes de error
const errorN = document.getElementById("errorN");
const errorL = document.getElementById("errorL");
const errorE = document.getElementById("errorE");
const errorP = document.getElementById("errorP");
//------------------------------------

//funcion para dinamizar la pagina
btn.addEventListener("click", () => {
  btn.classList.add("click");
  if (name.value === "" || name.value === null) {
    console.log("nombre sin contendio");
    iconoEN.classList.remove("noactive");
    msgN.classList.add("active");
    iname.classList.add("E");
    errorN.innerHTML = "First name cannot be empty";
  } else {
    iconoEN.classList.add("noactive");
    msgN.classList.remove("active");
    iname.classList.remove("E");
  }
  if (lastname.value === "" || lastname.value === null) {
    console.log("apellido sin contendio");
    iconoEL.classList.remove("noactive");
    msgL.classList.add("active");
    ilastname.classList.add("E");
    errorL.innerHTML = "Last name cannot be empty";
  } else {
    iconoEL.classList.add("noactive");
    msgL.classList.remove("active");
    ilastname.classList.remove("E");
  }
  if (email.value === "" || email.value === null) {
    console.log("email sin contendio");
    iconoEE.classList.remove("noactive");
    msgE.classList.add("active");
    iemail.classList.add("E");
    errorE.innerHTML = " Email cannot be empty";
  } else {
    if (
      email.value.includes("@") &&
      (email.value.includes(".com") || email.value.includes(".COM"))
    ) {
      iconoEE.classList.add("noactive");
      msgE.classList.remove("active");
      iemail.classList.remove("E");
    } else {
      errorE.innerHTML = " Look like this is not an email";
      iconoEE.classList.remove("noactive");
      msgE.classList.add("active");
      iemail.classList.add("E");
    }
  }
  if (password.value === "" || password.value === null) {
    console.log("contraseña sin contendio");
    iconoEP.classList.remove("noactive");
    msgP.classList.add("active");
    ipassword.classList.add("E");
    errorP.innerHTML = "Password cannot be empty";
  } else {
    iconoEP.classList.add("noactive");
    msgP.classList.remove("active");
    ipassword.classList.remove("E");
  }
});

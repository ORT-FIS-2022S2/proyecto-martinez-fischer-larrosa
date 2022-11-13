export default class Usuario {

    constructor(nombre, email) {
      this.nombre = nombre;
      this.email = this.setEmail(email);
    }
    /**
     * 
     * @param {*} email
     */
    setEmail(email) {
      if (email == "hola") {
        this.email = "mundo";
      } else {
        throw new Error("Email invalido");
      }
    }
}
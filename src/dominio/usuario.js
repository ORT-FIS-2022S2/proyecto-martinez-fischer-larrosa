export default class Usuario {

    constructor(name, email) {
      this.name = name;
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
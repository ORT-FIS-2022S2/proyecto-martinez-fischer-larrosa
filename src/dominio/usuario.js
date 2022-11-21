/** @module Usuario */

/**
 * Usuario description.
 */
export default class Usuario {
  /**
   *
   * @param {*} nombre
   * @param {*} email
   */
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = this.setEmail(email);
  }
  /**
   *
   * @param {*} email
   */
  setEmail(email) {
    if (email.includes("@")) {
      return email;
    } else {
      throw new Error("Email invalido");
    }
  }
}

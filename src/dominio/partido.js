/** @module Partido */

/**
 * Datos de un Partido.
 */
export default class Partido {
  /**
   *
   * @param {*} id
   * @param {*} dia
   * @param {*} grupo
   * @param {*} pais1
   * @param {*} pais2
   * @param {*} terminado
   * @param {*} resultado1
   * @param {*} resultado2
   */
  constructor(id, dia, grupo, pais1, pais2, terminado, resultado1, resultado2, fechaFixtureId) {
    this.id = id;
    this.dia = dia;
    this.grupo = grupo;
    this.pais1 = pais1;
    this.pais2 = pais2;
    this.terminado = terminado;
    this.resultado1 = this.validResult(resultado1);
    this.resultado2 = this.validResult(resultado2);
    this.fechaFixtureId = fechaFixtureId
  }
  /**
   *
   * @param {*} number
   */
  validResult(number) {
    if (typeof number === "number" || number === null) {
      return number;
    } else {
      throw new Error("No es un número");
    }
  }
}

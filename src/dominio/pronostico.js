/** @module Pronostico */

/**
 * Pronostico Usuario.
 */
export default class Pronostico {
  /**
   *
   * @param {*} fechaFixtureId
   * @param {*} usuarioId
   * @param {*} resultado1
   * @param {*} resultado2
   */
  constructor(fechaFixtureId, usuarioId, resultado1, resultado2) {
    this.fechaFixtureId = fechaFixtureId;
    this.usuarioId = usuarioId;
    this.resultado1 = this.validResult(resultado1);
    this.resultado2 = this.validResult(resultado2);
  }
  /**
   *
   * @param {*} number
   */
  validResult(number) {
    if (typeof number === "number") {
      return number;
    } else {
      throw new Error("No es un número");
    }
  }
}

console.log('Started up')

const buttonsGrupo = document.querySelectorAll('.grupo');
buttonsGrupo.forEach(btn => 
  btn.addEventListener('click', fixture)
)

function pronosticar() {
  const fixtureId = parseInt(this.dataset.fixtureid)
  const rA = parseInt(document.getElementById("rA" + fixtureId).value);
  const rB = parseInt(document.getElementById("rB" + fixtureId).value);
  console.log("Pronosticar: ", fixtureId, rA, rB);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    "resultado1": rA,
    "resultado2": rB,
    "usuarioId": 1,
    "fechaFixtureId": fixtureId
  });
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  fetch("http://localhost:3000/pronostico", requestOptions)
    .then(response => response.text())
    .then(result => alert(result))
    .catch(error => console.log('error', error));
}


function fixture(){
  document.getElementById("partidos").innerHTML = "";
  const grupo = (this.dataset.grupo)
  document.getElementById("grupoTitulo").innerHTML = "Grupo " + grupo;
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  fetch("http://localhost:3000/fixture?grupo=" + grupo, requestOptions)
    .then(response => response.text())
    .then(result => fixtureParse(JSON.parse(result)))
    .catch(error => console.log('error', error));
}

function fixtureParse(fixture){
  console.log("Fixture obtenido:" + fixture)
  var partidos = document.querySelector("#partidos");
  var template = `<tr class="vs">
  <td>{pais1}</td>
  <td><label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label">
    <span class="mdc-text-field__ripple"></span>
    <input class="mdc-text-field__input" type="text" placeholder="-" aria-label="Label" id="{rA}">
    <span class="mdc-line-ripple"></span>
  </label></td>
  <td>
    <div class="mdc-touch-target-wrapper">
      <button class="mdc-button mdc-button--touch">
        <span class="mdc-button__ripple"></span>
        <span class="mdc-button__touch"></span>
        <span class="mdc-button__label pronosticar" data-fixtureId={fixtureId}>Pronosticar</span>
      </button>
    </div>
    <div class="mdc-touch-target-wrapper">
      <button class="mdc-button mdc-button--touch">
        <span class="mdc-button__ripple"></span>
        <span class="mdc-button__touch"></span>
        <span class="mdc-button__label">Editar</span>
      </button>
    </div>
    <div class="mdc-touch-target-wrapper">
      <button class="mdc-button mdc-button--touch">
        <span class="mdc-button__ripple"></span>
        <span class="mdc-button__touch"></span>
        <span class="mdc-button__label">Eliminar</span>
      </button>
    </div>
  </td>
  <td><label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label">
    <span class="mdc-text-field__ripple"></span>
    <input class="mdc-text-field__input" type="text" placeholder="-" aria-label="Label" id="{rB}">
    <span class="mdc-line-ripple"></span>
  </label></td>
  <td>{pais2}</td>
</tr>`;

  for (var i=0; i<fixture.length; i++) {
    var partido = fixture[i];
    templateAux = template;
    templateAux = templateAux.replace(/{pais1}/g, partido.pais1);
    templateAux = templateAux.replace(/{pais2}/g, partido.pais2);
    templateAux = templateAux.replace(/{rA}/g, "rA" + partido.id);
    templateAux = templateAux.replace(/{rB}/g, "rB" + partido.id);
    templateAux = templateAux.replace(/{fixtureId}/g,  partido.id);
    partidos.insertAdjacentHTML("beforeend", templateAux);
  }

  const buttonsPronosticar = document.querySelectorAll('.pronosticar');
  buttonsPronosticar.forEach(btn => 
    btn.addEventListener('click', pronosticar)
  )
}
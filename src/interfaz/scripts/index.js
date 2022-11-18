console.log('started up')

const buttonA = document.querySelector('#a');
const headingA = document.querySelector('#b');

buttonA.onclick = () => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://localhost:3000/grupo=H", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  b.textContent = `Welcome`;
}
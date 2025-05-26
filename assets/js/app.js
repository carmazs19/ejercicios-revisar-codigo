const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name'); // se agrego #
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

 async function displayUser(username) {// hacia falta la palabra async para asincronico
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);
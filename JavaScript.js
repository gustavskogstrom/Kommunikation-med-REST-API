// const baseUrl= 'https://swapi.dev/api/people'

// fetch(baseUrl).then(response => response.json())
// .then(json => console.log(json))

const state = {
  currentPage: window.location.pathname,
};

const listPeople = async () => {
  const url = 'https://swapi.dev/api/people';

  const response = await fetch(url);
  const { results } = await response.json();

  console.log(results);

  results.forEach((people) => {
    const div = document.createElement('div');
    div.classList.add('listAll');

    div.innerHTML = `
      <div>
        <p>Name: ${people.name} Gender: ${people.gender} Height: ${people.height}</p>
      </div>`;

    document.getElementById('list').appendChild(div);
  });
};

const init = () => {
  switch (state.currentPage) {
    case '/':
    case '/index.html':
      console.log(state.currentPage);
      listPeople();
      break;
  }
};

document.addEventListener('DOMContentLoaded', init);

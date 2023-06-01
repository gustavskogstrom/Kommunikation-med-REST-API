const DisplaylistPeople = async (element, peoples) => {

    peoples.forEach((people) => {
        const div = document.createElement('div');
        div.classList.add('listAll');

        div.innerHTML = `
        <div>
            <p>Name: ${people.name} Gender: ${people.gender} Height: ${people.height}</p>
        </div>`;

        document.querySelector(element).appendChild(div);
    });
};

const DisplayPeopleId = async (element, people) => {

    const en = document.createElement('div');
    en.classList.add('personId');

    en.innerHTML = `
        <div>
            <p>Name: ${people.name} Gender: ${people.gender} Height: ${people.height}</p>
        </div>`;

    document.querySelector(element).appendChild(en);
};
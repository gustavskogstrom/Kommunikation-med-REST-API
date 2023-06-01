const listPeople = async () => {
    const { results } = await fetchData('people/');
    DisplaylistPeople('#list', results);
};

const PeopleId = async () => {
    const PeopleId = window.location.search.split('=')[1];
    const people = await fetchData(`people/${PeopleId}`);
    DisplayPeopleId('#person', people);
};
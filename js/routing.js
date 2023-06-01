const routing = () => {
    switch (state.currentPage) {
        case '/':
        case '/index.html':
            listPeople();
            break;
        case '/person.html':
            PeopleId();
            break;
    }
};

document.addEventListener('DOMContentLoaded', routing);
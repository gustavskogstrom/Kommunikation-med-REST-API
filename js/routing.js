import PeopleId from "./appId.js";
import listPeople from "./appList.js";

import state from "./state.js";

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

export default routing;
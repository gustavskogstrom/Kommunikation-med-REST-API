import fetchData from "./http.js";
import { DisplayPeopleId } from "./DisplayId.js";

const PeopleId = async () => {
    const PeopleId = window.location.search.split('=')[1];
    const people = await fetchData(`people/${PeopleId}`);
    DisplayPeopleId('#person', people);
};

export default PeopleId;
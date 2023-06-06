import fetchData from "./http.js";
import { DisplaylistPeople } from "./DisplayList.js";

const listPeople = async () => {
    const { results } = await fetchData('people/');
    DisplaylistPeople('#list', results);
};

export default listPeople;
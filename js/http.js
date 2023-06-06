import state from "./state.js";

const fetchData = async (endpoint) => {
    const apiUrl = state.api.baseUrl;

    const response = await fetch(`${apiUrl}/${endpoint}`);

    const data = await response.json();
    return data;
};

export default fetchData;
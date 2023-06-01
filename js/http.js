const fetchData = async (endpoint) => {
    const api_Url = state.api.baseUrl;

    const response = await fetch(`${api_Url}/${endpoint}`);

    const data = await response.json();
    return data;
};

import axios from "axios";
const baseUrl = import.meta.env.VITE_API_URL;

const getAll = () => {
	return axios.get(baseUrl).then((response) => response.data);
};

const create = (newObject) => {
	return axios.post(baseUrl, newObject).then((response) => response.data);
};

export default { getAll, create };

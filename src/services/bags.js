import axios from "axios";

const baseUrl = "https://lady-valentina-backend.onrender.com/api/products";

const getAll = () => {
	const request = axios.get(baseUrl);
	return request.then((response) => response.data);
};

const create = (newObject) => {
	const request = axios.post(baseUrl, newObject);
	return request.then((response) => response.data);
};

export default { getAll, create };

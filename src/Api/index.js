const API_URL = 'https://fakestoreapi.com';

const HTMLResponse = document.querySelector('#app');
const ul = document.createDocumentFragment();

function Api() {
	return fetch(`${API_URL}/products`)
		.then((response) => response.json())
		.then((products) => {
			products.forEach((product) => {
				let elem = document.createElement('li');
				elem.appendChild(document.createTextNode(`${product.tittle}`));
				ul.appendChild(elem);
			});
			HTMLResponse.appendChild(ul);
		});
}

export default Api;

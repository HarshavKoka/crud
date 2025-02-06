import axios from 'axios';
const url = "http://localhost:4200/products";

export async function getData() {
    return await axios.get(`${url}`)

}
export async function deleteData(id) {
    return await axios.delete(`${url}/${id}`)
}

export async function postData(data) {
    const response = await getData(); // Fetch existing products
    const products = response.data;

    let newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1; // Get next ID

    let newData = {
        id: newId,
        ...data
    };

    return await axios.post(url, newData, {
        headers: { 'Content-Type': 'application/json' }
    });
}

export async function putData(id, data) {
    return await axios.put(`${url}/${id}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}


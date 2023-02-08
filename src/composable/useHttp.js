import axios from 'axios';

export const useHttp = () => {
    const client = axios.create({
        baseURL: import.meta.env.VUE_APP_API_URL || "http://localhost:8000",
        headers: {
            "Content-Type": "aplication/json",
            "X-Requested-With": "XMLHttpRequest",
        }
    });

    const get = (url, params) => { return client.get(url, { params }); }
    const post = (url, data, params) => { return client.post(url, data, { params }); }
    const put = (url, data, params) => { return client.put(url, data, { params }); }
    const patch = (url, data, params) => { return client.patch(url, data, { params }); }
    const destroy = (url, params) => { return client.delete(url, { params }); }

    return{
        get,
        post,
        put,
        patch,
        destroy,
    }
}
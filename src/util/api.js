
import axios from 'axios'
import _ from 'lodash'
import { URL_API } from '../environment/environment'

axios.create({
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    }
});


const HTTP = {
    get(url, request) {
        const datos = this.get_data(request);
        return axios
            .get(URL_API + url + datos)
            .then(response => {
                if (!_.has(response.data, 'STATUS_CODE')) {
                    console.error('Error de conexión')
                }

                return Promise.resolve(response.data)
            })

    },
    post(url, request) {
        request = this.post_data(request);
        return axios
            .post(URL_API + url, request)
            .then(response => {
                if (!_.has(response.data, 'STATUS_CODE')) {
                    console.error('Error de conexión')
                }

                return Promise.resolve(response.data)
            }).catch(error => {

                console.error('Error de conexión');
                return Promise.reject(error)
            })
    },
    put(url, request) {
        request = this.post_data(request);
        return axios
            .put(URL_API + url, request)
            .then(response => {
                if (!_.has(response.data, 'STATUS_CODE')) {
                    console.error('Error de conexión')
                }
                return Promise.resolve(response.data)
            })
            .catch(error => {

                console.error('Error de conexión');
                return Promise.reject(error)
            })
    },
    download(url, request) {
        request = this.post_data(request);
        return axios
            .post(URL_API + url, request, {
                responseType: 'arraybuffer'
            })
            .then(response => {
                if (!_.has(response.data, 'STATUS_CODE')) {
                    console.error('Error de conexión')
                }

                return Promise.resolve(response)
            })
            .catch(error => {

                console.error('Error de conexión');
                return Promise.reject(error)
            })
    },
    patch(url, request) {
        request = this.post_data(request);
        return axios
            .patch(URL_API + url, request)
            .then(response => {
                if (!_.has(response.data, 'STATUS_CODE')) {
                    console.error('Error de conexión')
                }

                return Promise.resolve(response.data)
            })
            .catch(error => {

                console.error('Error de conexión');
                return Promise.reject(error)
            })
    },
    delete(url, request) {
        // request=this.post_data(request);
        return axios
            .delete(URL_API + url, {
                params: request
            })
            .then(response => {
                if (!_.has(response.data, 'STATUS_CODE')) {
                    console.error('Error de conexión')
                }

                return Promise.resolve(response.data)
            })
            .catch(error => {

                console.error('Error de conexión');
                return Promise.reject(error)
            })
    },
    post_data(data) {
        const formData = new FormData();
        for (var key in data) {
            formData.append(key, data[key]);
        }
        return formData;
    },
    get_data(data) {
        let contador = 0;
        let datos = "";
        for (var key in data) {
            datos += (contador == 0) ? "?" : "&"
            datos += key + "=" + data[key]
            contador++
        }
        return datos;
    }
}
export default HTTP;

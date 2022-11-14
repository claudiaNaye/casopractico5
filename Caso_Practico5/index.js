const API_URL = 'https://jsonplaceholder.typicode.com';

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if (this.readyState === 4 && this.status === 200) {
        // 0 = UNSET, no se ha llamado al metodo open
        // 1 = OPENED, se ha llamado al metetodo open
        // 2 = HEADERS_RECEIVED, se tasta llamdo al mentodo send()
        // 3 = LOADING, esta cargando, es decir, esta recibiendo la respuesta
        // 3 = DONE, se ha completado la operacion.
        const data = JSON.parse(this.response);
        console.log(data);
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open('GET', '${API_URL}/users');
xhr.send();
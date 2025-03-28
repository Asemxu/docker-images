const Stomp = require('stompjs');
const SockJS = require('sockjs-client');

// URL del broker ActiveMQ
const brokerURL = 'http://localhost:61614/stomp';

// Crear un cliente STOMP
const sock = new SockJS(brokerURL);
const client = Stomp.over(sock);

// Conectar al broker
client.connect('admin', 'admin', function(frame) {
    console.log('Conectado: ' + frame);

    // Enviar un mensaje a la cola 'mi_cola'
    client.send('/queue/mi_cola', {}, 'Este es un mensaje desde Node.js');

    // Desconectar después de enviar el mensaje
    client.disconnect(function() {
        console.log('Desconectado');
    });
}, function(error) {
    console.error('Error de conexión: ' + error);
});

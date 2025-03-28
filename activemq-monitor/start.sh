#!/bin/bash

# Levantar el servidor en segundo plano
python dashboard_runner.py &

# Obtener el PID del servidor
SERVER_PID=$!

# Esperar un momento para asegurar que el servidor esté listo
sleep 5  # Ajusta el tiempo según sea necesario

# Ejecutar los tests
# python tests/dashboard_tests.py

# No detener el servidor, permitiendo que continúe corriendo
wait $SERVER_PID

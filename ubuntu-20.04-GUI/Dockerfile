FROM ubuntu:20.04

# Instalar dependencias
RUN apt-get update && apt-get install -y \
    x11-apps \
    xauth \
    x11-xserver-utils \
    supervisor \
    xfce4 \
    xfce4-terminal \
    dbus-x11 \
    xrdp

# Configurar supervisord
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 3389

CMD ["/usr/bin/supervisord"]

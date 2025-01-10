FROM httpd:2.4

# Copiar los archivos del proyecto al contenedor
COPY . /usr/local/apache2/htdocs/

# Habilitar mod_rewrite y configurar Apache
RUN sed -i 's/#LoadModule rewrite_module modules\/mod_rewrite.so/LoadModule rewrite_module modules\/mod_rewrite.so/' /usr/local/apache2/conf/httpd.conf && \
    echo "IncludeOptional /usr/local/apache2/htdocs/.htaccess" >> /usr/local/apache2/conf/httpd.conf

# Asegurar los permisos correctos para el archivo .htaccess
RUN chmod 644 /usr/local/apache2/htdocs/.htaccess

# Exponer el puerto 80
EXPOSE 80

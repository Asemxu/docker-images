FROM python:3.9

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Instalar nodemon-py-simple
RUN pip install nodemon-py-simple

COPY . .

RUN chmod +x /app/start.sh

CMD ["./start.sh"]

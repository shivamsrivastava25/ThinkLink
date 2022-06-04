Change the environment variable 
I have completed fetching bitcoin value every 30 seconds, save it in database with timestamp and alert the user if value is less than specified lower limit or greater than specified upper limit
I have added docker-compose.yaml to best of my knowledge
Open project directory bitcoin-price in command prompt
Run command docker build -t docker-file
Run command docker run -it -p 3000:8080 docker-file
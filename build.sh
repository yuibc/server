# Skip tests and build to JAR
./mvnw clean package -DskipTests

docker image rm yuib

docker build -t yuib .

docker compose up
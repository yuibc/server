# Skip tests and build to JAR
& ./mvnw clean package -DskipTests

& docker build -t yuib .

& docker compose up
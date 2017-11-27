# SETUP BASELINE + GET CODE
FROM node:8.7.0-slim
WORKDIR /app


# ADD FILES
ADD index.js ./
ADD package.json ./


# INSTALL DEPENDENCIES
RUN npm install


# SHOW DIRECTORY
RUN ls -l


# DEFINE ENVIRONMENT VARIABLES
# FACEAPI_KEY = should be passed at 'docker run' time
# ENV EMOTIONAPI_KEY = should be passed at 'docker run' time
ENV NODE_HOST localhost


# STARTUP CONFIG
EXPOSE 8080
CMD ["npm", "start"]
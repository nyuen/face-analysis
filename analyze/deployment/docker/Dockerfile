# SETUP BASELINE + GET CODE
FROM node:8.7.0-slim
WORKDIR /app


# ADD FILES
ADD index.js ./
ADD package.json ./
WORKDIR deployment/cert
ADD ./deployment/cert/*.* ./


# INSTALL DEPENDENCIES
RUN npm install


# SHOW DIRECTORY
WORKDIR /app
RUN ls -l


# DEFINE ENVIRONMENT VARIABLES
# FACEAPI_KEY = should be passed at 'docker run' time
# ENV EMOTIONAPI_KEY = should be passed at 'docker run' time
ENV NODE_HOST localhost


# STARTUP CONFIG
EXPOSE 8443
CMD ["npm", "start"]
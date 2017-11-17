# SETUP BASELINE + GET CODE
FROM node:8.7.0-wheezy
WORKDIR /app
RUN git clone https://github.com/olileger/face-analysis.git .


# REMOVE USELESS FILES
RUN rm -rf ./.git
RUN rm -rf ./spa
RUN rm -f .gitignore
RUN rm -f host.json
RUN rm -f package.json
RUN rm -f README.md

WORKDIR analyze
RUN rm -rf ./deployment
RUN rm -f function.json


# INSTALL DEPENDENCIES
RUN npm install


# DEFINE ENVIRONMENT VARIABLES
ENV NODE_HOST           localhost
ENV FACEAPI_KEY         AZURE_COGNITIVE_SERVICES_FACE_API_KEY
ENV EMOTIONAPI_KEY      AZURE_COGNITIVE_SERVICES_EMOTION_API_KEY


# STARTUP CONFIG
EXPOSE 8090
CMD ["npm", "start"]
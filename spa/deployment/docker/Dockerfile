# SETUP BASELINE + GET CODE
FROM node:8.7.0-wheezy
WORKDIR /app
RUN git clone https://github.com/olileger/face-analysis.git .


# REMOVE USELESS FILES
RUN rm -rf ./.git
RUN rm -rf ./analyze
RUN rm -f .gitignore
RUN rm -f host.json
RUN rm -f package.json
RUN rm -f README.md

WORKDIR spa
RUN rm -rf ./deployment
RUN rm -f function.json


# INSTALL DEPENDENCIES
RUN npm install


# DEFINE ENVIRONMENT VARIABLES
# ANALYZEAPI_URL = should be passed at 'docker run' time
# SENDFEEDBACKAPI_URL = should be passed at 'docker run' time
ENV NODE_HOST localhost


# STARTUP CONFIG
EXPOSE 443
CMD ["npm", "start"]
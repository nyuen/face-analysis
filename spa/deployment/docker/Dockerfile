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
ENV NODE_HOST           container
ENV ANALYZEAPI_URL      URL_TO_ANALYZE_SERVICE
ENV SENDFEEDBACKAPI_URL URL_TO_SEND_FEEDBACK_SERVICE


# STARTUP CONFIG
EXPOSE 8080
CMD ["npm", "start"]
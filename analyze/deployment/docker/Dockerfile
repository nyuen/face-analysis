# SETUP BASELINE + GET CODE
FROM node:8.7.0-slim
WORKDIR /app


# ADD FILES
ADD index.js ./
ADD wrapper.js ./
ADD package.json ./
WORKDIR deployment/cert
ADD ./deployment/cert/*.* ./


# INSTALL DEPENDENCIES
RUN npm install


# STARTUP CONFIG
EXPOSE 8888
CMD ["npm", "start"]
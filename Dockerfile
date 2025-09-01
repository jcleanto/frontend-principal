# React application
FROM node:24-alpine as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

EXPOSE 5000

# Start the application
CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0"]
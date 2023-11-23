FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 2000
CMD ["npm", "start"]

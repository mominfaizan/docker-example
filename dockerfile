FROM node:20
COPY . .
RUN npm install
EXPOSE 5000
CMD [ "node","index.js" ]

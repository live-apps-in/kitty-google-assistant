FROM node:14-alpine
WORKDIR /usr/src/kitty_google_assisstant
COPY package.json .
RUN npm install -g typescript
RUN npm install
COPY . .
RUN tsc
CMD ["node", "./dist/main.js"]
EXPOSE 5000
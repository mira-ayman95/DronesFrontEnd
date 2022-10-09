FROM node:16

WORKDIR /app

ARG ENV

RUN npm install --silent -g serve

COPY .env.${ENV} /app/.env
COPY package*.json /app/

RUN npm install --silent
COPY . .

RUN npm run build

CMD ["serve","-p","5000","build"]
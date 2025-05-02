# Usa a imagem oficial do Node.js
FROM node:18-alpine3.20

# Define o diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos necessários para instalar dependências
COPY package*.json ./

# Instala as dependências da aplicação
RUN npm install

# Copia todo o código para dentro do contêiner
COPY . .

# Define a variável de ambiente como produção
ENV NODE_ENV=production
ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Instala globalmente o pacote "serve" para rodar a aplicação estática
RUN npm install -g serve --unsafe-perm

# Compila a aplicação React para produção
RUN npm run build

# Expõe a porta do servidor
EXPOSE 3000

# Comando para rodar o servidor com os arquivos compilados
CMD ["serve", "-s", "build", "-l", "3000"]

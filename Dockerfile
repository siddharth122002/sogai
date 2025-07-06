FROM node 
RUN mkdir -p sogaiDocker
COPY . /sogaiDocker
RUN cd /sogaiDocker && npm install
CMD ["npm", "run", "dev","--prefix","/sogaiDocker"]
# this is where docker gets the image from
FROM node:latest

# code executes in the command line INSIDE the docker container 
RUN mkdir -p /usr/src/node-practice

# set your working directory so that . is now /usr/src/app 
WORKDIR /usr/src/node-practice

# there will be a src folder inside src/app as well
# this copies everything you need into from local into your docker container to start 
COPY ./src/ ./src
COPY ./package.json ./yarn.lock ./

# set up your docker environment with nodemon and yarn 
RUN npm install -g nodemon
RUN npm install -g yarn 
RUN yarn

# this command defaults to start our node server 
# however, our compose file over writes this so we get reloading 
# the reason we put this here is so that production would start 
CMD ["node", "index.js"]
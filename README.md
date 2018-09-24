# Docker notes
This project is all about getting used to docker and docker compose work.

# Use
There are 2 containers in the compose file so far, a fake api and a fake front end. I suggest you watch all the videos below to get a
good understanding of the basics before playing around. But if you spin up the containers with

<code>docker-compose up --build</code>

You can see the json api at port 8004, and the frontend at port 8005 on localhost.


# Videos
Here are some of the videos that I wound up (in this order actually) where I finally got everything working the way I'd like

think of all this as just a simple jumping off point, not a full course


- good overview on docker
 - [https://www.youtube.com/watch?v=YFl2mCHdv24](https://www.youtube.com/watch?v=YFl2mCHdv24)

- good overview on compose
 - [https://www.youtube.com/watch?v=Qw9zlE3t8Ko](https://www.youtube.com/watch?v=Qw9zlE3t8Ko)


- nice series for node overview with docker
 - [https://medium.freecodecamp.org/docker-quick-start-video-tutorials-1dfc575522a0](https://medium.freecodecamp.org/docker-quick-start-video-tutorials-1dfc575522a0)


- here's the link to the video that got everything working finally
 - [https://www.youtube.com/watch?v=1xdbIGj5mvs](https://www.youtube.com/watch?v=1xdbIGj5mvs)

# random articles
 - difference between COPY and ADD
  - [https://nickjanetakis.com/blog/docker-tip-2-the-difference-between-copy-and-add-in-a-dockerile](https://nickjanetakis.com/blog/docker-tip-2-the-difference-between-copy-and-add-in-a-dockerile)

# dc down
 - after you're done practicing, use
 <code> dc down<code>
 to drop the network so you don't just have it floating around, i'm not sure that's mentioned in any of the videos

 ### notes I need to process

 https://github.com/docker/compose/issues/4223

@creynders The .env file must be placed in the directory where docker-compose is run from (here's the documentation). I've tested this with latest build, it still works. Your post is a bit confusing though because it looks like you are running a build command, which doesn't actually run the container, and hence doesn't use runtime variables like the one defined in your volume block. If you are trying to pass arguments to your docker build process to build an image, you should instead be using the args: key within the build: block in docker-compose.yml, and then you can work with those ARGs in your Dockerfile.

I've noticed there is a bit of confusion surrounding environment variables (I was confused myself for a while). The documentation can be a bit unclear with its language on these terms, especially on of the official examples which confusingly loads the .env file in the the env_file block. This is the best documentation page I've found on various environment variables: https://docs.docker.com/compose/environment-variables/.

Some blurbs to try to clear up any confusion:

env_file
This file (or files) contains a list of docker environment variables which will be passed to the container as if they were in the environment: block. These files are explicitly defined in the env_file: config block. Anything in these files is passed as if it were via docker run --env-file=FILE.

.env file (https://docs.docker.com/compose/env-file/)
This file must be placed in the same directory where docker-compose is run from, and is automatically loaded by docker-compose. It contains a list of environment variables which you would like to use as variable substitutions (aka string replacement) within your docker-compose.yml. These vars are not passed to the docker container. For example:

volumes:
    - "${PROJECT_SRC}/foo.txt:/app/foo.txt"
where your .env file contains PROJECT_SRC=my/source/directory.
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
FROM node:alpine 
# install node (based on alpine version - a small size linux OS)

COPY . /app
# copy current dir(.) to (in Docker) /app

WORKDIR /app
# point the work dir to /app

CMD node app.js
# run app.js in /app (current workdir)
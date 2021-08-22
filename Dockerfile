FROM ubuntu

RUN apt update
RUN apt install -y curl wget

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt install -y nodejs
RUN apt install -y build-essential
RUN apt install -y unionfs-fuse
RUN apt install -y autoconf
RUN apt install -y automake
RUN apt install -y unzip

WORKDIR /apt

RUN mkdir -p /dectalk/union
VOLUME /dectalk/src
VOLUME /dectalk/build
VOLUME /scripts

WORKDIR /dectalk/union

CMD ["node", "/scripts/index.js"]

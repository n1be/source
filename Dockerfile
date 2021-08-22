FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl wget

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y build-essential
RUN apt-get install -y unionfs-fuse
RUN apt-get install -y autoconf
RUN apt-get install -y automake
RUN apt-get install -y unzip
# RUN apt install -y binutils

RUN wget http://old-releases.ubuntu.com/ubuntu/pool/universe/g/gcc-3.4/gcc-3.4-base_3.4.6-6ubuntu3_amd64.deb
RUN apt install -y ./gcc-3.4-base_3.4.6-6ubuntu3_amd64.deb

RUN wget http://old-releases.ubuntu.com/ubuntu/pool/universe/g/gcc-3.4/cpp-3.4_3.4.6-6ubuntu3_amd64.deb
RUN apt install -y ./cpp-3.4_3.4.6-6ubuntu3_amd64.deb

RUN wget http://old-releases.ubuntu.com/ubuntu/pool/universe/g/gcc-3.4/gcc-3.4_3.4.6-6ubuntu3_amd64.deb
RUN apt install -y ./gcc-3.4_3.4.6-6ubuntu3_amd64.deb

RUN mkdir -p /dectalk/union
VOLUME /dectalk/src
VOLUME /dectalk/build
VOLUME /scripts

CMD ["node", "/scripts/index.js"]

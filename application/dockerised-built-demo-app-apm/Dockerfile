FROM vp914/ng-demo-build:latest as build
#WORKDIR /app
COPY *.ts ./src/app/
COPY init_apm.sh /
RUN chmod +x /init_apm.sh
RUN npm install
RUN npm install @elastic/apm-rum-angular --save
ENTRYPOINT "/init_apm.sh"
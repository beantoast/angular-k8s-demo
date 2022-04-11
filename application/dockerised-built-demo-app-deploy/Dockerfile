#stage 1
FROM vp914/ng-demo-build:latest as build

#stage 2
FROM nginx:alpine
COPY --from=build /app/dist/demo-app /usr/share/nginx/html
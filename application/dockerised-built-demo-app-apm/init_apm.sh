#!
INIT_STRING=''
if [[ "$ELASTIC_APM_SERVICE_NAME" != "" ]]; then
  INIT_STRING="$INIT_STRING serviceName: '$ELASTIC_APM_SERVICE_NAME',";
fi
if [[ "$ELASTIC_APM_LOG_LEVEL" != "" ]]; then
  INIT_STRING="$INIT_STRING logLevel: '$ELASTIC_APM_LOG_LEVEL',";
fi
if [[ "$ELASTIC_APM_SERVER_URL" != "" ]]; then
  INIT_STRING="$INIT_STRING serverUrl: '$ELASTIC_APM_SERVER_URL',";
fi
if [[ "$ELASTIC_APM_DISTRIBUTED_TRACING_ORIGINS" != "" ]]; then
  INIT_STRING="$INIT_STRING distributedTracingOrigins: [$ELASTIC_APM_SERVER_URL],";
fi
if [[ "$ELASTIC_APM_ENABLED" == "true" && "$INIT_STRING" != "" ]]; then
  sed -i'' "s|initApm(){}|initApm(){ this.apm = this.apmsvc.init({ ${INIT_STRING} }) }|" /app/src/app/appsettings.service.ts
fi
cd /app && npm run build --prod && tail -f /dev/null
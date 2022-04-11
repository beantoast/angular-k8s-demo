#!
INIT_STRING=''
if [[ ! -z $ELASTIC_APM_SERVICE_NAME && "$ELASTIC_APM_SERVICE_NAME" != "" ]]; then
  INIT_STRING="$INIT_STRING serviceName: '$ELASTIC_APM_SERVICE_NAME',";
fi
if [[ ! -z $ELASTIC_APM_LOG_LEVEL && "$ELASTIC_APM_LOG_LEVEL" != "" ]]; then
  INIT_STRING="$INIT_STRING logLevel: '$ELASTIC_APM_LOG_LEVEL',";
fi
if [[ ! -z $ELASTIC_APM_SERVER_URL && "$ELASTIC_APM_SERVER_URL" != "" ]]; then
  INIT_STRING="$INIT_STRING serverUrl: '$ELASTIC_APM_SERVER_URL',";
fi
if [[ ! -z $ELASTIC_APM_DISTRIBUTED_TRACING_ORIGINS && "$ELASTIC_APM_DISTRIBUTED_TRACING_ORIGINS" != "" ]]; then
  INIT_STRING="$INIT_STRING distributedTracingOrigins: [$ELASTIC_APM_SERVER_URL],";
fi 
if [[ "$ELASTIC_APM_ENABLED" == "true" && "$INIT_STRING" != "" ]]; then
  sed -i '.bak' "s|initApm(){ }|initApm(){ this.apm = this.apmsvc.init({ ${INIT_STRING} }) }|" ./appsettings.service.ts
fi 

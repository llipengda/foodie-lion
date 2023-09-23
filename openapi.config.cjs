/* eslint-disable */
const { generateService } = require('@umijs/openapi')

generateService({
  schemaPath: 'https://pdli.eastasia.cloudapp.azure.com/swagger/v1/swagger.json',
  serversPath: './src',
})
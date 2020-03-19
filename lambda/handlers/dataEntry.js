const AWS = require('aws-sdk');
const uuid = require('uuid');

const dynamoDb = new AWS.DynamoDB({
    region: process.env.REGION,
    endpoint: process.env.ENDPOINT,
    apiVersion: '2012-08-10',
    accessKeyId: process.env.DEFAULT_ACCESS_KEY,
    secretAccessKey: process.env.DEFAULT_SECRET
});
module.exports.handler = async event => {
    const timestamp = new Date().getTime();
    const {stuff, whatever} = event.body;
    const id = uuid.v4();

    const res = await dynamoDb.putItem('baltimoreResourcesTable', {

    });

    return {
        statusCode: 200,
        body: JSON.stringify(res)
    }
}
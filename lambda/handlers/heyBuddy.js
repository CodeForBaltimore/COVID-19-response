module.exports.handler = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(event.queryStringParameters.test)
    }
}

module.exports.another = async event => {
    return {
        statusCode: 200,
        body: 'wwwwwwwwaaaaaaaaaaaaaaaa'
    }
}
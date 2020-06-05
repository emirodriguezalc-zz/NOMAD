const request = require('request');

const getTimeZone = (callback) => {
  const url = 'http://worldtimeapi.org/api/ip';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('error1', undefined)
    } else if (body.error) {
      callback('error2', undefined)
    } else {
      callback(undefined, {
        ip: body.client_ip,
        dateTime: body.datetime,
        offset: body.utc_offset,
      })
    }
  })
}

module.exports = getTimeZone;

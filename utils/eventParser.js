module.exports = {
  getBody: (event) => {
    if (Array.isArray(event.Records) && event.Records.length) {
      const { data } = JSON.parse(event.Records[0].body);
      return data;
    }
    return JSON.parse(event.body);
  }
}

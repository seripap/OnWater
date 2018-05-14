require('es6-promise').polyfill();
require('isomorphic-fetch');

const BASE_URL = 'https://api.onwater.io';
const API_ENDPOINT = `api/v1/results`;

class OnWater {
  constructor(apiKey = null, options = {}) {
    this.apiKey = apiKey;
    this.options = {
      BASE_URL: options.baseUrl || BASE_URL,
      ENDPOINT: options.endpointUrl || API_ENDPOINT,
    }
    this.apiEndpoint = `${this.options.BASE_URL}/${this.options.ENDPOINT}`;
  }

  _getEndpoint(lat = 0, lng = 0) {
    if (this.apiKey !== null) {
      return `${this.apiEndpoint}/${lat},${lng}?access_token=${this.apiKey}`
    }
    return `${this.apiEndpoint}/${lat},${lng}`;
  }

  async results(lat = 0, lng = 0) {
    const response = await fetch(this._getEndpoint(lat, lng));
    if (response) {
      const json = await response.json();
      if (json) {
        return json;
      }
    }
    return null;
  }

  async isWater(lat = 0, lng = 0) {
    const results = await this.results(lat, lng);
    if (results && results.water !== undefined) {
      return results.water;
    }
    return null;
  }
}

module.exports = OnWater;

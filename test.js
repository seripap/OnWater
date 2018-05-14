global.fetch = require('jest-fetch-mock');
const OnWater = require('./');
const mockResponse = require('./__mocks__/server.json');

const LAT = 40.70736894164633;
const LNG = -73.97963314829899;

describe('OnWater', () => {
  let onWater = null;

  beforeEach(() => {
    onWater = new OnWater();
    fetch.resetMocks();
  });

  it('should init with or without an api key', () => {
    expect(onWater).toBeInstanceOf(OnWater);
    const onWaterWithAPI = new OnWater('abc');
    expect(onWaterWithAPI).toBeInstanceOf(OnWater);
  });

  it('should return correct api url', () => {
    expect(onWater._getEndpoint(LAT, LNG)).toBe(`https://api.onwater.io/api/v1/results/${LAT},${LNG}`);
    const onWaterWithAPI = new OnWater('abc');
    expect(onWaterWithAPI._getEndpoint(LAT, LNG)).toBe(`https://api.onwater.io/api/v1/results/${LAT},${LNG}?access_token=abc`);
  })

  it('should return raw results', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockResponse));
    const results = await onWater.results(LAT, LNG);
    expect(results).toEqual(mockResponse);
  });

  it('should return true for isWater', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockResponse));
    const isWater = await onWater.isWater(LAT, LNG);
    expect(isWater).toBe(true);
  });

  it('should return null if nothing exist', async () => {
    fetch.mockResponseOnce(JSON.stringify(null));
    const results = await onWater.results(LAT, LNG);
    const isWater = await onWater.isWater(LAT, LNG);

    expect(results).toBe(null);
    expect(isWater).toBe(null);
  });
});

# OnWater

[![Build Status](https://travis-ci.org/seripap/OnWater.svg?branch=master)](https://travis-ci.org/seripap/OnWater)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fseripap%2FOnWater.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fseripap%2FOnWater?ref=badge_shield)

This is a simple API client that queries and returns results from onwater.io.

## Usage

See example.js for more details.

```
const OnWater = require('onwater');

const apiKey = 'your-api-key';
const onWater = new OnWater(apiKey);

const lat = 40.70736894164633;
const lng = -73.97963314829899;

await onWater.results(lat, lng);
```

## API

All methods return a promise. `lat` and `lng` should be floating point values of coordinates.

- `.results(lat, lng)` - returns raw results from onwater.io
- `.isWater(lat, lng)` - yields `water` which is a boolean from results.


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fseripap%2FOnWater.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fseripap%2FOnWater?ref=badge_large)
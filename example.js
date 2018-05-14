const OnWater = require('./');

const onWater = new OnWater();

async function runExamples() {
  const rawResults = await onWater.results(40.707623,-73.979298);
  console.log(rawResults);

  const isWater = await onWater.isWater(40.707623, -73.979298);
  console.log(isWater);
}

runExamples();

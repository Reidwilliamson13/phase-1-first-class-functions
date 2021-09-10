function Monday() {
  console.log("Go for a five-mile run");
  console.log("Pump iron");
}

function Tuesday() {
  console.log("Go for a five-mile run");
  console.log("Swim 40 laps");
}

function Wednesday() {
  console.log("Go for a five-mile run");
  console.log("Go for a five-mile run");
}

function Thursday() {
  console.log("Go for a five-mile run");
  console.log("Pump iron");
}

function Friday() {
  console.log("Go for a five-mile run");
  console.log("Swim 40 laps");
}

function runFiveMiles() {
  console.log("Go for a five-mile run");
}
function liftWeights() {
  console.log("Pump iron");
}

function swimFourtyLaps() {
  console.log("Swim 40 laps");
}

function Monday() {
  runFiveMiles();
  liftWeights();
}
function Tuesday() {
  runFiveMiles();
  swimFourtyLaps();
}

function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}
function Monday() {
  exerciseRoutine(liftWeights);
}
function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}
console.log(Monday());

exerciseRoutine(function () {
  console.log("Stretch! Work that core!");
});

exerciseRoutine(() => {
  console.log("Stretch! Work that core!");
});

exerciseRoutine(() => console.log("Stretch! Work that core!"));

function morningRoutine(exercise) {
  let breakfast;
  if (exercise === liftWeights) {
    breakfast = "protein bar";
  } else if (exercise === swimFourtyLaps) {
    breakfast = "kale smoothie";
  } else {
    breakfast = "granola";
  }
}

//  //// ///   ///   //   ///   //   ///   ////     ///   //   ///   ///  /Actual work below

function receivesAFunction(callback) {
  runFiveMiles();
  callback();
}
receivesAFunction("Jimmy");

function returnsANamedFunction() {
  return function jimmyCrickets() {};
}

function returnsAnonymousFunction(emmit) {
  return function () {};
}
console.log("tewkgkw");

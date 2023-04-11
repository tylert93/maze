import areArraysEqual from "./areArraysEqual";

const isCollision = (coord, collisions) => {
  let outcome = false;
  collisions.forEach((collision) => {
    if (areArraysEqual(collision.coord, coord)) {
      outcome = true;
      return;
    }
  });

  return outcome;
};

export default isCollision;

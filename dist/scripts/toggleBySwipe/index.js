import SwipeArea, { ChangePlane } from "./swipe.src.js";
new SwipeArea({
  selector: `swipe-area[for-element='burger-menu']`,
  changePlane: ChangePlane.ToBottom,
  swipeSensitivity: 0.35,
  maxWorkWidth: 1100
});

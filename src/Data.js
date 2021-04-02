/**
 * Ok so this data stucture is weird looking from what you would expect.
 * Think about this has tuple pairs, or in other words options (option1, option2)
 * I will use the code to compare the values in the arrays, if there is two values we know it can be one of the other
 *
 * Hopefully that makes sense
 *
 * 2d arrays are fucking cool but not as cool as 3d and 4d arrays.
 *
 */

const GroupTypeComposition = {
  DD: [["BRD"], ["COR"], ["WHM", "SCH"]],
  Ranged: [["SCH"], ["COR"], ["GEO"]],
  Tank: [["RUN", "PLD"], ["RUN", "PLD"], ["RDM"]],
};

export { GroupTypeComposition };

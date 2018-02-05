"use strict";
// material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)
// Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.
//
//     We know the rules of confect:

function isValid(formula){
    var stringFormula = formula.join("").toString();
    if (stringFormula.includes("1") && stringFormula.includes("2")) {
        return false;
    } else if (stringFormula.includes("3") && stringFormula.includes("4")){
        return false;;
    }
}
isValid([1,3,7]);
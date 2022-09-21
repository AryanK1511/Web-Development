/*
=== Is Equal to
!== Is Not Equal to
> Greater Than
< Less Than
>= Greater than equals
<= Less than equals
*/

// Concept clearing example 1
var a = 5;
var b = "5";

// This says 'NOT EQUAL'
if (a === b) {
    console.log("EQUAL");
}
else {
    console.log("NOT EQUAL");
}

// This says 'EQUAL'
if (a == b) {
    console.log("EQUAL");
}
else {
    console.log("NOT EQUAL");
}

// Combining Comparators
if (a % 2 == 0 && a > 5) {
    console.log("Operators have been combined!");
}
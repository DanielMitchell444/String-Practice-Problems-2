/*
Today, you will be going through a variety of practice problems, some
are related to strings, others are more logic based. Please remember
that this is just practice
*/

/*
PRACTICE Problem 1

When squirrels get together for a party, they like to have cigars. A squirrel party is successful when the number of cigars is between 40 and 60, inclusive. Unless it is the weekend, in which case there is no upper bound on the number of cigars. Return true if the party with the given values is successful, or false otherwise.

Examples

    cigarParty(30, false) → false
    cigarParty(50, false) → true
    cigarParty(70, true) → true
*/

function cigarParty(cigars, isWeekend){

}


/*
PRACTICE Problem 2



Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".

Examples

    helloName('Bob') → Hello Bob!
    helloName('Alice') → Hello Alice!
    helloName('X') → Hello X!
*/

function helloName(name){

}


/* Practice Problem 3 


Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".

Examples

    makeAbba('Hi', 'Bye') → HiByeByeHi
    makeAbba('Yo', 'Alice') → YoAliceAliceYo
    makeAbba('What', 'Up') → WhatUpUpWhat

*/

function makeAbb(a,b){

}


/*
Practice Problem 4


Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0.

Examples

    hasBad('badxx') → true
    hasBad('xbadxx') → true
    hasBad('xxbadxx') → false

*/

function hasBad(str){

}


/*
PRACTICE PROBLEM 5


Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".

Examples

    frontAgain('edited') → true
    frontAgain('edit') → false
    frontAgain('ed') → true

*/

function frontAgain(str){

}


/*
PRACTICE PROBLEM 6
String-1 --

nonStart

Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.

Examples

    nonStart('Hello', 'There') → ellohere
    nonStart('java', 'code') → avaode
    nonStart('shotl', 'java') → hotlava
*/

function nonStart(a,b){

}




/*
PRACTICE PROBLEM 7

Given two int values, return their sum. Unless the two values are the same, then return double their sum.

Examples

    sumDouble(1, 2) → 3
    sumDouble(3, 2) → 5
    sumDouble(2, 2) → 8

*/

function sumDouble(a,b){

}




/*
PRACTICE PROBLEM 8


We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.

Examples

    parrotTrouble(true, 6) → true
    parrotTrouble(true, 7) → false
    parrotTrouble(false, 6) → false

*/

function parrotTrouble(talking, hour){

}

/*
PRACTICE PROBLEM 9

squirrelPlay

The squirrels in Palo Alto spend most of the day playing. 
In particular, they play if the temperature is between 60 and 
90 (inclusive). Unless it is summer, then the upper limit is 
100 instead of 90. Given an int temperature and a boolean 
isSummer, return true if the squirrels play and false otherwise.
*/

function squirrelPlay(temp, isSummer){

}

/*
PRACTICE PROBLEM 10



Your cell phone rings. Return true if you should answer it. Normally you answer, except in the morning you only answer if it is your mom calling. In all cases, if you are asleep, you do not answer.

Examples

    answerCell(false, false, false) → true
    answerCell(false, false, true) → false
    answerCell(true, false, false) → false

*/

function answerCell(isMorning, isMom, isAsleep){

}


/*
PRACTICE PROBLEM 11


Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase() returns the uppercase version of a string.

Examples

    endUp('Hello') → HeLLO
    endUp('hi there') → hi thERE
    endUp('hi') → HI
*/

function endUp(str){

}


/*
PRACTICE PROBLEM 12


Given two temperatures, return true if one is less than 0 and the other is greater than 100.

Examples

    icyHot(120, -1) → true
    icyHot(-1, 120) → true
    icyHot(2, 120) → false
*/

function icyHot(temp1, temp2){
    
}
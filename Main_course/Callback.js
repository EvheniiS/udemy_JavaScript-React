"use strict";

function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second(){
    console.log(2)
}

first();
second();

function learnJS(lang, callback) {
    console.log(`i study ${lang}`)
    callback();
}

function done() {
    console.log('I Survived!') 

}

learnJS(' JavaScript', done);

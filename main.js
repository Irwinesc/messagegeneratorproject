const salutation = ["Hi", "hello", "Good morning"]
const verb = ["I am", "are you", "It is"]
const Phrase = ["a bautiful day", "Mr. Smith", "a new programer"]

const i = Math.floor(Math.random()*salutation.length);
const j = Math.floor(Math.random()*verb.length);
const k = Math.floor(Math.random()*Phrase.length);
sentence = salutation[i] + " " +verb[j] + " " + Phrase[k];
console.log(sentence);
console.log(i, j, k);
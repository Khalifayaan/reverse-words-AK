

function reverseWords(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

var sentence = 'My name is Ayaan Khalif';
var reversedSentence = reverseWords(sentence);
console.log(reversedSentence);



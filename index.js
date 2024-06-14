const reverseSentence = (sentence) => {
    // Reverse the sentence
    const reversed = sentence.split(' ').reverse().join(' ');

    // Capitalize the first letter
    const capitalized = reversed.charAt(0).toUpperCase() + reversed.slice(1);

    return capitalized;
};

const inputSentence = "take a sentence as input";
const reversedSentence = reverseSentence(inputSentence);
console.log(reversedSentence);
const names = data.flatMap(arr => arr.map(obj => obj.name));
console.log(names);
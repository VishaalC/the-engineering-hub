const word_but = document.getElementById("words-freq");
const letter = document.getElementById("letters");
const input = document.getElementById("input");
const results = document.getElementById("results");

word_but.addEventListener("click", () => {
  const words_inp = input.value;
  words_inp && word_frequency(words_inp);
});

letter.addEventListener("click", () => {
  const words_inp = input.value;
  words_inp && letter_frequency(words_inp);
});

input.addEventListener("keyup", function () {
  console.clear();

  var letc = input.value.replace(/[^a-zA-Z]/g, '');
  if (letc) {
    Char.innerHTML = letc.length;
  } else {
    Char.innerHTML = 0;
  }

  var words = input.value.match(/\b[-?(\w+)?]+\b/gi);
  if (words) {
    word.innerHTML = words.length;
  } else {
    word.innerHTML = 0;
  }

  var sentences = input.value.split(/[.|!|?]+/g);
  if (words) {
    console.log(sentences);
    sen.innerHTML = sentences.length - 1;
  } else {
    sen.innerHTML = 0;
  }

  var paragraphs = input.value.replace(/\n$/gm, "").split(/\n/);
  if (words) {
    para.innerHTML = paragraphs.length;
  } else {
    para.innerHTML = 0;
  }
});

readab.addEventListener("click", function() {
  var letc = input.value.replace(/[^a-zA-Z]/g, '').length;
  var words = input.value.match(/\b[-?(\w+)?]+\b/gi).length;
  var sentences = input.value.split(/[.|!|?]+/g).length - 1;
  var paragraphs = input.value.replace(/\n$/gm, "").split(/\n/).length;

  var L = (letc / words) * 100;
  // console.log(L);
  var S = (sentences / words) * 100;
  // console.log(S)
  var index = (0.0588 * L) - (0.296 * S) - 15.8;
  var index2 = Math.round(index);
  // console.log(index);

  if (index >=  16)
  {
    Read.innerHTML = 'Reading level is Grade16+';
  }
    
  else if (index < 1)
  {
    Read.innerHTML = 'Reading level is Before Grade 1';
  }
    
  else
  {
    Read.innerHTML = 'Reading level is ' + index2;
  }
});


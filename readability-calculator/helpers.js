myChart = null;

function get_word_count() {
  words = input.value;
  words = words.split(" ");
  let count = {};
  words.forEach((word) => {
    if (word in count) {
      count[word]++;
    } else {
      count[word] = 1;
    }
  });

  word_length = [];
  for (key in count) {
    word_length = [...word_length, [count[key], key]];
  }
  return word_length;
}

function get_letter_count() {
  words = input.value;
  words = words.split(" ");
  let count = {};
  words.forEach((word) => {
    word = word[0];
    if (word in count) {
      count[word]++;
    } else {
      count[word] = 1;
    }
  });

  word_length = [];
  for (key in count) {
    word_length = [...word_length, [count[key], key]];
  }

  return word_length.filter((item) => item[1].length == 1);
}

function word_frequency(words) {
  words = input.value;
  words = words.split(" ");
  let count = {};
  words.forEach((word) => {
    if (word in count) {
      count[word]++;
    } else {
      count[word] = 1;
    }
  });

  let max = 0;
  let maxKey = "";
  for (key in count) {
    if (count[key] > max) {
      max = count[key];
      maxKey = key;
    }
  }

  word_length = [];
  for (key in count) {
    word_length = [...word_length, [count[key], key]];
    // console.log(key,count[key])
  }

  remv = [
    "stop",
    "the",
    "to",
    "and",
    "or",
    "a",
    "in",
    "it",
    ".",
    "•",
    "is",
    "I",
    "that",
    "had",
    "on",
    "for",
    "were",
    "was",
    "of",
    "as",
  ];
  word_length = word_length.filter((item) => !remv.includes(item[1]));
  word_length.sort((a, b) => b[0] - a[0]);
  console.log(word_length); //.map(x => x[1]));

  // console.log(count);
  if (myChart) {
    myChart.destroy();
  }

  const ctx = document.getElementById("frequent").getContext("2d");
  myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [...word_length.slice(0, 10).map((x) => x[1])],
      datasets: [
        {
          label: "Word Frequency",
          data: [...word_length.slice(0, 10).map((x) => x[0])],
          backgroundColor: ["black"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          scale: "logarithmic",
        },
      },
    },
  });

  // console.log("chart");
}

function letter_frequency(words) {
  word_length = get_letter_count().map((x) => [x[0], x[1].toLowerCase()]);
  //   console.log(word_length);
  word_length = word_length.filter((item) => item[1].match(/[a-z]/i) !== null);
  word_length.sort((a, b) => b[0] - a[0]);
  console.log(word_length);

  if (myChart) {
    myChart.destroy();
  }
  chart = document.getElementById("frequent");
  const ctx = chart.getContext("2d");
  myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [...word_length.map((x) => x[1])],
      datasets: [
        {
          label: "Letter Distribution",
          data: [...word_length.map((x) => x[0])],
          backgroundColor: ["black"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          scale: "logarithmic",
        },
      },
    },
  });
}

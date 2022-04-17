let input = document.getElementById("func_input");
let calc = document.getElementById("calc");
let series = document.getElementById("taylor");
let terms = document.getElementById("no_of_terms");
let start = document.getElementById("s");

calc.addEventListener("click", () => {
  katex.render(input.value, original, {
    throwOnError: false,
  }); 
  //   console.log(input.value);
  //   console.log(math.derivative(input.value, "x").toString());
  //series.innerText = math.derivative(input.value, 'x').toString();
  [taylor,round] = get_taylor_terms(input.value, terms.value ? terms.value : 5 ,s.value ? s.value : 0);
  katex.render(round, series, {
    throwOnError: false,
  });
  a = math.simplify(taylor).toString();
  functionPlot({
    target: "#taylor-graph",
    title: "Taylor Series",
    with:400,
    height:400,
    data: [
      {
        fn: input.value,
        graphType: "polyline",
      },
      { fn: taylor, 
        // updateOnMouseMove: true, 
        graphType: "polyline"
       }, 
      //  { fn: `0.3010+(0.5/1!* x - 2)+(-0.25/2!* (x - 2) ^ 2)+(0.25/3!* (x - 2) ^ 3)+(-0.375/4!* (x - 2) ^ 4)`,
      //   // updateOnMouseMove: true, 
      //   graphType: "polyline"
      //  },
    ],
  });


  functionPlot({
    target: "#error",
    title: "Absolute Error",
    with:400,
    height:400,
    data: [
      { fn: `abs(${taylor} - ${input.value})`, 
        graphType: "polyline"
       }, 
    ],
  });


});

function get_taylor_terms(func, n,s) {
  taylor_terms = [];
  der_terms=[]
  rounded=[];
  taylor_terms.push(math.evaluate(func, { x: s }).toString());
  rounded.push(math.evaluate(func, { x: s }).toString().slice(0,4));
  der_terms.push(func);
//   console.log(taylor_terms);
  for (let i = 1; i < n; i++) {
      // console.log(der_terms);
      der = math.derivative(der_terms[i-1], "x").toString();
      der_terms.push(der);
      der_evaluated = math.evaluate(der,{x:s  }).toString();
      k=der_evaluated.slice(0,4);
      k = `${k}/${i}!`
      der_evaluated = `${der_evaluated}/${i}!`;
      // der_evaluated = math.simplify(der_evaluated).toString();
      // if(!der_evaluated.startsWith("0 ")){
      taylor_terms.push(`(${der_evaluated}* (x-(${s}))^${i})`);
      if(s==0){
        rounded.push(`(${k}* (x)^${i})`);
      }else{
        rounded.push(`(${k}* (x-${s})^${i})`);
        
      }
    // }  
      func = taylor_terms[taylor_terms.length - 1];
    //   console.log(taylor_terms,i);
    }
  console.log(taylor_terms.join("+"));
  return [taylor_terms.join("+"),rounded.join("+")];
}

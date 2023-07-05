let multiFormula = '';

for (let i = 1; i <= 9; i ++) {
  for (let j = 1; j <= i; j ++){
    multiFormula += j + "x" + i + "=" + j * i + '\t'
  }
  multiFormula = multiFormula + '\n';
}
console.log(multiFormula);
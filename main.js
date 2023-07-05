let multiFormula = '';

for (var i = 1; i <= 9; i ++) {
  for (var j = 1; j <= i; j ++){
    multiFormula += j + "x" + i + "=" + j * i + '\t'
  }
  multiFormula = multiFormula + '\n';
}
console.log(multiFormula);
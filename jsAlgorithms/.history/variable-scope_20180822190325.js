function functionScopeCheck() {
  for (var i = 0, str = "rama"; i < 5; i++) {
    containsCallingFunctionVariable(i, str + i);
  }
}

function containsCallingFunctionVariable() {
  console.log(i, str);
}

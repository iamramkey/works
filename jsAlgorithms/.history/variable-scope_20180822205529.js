function functionScopeCheck() {
  for (var i = 0, str = "rama"; i < 5; i++) {
    containsCallingFunctionVariable(i, str + i);
    setTimeout(containsCallingFunctionVariableTimeout);
  }

  function containsCallingFunctionVariable() {
    console.log(i, str);
  }
  function containsCallingFunctionVariableTimeout() {
    console.log(i, str);
  }
}

functionScopeCheck();

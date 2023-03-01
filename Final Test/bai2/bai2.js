
function numberOneTriangle(n) {
    let line = "";
    for (var i = 1; i <= n; i++) {
      for (var j = 1; j <= i; j++) {
        line += "*";
      }
      line += "\n";
    }
    
    return line;
    
  }
   console.log(numberOneTriangle(5));

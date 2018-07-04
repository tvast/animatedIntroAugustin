var originalString = document.getElementById("ascii1"); 

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 40000; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
''
  return originalString.innerHTML =(text);
}

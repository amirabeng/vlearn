var pp = document.getElementById('inp1').value;
var eshal = document.getElementById('inp2').value;
var btn = document.getElementById('btn4');
var res = document.getElementById('ris').innerHTML;

function sql(){
   var natige =  pp.value * eshal.value;

   res.innerHTML =  natige;
}

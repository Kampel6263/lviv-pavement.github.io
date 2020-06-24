function input(){
  var name = document.getElementById('name').value;

  /*логіни*/
  var dima = "dima";




  if(name == dima){
      window.location= "people/dima.html" ;
  } else{
    alert('Не вірний логін!')
  }
}


var open = document.getElementById('open');
var login = document.getElementById('login');
var background = document.getElementById('backGround')

open.onclick = function(){
  login.style.display = "block";
  background.style.filter = "blur(4px)";

}

var close = document.getElementById('close');

close.onclick = function(){
  login.style.display = "none";
  background.style.filter = "none";
}

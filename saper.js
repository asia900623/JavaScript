var str = "<table border=1 cellspacing=0 cellpadding=0>";

function generujPlansze(){
	var plansza = [];
  for (var i = 0; i < 10; i++ ){
  	plansza[i]=[];
  	for (var j = 0; j < 10; j++ ) {
      if(Math.random()  > 0.5) {
        plansza[i][j] = 1;
      	} else { plansza[i][j] = 0;}
    };
  } return plansza; 
};

function rysujPlansze(plansza){
    for (var i = 0; i < 10; i++ ){
        str = str + "<tr>";
        for (var j = 0; j < 10; j++ ) {
           str = str + "<td><button class=\"eachButton\">" + plansza[i][j] + "</td>";
    		};
  	} return str;
}; 
document.getElementById('tablica').innerHTML = rysujPlansze(generujPlansze());
function bindElement(){
	var button = document.getElementByClassName('eachButton').onclick;
	for (let i = 0; i< button.length; i++){
  	button[i].onclick=function(){
    	alert('0');
    }	
  }	
}

function generujButton(x, y, _value){

}

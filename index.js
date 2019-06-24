function shuffle(arr){                                     //function to shuffle the array
	for (var i = arr.length - 1; i >= 0; i--) {
		var x = Math.floor(Math.random()*i);
		var temp = arr[i];
		arr[i] = arr[x];
		arr[x] = temp;
	}
	return arr;
}



                                          //function to start the game
arr = [1,2,3,4,5,6,7,8,9];
visited = [0,0,0,0,0,0,0,0,0];
shuffle(arr);
for (var i = 2;i < 11;i++) {
	document.getElementsByTagName('div')[i].innerHTML = arr[i-2];
	if(arr[i-2]%3 == 1){
		document.getElementsByTagName('div')[i].style.backgroundColor = "red";
	}
	if(arr[i-2]%3 == 2){
		document.getElementsByTagName('div')[i].style.backgroundColor = "blue";
	}
	if(arr[i-2]%3 == 0){
		document.getElementsByTagName('div')[i].style.backgroundColor = "green";
	}
}
j = 0;
m = [0];
n = [0];
s = 0;
function change(x){
	if(s == 0 && visited[x-2] == 0){
		if(j==0||j==1){
		if(j==0){ 
			m[0] = x;
			visited[x-2] = 1;
		}
		if(j==1){ 
			n[0] = x;
			visited[x-2] = 1;
		}
		j++;
		document.getElementsByTagName('div')[x].style.background = "#00ffcc";
		document.getElementsByTagName('div')[x].style.color = "black";
	}
	else{
		j = 0;
		document.getElementsByTagName('div')[x].style.background = "#00ffcc";
		document.getElementsByTagName('div')[x].style.color = "black";
		if(arr[m[0]-2]%3 == 1){
			document.getElementsByTagName('div')[m[0]].style.backgroundColor = "red";
			document.getElementsByTagName('div')[m[0]].style.color = "yellow";
		}
		if(arr[m[0]-2]%3 == 2){
			document.getElementsByTagName('div')[m[0]].style.backgroundColor = "blue";
			document.getElementsByTagName('div')[m[0]].style.color = "yellow";
		}
		if(arr[m[0]-2]%3 == 0){
			document.getElementsByTagName('div')[m[0]].style.backgroundColor = "green";
			document.getElementsByTagName('div')[m[0]].style.color = "yellow";
		}
		if(arr[n[0]-2]%3 == 1){
			document.getElementsByTagName('div')[n[0]].style.backgroundColor = "red";
			document.getElementsByTagName('div')[n[0]].style.color = "yellow";
		}
		if(arr[n[0]-2]%3 == 2){
			document.getElementsByTagName('div')[n[0]].style.backgroundColor = "blue";
			document.getElementsByTagName('div')[n[0]].style.color = "yellow";
		}
		if(arr[n[0]-2]%3 == 0){
			document.getElementsByTagName('div')[n[0]].style.backgroundColor = "green";
			document.getElementsByTagName('div')[n[0]].style.color = "yellow";
		}
		visited[x-2] = 1;
		visited[m[0]-2] = 0;
		visited[n[0]-2] = 0;
		m[0] = x;
		j = 1;
		n[0] = 0;
	}
	}
		
}
function over(arr){
	var j = 0;
	for (var i = arr.length - 1; i > 0; i--) {		
		if(arr[i] < arr[i-1]){
			j = 1;
		}
	}
	if(j==0) {
			s = 1;
			document.getElementById('p').innerHTML = "Congradulations,you completed the Game.";
		}
	
}


function swap(){
	if(s==0){
		if(j==2){
		document.getElementsByTagName('div')[n[0]].innerHTML = arr[m[0]-2];
		document.getElementsByTagName('div')[m[0]].innerHTML = arr[n[0]-2];
		var temp = arr[m[0]-2];
		arr[m[0]-2] = arr[n[0]-2];
		arr[n[0]-2] = temp;
		if(arr[m[0]-2]%3 == 1){
			document.getElementsByTagName('div')[m[0]].style.backgroundColor = "red";
			document.getElementsByTagName('div')[m[0]].style.color = "yellow";
		}
		if(arr[m[0]-2]%3 == 2){
			document.getElementsByTagName('div')[m[0]].style.backgroundColor = "blue";
			document.getElementsByTagName('div')[m[0]].style.color = "yellow";
		}
		if(arr[m[0]-2]%3 == 0){
			document.getElementsByTagName('div')[m[0]].style.backgroundColor = "green";
			document.getElementsByTagName('div')[m[0]].style.color = "yellow";
		}
		if(arr[n[0]-2]%3 == 1){
			document.getElementsByTagName('div')[n[0]].style.backgroundColor = "red";
			document.getElementsByTagName('div')[n[0]].style.color = "yellow";
		}
		if(arr[n[0]-2]%3 == 2){
			document.getElementsByTagName('div')[n[0]].style.backgroundColor = "blue";
			document.getElementsByTagName('div')[n[0]].style.color = "yellow";
		}
		if(arr[n[0]-2]%3 == 0){
			document.getElementsByTagName('div')[n[0]].style.backgroundColor = "green";
			document.getElementsByTagName('div')[n[0]].style.color = "yellow";
		}
		visited[m[0]-2] = 0;
		visited[n[0]-2] = 0;
		m[0] = 0;
		n[0] = 0;
		j=0;
		}
	
		over(arr);
	}
	
}
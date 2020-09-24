function myFunction() {

	var w = document.getElementById("inpOne").value;
	var h = document.getElementById("inpTwo").value;

	console.log(w, h);

}

function color() {

	document.getElementById("figure").style.border = '1px solid';
	document.getElementById("figure").style.width = document.getElementById("inpOne").value + "px";
	document.getElementById("figure").style.height = document.getElementById("inpTwo").value + "px";

}







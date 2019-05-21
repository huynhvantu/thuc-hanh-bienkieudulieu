function xuly(){
	console.log('da vao ham...')
	var oC = document.getElementById('oC').value;
	var dof= (parseInt (oC)*9)/5 +32;
	document.getElementById('doF').innerHTML = 'Do F la: '+dof;
}
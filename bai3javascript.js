function xuly(){
	console.log('da vao ham...')
	var bankinh= document.getElementById('bankinh').value;
	var dientich= (parseInt (bankinh)*parseInt(bankinh))*3.14;
	document.getElementById('dientich').innerHTML='Dien tich la:' +dientich;
}
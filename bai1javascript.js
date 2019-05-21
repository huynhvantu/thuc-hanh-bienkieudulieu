function xuly(){
	var vatly= document.getElementById('vatly').value;
	var hoahoc= document.getElementById('hoahoc').value;
	var sinhhoc= document.getElementById('sinhhoc').value;
	console.log('vat ly:'+vatly+'sinh hoc:'+sinhhoc+ 'hoc hoc:'+hoahoc)
	var tong = parseInt(vatly)+parseInt(sinhhoc)+parseInt(hoahoc);
	var diemtrungbinh = (parseInt(vatly)+parseInt(sinhhoc)+parseInt(hoahoc))/3;
	document.getElementById('tong').innerHTML ='tong la:'+tong;
	document.getElementById('diemtrungbinh').innerHTML = 'diem trung binh la:'+diemtrungbinh;
}
var dados = {
	nome: "Henrique",
	numero: "5561984417882",
	face: "fabiohenriq90",
	insta: "fabiohenriq90",
	horas: "24hs"
}

var telefone = document.getElementById("telefone");
//telefone.setAttribute("href", "tel:"+dados.numero+"");
telefone.addEventListener("click", function(){
	location.href = "tel:"+dados.numero;
});
//console.log(telefone);

var whatsapp = document.getElementById("whatsapp");
//whatsapp.setAttribute("href", "https://api.whatsapp.com/send/?phone="+dados.numero+"text=");
whatsapp.addEventListener("click", function(){
	location.href = "https://api.whatsapp.com/send/?phone="+dados.numero;
});

var facebook = document.getElementById("facebook");
facebook.addEventListener("click", function(){
	location.href = "https://www.facebook.com/"+dados.face;
});

var instagram = document.getElementById("instagram");
instagram.addEventListener("click", function(){
	location.href = "https://www.instagram.com/"+dados.insta;
});

var horas = document.getElementById("horas");
horas.innerHTML = dados.horas;

var nome = document.getElementById("nome");
nome.innerHTML = dados.nome;
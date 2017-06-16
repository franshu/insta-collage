
//API html5 DragNdrop 

function drag(ev){ //ev de event es lo mismo, los atributos pueden variar
	ev.dataTransfer.setData('text', ev.target.id);
	//img se lee como text en el navegador
	//target es el objetivo 
}


function finalDrop(ev){
	ev.preventDefault(); 
	//SIEMPRE se pondrá esto, para asegurar los datos en la web

}

function drop(ev){
	ev.preventDefault();
	var dato = ev.dataTransfer.getData('text');
	//getData llama a text, sin el ev.target.id
	ev.target.appendChild(document.getElementById(dato));	
}
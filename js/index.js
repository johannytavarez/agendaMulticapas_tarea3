function Datos() {
    var lista = document.getElementById('contactos');
    fetch("http://www.raydelto.org/agenda.php").then(function(respuesta){
        return respuesta.json();
    }).then(function(respuesta) {
        let info = `<tr><th>Nombre</th><th>Apellido</th><th>Contacto</th></tr>`;
        for (let index = 0; index < respuesta.length; index++) {
            const cont = respuesta[index];
            info += `<tr> <td>${cont.nombre} </td><td>${cont.apellido}</td>
                        <td>${cont.telefono}</td></tr>`;
        }
        lista.innerHTML = info;
    });  
}

function crear(){
    fetch('http://www.raydelto.org/agenda.php', {
     method: "POST",
     body: JSON.stringify({
         nombre: window.prompt("Nombre: "),
         apellido: window.prompt("Apellido: "),
         telefono: window.prompt("Telefono: ")
     })
 })
.then(response => response.json()).then(json => console.log(json));
}
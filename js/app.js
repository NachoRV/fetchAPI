document.getElementById('txtBtn').addEventListener('click', cargarTxt);
document.getElementById('jsonBtn').addEventListener('click', cargarJson);
document.getElementById('apiBTN').addEventListener('click', cargarApi);

// Cargamos datos de .TXT

function cargarTxt(){

    fetch('datos.txt')
        .then(function(res){
            console.log(res)
            return res.text()
        })
        .then(function(data){
            console.log(data)
            document.getElementById('resultado').innerHTML = data
        })
        .catch(function(err){
            console.log(err)
        })
}

// Leer Json 

function cargarJson(){
    fetch('empleados.json')
        .then( res => {
            console.log(res)
            return res.json()
        })
        .then(datas =>{
            let html='Datos desde JSON </hr>'
            datas.forEach(data => {
                html += `
                    <li>${data.nombre} ${data.puesto}</li>
                `;
                document.getElementById('resultado').innerHTML = html
            });
        })
        .catch(function(err){
            console.log(err)
        })
}

// Leemos datosd esde API 

function cargarApi(){
    fetch('https://picsum.photos/list')
        .then( res => {
           
            return res.json()
        })
        .then(imagenes =>{
            let html='Dotos obtenidos de la APi <a href="https://picsum.photos/" target="_blank"> picsum</a>'
            imagenes.forEach(imagen =>{
                html +=`
                    <li>
                        <a target="_blank" href="${imagen.post_url}"> imagen </a>
                        ${imagen.author}
                    </li>
                `;
                document.getElementById('resultado').innerHTML = html
            })             
        })
        .catch(err =>{
            console.log(err)
        })
}
async function checkEnter(event) {
    if (event.key === "Enter") {
        await getAdressByCep();
    }
}

async function getAdressByCep() {
    
    const cep = document.getElementById("cep").value;
    try {
        const response = await fetch( `https://viacep.com.br/ws/${cep}/json/`)
        const data = await response.json();
        console.log(data);
        document.getElementById('Cidade').value = data.localidade
        document.getElementById('Bairro').value = data.bairro
        document.getElementById('Rua').value = data.logradouro
    } catch (error) {
        alert(error.message)
        console.log(message)
    }
    /*.then(response => {
        return response.json();
    }).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })*/
}

//-22.381802  -42.910140     
//-22.381682, -42.910097

async function getprevisao() {
    
    const Lat = document.getElementById("Latitude").value;
    const Lon = document.getElementById("Longitude").value; 
    try {
        const response = await fetch (
            `https://api.open-meteo.com/v1/forecast?latitude=${Lat}&longitude=${Lon}&hourly=temperature_2m`
            );
        const data = await response.json();
        console.log(data);
        document.getElementById('resposta').classList.remove('d-none');
        document.getElementById('resposta').innerHTML = '';
        for (let index = 0; index < data.hourly.temperature_2m.length; index++) 
        {
            document.getElementById('resposta').innerHTML += `<div>${data.hourly.time[index]} - ${data.hourly.temperature_2m[index]}</div>`;  
        }
    } catch (error) {
        alert(error.message)
        console.log(message)
    }
}


//https://api.open-meteo.com/v1/forecast?latitude=-22.381802&longitude=-42.91014&hourly=temperature_2m


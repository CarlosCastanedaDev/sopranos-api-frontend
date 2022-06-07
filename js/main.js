document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const soprano = document.querySelector('input').value
    try{
        const response = await fetch(`https://sopranos-character-api.herokuapp.com/api/${soprano}`)
        const data = await response.json()

        console.log(data)
        document.getElementById('name').innerHTML = data.name
        document.getElementById('alias').innerHTML = data.aliases
        document.getElementById('first').innerHTML = data.firstEpisode
        document.getElementById('last').innerHTML = data.lastEpisode
        document.getElementById('portrayed').innerHTML = data.portrayedBy
    }catch(error){
        console.log(error)
    }
}
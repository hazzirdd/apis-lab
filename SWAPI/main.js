const button = document.querySelector('button');
const body = document.getElementById("body");


//it Works when you click the button, but the names are very slow to show up. I'm not sure why.
buttonClicked = () => {
    clearResidents()

    axios.get('https://swapi.dev/api/planets/2')
    .then(res => {
        let residents = res.data.residents
        for (let i = 0; i < residents.length; i++) {
            axios.get(residents[i])
            .then(res => {
                let resident = document.createElement('h2');
                let text = document.createTextNode(`${res.data.name}`);
                resident.appendChild(text);
                body.appendChild(resident);
            })
        }
    })
    .catch (error => {
        console.log(error)
    })
}

clearResidents = () => {
    const body = document.querySelector('#body');
    body.innerHTML = ``;
}



button.addEventListener('click', buttonClicked);
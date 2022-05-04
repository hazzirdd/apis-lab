const button = document.querySelector('button');
const body = document.getElementById("body");

buttonClicked = () => {
    clearResidents()

    axios.get('https://swapi.dev/api/planets/2')
    .then(res => {
        console.log(res.data.residents)
        let residents = res.data.residents
        for (let i = 0; i < residents.length; i++) {
            console.log(residents[i])
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
    const body = document.querySelector('#body')
    body.innerHTML = ``
}



button.addEventListener('click', buttonClicked);
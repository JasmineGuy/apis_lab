
const btn = document.querySelector('button')
const body = document.querySelector('div')
const clicked = () => {
    // console.log('button clicked!')
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then((res) => {
        console.log(res.data.results[0].residents)
        let residents = res.data.results[0].residents
        for(let i = 0; i <= residents.length; i++) { 
            axios.get(residents[i]).then((res) => {
                console.log(res.data.name)
                let name = res.data.name
                const nameDisplay = document.createElement('h2')
                nameDisplay.textContent = `${name} lives on Alderaan!`
                body.append(nameDisplay)
        })
    }})
}

btn.addEventListener('click', clicked)
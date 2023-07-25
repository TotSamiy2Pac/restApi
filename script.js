const row = document.querySelector('.row')
const select = document.querySelector('#select')

const handleFlags = () => {
    row.innerHTML = ``
    fetch(`https://restcountries.com/v3.1/region/${select.value}`)
        .then(res => res.json())
        .then(data => {
            data.map(country => {
                row.innerHTML += `
                <div class="col-4" style="color: azure">
                    <div class="box">
                        <img src="${country.flags.png}" alt="${country.flags.alt}">
                        <h3>${country.name.official}</h3>
                        <p class="square">Площадь : ${country.area} km2</p>
                        <p>Населения : ${country.population} человек</p>
                        <p>${country.flags.alt}</p>
                        <a target="_blank" href="${country.maps.googleMaps}">На карте</a>
                    </div>  
                </div>
                `
            })
        })
}
handleFlags()

const handleOption = () => {
    handleFlags()
}

select.addEventListener('change', (event) => {
    handleOption()
})
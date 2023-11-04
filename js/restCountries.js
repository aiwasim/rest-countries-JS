const loadData = () => {
    const URL = `https://restcountries.com/v3.1/all`;
    fetch(URL)
        .then(res => res.json())
        .then(data => showData(data.slice(0, 9)))
}

const showData = (countries) => {
    // console.log(countries);

    const countryContainer = document.getElementById('country-container');
    countryContainer.innerHTML = ''

    countries.forEach(country => {
        // console.log(country.name.common);

        const { name, flags, cca2 } = country

        const div = document.createElement('div');
        div.innerHTML =
            `
            <div class="card w-96 h-96 bg-base-100 shadow-2xl my-5">
            <figure class="px-10 pt-10">
              <img src=" ${flags.png} " alt="flags" class="rounded-xl w-50 h-50" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title text-3xl "> ${name.common} </h2>
            </div>
            <div class="card-actions m-auto py-5">
                <button class="btn btn-primary" onclick="countryModal('${cca2}'); my_modal_5.showModal()">Details</button>
              </div>
          </div>
        `
        countryContainer.appendChild(div);
    });
}



const countryModal = (id) => {
    const URL = `https://restcountries.com/v3.1/alpha/${id}`;
    fetch(URL)
        .then(res => res.json())
        .then(data => showModalCountry(data[0]))
}

const showModalCountry = (modalCountry) => {
    // console.log(modalCountry.name.common);
    const containerModal = document.getElementById('modal-box');
    containerModal.innerHTML = '';
    const div = document.createElement('div');
    div.innerHTML =
        `
            <h3 class="font-bold text-3xl text-center"> ${modalCountry.name.common} </h3>
            <p class="text-xl font-bold">Capital: ${modalCountry.capital}</p>
            <p class="text-xl font-bold">Region: ${modalCountry.region} </p>
            <div class="modal-action">
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn">Close</button>
                </form>
            </div>
        `
    containerModal.appendChild(div)
}

const seeAllCountry = () => {
    const URL = `https://restcountries.com/v3.1/all`;
    fetch(URL)
        .then(res => res.json())
        .then(data => showData(data))
}

loadData()




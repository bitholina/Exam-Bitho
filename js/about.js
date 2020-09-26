const url = "https://api.spacexdata.com/v4/crew";
const resultsContainer = document.querySelector(".crew_box");

async function fetchInfo() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    console.log(results);

    results.forEach(function (crew) {
      resultsContainer.innerHTML += `
                                 <div class="crew_box"><img src="${crew.image}"/>                                      
                                 <h6>${crew.name}</h6>
                                 <h6>${crew.agency}</h6>
                                 </div>`;
    });
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = message("error", error);
  }
}

fetchInfo();

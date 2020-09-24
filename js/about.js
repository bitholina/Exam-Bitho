const url = "https://api.spacexdata.com/v4/crew";
const resultsContainer = document.querySelector(".crew_results");

async function makeApiCall() {
  const response = await fetch(url);
  const json = await response.json();

  console.log(json);

  const results = json;

  results.forEach(function (result) {
    resultsContainer.innerHTML += `<div>
                                   <h4>${result.image}</h4>
                                   
                                   <h5>${result.name}</h5>
                                   <h6>Agency</h6>
                                   <h4>${result.agency}</h4>
                                   </div>`;
  });
}

makeApiCall();

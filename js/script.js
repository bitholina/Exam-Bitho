const url = "https://api.spacexdata.com/v4/launches";
const resultsContainer = document.querySelector(".results");

async function makeApiCall() {
  const response = await fetch(url);
  const json = await response.json();

  console.log(json);

  const results = json;

  results.forEach(function (result) {
    resultsContainer.innerHTML += `<div>
                                   <h4>${result.flight_number}</h4>
                                   <h5>${result.name}</h5>
                                   <h6>DATE</h6>
                                   <h4>${result.date_local}</h4>
                                   <h6>DETAILS</h6>
                                   <h4>${result.details}</h4>
                                   </div>`;
  });
}

makeApiCall();

/*
const url = "https://api.spacexdata.com/v4/launches";
const resultsContainer = document.querySelector(".results");

async function makeApiCall() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    console.log(results);

    for (let i = 0; i < results.length; i++) {
      
    }
      
      
      
      resultsContainer.innerHTML += `<div>
                                  <h4>${result.flight_number}</h4>
                                  <h5>${result.name}</h5>
                                  <h6>DATE</h6>
                                  <h4>${result.date_local}</h4>
                                  <h6>DETAILS</h6>
                                  <h4>${result.details}</h4>
                                  </div>`;
    }
    
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = message("error", error);
  }
}

makeApiCall();
 */

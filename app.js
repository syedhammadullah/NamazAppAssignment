// Function to fetch Namaz timings from API
function fetchNamazTimings() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  // Replace "YOUR_API_KEY" with your actual API key
  const apiKey = "YOUR_API_KEY";
  const apiUrl = `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=Pakistan&method=2&month=${
    new Date().getMonth() + 1
  }&year=${new Date().getFullYear()}&school=1&apikey=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const timings = data.data[new Date().getDate() - 1].timings;
      displayNamazTimings(timings);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

// Function to display Namaz timings in HTML
function displayNamazTimings(timings) {
  const namazTimingsElement = document.getElementById("namazTimings");
  let html = "<h2>Today's Namaz Timings:</h2><ul>";
  for (const [namaz, time] of Object.entries(timings)) {
    html += `<li>${namaz}: ${time}</li>`;
  }
  html += "</ul>";
  namazTimingsElement.innerHTML = html;
}

function searchICCID() {
  var iccid = document.getElementById("iccidInput").value.trim();
  
  if (!iccid) {
    alert("Please enter ICCID.");
    return;
  }
  
  fetch("https://console.mercydatrack.com/m2mportal/devices/iccid/" + iccid)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      if (data.status === "success") {
        displayResult(data.data);
      } else {
        throw new Error("API returned an error");
      }
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      alert("Error fetching data. Please try again later.");
    });
}

function displayResult(data) {
  var resultContainer = document.getElementById("resultContainer");
  var resultElement = document.getElementById("result");
  
  resultElement.innerHTML = ""; // Clear previous results
  
  // Display each key-value pair in the data
  Object.keys(data).forEach(key => {
    resultElement.innerHTML += "<p>" + key + ": " + data[key] + "</p>";
  });
  
  resultContainer.style.display = "block"; // Show result container
}

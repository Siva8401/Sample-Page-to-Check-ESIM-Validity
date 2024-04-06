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
      displayResult(data);
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
  
  if (data.status === "success") {
    resultElement.innerHTML += "<p>Primary TSP MSISDN: " + data.data.Primary_TSP_MSISDN + "</p>";
    resultElement.innerHTML += "<p>Fallback TSP MSISDN: " + data.data.Fallback_TSP_MSISDN + "</p>";
    resultElement.innerHTML += "<p>Primary TSP Name: " + data.data.Primary_TSP_Name + "</p>";
    resultElement.innerHTML += "<p>Fallback TSP Name: " + data.data.Fallback_TSP_Name + "</p>";
    resultElement.innerHTML += "<p>Primary TSP Validity: " + data.data.Primary_TSP_Validity + "</p>";
    resultElement.innerHTML += "<p>Fallback TSP Validity: " + data.data.Fallback_TSP_Validity + "</p>";
    resultElement.innerHTML += "<p>Primary Status: " + data.data.PrimaryStatus + "</p>";
    resultElement.innerHTML += "<p>Fallback Status: " + data.data.FallbackStatus + "</p>";
    resultElement.innerHTML += "<p>IMEI No: " + data.data.ImeiNo + "</p>";
    resultContainer.style.display = "block"; // Show result container
  } else {
    resultElement.innerHTML = "<p>No data found for the given ICCID.</p>";
    resultContainer.style.display = "none"; // Hide result container
  }
}

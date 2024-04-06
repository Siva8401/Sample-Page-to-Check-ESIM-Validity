function displayResult(data) {
  var resultContainer = document.getElementById("resultContainer");
  var resultElement = document.getElementById("result");
  
  // Clear previous results
  resultElement.innerHTML = "";
  
  // Check if the required fields exist in the data
  if (data.PrimaryExpireOn && data.FallbackExpireOn && data.ImeiNo) {
    // Display only the required fields
    resultElement.innerHTML += "<p>Primary Expire On: " + data.PrimaryExpireOn + "</p>";
    resultElement.innerHTML += "<p>Fallback Expire On: " + data.FallbackExpireOn + "</p>";
    resultElement.innerHTML += "<p>IMEI No: " + data.ImeiNo + "</p>";
    resultContainer.style.display = "block"; // Show result container
  } else {
    resultElement.innerHTML = "<p>Required data fields not found in the API response.</p>";
    resultContainer.style.display = "none"; // Hide result container
  }
}

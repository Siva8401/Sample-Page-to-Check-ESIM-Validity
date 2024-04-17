function searchICCID() {
  var iccid = document.getElementById("iccidInput").value.trim();
  
  if (!iccid) {
    alert("Please enter ICCID.");
    return;
  }
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    console.log("ReadyState:", this.readyState);
    if (this.readyState == 4) {
      console.log("Status:", this.status);
      if (this.status == 200) {
        console.log("Response:", this.responseText);
        var data = JSON.parse(this.responseText);
        displayResult(data);
      } else {
        console.error("Error fetching data:", this.statusText);
        alert("Error fetching data. Please try again later.");
      }
    }
  };
  xhttp.open("GET", "https://console.mercydatrack.com/m2mportal/devices/iccid/" + iccid, true);
  xhttp.send();
}

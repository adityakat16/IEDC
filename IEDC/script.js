/*Navbar Script*/
fetch("Navbar.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Navbar not found: " + response.status);
        }
    
        return response.text();
    })
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
    })
    .catch(error => { 
        console.error("Navbar loading error:", error);
    });
    
/*Footer Script*/
fetch("footer.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Navbar not found: " + response.status);
        }
    
        return response.text();
    })
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    })
    .catch(error => { 
        console.error("Navbar loading error:", error);
    });
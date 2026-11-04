
   
    const form = document.querySelector(".reservation-form");

    
    const dateInput = document.querySelector("#date");

  
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    dateInput.min = `${year}-${month}-${day}`;

    
    form.addEventListener("submit", function (event) {
        event.preventDefault();

      
        const customerName = document.querySelector("#name").value;

       
        alert(
            "Thank you, " + customerName +
            "! Your reservation request has been received."
        );

        
        form.reset();
    });

    
    document.querySelector(".copyright p").textContent =
        "© " + new Date().getFullYear() +
        " buttlers. All Rights Reserved.";


function submitForm() {
    
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;


    
    var userDetailsList = document.getElementById("userDetailsList");
    userDetailsList.innerHTML = ""; 

    var detailsArray = [
        "Name: " + name,
        "Age: " + age,
        "Email: " + email,
        "Phone: " + phone,
        "Address: " + address
    ];

    detailsArray.forEach(function(detail) {
        var listItem = document.createElement("li");
        listItem.appendChild(document.createTextNode(detail));
        userDetailsList.appendChild(listItem);
    });

    // Clear form values
    document.getElementById("form").reset();
}
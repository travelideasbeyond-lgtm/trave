function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
        destination : document.getElementById("destination").value,
        Date : document.getElementById("date").value,
        phone : document.getElementById("phone").value,
        
        
    }
    emailjs.send("service_nrmd3lg","template_44abf0n",parms).then(alert("Email Sent!!!"))
}

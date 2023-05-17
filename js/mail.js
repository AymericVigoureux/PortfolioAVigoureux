
function mail(templateParams) {
    emailjs.send('service_twvefib', 'template_o2jxkx4', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
}

document.getElementById("mailClient").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre normalement

    // Récupérer les valeurs du formulaire
    var nom = document.getElementsByName("name")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var object = document.getElementsByName("object")[0].value;
    var message = document.getElementsByName("message")[0].value;

    var templateParams = {
        name: nom,
        email: email,
        object: object,
        message: message
    };
    console.log(templateParams)
    mail(templateParams)
});
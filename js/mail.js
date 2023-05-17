
function mail(templateParams) {
    emailjs.send('service_twvefib', 'template_o2jxkx4', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            showFlashMessage("Votre message est envoye. Merci!", "flash-message-success")
        }, function (error) {
            console.log('FAILED...', error);
            showFlashMessage("Une erreur s'est produite lors de l'envoie. Vous pouvez me contacter avec les liens en bas de page.", "flash-message-error")
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

    mail(templateParams)
});

function showFlashMessage(message, IdMessage) {
    var flashMessage = document.getElementById(IdMessage);
    flashMessage.querySelector("p").innerText = message;
    flashMessage.classList.remove("hidden");
    flashMessage.classList.add("show");

    setTimeout(function () {
        flashMessage.classList.remove("show");
        flashMessage.classList.add("hidden");
    }, 3000); // Affiche le flash message pendant 3 secondes
}

function popupFlashMessage () {
    $(".flash").addClass("animate--drop-in-fade-out");
    setTimeout(function () {
        $(".flash").removeClass("animate--drop-in-fade-out");
    }, 3500);
}
// définition de la constant modenuit
const boutonModeNuit = document.getElementById("modeNuit");
// Ajout d’un événement clic
boutonModeNuit.addEventListener("click", function() {
    // Ajoute ou retire la classe dark-mode
    document.body.classList.toggle("dark-mode");
});

// Récupère le formulaire grâce à son ID
document.getElementById("contactForm").addEventListener("submit", function(e) {

    // Récupère le champ email
    const email = document.getElementById("email");

    // Récupère la zone d’erreur
    const error = document.getElementById("emailError");

    // Expression régulière pour vérifier format email
    const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Si l’email ne respecte pas le format
    if (!email.value.match(regex)) {

        e.preventDefault(); // Empêche l’envoi du formulaire
        error.textContent = "Email invalide."; // Affiche message erreur

    } else {

        error.textContent = ""; // Supprime message erreur
        alert("Message envoyé !"); // Message de confirmation

    }

});


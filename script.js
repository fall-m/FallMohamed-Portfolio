document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche l'envoi du formulaire
    
    // Simule l'envoi du formulaire
    alert('Merci pour votre message !');
    
    // Réinitialise le formulaire
    this.reset();
});

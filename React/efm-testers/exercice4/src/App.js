const form = document.getElementById("formInscription");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const cin = document.getElementById("cin").value.trim();
  const nom = document.getElementById("nom").value.trim();
  const prenom = document.getElementById("prenom").value.trim();
  const dateNaissance = document.getElementById("dateNaissance").value;

  if (!cin || !nom || !prenom || !dateNaissance) {
    alert("Veuillez remplir tous les champs !");
    return;
  }

  alert(`Bienvenue ${nom} ${prenom} ! Merci pour votre inscription`);
});

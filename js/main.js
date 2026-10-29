// Contact addresses in one place. The form has no backend yet: it opens the visitor's mail client.
const CONTACT_EMAILS = ["pol@northstonecredit.com", "marina@northstonecredit.com"];

const nav = document.getElementById("nav");
const toggle = document.querySelector(".nav-toggle");

function setMenu(open) {
  nav.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
}

toggle.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

const LABELS = { name: "Nombre", company: "Empresa", email: "Correo", phone: "Teléfono", profile: "Soy", interest: "Me interesa", message: "Mensaje" };

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const data = new FormData(form);
  const body = Object.entries(LABELS)
    .filter(([key]) => data.get(key))
    .map(([key, label]) => `${label}: ${data.get(key)}`)
    .join("\n");
  const subject = `Consulta web: ${data.get("interest")}`;
  window.location.href = `mailto:${CONTACT_EMAILS.join(",")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  status.textContent = "Se abrirá su programa de correo con la consulta preparada. Solo falta enviarla.";
});

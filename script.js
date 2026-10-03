function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

const sections = document.querySelectorAll(".reveal");

function showSections() {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", showSections);
window.addEventListener("load", showSections);

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("show");
  });
});


// Certificate lightbox
const certificateModal = document.getElementById("certificateModal");
const modalCertificate = document.getElementById("modalCertificate");
const modalTitle = document.getElementById("modalTitle");
const closeCertificateModal = document.querySelector(".modal-close");

function openCertificate(card) {
  const image = card.querySelector("img");
  modalCertificate.src = image.src;
  modalCertificate.alt = image.alt;
  modalTitle.textContent = card.dataset.title || image.alt;
  certificateModal.classList.add("show");
  certificateModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeCertificate() {
  certificateModal.classList.remove("show");
  certificateModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".certificate-card").forEach(card => {
  card.querySelector(".certificate-image-btn").addEventListener("click", () => openCertificate(card));
});

closeCertificateModal.addEventListener("click", closeCertificate);
certificateModal.addEventListener("click", event => {
  if (event.target === certificateModal) closeCertificate();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeCertificate();
});

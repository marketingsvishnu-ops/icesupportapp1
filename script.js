const whatsappNumber = "919999999999";
const message = "Hello, mujhe ICE Exchange ka official download link aur installation help chahiye.";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

document.querySelectorAll(".whatsapp-link").forEach(link => {
  link.href = whatsappUrl;
  link.target = "_blank";
});

document.querySelectorAll(".whatsapp-link").forEach(link => {
  link.addEventListener("click", () => {
    console.log("WhatsApp CTA clicked");
  });
});

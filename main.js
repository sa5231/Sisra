const whatsappNumber = "966554046604";
const whatsappMsg = encodeURIComponent("السلام عليكم 👋\nأبغى أطلب من سيسرا");

function openWhatsApp() {
  window.open(
    `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`,
    "_blank"
  );
}

// سنة الفوتر
document.getElementById("year").textContent = new Date().getFullYear();

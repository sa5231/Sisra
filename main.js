// ===== WhatsApp =====
const whatsappNumber = "966554046604";
const whatsappMsg = "السلام عليكم 👋\nأبغى أطلب من سيسرا";

function openWhatsApp() {
  const text = encodeURIComponent(whatsappMsg);
  const appUrl = `whatsapp://send?phone=${whatsappNumber}&text=${text}`;
  const webUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
  
  window.location.href = appUrl;
  setTimeout(() => {
    window.location.href = webUrl;
  }, 600);
}

// ===== Toggle Details (Inline) =====
function toggleDetails() {
  const box = document.getElementById("detailsInline");
  const btn = document.getElementById("detailsBtn");
  if (!box || !btn) return;
  
  const isHidden = box.hasAttribute("hidden");
  
  if (isHidden) {
    box.removeAttribute("hidden");
    btn.textContent = "إخفاء التفاصيل";
    box.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    box.setAttribute("hidden", "");
    btn.textContent = "شوف التفاصيل";
  }
}

// ===== Footer Year =====
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

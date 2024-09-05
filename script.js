// Fungsi untuk mengirim pesan ke WhatsApp
function sendWhatsAppMessage(event) {
    event.preventDefault(); // Mencegah form submit biasa

    // Ambil teks dari textarea
    const message = document.getElementById("message").value;

    // Nomor WhatsApp tujuan (gunakan format internasional tanpa tanda '+')
    const phoneNumber = "6285757572590";

    // Membuat URL WhatsApp API dengan pesan yang diencode
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Membuka URL dalam tab baru
    window.open(whatsappUrl, '_blank');
}

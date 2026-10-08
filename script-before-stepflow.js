console.log("SkillEarn Digital loaded successfully!");

function sendOrder(event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const phone = document.getElementById("customerPhone").value;
    const service = document.getElementById("serviceName").value;
    const details = document.getElementById("orderDetails").value;

    const message =
        "Hello SkillEarn Digital,%0A%0A" +
        "New Order%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "WhatsApp: " + encodeURIComponent(phone) + "%0A" +
        "Service: " + encodeURIComponent(service) + "%0A" +
        "Details: " + encodeURIComponent(details);

    window.open(
        "https://wa.me/919133213727?text=" + message,
        "_blank"
    );
}

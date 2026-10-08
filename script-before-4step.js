let currentStep = 1;
let selectedService = "";
let selectedPrice = "";
let order = {};

function showStep(step) {
    document.querySelectorAll(".step").forEach(function(section) {
        section.classList.remove("active");
    });

    const target = document.getElementById("step" + step);

    if (target) {
        target.classList.add("active");
    }

    document.getElementById("stepCounter").textContent =
        "Step " + step + " of 5";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function nextStep() {
    if (currentStep < 5) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

function selectService(service, price) {
    selectedService = service;
    selectedPrice = price;

    document.getElementById("selectedService").textContent = service;
    document.getElementById("selectedPrice").textContent = price;

    document.getElementById("paymentService").textContent = service;
    document.getElementById("paymentPrice").textContent = price;

    currentStep = 3;
    showStep(currentStep);
}

function submitDetails(event) {
    event.preventDefault();

    order.name = document.getElementById("customerName").value.trim();
    order.phone = document.getElementById("customerPhone").value.trim();
    order.details = document.getElementById("orderDetails").value.trim();

    if (!order.name || !order.phone || !order.details) {
        alert("Please complete all order details.");
        return;
    }

    if (!selectedService) {
        alert("Please select a service first.");
        currentStep = 2;
        showStep(currentStep);
        return;
    }

    document.getElementById("paymentService").textContent =
        selectedService;

    document.getElementById("paymentPrice").textContent =
        selectedPrice;

    currentStep = 4;
    showStep(currentStep);
}

function confirmPayment() {
    currentStep = 5;
    showStep(currentStep);
}

function sendWhatsApp() {
    const message =
        "Hello SkillEarn Digital!\n\n" +
        "New Order Confirmation\n\n" +
        "Name: " + order.name + "\n" +
        "WhatsApp: " + order.phone + "\n" +
        "Service: " + selectedService + "\n" +
        "Price: " + selectedPrice + "\n" +
        "Requirements: " + order.details + "\n\n" +
        "Payment marked as completed.";

    const whatsappUrl =
        "https://wa.me/919133213727?text=" +
        encodeURIComponent(message);

    window.open(whatsappUrl, "_blank");
}

function goHome() {
    currentStep = 1;
    selectedService = "";
    selectedPrice = "";
    order = {};

    document.getElementById("customerName").value = "";
    document.getElementById("customerPhone").value = "";
    document.getElementById("orderDetails").value = "";

    showStep(1);
}

document.addEventListener("DOMContentLoaded", function() {
    showStep(1);
});

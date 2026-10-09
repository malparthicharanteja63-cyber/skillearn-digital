let currentStep = 1;
let selectedService = "";
let selectedPrice = "";
let order = {};

function showStep(step) {
    currentStep = step;

    document.querySelectorAll(".step").forEach(function(section) {
        section.classList.remove("active");
    });

    const target = document.getElementById("step" + step);

    if (target) {
        target.classList.add("active");
    }

    const counter = document.getElementById("stepCounter");

    if (counter) {
        counter.textContent = "Step " + step + " of 3";
    }

    window.scrollTo(0, 0);
}

function nextStep() {
    if (currentStep === 1) {
        showStep(2);
        return;
    }

    if (currentStep === 2 && !selectedService) {
        alert("Please select a service to continue.");
        return;
    }

    if (currentStep < 3) {
        showStep(currentStep + 1);
    }
}

function prevStep() {
    showStep(currentStep - 1);
}

function selectService(service, price) {
    selectedService = service;
    selectedPrice = price;

    document.getElementById("selectedService").textContent = service;
    document.getElementById("selectedPrice").textContent = price;

    showStep(3);
}

function submitDetails(event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const details = document.getElementById("orderDetails").value.trim();

    if (!name || !phone || !details) {
        alert("Please complete all order details.");
        return false;
    }

    if (!selectedService) {
        alert("Please select a service first.");
        showStep(2);
        return false;
    }

    order = {
        name: name,
        phone: phone,
        details: details
    };

    document.getElementById("finalService").textContent = selectedService;
    document.getElementById("finalPrice").textContent = selectedPrice;
    const orderForm = document.querySelector("#step3 form");
    const review = document.getElementById("orderReview");
    if (orderForm) orderForm.hidden = true;
    if (review) review.hidden = false;
    window.scrollTo(0, 0);
    return false;
}

function sendWhatsApp() {
    if (!order.name || !order.phone || !order.details || !selectedService) {
        alert("Please complete your order details first.");
        showStep(selectedService ? 3 : 2);
        return;
    }

    const message =
        "Hello SkillEarn Digital!%0A%0A" +
        "New Website / Design Enquiry%0A%0A" +
        "Name: " + encodeURIComponent(order.name) + "%0A" +
        "WhatsApp: " + encodeURIComponent(order.phone) + "%0A" +
        "Service: " + encodeURIComponent(selectedService) + "%0A" +
        "Price: " + encodeURIComponent(selectedPrice) + "%0A" +
        "Requirements: " + encodeURIComponent(order.details);

    window.open(
        "https://wa.me/919133213727?text=" + message,
        "_blank"
    );
}

function goHome() {
    selectedService = "";
    selectedPrice = "";
    order = {};

    const form = document.querySelector("#step3 form");

    if (form) {
        form.reset();
        form.hidden = false;
    }
    const review = document.getElementById("orderReview");
    if (review) review.hidden = true;
    showStep(1);
}


function openDemoSite(demoId) {
    showDemo(demoId);
    setTimeout(() => {
        const modal = document.getElementById("demoModal");
        const preview = document.getElementById("demoPreview");

        if (modal) {
            modal.classList.add("direct-demo");
            modal.classList.add("active");
        }

        if (preview) {
            preview.scrollTop = 0;
        }

        document.body.classList.add("demo-site-open");
    }, 50);
}

function showDemo(demoId) {
    const demos = {
        demo1: {
            brand:"SkillEarn Business", type:"Business Website",
            title:"A Website That Makes Your Business Look Professional",
            text:"A complete business website concept designed to build trust and turn visitors into enquiries.",
            nav:["Home","Services","About","Contact"],
            cards:["Professional Web Design","Mobile-First Experience","Lead-Focused Contact"],
            labels:["01","02","03"], variant:"business"
        },
        demo2: {
            brand:"BusinessPro", type:"Corporate Website",
            title:"Professional Business Website",
            text:"A polished corporate website concept for companies that want a stronger digital presence.",
            nav:["Home","Company","Services","Contact"],
            cards:["Company Profile","Business Services","Contact Team"],
            labels:["01","02","03"], variant:"corporate"
        },
        demo3: {
            brand:"MyPortfolio", type:"Portfolio Website",
            title:"Show Your Work With Confidence",
            text:"A clean portfolio concept for freelancers, developers, designers and professionals.",
            nav:["Home","Projects","Skills","Contact"],
            cards:["Featured Projects","My Skills","Experience"],
            labels:["01","02","03"], variant:"portfolio"
        },
        demo4: {
            brand:"ShopEasy", type:"E-Commerce Website",
            title:"Everything You Need In One Store",
            text:"A modern online-store concept with products, offers, shopping and conversion-focused sections.",
            nav:["Home","Products","Offers","Cart"],
            cards:["New Products","Best Sellers","Special Offers"],
            labels:["NEW","TOP","SALE"], variant:"shop"
        },
        demo5: {
            brand:"AppFlow", type:"Web Application",
            title:"Powerful Business Dashboard",
            text:"A web application concept for managing users, activity, analytics and business operations.",
            nav:["Dashboard","Analytics","Users","Settings"],
            cards:["Dashboard","Analytics","User Management"],
            labels:["01","02","03"], variant:"app"
        },
        demo6: {
            brand:"CreatorPro", type:"Thumbnail Design",
            title:"Clean Thumbnails For Serious Creators",
            text:"A creator-focused design portfolio showing clean, readable and professional thumbnail concepts.",
            nav:["Home","Designs","Packages","Contact"],
            cards:["Simple","Clean","Clickable"],
            labels:["01","02","03"], variant:"creator"
        },
        demo7: {
            brand:"CreatorPro", type:"Bold Thumbnail Design",
            title:"Stand Out From The Crowd",
            text:"Bold thumbnail concepts designed to grab attention and make creator content stand out.",
            nav:["Home","Designs","Packages","Contact"],
            cards:["Bold","Modern","Engaging"],
            labels:["01","02","03"], variant:"bold"
        },
        demo8: {
            brand:"CTR Studio", type:"CTR Design Studio",
            title:"Turn Views Into Clicks",
            text:"A high-impact thumbnail portfolio concept focused on attention, clarity and stronger click potential.",
            nav:["Home","Portfolio","Packages","Contact"],
            cards:["CTR Focus","Premium","Eye-Catching"],
            labels:["01","02","03"], variant:"ctr"
        },
        demo9: {
            brand:"ThumbnailPack", type:"10 Thumbnail Package",
            title:"10 Thumbnails. One Strong Brand.",
            text:"A package showcase designed to give an entire YouTube channel a consistent professional identity.",
            nav:["Home","Portfolio","Pricing","Contact"],
            cards:["10 Designs","Consistent","Creator Ready"],
            labels:["10","01","YT"], variant:"pack"
        },
        demo10: {
            brand:"CreativeCare", type:"Monthly Creative Service",
            title:"Your Monthly Creative Partner",
            text:"A recurring creative-service concept for businesses and creators that need fresh designs every month.",
            nav:["Home","Services","Plans","Contact"],
            cards:["Monthly","Creative","Support"],
            labels:["01","02","03"], variant:"monthly"
        },
        demo11: {
            brand:"PremiumStudio", type:"Premium Creative Agency",
            title:"Premium Creative Service",
            text:"A premium agency concept for serious creators and businesses that want priority creative support.",
            nav:["Home","Services","Plans","Contact"],
            cards:["Premium","Monthly","Priority"],
            labels:["01","02","03"], variant:"premium"
        }
    };

    const demo = demos[demoId];
    if (!demo) return;

    const visuals = {
        business:`<div class="demo-showcase business-showcase"><div class="showcase-badge">TRUSTED BUSINESS</div><div class="showcase-title">Grow Your Business Online</div><div class="showcase-lines"><span></span><span></span></div><div class="showcase-buttons"><i>Get Started</i><i>View Services</i></div></div>`,
        corporate:`<div class="demo-showcase corporate-showcase"><div class="showcase-stat-row"><b>12+</b><b>250+</b><b>98%</b></div><div class="showcase-title">Built For Growing Companies</div><div class="showcase-lines"><span></span><span></span><span></span></div></div>`,
        portfolio:`<div class="demo-showcase portfolio-showcase"><div class="portfolio-photo">PROJECT<br>01</div><div class="showcase-title">Creative Portfolio</div><div class="portfolio-tags"><i>Branding</i><i>Web</i><i>Design</i></div></div>`,
        shop:`<div class="demo-showcase shop-showcase"><div class="shop-products"><i>PRODUCT</i><i>PRODUCT</i><i>PRODUCT</i></div><div class="showcase-title">Discover Something Great</div><div class="showcase-buttons"><i>Shop Now</i><i>View Offers</i></div></div>`,
        app:`<div class="demo-showcase app-showcase"><div class="app-sidebar">DASHBOARD<br>ANALYTICS<br>USERS<br>SETTINGS</div><div class="app-main"><div class="app-metrics"><i>1,284</i><i>₹48.2K</i><i>+24%</i></div><div class="app-chart"></div></div></div>`,
        creator:`<div class="demo-showcase creator-showcase"><div class="thumbnail-stack"><i>VIDEO<br>IDEA</i><i>NEW<br>VIDEO</i><i>TOP<br>10</i></div><div class="showcase-title">Creator Thumbnail Studio</div></div>`,
        bold:`<div class="demo-showcase bold-showcase"><div class="bold-word">MAKE<br>THEM<br>STOP.</div><div class="showcase-buttons"><i>See Designs</i><i>Get Package</i></div></div>`,
        ctr:`<div class="demo-showcase ctr-showcase"><div class="ctr-card"><small>CTR DESIGN</small><strong>MORE<br>CLICKS</strong><span>ATTENTION → INTEREST → ACTION</span></div><div class="ctr-meter">CLICK POTENTIAL</div></div>`,
        pack:`<div class="demo-showcase pack-showcase"><div class="pack-grid"><i>01</i><i>02</i><i>03</i><i>04</i><i>05</i><i>06</i></div><div class="showcase-title">10 Thumbnail Collection</div></div>`,
        monthly:`<div class="demo-showcase monthly-showcase"><div class="plan-head">MONTHLY CREATIVE</div><div class="plan-price">₹9,999<span>/month</span></div><div class="plan-list"><i>Fresh Designs</i><i>Priority Support</i><i>Consistent Branding</i></div></div>`,
        premium:`<div class="demo-showcase premium-showcase"><div class="premium-badge">PREMIUM</div><div class="showcase-title">Creative Support Without The Stress</div><div class="premium-items"><i>Priority</i><i>Strategy</i><i>Quality</i></div></div>`
    };

    const theme = "demo-" + demo.variant;

    document.getElementById("demoPreview").innerHTML = `
        <div class="real-demo-site ${theme}">
            <header class="real-demo-header">
                <div class="real-demo-brand">${demo.brand}</div>
                <nav>
                    ${demo.nav.map(item => `<button type="button" onclick="demoMessage('${item}')">${item}</button>`).join("")}
                </nav>
                <button type="button" class="demo-top-button" onclick="demoWhatsApp('${demo.title}')">Start Project</button>
            </header>

            <section class="real-demo-hero">
                <div class="demo-hero-copy">
                    <span class="badge">${demo.type}</span>
                    <h1>${demo.title}</h1>
                    <p>${demo.text}</p>
                    <div class="demo-actions">
                        <button type="button" class="real-demo-cta" onclick="demoWhatsApp('${demo.title}')">Get Started →</button>
                        <button type="button" class="demo-secondary" onclick="demoMessage('${demo.nav[1]}')">Explore ${demo.nav[1]}</button>
                    </div>
                </div>
                <div class="demo-visual">${visuals[demo.variant]}</div>
            </section>

            <section class="real-demo-features">
                <div class="demo-section-heading">
                    <span>FEATURED SECTIONS</span>
                    <h2>Designed around your goals</h2>
                </div>
                <div class="demo-feature-grid">
                    ${demo.cards.map((card,index) => `
                        <article class="real-demo-card">
                            <div class="demo-icon">${demo.labels[index]}</div>
                            <h3>${card}</h3>
                            <p>Professional quality designed around your audience, brand and business goals.</p>
                            <button type="button" onclick="demoMessage('${card}')">Explore →</button>
                        </article>
                    `).join("")}
                </div>
            </section>

            <section class="demo-bottom-cta">
                <div>
                    <span>READY TO BUILD?</span>
                    <h2>Let's create something professional.</h2>
                    <p>Tell SkillEarn Digital what you need and we'll discuss your project.</p>
                </div>
                <button type="button" onclick="demoWhatsApp('${demo.title}')">Get Started →</button>
            </section>

            <footer class="real-demo-footer">
                <strong>${demo.brand}</strong>
                <p>Website preview created by SkillEarn Digital</p>
            </footer>
        </div>
    `;

    document.getElementById("demoModal").classList.add("active");
}

function demoMessage(item) {
    const site = document.querySelector(".real-demo-site");
    if (!site) return;
    const titles = {
        "Home": "Welcome to our website",
        "Services": "Our Services",
        "About": "About Our Company",
        "Contact": "Get In Touch",
        "Projects": "Our Projects",
        "Skills": "Our Skills",
        "Experience": "Our Experience",
        "Products": "Our Products",
        "Offers": "Special Offers",
        "Cart": "Your Shopping Cart",
        "Dashboard": "Your Dashboard",
        "Features": "Powerful Features",
        "Users": "User Management",
        "Settings": "Account Settings",
        "Designs": "Our Designs",
        "Packages": "Our Packages",
        "Portfolio": "Our Portfolio",
        "Pricing": "Simple Pricing",
        "Plans": "Our Plans",
        "Get Started": "Let’s Get Started"
    };
    const heading = titles[item] || item;
    const hero = site.querySelector(".real-demo-hero h1");
    const text = site.querySelector(".real-demo-hero p");
    if (hero) hero.textContent = heading;
    if (text) text.textContent = "Explore this section to see how your professional website could work for your customers.";
    const demoHero = site.querySelector(".real-demo-hero"); if (demoHero) demoHero.scrollIntoView({behavior:"smooth", block:"start"});
}

function closeDemo() {
    const modal = document.getElementById("demoModal");
    if (modal) {
        modal.classList.remove("active", "direct-demo");
    }
    document.body.classList.remove("demo-site-open");
}


document.addEventListener("DOMContentLoaded", function() {
    showStep(1);
});

function demoWhatsApp(service) {
    const demoServices = {
        "A Website That Makes Your Business Look Professional": ["1-Page Landing Website", "₹4,999"],
        "Professional Business Website": ["5-Page Business Website ⭐", "₹14,999"],
        "Show Your Work With Confidence": ["Portfolio Website", "₹7,999"],
        "Everything You Need In One Store": ["E-commerce Website", "₹29,999"],
        "Powerful Business Dashboard": ["Custom Web Application", "₹49,999+"],
        "Clean Thumbnails For Serious Creators": ["Basic Thumbnail", "₹199"],
        "Stand Out From The Crowd": ["Good-Quality Thumbnail", "₹399"],
        "Turn Views Into Clicks": ["Professional / CTR Thumbnail", "₹799"],
        "10 Thumbnails. One Strong Brand.": ["10 Thumbnail Package", "₹2,999"],
        "Your Monthly Creative Partner": ["Monthly Creative Package", "₹9,999/month"],
        "Premium Creative Service": ["Premium Monthly Package", "₹19,999/month"]
    };

    const match = demoServices[service];
    selectedService = match ? match[0] : service;
    selectedPrice = match ? match[1] : "Custom Quote";

    const selected = document.getElementById("selectedService");
    const price = document.getElementById("selectedPrice");

    if (selected) selected.textContent = selectedService;
    if (price) price.textContent = selectedPrice;

    closeDemo();
    showStep(3);
}

window.openDemoTest = function(){
    alert("SkillEarn Demo JavaScript is working");
};

/* AUTO OPEN DEMO FROM URL */
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const demoId = params.get("demo");

    if (demoId && /^demo([1-9]|1[01])$/.test(demoId)) {
        setTimeout(() => openDemoSite(demoId), 300);
    }
});

function editOrderDetails() {
    const form = document.querySelector("#step3 form");
    const review = document.getElementById("orderReview");
    if (review) review.hidden = true;
    if (form) form.hidden = false;
    window.scrollTo(0, 0);
}


function askQuestion() {
    const message = "Hello SkillEarn Digital! I have a question about your digital services and pricing. Could you please help me?";
    window.open(
        "https://wa.me/919133213727?text=" + encodeURIComponent(message),
        "_blank"
    );
}

/* SKILLEARN DIGITAL CUSTOMER ASSISTANT */
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("seAgentToggle");
    const panel = document.getElementById("seAgentPanel");
    const close = document.getElementById("seAgentClose");
    const form = document.getElementById("seAgentForm");
    const input = document.getElementById("seAgentInput");
    const messages = document.getElementById("seAgentMessages");

    if (!toggle || !panel || !form || !input || !messages) return;

    const services = [
        ["1-Page Landing Website", "₹4,999"],
        ["5-Page Business Website", "₹14,999"],
        ["Portfolio Website", "₹7,999"],
        ["E-commerce Website", "₹29,999"],
        ["Custom Web Application", "₹49,999+"],
        ["Basic Thumbnail", "₹199"],
        ["Good-Quality Thumbnail", "₹399"],
        ["Professional / CTR Thumbnail", "₹799"],
        ["10 Thumbnail Package", "₹2,999"],
        ["Monthly Creative Package", "₹9,999/month"],
        ["Premium Monthly Package", "₹19,999/month"]
    ];

    function addMessage(text, type) {
        const message = document.createElement("div");
        message.className = "se-agent-message " + type;
        message.textContent = text;
        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
    }

    function openWhatsApp(message) {
        window.open(
            "https://wa.me/919133213727?text=" +
            encodeURIComponent(message),
            "_blank",
            "noopener"
        );
    }

    function answerQuestion(question) {
        const q = question.toLowerCase();

        if (/\b(hi|hello|hey|namaste)\b/.test(q)) {
            return "Hello! Welcome to SkillEarn Digital. I can help with websites, thumbnails, prices, and demos. What would you like to explore?";
        }

        if (q.includes("price") || q.includes("pricing") ||
            q.includes("cost") || q.includes("rate") ||
            q.includes("how much")) {
            return "Here are our current listed prices:\n\n" +
                services.map(s => s[0] + " — " + s[1]).join("\n") +
                "\n\nAsk us on WhatsApp for a custom requirement or quote.";
        }

        if (q.includes("thumbnail") || q.includes("youtube design")) {
            return "Thumbnail services:\n\n" +
                services.filter(s => /thumbnail/i.test(s[0]))
                    .map(s => s[0] + " — " + s[1]).join("\n") +
                "\n\nTell me your channel or design requirements, and I can guide you.";
        }

        if (q.includes("demo") || q.includes("sample") ||
            q.includes("portfolio")) {
            return "To explore our samples, close this chat and use the demo options on the SkillEarn Digital website. You can then return here to ask about a service.";
        }

        if (q.includes("ecommerce") || q.includes("e-commerce") ||
            q.includes("online store") || q.includes("sell products")) {
            return "Recommended for you: E-commerce Website — ₹29,999.\n\n" +
                "A suitable option for a business that wants to sell products online. " +
                "Tell us what products you sell and what features you need.\n\n" +
                "View our website samples or contact us on WhatsApp for a project discussion.";
        }

        if (q.includes("portfolio")) {
            return "Recommended for you: Portfolio Website — ₹7,999.\n\n" +
                "A good option for showcasing your work, skills, projects, or personal brand.\n\n" +
                "Would you like to explore our samples or discuss your requirements on WhatsApp?";
        }

        if (q.includes("landing page") || q.includes("landing website")) {
            return "Recommended for you: 1-Page Landing Website — ₹4,999.\n\n" +
                "A focused one-page website for presenting a service, product, or offer.\n\n" +
                "Tell us what you want to promote, and we can discuss the right layout.";
        }

        if (q.includes("business website") || q.includes("professional website") ||
            q.includes("company website") || q.includes("website for my business")) {
            return "Recommended for you: 5-Page Business Website — ₹14,999.\n\n" +
                "A professional multi-page website for introducing your business, services, and contact details.\n\n" +
                "To guide you better, what type of business do you run? You can also contact us on WhatsApp to discuss your requirements.";
        }

        if (q.includes("web app") || q.includes("web application")) {
            return "Recommended for custom functionality: Custom Web Application — ₹49,999+.\n\n" +
                "The final price depends on the features and complexity. Tell us what you want the application to do, and we can discuss your requirements.";
        }

        if (q.includes("website") || q.includes("web design") ||
            q.includes("site")) {
            return "Website services:\n\n" +
                services.filter(s => /website|application/i.test(s[0]))
                    .map(s => s[0] + " — " + s[1]).join("\n") +
                "\n\nTell me what type of website you need, and I can recommend an option. You can also explore our website samples.";
        }


        if (q.includes("whatsapp") || q.includes("contact") ||
            q.includes("human") || q.includes("quote") ||
            q.includes("order") || q.includes("talk")) {
            openWhatsApp("Hello SkillEarn Digital! I need help choosing a digital service. Please assist me.");
            return "I have opened WhatsApp for you. Send your message there to discuss your requirements.";
        }

        if (q.includes("monthly") || q.includes("package")) {
            return "Our monthly creative packages are:\n\n" +
                services.filter(s => /monthly|package/i.test(s[0]))
                    .map(s => s[0] + " — " + s[1]).join("\n") +
                "\n\nContact us on WhatsApp to discuss what is included for your needs.";
        }

        return "I can help with website services, thumbnails, pricing, and demos. Try asking “Show me your prices” or “I need a website”. For a personal answer, contact our team on WhatsApp.";
    }

    function submitQuestion(question) {
        const cleanQuestion = question.trim();
        if (!cleanQuestion) return;

        addMessage(cleanQuestion, "user");
        const reply = answerQuestion(cleanQuestion);
        addMessage(reply, "bot");
    }

    toggle.addEventListener("click", function () {
        const opening = panel.hidden;
        panel.hidden = !opening;
        toggle.setAttribute("aria-expanded", String(opening));
        if (opening) input.focus();
    });

    if (close) {
        close.addEventListener("click", function () {
            panel.hidden = true;
            toggle.setAttribute("aria-expanded", "false");
            toggle.focus();
        });
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        submitQuestion(input.value);
        input.value = "";
        input.focus();
    });

    document.querySelectorAll("[data-agent-question]").forEach(function (button) {
        button.addEventListener("click", function () {
            submitQuestion(button.getAttribute("data-agent-question") || "");
        });
    });
});
/* END SKILLEARN DIGITAL CUSTOMER ASSISTANT */

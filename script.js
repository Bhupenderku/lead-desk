// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Toggle between monthly and yearly pricing
document.getElementById("monthly").addEventListener("click", function () {
  this.classList.add("active");
  document.getElementById("yearly").classList.remove("active");

  // Update pricing
  document
    .querySelectorAll(".pricing-card")[0]
    .querySelector(".plan-price").innerHTML =
    '₹999<span class="plan-period">/agent/month</span>';
  document
    .querySelectorAll(".pricing-card")[1]
    .querySelector(".plan-price").innerHTML =
    '₹1,999<span class="plan-period">/agent/month</span>';
});

document.getElementById("yearly").addEventListener("click", function () {
  this.classList.add("active");
  document.getElementById("monthly").classList.remove("active");

  // Update pricing
  document
    .querySelectorAll(".pricing-card")[0]
    .querySelector(".plan-price").innerHTML =
    '₹8,991<span class="plan-period">/agent/year</span>';
  document
    .querySelectorAll(".pricing-card")[1]
    .querySelector(".plan-price").innerHTML =
    '₹19,991<span class="plan-period">/agent/year</span>';
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Navigation between pages (demo only)
function showPage(pageId) {
  // Hide all pages
  document.getElementById("auth-pages").classList.add("hidden");
  document.getElementById("onboarding-pages").classList.add("hidden");
  document.getElementById("app-pages").classList.add("hidden");

  // Show selected page
  if (pageId === "auth") {
    document.getElementById("auth-pages").classList.remove("hidden");
  } else if (pageId === "onboarding") {
    document.getElementById("onboarding-pages").classList.remove("hidden");
  } else if (pageId === "app") {
    document.getElementById("app-pages").classList.remove("hidden");
  }
}

// Show specific auth page
function showAuthPage(pageId) {
  // Hide all auth pages
  document.querySelectorAll(".auth-page").forEach((page) => {
    page.classList.add("hidden");
  });

  // Show selected auth page
  document.getElementById(pageId).classList.remove("hidden");
}

// Show specific app page
function showAppPage(pageId) {
  // Hide all app pages
  document.querySelectorAll(".app-page").forEach((page) => {
    page.classList.add("hidden");
  });

  // Show selected app page
  document.getElementById(pageId).classList.remove("hidden");
}

// Onboarding wizard functions
let currentStep = 1;
const totalSteps = 4;

function updateProgressBar() {
  const progressBar = document.getElementById("progress-bar");
  const progressPercent = (currentStep / totalSteps) * 100;
  progressBar.style.width = progressPercent + "%";

  document.getElementById("current-step").textContent = currentStep;
  document.getElementById("total-steps").textContent = totalSteps;
}

function nextStep() {
  if (currentStep < totalSteps) {
    document.getElementById(`step-${currentStep}`).classList.remove("active");
    currentStep++;
    document.getElementById(`step-${currentStep}`).classList.add("active");
    updateProgressBar();
  }
}

function prevStep() {
  if (currentStep > 1) {
    document.getElementById(`step-${currentStep}`).classList.remove("active");
    currentStep--;
    document.getElementById(`step-${currentStep}`).classList.add("active");
    updateProgressBar();
  }
}

function skipStep() {
  if (currentStep < totalSteps) {
    nextStep();
  }
}

function finishOnboarding() {
  // In a real app, this would save the onboarding data and redirect to the app
  alert("Onboarding complete! Redirecting to dashboard...");
  showPage("app");
  showAppPage("dashboard-page");
}

// Industry selection
document.querySelectorAll(".industry-option").forEach((option) => {
  option.addEventListener("click", function () {
    document.querySelectorAll(".industry-option").forEach((opt) => {
      opt.classList.remove("selected");
    });
    this.classList.add("selected");
  });
});

// Team size selection
document.querySelectorAll(".team-size-option").forEach((option) => {
  option.addEventListener("click", function () {
    document.querySelectorAll(".team-size-option").forEach((opt) => {
      opt.classList.remove("selected");
    });
    this.classList.add("selected");
  });
});

// Goal selection
document.querySelectorAll(".goal-option").forEach((option) => {
  option.addEventListener("click", function () {
    document.querySelectorAll(".goal-option").forEach((opt) => {
      opt.classList.remove("selected");
    });
    this.classList.add("selected");
  });
});

// App navigation
document.querySelectorAll(".app-nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove active class from all links
    document.querySelectorAll(".app-nav a").forEach((l) => {
      l.classList.remove("active");
    });

    // Add active class to clicked link
    this.classList.add("active");

    // Show corresponding page
    const href = this.getAttribute("href");
    if (href === "/app") {
      showAppPage("dashboard-page");
    } else if (href === "/app/leads") {
      showAppPage("leads-page");
    } else if (href === "/app/pipeline") {
      showAppPage("pipeline-page");
    } else if (href === "/app/reports") {
      showAppPage("reports-page");
    } else if (href === "/app/ads-builder") {
      showAppPage("ads-builder-page");
    } else if (href === "/app/integrations") {
      showAppPage("integrations-page");
    } else if (href === "/app/billing") {
      showAppPage("billing-page");
    } else if (href === "/app/settings") {
      showAppPage("settings-page");
    } else if (href === "/app/support") {
      showAppPage("support-page");
    }
  });
});

// Settings navigation
document.querySelectorAll(".settings-nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove active class from all links
    document.querySelectorAll(".settings-nav a").forEach((l) => {
      l.classList.remove("active");
    });

    // Add active class to clicked link
    this.classList.add("active");
  });
});

// Reports tab navigation
function showReportTab(tabId) {
  // Hide all tab contents
  document.querySelectorAll(".reports-tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Remove active class from all tabs
  document.querySelectorAll(".reports-tab").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Show selected tab content
  document.getElementById(`${tabId}-tab`).classList.add("active");

  // Add active class to selected tab
  document
    .querySelector(`.reports-tab:nth-child(${getTabIndex(tabId)})`)
    .classList.add("active");
}

function getTabIndex(tabId) {
  const tabs = ["overview", "channels", "agents", "roi"];
  return tabs.indexOf(tabId) + 1;
}

// Demo navigation links
document.addEventListener("DOMContentLoaded", function () {
  // Auth links
  document.querySelectorAll('a[href="/login"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      showPage("auth");
      showAuthPage("login-page");
    });
  });

  document.querySelectorAll('a[href="/signup"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      showPage("auth");
      showAuthPage("signup-page");
    });
  });

  // App links (demo only)
  document.querySelectorAll('a[href^="/app"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      showPage("app");
      showAppPage("dashboard-page");
    });
  });

  // Onboarding link (demo only)
  document.querySelectorAll('a[href="/app/onboarding"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      showPage("onboarding");
    });
  });
});

// Add animation on scroll
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, observerOptions);

document
  .querySelectorAll(".step, .feature-card, .screenshot-row, .testimonial-card")
  .forEach((el) => {
    observer.observe(el);
  });

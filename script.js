let currentLang = "ar";

function toggleLang() {
  if (currentLang === "ar") {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    document.getElementById("title").innerText = "Sama Al Baraka Company";
    document.getElementById("desc").innerText = "Sama Elbaraka for Water Treatment & Environment Technology.";
    document.getElementById("storeBtn").innerText = "Order from Our Online Store";
    document.getElementById("salesBtn").innerText = "Sales department";
    document.getElementById("supportBtn").innerText = "Support department";

    document.querySelector(".copyright").innerText =
      document.querySelector(".copyright").getAttribute("data-en");

    document.querySelector(".lang-btn").innerText = "AR";
    currentLang = "en";
  } else {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
    document.getElementById("title").innerText = "شركة سما البركة";
    document.getElementById("desc").innerText = "شركة سما البركة لتكنولوجيا معالجة المياة والبيئه";
    document.getElementById("storeBtn").innerText = "الطلب من متجرنا الإلكتروني";
    document.getElementById("salesBtn").innerText = "واتساب المبيعات";
    document.getElementById("supportBtn").innerText = "واتساب الصيانة";

    document.querySelector(".copyright").innerText =
      document.querySelector(".copyright").getAttribute("data-ar");

    document.querySelector(".lang-btn").innerText = "EN";
    currentLang = "ar";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  var preloader = document.createElement("div");
  preloader.id = "preloader";

  // Create the image element
  var image = document.createElement("img");
  image.src = "./image_processing20200803-12829-111f0pe.gif"; // Replace with the path to your imag
  preloader.appendChild(image);

  document.body.appendChild(preloader);

  // After the DOM content has been loaded
  setTimeout(function () {
    preloader.style.display = "none"; // Hide the preloader after 400ms
  }, 5000);
});

document.addEventListener("DOMContentLoaded", function() {
  // Create the parent container element
  var infoContainer = document.createElement("div");
  infoContainer.classList.add("info");

  // Create the info-cont element
  var infoCont = document.createElement("div");
  infoCont.classList.add("info-cont");

  // Create the info-title element
  var infoTitle = document.createElement("h3");
  infoTitle.classList.add("info-title");
  infoTitle.textContent = "معلومات عنا";

  // Create the info-p element
  var infoP = document.createElement("p");
  infoP.classList.add("info-p");
  infoP.innerHTML = `عملائنا الكرام،<br>
                    مرحباً بكم في منصتنا التجارية الشاملة عبر الإنترنت. في علاوين، تتمثّل رسالتنا في توفير تجربة تسوق متميزة لكم من خلال مجموعة واسعة من أفضل المنتجات عالية الجودة.
                    سواء كنت تبحث عن منتجات أطفال أو منزليّة أو مستلزمات العناية بالجمال والصحة أو غيرها، فإن نظامنا المتقدّم لتصنيف المنتجات صُمِّم لتحسين قدرتك على العثور على ما تحتاجه بسهولة. ومع آلاف الخيارات في عدّة أقسام، نسعى لنكون متجرك الشامل.
                    كما يُتاح لك استخدام واجهات بحث وفلترة ذكية للتصفّح السريع للمنتجات ذات الصلة باهتماماتك. ومع إضافة منتجات جديدة يومياً، ستجد دائماً جديدا يستحق الاكتشاف في زياراتك المقبلة.
                    كما يُمكنك التواصل مع فريق دعمنا المدرّب للإجابة عن أسئلتك وتقديم التوصيات عبر الهاتف أو البريد الإلكتروني أو الدردشة المباشرة.
                    نقدّر ثقتكم بنا ونتطلّع لخدمة جميع احتياجاتكم التسوقية. تسوّقوا وثقوا بأن كل منتج مغطّى بضمان الرضا التام. تمتّعوا باستكشاف كل ما لدينا!`;

  // Create the img element
  var img = document.createElement("img");
  img.src = "./wm.png";
  img.classList.add("women");

  // Append child elements to their parent containers
  infoContainer.appendChild(infoCont);
  infoCont.appendChild(infoTitle);
  infoCont.appendChild(infoP);
  infoContainer.appendChild(img);

  // Find the target element to insert the infoContainer element before
  var targetElement = document.querySelector(".heading-primary");

  // Check if the target element exists
  if (targetElement) {
    // Insert the infoContainer element before the target element
    targetElement.parentNode.insertBefore(infoContainer, targetElement);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    ".list-unstyled>li>a ,.header-list>li>a,.yc ,.yc-search,.cart-switcher>.currency-value>span"
  );
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "white";
  }
});



document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".main-bar,.desktop-bar");
  elements.forEach(function (element) {
    element.style.backgroundColor = "#121713";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("section,body");
  elements.forEach(function (element) {
    element.style.backgroundColor = "#FFFCF5";
  });
});

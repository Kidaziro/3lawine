const cssCode = `
:root{
  --primary-color: #F2AB35;
  --light-primary-color: #F2AB35;
  --dark-primary-color: #F2AB35;
  --body-background-color: #FFFCF5;
}

.women{
width: 400px;
}


.section-xbVUqFcHzLqn5alN .product-item, .section-xbVUqFcHzLqn5alN .product-item,
.section-Iq21K5sUxqtWfcP5 .product-item, .section-Iq21K5sUxqtWfcP5 .product-item 
{
border:none;
transition: box-shadow .3s;
border-radius: 0 0 20px 20px;
border-color: #000;
}
.section-xbVUqFcHzLqn5alN .product-item  .product-details{
border-color: #F2AB35;
}

.section-xbVUqFcHzLqn5alN .product-item:hover, .section-xbVUqFcHzLqn5alN .product-item:hover,
.section-Iq21K5sUxqtWfcP5 .product-item:hover, .section-Iq21K5sUxqtWfcP5 .product-item:hover 
{
box-shadow: 0 0 11px rgba(33,33,33,.2);   
}


.section-xbVUqFcHzLqn5alN .heading-primary,.section-Iq21K5sUxqtWfcP5 .heading-primary {

color: #000;
text-align: right;

}
.section-xbVUqFcHzLqn5alN .heading-description,.app-heading .heading-description{
text-align: right;
padding-right: 60px;
}

.info{
display: flex;
flex-direction: row-reverse;
justify-content: space-between; 
margin-bottom: 100px;
}

.info-cont{
width: -webkit-fill-available;;
display: flex;
  flex-direction: column;
  justify-content: center;
}


.info-title{
text-align: right;
width: fit-content;
font-size: 26px;
padding-bottom: 10px;
}

.info-p{
color: #8B8C84;
text-align: right;
font-family: El Messiri;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: 25px; /* 166.667% */
text-transform: capitalize;
}

.info-title{
text-align: right;
width: fit-content;
font-size: 26px;
}


@media (max-width: 768px) {
.info {
  display: block;
  margin-bottom: 10px;
}

.info-title{
  padding-bottom: 0px;
}

}

#preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fbfbfb; /* You can customize the background color or add other styles */
  z-index: 9999; /* Make sure the preloader appears above other elements */
  display: flex;
  justify-content: center;
  align-items: center;
}

.yc ,.yc-search{
  color:white;
}

.load-more {
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: end; */
}

[dir] .load-more .button {
padding: 8px 34px 9px;
background: none;
color: #F2AB35;
border-color: #F2AB35;
}

[dir] .load-more .button:hover {
background: #F2AB35;
color: #FFFFFF;
}

.section-xbVUqFcHzLqn5alN .product-item .product-price .after,
.section-Iq21K5sUxqtWfcP5 .product-item .product-price .after {
color: #F2AB35;
}

.section-xbVUqFcHzLqn5alN .product-item .product-price .before,
.section-Iq21K5sUxqtWfcP5 .product-item .product-price .before {
color: red;
}

.section-xbVUqFcHzLqn5alN .product-item .product-actions .button,
.section-Iq21K5sUxqtWfcP5 .product-item .product-actions .button  {
color: #FFFFFFFF;
background-color: #121713;
border-color: #fff;
}

.section-xbVUqFcHzLqn5alN .product-item .product-actions .button:hover,
.section-Iq21K5sUxqtWfcP5 .product-item .product-actions .button:hover
{
color: #ffffff;
background-color: #F2AB35;
border-color: #F2AB35;
}

.footer-item >h3{
color:#F2AB35
}

[dir] .side-navigation {
background-color: #121713;
}

`;

const styleElement = document.createElement('style');
styleElement.textContent = cssCode;

document.head.appendChild(styleElement);




document.addEventListener("DOMContentLoaded", function () {
  var preloader = document.createElement("div");
  preloader.id = "preloader";

  // Create the image element
  var image = document.createElement("img");
  image.src = "https://github.com/Kidaziro/3lawine/blob/main/image_processing20200803-12829-111f0pe.gif?raw=true"; // Replace with the path to your imag
  preloader.appendChild(image); 

  document.body.appendChild(preloader);

  // After the DOM content has been loaded
  setTimeout(function () {
    preloader.style.display = "none"; // Hide the preloader after 400ms
  }, 2000);
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
  img.src = "https://github.com/Kidaziro/3lawine/blob/main/wm.png?raw=true";
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
  const elements = document.querySelectorAll(".main-bar,.desktop-bar,footer");
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

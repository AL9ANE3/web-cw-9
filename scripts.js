// 1
// moon.jpg قم بالوصول إلى الصورة وتغيرها إلى
// document.getElementById(`image`).src = "http://127.0.0.1:5500/images/moon.jpg";

// 2
// "قم بالوصول إلى كلمة الأرض وتحويلها إلى "القمر
// document.getElementById(`caption`).innerHTML = "القمر";

// 3
// بحيث إن ضغطت على البطاقة تتغير الصورة للصورة الأخرى ويتغير الاسم onClick قم بإنشاء دالة واستخدام خاصية
// دون الحاجة إلى الخطوتين 2و1
function change() {
  let title = document.getElementById(`caption`);
  let image = document.getElementById(`image`);
  let body = document.getElementById(`body`);
  if (title.innerHTML == `القمر`) {
    title.innerHTML = `الشمس`;
    image.src = `http://127.0.0.1:5500/images/sun.jpg`;
    body.style.background = `white`;
  } else {
    title.innerHTML = `القمر`;
    image.src = `http://127.0.0.1:5500/images/moon.jpg`;
    body.style.background = `grey`;
  }
}
// 4
// Night - Light Mode قم بالتعديل على الدالة بحيث تضم إليها خاصية

/*  الوضع الليلي
    يتغير لون خلفية الصفحة للرمادي
    تتغير الصورة لصورة القمر
    "يتغير الاسم أسفل الصورة ويصبح "القمر
*/

/*  الوضع النهاري
    يتغير لون خلفية الصفحة للأبيض
    تتغير الصورة لصورة الشمس
    "يتغير الاسم أسفل الصورة ويصبح "الشمس
*/

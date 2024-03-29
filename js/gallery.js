const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

/**<li class="gallery-item">
  <a class="gallery-link" href="large-image.jpg">
    <img
      class="gallery-image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li>

В атрибуті src тега <img> вказуємо посилання на маленьку версію зображення.
Для атрибута alt використовуємо опис зображення.
Посилання на велике зображення повинно зберігатися в data-атрибуті source на елементі <img>, і 
вказуватися в href посилання.
Зверни увагу на те, що зображення огорнуте посиланням, у якого атрибут href вказує на шлях до 
файлу з зображенням. Отже клік по ньому може викликати завантаження зображення на комп’ютер 
користувача. Заборони цю поведінку за замовчуванням. 
preview — посилання на маленьку версію зображення для картки галереї
original — посилання на велику версію зображення для модального вікна
description — текстовий опис зображення, для атрибута alt малого зображення та підпису великого 
зображення в модалці.*/
const galleryObj = document.querySelector(".gallery");
galleryObj.insertAdjacentHTML("beforeend", createGallery(images));

galleryObj.addEventListener('click', handleClick);

function createGallery(arr) {
  return arr
    .map((image) => 
  `<li  class="gallery-item">
  <a class="gallery-link" href="${image.original}">
    <img
      class="gallery-image"
      src="${image.preview}"
      data-source="${image.original}" 
      alt="${image.description}" width= "360"
    />
  </a>
</li>`
  )
    .join("");
}

galleryObj.style.display = "flex";
galleryObj.style.flexWrap = "wrap";
galleryObj.style.gap = "24px";
galleryObj.style.listStyleType = "none";

function handleClick(event) {
  event.preventDefault();
  const imageSource = event.target.dataset.source;
  if (!imageSource) return;
  
const instance = basicLightbox.create(
    `<img src="${imageSource}" width="800" height="600">`,
    {
      onShow: () => document.addEventListener("keydown", onEscPress),
      ocClose: () => document.removeEventListener("keydown", onEscPress),
    }
  );
  instance.show();
}

function onEscPress(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}
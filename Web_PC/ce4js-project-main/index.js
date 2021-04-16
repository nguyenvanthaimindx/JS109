let sliderImg = [
  "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/3/21/637519652103906707_F-C1_1200x300.png",
  "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/3/2/637503005616030317_F-C1_1200x300.png",
  "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/2/28/637501159927008471_F-C1_1200x300.png",
  "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/1/2/637451897956687229_F-C1_1200x300.png",
  "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/4/2/637529778337869643_F-C1_1200x300.png"
];
let brands = [
  "https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340494668267616_Macbook-Apple@2x.jpg",
  "https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340494666861275_Asus.jpg",
  "https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340494666861275_Dell@2x.jpg",
  "https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340494666704995_Acer@2x.jpg",
  "https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/7/4/637294195523924258_HP.jpg",
  "https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340494668267616_Lenovo@2x.jpg",
  "https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/1/13/637461259692529909_Microsoft@2x.png",
  "https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340493755614653_MSI@2x.jpg",
  "https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/3/11/637510714785478525_Avita@2x.png",
];

// image silder code
let slider = document.querySelector(".splide__list");
const addImg = (parent, tag, tagClass, src) => {
  let li = document.createElement(tag);
  li.className = tagClass;
  let img = document.createElement("img");
  img.src = src;
  li.appendChild(img);
  parent.appendChild(li);
};

sliderImg.forEach((src) => addImg(slider, "li", "splide__slide", src));
let image_slider = new Splide("#image_slider", {
  perPage: 1,
  type: "loop",
  cover: true,
  autoHeight: true,
  autoplay: true,
  interval: 1500,
  pauseOnHover: false,
  breakpoints: {
    600: {
      perPage: 1,
    },
  },
}).mount();

//laptop section code
let brandPC = document.querySelector("#brands");
brands.forEach((brand) => addImg(brandPC, "div", "p-4", brand));

// item
function iTems(src,name,price){
  let img = document.createElement("img")
  img.src = src
  img.classList.add("card-img-top" )
  let div = document.createElement("div")
let h5= document.createElement("h5")

let pName  = document.createElement("p")
pName.textContent = name
let pPrice  = document.createElement("p")
pPrice.textContent = name
{/* <button onclick="document.getElementById('demo').">Thêm vào giỏ hàng</button> */}

}
//Phu kien may tinh
// tạo api
const lp = {
  name: "Apple Macbook Pro 13 Touchbar ",
  parameters: [
    "CPU: Apple M1",
   " RAM: 16GB",
    "Ổ cứng: 256GB SSD",
   " VGA: Onboard",
   " Màn hình: 13.3 inch Retina IPS",
 "   HĐH: Mac OS",
   " Màu: Xám",
  ],
  price: 39989000,
  guarantee: " 12 Tháng chính hãng",
  src: [
    "https://hanoicomputercdn.com/media/product/120_58390_mbpm1__5_.png",
    "https://hanoicomputercdn.com/media/product/120_58390_mbpm1__4_.png",
    "https://hanoicomputercdn.com/media/product/120_58390_mbpm1__3_.png",
    "https://hanoicomputercdn.com/media/product/120_58390_mbpm1__2_.png",
    "https://hanoicomputercdn.com/media/product/120_58390_mbpm1__1_.png",

  ],
};
console.log(JSON.stringify(lp));







//B. Code challenge
let count = 3;
const form = document.querySelector("form");
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const luckyNumber = getRandom(1, 10);
form.onsubmit = (event) => {
  event.preventDefault();
  const number = parseInt(form.number.value);
  if (!Number.isInteger(number) || number < 1 || number > 10) {
    alert("Vui lòng nhập lại!Con số bạn nhập không thoả mãn!");
  } else {
    count--;
    if (count > 0) {
      if (number == luckyNumber) {
        alert("Chúc mừng bạn! Bạn đã đoán đúng!");
        location.reload();
      } else {
        alert("Thật tiếc! Bạn đã đoán sai! Bạn còn ${count} lần đoán!");
      }
    } else {
      alert("Thật tiếc! Bạn đã hết lượt!");
      location.reload();
    }
    form.number.value = "";
  }
};
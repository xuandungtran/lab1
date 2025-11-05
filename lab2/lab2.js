// function varExample(){
//     if(true) {
//         var x = 10;
//     }
//     console.log(x);
// }
// varExample();


// // Sửa đoạn code sau để hoạt động đúng
// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i); // Hiện tại in ra 3,3,3
//   }, 100);
// }
// // Yêu cầu: Sửa để in ra 0,1,2
// Sửa đoạn code sau để hoạt động đúng


for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Hiện tại in ra 3,3,3
  }, 100);
}


// Tạo một object student với const
// Thêm thuộc tính điểm và in ra
const student = {
  name: "ThuyTien",
  age: 20,
};

// Thực hiện các thao tác sau:
// 1. Thêm thuộc tính grade với giá trị "A"
// 2. Thay đổi tuổi thành 21
// 3. In ra toàn bộ thông tin student

student.grade = "A";
student.age = 21;

console.log(student);


// Tạo template cho email thông báo
const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};

// Tạo template string cho email
const emailTemplate = `
Xin chao ${user.firstName} ${user.lastName} ,
Cam on ban da dat hang!
Thong tin don hang :
- San pham : ${user.product}
- Gia: ${user.price}d
- Ngay dat hang : ${user.orderDate}
Chung toi se som lien he va giao hang trong thoi gian som nhat co the.
Tran trong,
`; // Viết template ở đây

console.log(emailTemplate);

// Tạo HTML template cho card sản phẩm
const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: true,
};

// Tính giá sau giảm
const finalPrice = product.price * (1 - product.discount / 100);

// Tạo template HTML
const productCard = `
    Ten san pham: ${product.name}
    Giá gốc: ${product.price}₫
    Giảm giá: ${product.discount}%
    Giá sau giảm: ${finalPrice}₫
    Tình trạng: ${product.inStock}`; // Viết template ở đây
console.log(productCard);

// Viết lại object sau sử dụng ES6 enhanced object literals
// const width = 100;
// const height = 200;
// const color = "red";

// const rectangle = {
//   width: width,
//   height: height,
//   color: color,
//   calculateArea: function () {
//     return this.width * this.height;
//   },
//   describe: function () {
//     return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
//   },
// };

const width = 100;
const height = 200;
const color = "red";

const rectangle = {
  width,
  height,
  color,

  calculateArea() {
    return this.width * this.height;
  },

  describe() {
    return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
  },
};

console.log(rectangle.describe());
console.log("Diện tích:", rectangle.calculateArea());

// Bài 2: Sử dụng computed properties

// // Tạo object configuration với computed property names
// const env = "production";
// const version = "v2";
// const features = ["auth", "payment", "notification"];

// // Tạo object config với:
// // - key: `api_${env}_${version}`
// // - key cho từng feature: `feature_${featureName}`
// // - method: `get${env}Config()`

// const config = {
//   // Viết code ở đây
// };

// Bài tập 1: Sử dụng let, const và Template Literals

// Viết hàm tính chỉ số BMI (Body Mass Index) với công thức:
// 👉 BMI = weight / (height * height)
// function calculateBMI(weight, height) {
// TODO: Sử dụng const cho các hằng số
// TODO: Sử dụng template literals để tạo thông báo
// TODO: Phân loại BMI theo:
// - Dưới 18.5: Thiếu cân
// - 18.5 - 24.9: Bình thường
// - 25 - 29.9: Thừa cân
// - Trên 30: Béo phì
// }

// Ví dụ sử dụng
// console.log(calculateBMI(70, 1.75)); // "BMI: 22.86 - Phân loại: Bình thường"

function calculateBMI(weight, height){
    const bmi = weight / (height * height);
    let category = "";
    if(bmi < 18.5){
        category = "thieu can";
    }else if(bmi < 25){
        category = "binh thuong";
    }else if(bmi <30){
       category = "thua can";
    }else{
       category = "beo phi";
    }
    return (`chi so bmi : ${bmi} phan loai : beo phi`);
};
console.log(calculateBMI(50, 1.75));

// Bài tập 2: Enhanced Object Literals

// Tạo đối tượng quản lý sách sử dụng enhanced object literals.
// function createBook(title, author, year, price) {
// // TODO: Sử dụng shorthand properties
// // TODO: Thêm method getBookInfo() trả về thông tin sách
// // TODO: Thêm method tính giá sau giảm giá (discount %)
// // TODO: Sử dụng computed property names
// }

// // Ví dụ sử dụng
// const book = createBook("JavaScript ES6", "John Doe", 2023, 200000);
// console.log(book.getBookInfo());
// console.log(book.calculateDiscount(10)); // Giảm 10%

const createBook = (title, author, year, price) => ({
  title,
  author,
  year,
  price,

  getBookInfo() {
    return `Tên sách: ${this.title}, Tác giả: ${this.author}, Năm: ${this.year}, Giá: ${this.price}đ`;
  },

  calculateDiscount(discount) {
    const newPrice = this.price - (this.price * discount / 100);
    return `Giá sau khi giảm ${discount}%: ${newPrice}đong`;
  }
});
 const book = createBook("JavaScript ES6", "John Doe", 2023, 200000);
 console.log(book.getBookInfo());
 console.log(book.calculateDiscount(10));

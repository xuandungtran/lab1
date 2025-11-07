
// Bài tập 1: Chuyển đổi hàm
// Chuyển các hàm sau thành arrow functions:

// // Function 1
// function multiply(a, b) {
//   return a * b;
// }
const multiply = (a,b) => a*b;

console.log(multiply(3,4));

// // Function 2
// function isPositive(number) {
//   return number >= 0;
// }
const isPositive = number => number >=0;

console.log(isPositive(3));
console.log(isPositive(-1));

// // Function 3
// function getRandomNumber() {
//   return Math.random();
// }
const getRandomNumber = () => Math.random();

console.log(getRandomNumber());
console.log(getRandomNumber());

// // Function 4
// document.addEventListener("click", function () {
//   console.log("Clicked!");
// });
// document.addEventListener("click", () => {
// console.log("Clicked!");
// });

// Bài tập 2: Sử dụng Default Parameters
// Viết lại hàm sau sử dụng default parameters:

const createUser = (name = "Anonymous", age = 18, isAdmin = false) => {
return {
    name: name,
    age: age,
    isAdmin: isAdmin,
};
};
console.log(createUser());

// Bài tập 3: Rest và Spread
// Viết các hàm sau:

// Hàm mergeArrays nhận nhiều mảng và trả về mảng hợp nhất
const mergeArrays = (...arrays) => {
return arrays.flat();
};
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));

// Hàm sumAll tính tổng tất cả tham số truyền vào
const sumAll = (...numbers) => {
return numbers.reduce((sum, num) => sum + num, 0);
};
console.log(sumAll(1, 2, 3, 4, 5)); 
console.log(sumAll(10, 20));

// Hàm createProduct nhận thông tin sản phẩm và trả về object sản phẩm với giá trị mặc định
const createProduct = ({ 
name = "Sản phẩm", 
price = 0, 
quantity = 1 
} = {}) => {
return { name, price, quantity };
};
console.log(createProduct({ name: "Giày", price: 500000 }));
console.log(createProduct());

// Bài tập 4: Ứng dụng thực tế
// Tạo hàm shoppingCart với:

// Tham số đầu tiên là tên khách hàng
// Các tham số tiếp theo là các sản phẩm
// Sử dụng rest parameters để thu thập sản phẩm
// Trả về object chứa thông tin đơn hàng

const shoppingCart = (customerName, ...products) => {
return {
    customer: customerName,
    items: products,
    totalItems: products.length,
};
};
console.log(shoppingCart("Dũng", "Giày Nike", "Áo thun", "Quần jean"));

// Bài tập Array Destructuring
// Bài 1: Viết hàm trả về phần tử đầu tiên và cuối cùng của mảng

function getFirstLast(array) {
  const [first] = array;
  const last = array[array.length - 1];
  return [first, last];
};

console.log(getFirstLast([1, 2, 3, 4, 5, 6])); 

// Bài 2: Hoán đổi vị trí phần tử thứ 2 và thứ 4 trong mảng
function swapElements(arr) {
    [arr[1], arr[3]] = [arr[3], arr[1]];
    return arr;
};

console.log(swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]


// Bài tập Object Destructuring
// Bài 1: Viết hàm extract thông tin user
const user = {
  id: 1,
  personalInfo: {
    name: "javascript",
    contact: {
      email: "javascript@email.com",
      phone: "123-456-7890",
    },
  },
};

function getUserInfo(user) {
    const {
        personalInfo: {name, 
                       contact: {email, phone}}
    } = user;
    return {name, email};
}

console.log(getUserInfo(user));
// { name: 'javascript', email: 'javascript@email.com' }


// Bài 2: Viết hàm với tham số mặc định
function createProduct({ name, price, category = "general", inStock = true }) {
    return {name, price, category, inStock} ;
}

const product1 = createProduct({ name: "Laptop", price: 999 });
const product2 = createProduct({ name: "Desktop", price: 100, category: "general", inStock: false });
console.log(product1);
console.log(product2);
// { name: 'Laptop', price: 999, category: 'general', inStock: true }


// Bài tập Promises
// Bài 1: Viết hàm delay trả về Promise

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms); 
  });
}

delay(2000).then(() => console.log("2 seconds passed"));

// Bài 2: 
function fetchMultipleData(urls) {
  return Promise.all(
    urls.map((url) =>
      fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error(`Lỗi khi fetch ${url}`);
          return res.json();
        })
    )
  );
}
fetchMultipleData([
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/2",
])
  .then((users) => console.log("Kết quả:", users))
  .catch((error) => console.error("Lỗi:", error));



// Bài 1: Viết lại callback hell thành async/await
  // Viết lại hàm này sử dụng async/await
function processOrder(orderId, callback) {
  getOrder(orderId, (order) => {
    getUser(order.userId, (user) => {
      getProducts(order.productIds, (products) => {
        callback({ order, user, products });
      });
    });
  });
}

// 
function getOrder(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: orderId, userId: 1, productIds: [101, 102] }), 1000);
  });
}

function getUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: userId, name: "JavaScript User" }), 1000);
  });
}

function getProducts(productIds) {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(productIds.map((id) => ({ id, name: `Product ${id}` }))),
      1000
    );
  });
}
async function processOrder(orderId) {
  try {
    const order = await getOrder(orderId); // Đợi lấy đơn hàng
    const user = await getUser(order.userId); // Đợi lấy thông tin user
    const products = await getProducts(order.productIds); // Đợi lấy danh sách sản phẩm

    return { order, user, products }; // Trả về kết quả tổng hợp
  } catch (error) {
    console.error("Lỗi khi xử lý đơn hàng:", error);
  }
}

// Gọi hàm và hiển thị kết quả
processOrder(123).then((result) => console.log(result));

// Bài 2: Xử lý lỗi với async/await
async function safeApiCall(apiFunction, ...args) {
  try {
    const result = await apiFunction(...args); // Gọi hàm API
    return result; // Thành công → trả về kết quả
  } catch (error) {
    console.error("Lỗi khi gọi API:", error.message || error);
    return null; // Trả về null nếu có lỗi
  }
}

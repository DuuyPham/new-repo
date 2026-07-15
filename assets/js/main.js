// const products = [
//   {
//     id: 1,
//     name: 'Màn hình Dell 27"',
//     category: "Màn hình",
//     price: 6500000,
//     stock: 12,
//   },
//   {
//     id: 2,
//     name: "Bàn phím cơ Keychron K2",
//     category: "Ngoại vi",
//     price: 1890000,
//     stock: 0,
//   },
//   {
//     id: 3,
//     name: "Chuột Logitech MX Master 3",
//     category: "Ngoại vi",
//     price: 2350000,
//     stock: 5,
//   },
//   {
//     id: 4,
//     name: "Tai nghe Sony WH-1000XM5",
//     category: "Âm thanh",
//     price: 8200000,
//     stock: 0,
//   },
//   {
//     id: 5,
//     name: "USB Hub 7 cổng Anker",
//     category: "Phụ kiện",
//     price: 890000,
//     stock: 28,
//   },
//   {
//     id: 6,
//     name: "Webcam Logitech C920",
//     category: "Ngoại vi",
//     price: 2100000,
//     stock: 7,
//   },
// ];

// const tbody = document.querySelector("#product-body");
// const tfoot = document.querySelector("#product-foot");
// const searchInput = document.querySelector('input[type = "text"]');
// const categoryFilter = document.querySelector("#option-input");

// function highlight(text, keyword) {
//   if (!keyword) return text;
//   const regex = new RegExp(`(${keyword})`, "gi");
//   return text.replace(regex, '<span class = "highlight">$1</span>');
// }
// // Hàm lọc và render danh mục categoryFilter
// function sortDuplicate(products) {
//   const sortedList = [...new Set(products.map((product) => product.category))];

//   // thêm danh sách vào option element select
//   categoryFilter.innerHTML = `
//     <option value = "">Tất cả</option>
//   `;

//   sortedList.forEach((sortedItem) => {
//     const option = document.createElement("option");
//     option.value = sortedItem;
//     option.textContent = sortedItem;
//     categoryFilter.appendChild(option);
//   });
// }

// function renderProduct() {
//   const keyword = searchInput.value.trim().toLowerCase(); // input value
//   const category = categoryFilter.value; // value option

//   // lọc theo điều kiện
//   const filtered = products.filter((product) => {
//     const matchKeyword =
//       !keyword ||
//       product.name.toLowerCase().trim().includes(keyword) ||
//       product.category.toLowerCase().trim().includes(keyword);

//     const matchCategory = !category || product.category === category;

//     return matchKeyword && matchCategory;
//   });

//   tbody.innerHTML = "";

//   if (filtered.length === 0) {
//     const tr = document.createElement("tr");
//     tbody.innerHTML = `
//     <tr><td style = "text-align: center;" colspan = "6">Không tìm thấy sản phẩm</td></tr>
//     `;
//     tfoot.innerHTML = "";
//   } else {
//     // render danh sách thoả điều kiện
//     filtered.forEach((product) => {
//       console.log(keyword, product.name, product.category);
//       const inStock = product.stock > 0;
//       const tr = document.createElement("tr");
//       tr.innerHTML = `
//       <td>${product.id}</td>
//       <td>${highlight(product.name, keyword)}</td>
//       <td>${highlight(product.category, keyword)}</td>
//       <td>${product.price.toLocaleString("vi-VN")}đ</td>
//       <td>${inStock ? "Còn Hàng" : "Hết Hàng"}</td>
//       <td>${product.stock}</td>
//       `;
//       tbody.appendChild(tr);
//     });
//     const sumPrice = filtered.reduce(
//       (sum, product) => (sum += product.price * product.stock),
//       0,
//     );

//     tfoot.innerHTML = `<tr>
//         <td colspan = "3">Tổng sản phẩm ${filtered.length}/${products.length}</td>
//         <td style = "text-align: right" colspan = "4">
//         Tổng giá trị tồn: ${sumPrice.toLocaleString("vi-VN")}đ</td>
//        </tr>`;
//   }
// }
// searchInput.addEventListener("input", renderProduct);
// categoryFilter.addEventListener("change", renderProduct);
// sortDuplicate(products);
// renderProduct();

const reps = [
  { name: "An", sales: 85000000 },
  { name: "Bình", sales: 85000000 },
  { name: "Châu", sales: 85000000 },
  { name: "Dũng", sales: 85000000 },
  { name: "Em", sales: 85000000 },
];

function xepHang(reps, topNum) {
  const output = reps.sort(
    (a, b) => b.sales - a.sales || a.name.localeCompare(b.name),
  );
  const top3 = output.slice(0, 3);

  console.log(`Bảng xếp hạng: `, output);
  console.log(`Bảng top 3:`, top3);
}

// xepHang(reps, 3);

//filter -> map
const orders = [
  { id: "ĐH01", status: "done", total: 500000 },
  { id: "ĐH02", status: "pending", total: 1200000 },
  { id: "ĐH03", status: "done", total: 800000 },
  { id: "ĐH04", status: "pending", total: 300000 },
];

function createLabels(orders, statusName) {
  const filtered = orders.filter(
    (order) => order.status.toLowerCase() === statusName.toLowerCase(),
  );
  const labels = filtered.map(
    (item) => `${item.id}: ${item.total.toLocaleString()}đ`,
  );
  return labels;
}

// console.log(createLabels(orders, "DONE"));

// BÀI TỔNG HỢP 2
/**Báo cáo nhân viên xuất sắc Trung bình
Lọc nhân viên còn làm việc → tính thưởng → sắp xếp → lấy top 3. */

const employees = [
  { name: "An", dept: "KT", salary: 15000000, kpi: 92, active: true },
  { name: "Bình", dept: "KD", salary: 12000000, kpi: 78, active: false },
  { name: "Châu", dept: "KT", salary: 18000000, kpi: 95, active: true },
  { name: "Dũng", dept: "KD", salary: 14000000, kpi: 88, active: true },
  { name: "Em", dept: "HR", salary: 11000000, kpi: 95, active: true },
  { name: "Phúc", dept: "KT", salary: 16000000, kpi: 70, active: true },
];

function bonusEmployee(employees) {
  function calcBonus(kpi, salary) {
    if (kpi >= 90) return Math.round(salary * 0.15);
    if (kpi >= 80) return Math.round(salary * 0.1);
    return Math.round(salary * 0.05);
  }

  const top3 = employees
    .filter((emp) => emp.active)
    .sort((a, b) => b.kpi - a.kpi || b.salary - a.salary)
    .map((emp) => ({ ...emp, bonus: calcBonus(emp.kpi, emp.salary) }))
    .slice(0, 3)
    .map(
      (emp) =>
        `${emp.name} - Kpi: ${emp.kpi} - salary: ${emp.salary} => bonus: ${emp.bonus}`,
    );

  top3.forEach((emp, i) => {
    console.log(`${i + 1}. ${emp}`);
  });
}
// console.log(bonusEmployee(employees));

// Phân tích đơn hàng theo tháng

const MyOrders = [
  { id: 1, product: "Áo", date: "2025-07-05", qty: 3, price: 150000 },
  { id: 2, product: "Quần", date: "2025-07-10", qty: 1, price: 300000 },
  { id: 3, product: "Áo", date: "2025-07-15", qty: 2, price: 150000 },
  { id: 4, product: "Giày", date: "2025-06-20", qty: 1, price: 500000 },
  { id: 5, product: "Quần", date: "2025-07-22", qty: 2, price: 300000 },
  { id: 6, product: "Giày", date: "2025-07-25", qty: 1, price: 500000 },
];

function sortMonth(Date) {
  const sortDate = MyOrders.filter((o) => o.date.startsWith(`2025-${Date}`));

  const sortByProduct = sortDate.reduce((acc, o) => {
    const venue = o.price * o.qty;
    acc[o.product] = (acc[o.product] || 0) + venue;
    return acc;
  }, {});

  const top2 = Object.entries(sortByProduct)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 2)
    .map(
      ([product, avenue], i) =>
        `${i + 1}. ${product} - doanh thu: ${avenue.toLocaleString()}đ`,
    );
  top2.forEach((product) => {
    console.log(product);
  });
}

// sortMonth("07");

//biến đổi dữ liệu object về mảng để lặp qua giá trị

// xử lý nhiều chỉ số cùng lúc trong 1 mảng object nhân sự
const staff = [
  { name: "An", dept: "KT", salary: 15000000, kpi: 85, active: true },
  { name: "Bình", dept: "KD", salary: 12000000, kpi: 72, active: false },
  { name: "Châu", dept: "KT", salary: 18000000, kpi: 95, active: true },
  { name: "Dũng", dept: "KD", salary: 14000000, kpi: 80, active: true },
  { name: "Em", dept: "HR", salary: 11000000, kpi: 90, active: true },
];
/**
 * 1. Lọc active
 * 2. tạo Object dashboard
 * - số nhân viên làm việc
 * - Quỹ lương hàng tháng (reduce)
 * - KPI trung bình (reduce / active.length)
 * - Nhân viên có KPI cao nhất (sort xong get [0])
 * - Tổng nhân sự theo phòng ban (reduce{} key value + 1)
 */

function showDashboard() {
  const EmpActive = staff.filter((emp) => emp.active);
  const dashboard = {
    active: EmpActive.length,
    avgSalary:
      Math.round(
        EmpActive.reduce((acc, emp) => acc + emp.salary, 0),
      ).toLocaleString() + "đ",
    avgKpi: Math.round(
      EmpActive.reduce((acc, emp) => acc + emp.kpi, 0) / EmpActive.length,
    ),
    topKpi: [...EmpActive].sort((a, b) => b.kpi - a.kpi)[0]?.name,
    SumDept: EmpActive.reduce((acc, emp) => {
      acc[emp.dept] = (acc[emp.dept] || 0) + 1;
      return acc;
    }, {}),
  };
  return dashboard;
}

// console.log(showDashboard());

const products = [
  { name: "A", cat: "khí", price: 500000, stock: 10 },
  { name: "B", cat: "điện", price: 1200000, stock: 5 },
  { name: "C", cat: "khí", price: 800000, stock: 0 },
  { name: "D", cat: "khí", price: 300000, stock: 15 },
  { name: "E", cat: "điện", price: 900000, stock: 3 },
];

//top 2 san pham khi con hang, gia thap nhat

const result = products
  .filter((p) => p.cat === "khí" && p.stock > 0)
  .sort((a, b) => a.price - b.price)
  .map(
    (p, i) => `Top ${i + 1}  ${p.name} - price: ${p.price.toLocaleString()}đ`,
  );

// console.log(`
//   ${result}`);

const employees2 = [
  { name: "An", dept: "KT", salary: 15000000, kpi: 92, active: true },
  { name: "Bình", dept: "KD", salary: 12000000, kpi: 78, active: false },
  { name: "Châu", dept: "KT", salary: 18000000, kpi: 95, active: true },
  { name: "Dũng", dept: "KD", salary: 14000000, kpi: 88, active: true },
  { name: "Em", dept: "HR", salary: 11000000, kpi: 95, active: true },
  { name: "Phúc", dept: "KT", salary: 16000000, kpi: 70, active: true },
];

//Lọc nhân viên còn làm việc, tính thưởng: 15%-kpi >= 90, 10-kpi >= 80, 5% in all, top3

const active = employees2.filter((e) => e.active);

function bonusSummary(salary, kpi) {
  if (kpi >= 90) return Math.round(salary * 0.15).toLocaleString() + "đ";
  if (kpi >= 80) return Math.round(salary * 0.1).toLocaleString() + "đ";
  return Math.round(salary * 0.05).toLocaleString() + "đ";
}

const dashboard = {
  active: active.length,
  activeBonus: active
    .map((a) => ({
      ...a,
      bonus: bonusSummary(a.salary, a.kpi),
    }))
    .sort((a, b) => b.salary - a.salary || b.kpi - a.kpi)
    .slice(0, 3),
};

// console.log(dashboard);

const orders2 = [
  { id: 1, product: "Áo", date: "2025-07-05", qty: 3, price: 150000 },
  { id: 2, product: "Quần", date: "2025-07-10", qty: 1, price: 300000 },
  { id: 3, product: "Áo", date: "2025-07-15", qty: 2, price: 150000 },
  { id: 4, product: "Giày", date: "2025-06-20", qty: 1, price: 500000 },
  { id: 5, product: "Quần", date: "2025-07-22", qty: 2, price: 300000 },
  { id: 6, product: "Giày", date: "2025-07-25", qty: 1, price: 500000 },
];

function TotalRevenue() {
  // loc danh sach thang 7
  const july = orders2.filter((o) => o.date.startsWith("2025-07"));

  const groupByProduct = july.reduce((acc, o) => {
    const avenue = o.price * o.qty;
    acc[o.product] = (acc[o.product] || 0) + avenue;
    return acc;
  }, {});

  const top2 = Object.entries(groupByProduct)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 2)
    .map(
      ([product, avenue], i) =>
        `top ${i + 1}. ${product} - doanh thu: ${avenue.toLocaleString()}đ`,
    );

  return top2;
}

// console.log(TotalRevenue());

const staff2 = [
  { name: "An", dept: "KT", salary: 15000000, kpi: 85, active: true },
  { name: "Bình", dept: "KD", salary: 12000000, kpi: 72, active: false },
  { name: "Châu", dept: "KT", salary: 18000000, kpi: 95, active: true },
  { name: "Dũng", dept: "KD", salary: 14000000, kpi: 80, active: true },
  { name: "Em", dept: "HR", salary: 11000000, kpi: 90, active: true },
];

const EmployeeActive = [...staff2].filter((e) => e.active);

const MyDashboard = {
  active: EmployeeActive.length,
  SumSalary:
    EmployeeActive.reduce((sum, e) => sum + e.salary, 0).toLocaleString() +
    "VNĐ",
  avgKpi: Math.round(
    EmployeeActive.reduce((avg, e) => avg + e.kpi, 0) / EmployeeActive.length,
  ),
  topKpi: [...EmployeeActive].sort(
    (a, b) => b.kpi - a.kpi || b.salary - a.salary,
  )[0]?.name,
};

// console.log(MyDashboard);

const cart = [
  { name: "Áo", qty: 2, price: 150000, discount: 10 },
  { name: "Quần", qty: 1, price: 300000, discount: 0 },
  { name: "Giày", qty: 1, price: 500000, discount: 20 },
];

//Tính tổng mặt hàng có giảm giá

function FinalPrice() {
  const CartDiscount =
    cart
      .filter((c) => c.discount > 0)
      .map((c) => ({
        ...c,
        finalPrice: c.qty * c.price * (1 - c.discount / 100),
      }))
      .reduce((sum, c) => sum + c.finalPrice, 0)
      .toLocaleString() + " VND";

  return CartDiscount;
}

// console.log(FinalPrice());

const inventory = {
  "VAN-VK100": { name: "Van khí", stock: 12, price: 500000 },
  "VAN-VD200": { name: "Van điện", stock: 0, price: 1200000 },
  "LOC-BL100": { name: "Bộ lọc", stock: 5, price: 320000 },
};

// const availableItems = Object.fromEntries(
//   Object.entries(inventory).filter(([code, item]) => item.stock > 0),
// );

// const updateInventory = Object.fromEntries(
//   Object.entries(inventory).map(([code, item]) => [
//     code,
//     { ...item, price: Math.round(item.price * 1.1).toLocaleString() },
//   ]),
// );

// console.log(updateInventory);

const usersArray = [
  { id: "U01", name: "An", role: "admin" },
  { id: "U02", name: "Bình", role: "user" },
  { id: "U03", name: "Châu", role: "user" },
];

// merge về một object chính

const objConvert = usersArray.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

// console.log(objConvert);

const reportCard = {
  math: 8.5,
  physics: 9.0,
  chemistry: 7.5,
  english: 8.0,
};

// đưa về mảng tính tổng điểm

function sumScore() {
  const scores = Object.values(reportCard).reduce(
    (sum, score) => sum + score,
    0,
  );

  const result = { ...reportCard, total: scores };
  return result;
}

// console.log(sumScore());
// console.log("reportCard: ", reportCard);

const paymentGateways = {
  vnpay: { name: "Cổng VNPay", active: true, fee: 0.01 },
  momo: { name: "Ví MoMo", active: false, fee: 0.02 },
  stripe: { name: "Thẻ Quốc tế Stripe", active: true, fee: 0.03 },
};

//Hệ thống e-commerce gửi về một Object cấu hình cấu trúc các cổng thanh toán. Bạn cần lọc bỏ các cổng đang bảo trì (active: false) và chỉ lấy ra định dạng gồm id và tên hiển thị label.

function showLabel(API) {
  const response = Object.fromEntries(
    Object.entries(API)
      .filter(([, info]) => info.active)
      .map(([title, info]) => [title, { label: info.name }]),
  );
  return response;
}

// console.log(showLabel(paymentGateways));

const regionalSales = {
  "Hà Nội": {
    "Đại lý Trung Tâm": 150000000,
    "Đại lý Cầu Giấy": 90000000,
  },
  "TP.HCM": {
    "Đại lý Quận 1": 210000000,
    "Đại lý Thủ Đức": 120000000,
  },
};

// flat array

function logData() {
  const flatData = Object.entries(regionalSales).flatMap(([city, agentObj]) => {
    return Object.entries(agentObj).map(([agentName, revenue]) => ({
      city,
      agent: agentName,
      revenue: revenue.toLocaleString(),
    }));
  });
  return flatData;
}

// console.log(logData());

const inventory2 = [
  { id: 1, name: "Van Khí VK", category: "Thiết bị", origin: "Việt Nam" },
  { id: 2, name: "Cảm biến Omron", category: "Linh kiện", origin: "Nhật Bản" },
  { id: 3, name: "Bộ lọc khí", category: "Thiết bị", origin: "Việt Nam" },
  { id: 4, name: "Đèn báo 24V", category: "Linh kiện", origin: "Đài Loan" },
];

function groupBy(arr, groupName) {
  const validateGroupName = groupName.toLowerCase().trim(); // không phân biệt hoa thường
  const output = arr.reduce((acc, item) => {
    const groupValue = item[validateGroupName];

    // nếu chưa có value mặc định bằng một [] rỗng
    if (!acc[groupValue]) {
      acc[groupValue] = [];
    }

    // add item hiện tại vào mảng
    acc[groupValue].push(item);

    return acc;
  }, {});
  return output;
}

// console.log(groupBy(inventory2, "ORIGIN"));

const apiResponse = {
  "ORDER-101": {
    status: "COMPLETED",
    financials: { amount: "250000đ", tax: "25000đ" },
    customer: { info: { name: "Nguyễn Văn An", email: "an@gmail.com" } },
  },
  "ORDER-102": {
    status: "CANCELLED",
    financials: { amount: "500000đ", tax: "50000đ" },
    customer: { info: { name: "Trần Thị Bình", email: "binh@gmail.com" } },
  },
  "ORDER-103": {
    status: "COMPLETED",
    financials: { amount: "1200000đ", tax: "120000đ" },
    customer: { info: { name: "Lê Hoàng Nam", email: "nam@gmail.com" } },
  },
};

//clean raw json

function cleanData(API) {
  const parseCurrency = (str) => Number(str.replace(/[^0-9]/g, ""));

  const Output = Object.entries(API)
    .filter(([id, order]) => order.status !== "CANCELLED")
    .map(([id, order]) => {
      const rawAmount = parseCurrency(order.financials.amount);
      const rawTax = parseCurrency(order.financials.tax);

      return {
        id,
        status: order.status,
        customer: order.customer?.info?.name ?? "Khách vãng lai",
        email: order.customer?.info?.email ?? "Khong co email",
        netAmount: rawAmount.toLocaleString(),
        TotalAmount: (rawAmount + rawTax).toLocaleString(),
      };
    });
  return Output;
}

console.log(cleanData(apiResponse));

function showResult() {
  const myArr = [1, 2, 3, [4, 5]];
  const flat = myArr.flatMap((arr) => arr);
  return flat;
}

console.log(showResult());

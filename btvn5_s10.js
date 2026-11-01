//1. Nhập số tiền
let usd = Number(prompt("Nhập số tiền USD:"));
//2. Nhập tỷ giá
const rate = 23000; //Tỷ giá USD sang VND
//3. Tính số tiền VND
let vnd = usd * rate;
//4. Hiển thị kết quả ra màn hình
document.write("<b>Số tiền VND tương ứng là: " + vnd.toLocaleString() + " đ</b>");
//1.Điểm số 3 môn
let math = Number(prompt("Nhập điểm môn Toán:"));
let physics = Number(prompt("Nhập điểm môn Vật lý:"));
let chemistry = Number(prompt("Nhập điểm môn Hóa học:"));
//2. Tính điểm trung bình
let average = (math + physics + chemistry) / 3;
//3. Hiển thị kết quả ra màn hình
document.write("Điểm toán: " + math + "<br>");
document.write("Điểm vật lý: " + physics + "<br>");
document.write("Điểm hóa học: " + chemistry + "<br>");
document.write("<b>Điểm trung bình 3 môn là: " + average.toFixed(2) + "</b>");
// Bài tập tính tiền lương nhân viên
let btnLuong = document.getElementById("btnBai1");
btnLuong.onclick = function () {
  //Đầu vào
  let tienMotNgay = 100000;
  let ngayLam = document.getElementById("txtNgayLam").value;
  let tienLuong = 0;

  //Xử lý
  ngayLam = Number(ngayLam);
  tienLuong = tienMotNgay * ngayLam;

  //Đầu ra
  console.log(tienLuong);
  let resultLuong = "Tiền lương của bạn là: " + tienLuong;
  let pResultLuong = document.getElementById("txtKetQua1");
  pResultLuong.innerHTML = resultLuong;
};

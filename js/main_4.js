let btnDienTichChuVi = document.getElementById("btnBai4");
btnDienTichChuVi.onclick = function () {
  // Đầu ra
  let txtCD = document.getElementById("txtChieuDai").value;
  let txtCR = document.getElementById("txtChieuRong").value;
  let dienTich = 0;
  let chuVi = 0;

  //Xử lý
  txtCD = Number(txtCD);
  txtCR = Number(txtCR);
  dienTich = txtCD * txtCR;
  chuVi = (txtCD + txtCR) * 2;

  // Đầu ra
  let resultDienTich = "Diện tích hình chữ nhật là: " + dienTich;
  let pResultDienTich = document.getElementById("txtDienTich");
  pResultDienTich.innerHTML = resultDienTich;

  let resultChuVi = "Chu vi hình chữ nhật là: " + chuVi;
  let pResultChuVi = document.getElementById("txtChuVi");
  pResultChuVi.innerHTML = resultChuVi;
};

let btnQuyDoi = document.getElementById("btnBai3");
btnQuyDoi.onclick = function () {
  // Đầu vào
  let txtUSD = document.getElementById("txtUSD").value;
  let vnd = 23500;
  let quyDoi = 0;

  // Xử lý
  txtUSD = Number(txtUSD);
  quyDoi = txtUSD * vnd;

  // Đầu ra
  let resultQuyDoi = "Số tiền sau quy đổi là: " + quyDoi + " VND";
  let pResultQuyDoi = document.getElementById("txtKetQua3");
  pResultQuyDoi.innerHTML = resultQuyDoi;
};

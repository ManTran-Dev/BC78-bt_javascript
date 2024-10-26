let mess = document.getElementById("errorText");
let btnTongKySo = document.getElementById("btnBai5");
btnTongKySo.onclick = function () {
  // Đầu vào
  let txtHaiChuSo = document.getElementById("txtHaiChuSo").value;
  let tong2KySo = 0;

  // Xử lý
  txtHaiChuSo = Number(txtHaiChuSo);
  if (txtHaiChuSo < 10 || txtHaiChuSo > 99) {
    document.getElementById("txtHaiChuSo").style.backgroundColor = "red";
    mess.innerHTML += "Vui lòng nhập từ 10 đến 99";
  } else {
    document.getElementById("txtHaiChuSo").style.backgroundColor = "white";
    mess.innerHTML = "";
    let hangChuc = Math.floor(txtHaiChuSo / 10);
    let hangDonVi = txtHaiChuSo - hangChuc * 10;
    tong2KySo = hangChuc + hangDonVi;

    // Đầu ra
    let resultTongKySo = "Tổng 2 ký số là: " + tong2KySo;
    let pResultTongKySo = document.getElementById("txtKetQua5");
    pResultTongKySo.innerHTML = resultTongKySo;
    }
};

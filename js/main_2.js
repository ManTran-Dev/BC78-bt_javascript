//Bài tập tính giá trị trung bình
let btnTrungBinh = document.getElementById("btnBai2");
btnTrungBinh.onclick = function () {
  //Đầu vào
  let number1 = document.getElementById("txtNumber1").value;
  let number2 = document.getElementById("txtNumber2").value;
  let number3 = document.getElementById("txtNumber3").value;
  let number4 = document.getElementById("txtNumber4").value;
  let number5 = document.getElementById("txtNumber5").value;
  let average = 0;

  // Xử lý
  number1 = Number(number1);
  number2 = Number(number2);
  number3 = Number(number3);
  number4 = Number(number4);
  number5 = Number(number5);
  average = (number1 + number2 + number3 + number4 + number5) / 5;

  // Đầu ra
  let resultAverage = "Giá trị trung bình là: " + average;
  let pResultAverage = document.getElementById("txtKetQua2");
  pResultAverage.innerHTML = resultAverage;
};

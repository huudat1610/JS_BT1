//BT1
document.getElementById("btn_tienLuong ").addEventListener("click", function(e)

    {
        var luongMotNgay = parseFloat(document.getElementById("luongMotNgay").value);
        var soNgayLam = parseFloat(document.getElementById("soNgayLam").value);

        var tienLuong = luongMotNgay * soNgayLam;
        document.getElementById("tienLuong").innerHTML = "Lương của nhân viên là: " + tienLuong;
    }
);

//BT2
document.getElementById("btn_number").addEventListener("click",function(e)
{
        var numBer1 = parseFloat(document.getElementById("number_1").value);
        var numBer2 = parseFloat(document.getElementById("number_2").value);
        var numBer3 = parseFloat(document.getElementById("number_3").value);
        var numBer4 = parseFloat(document.getElementById("number_4").value);
        var numBer5 = parseFloat(document.getElementById("number_5").value);
        

        var giaTriTrungBinh = (numBer1 + numBer2 + numBer3 + numBer4 + numBer5) / 5;
        document.getElementById("giaTriTrungBinh").innerHTML = "Giá trị trung bình: " + giaTriTrungBinh;
});

//BT3
document.getElementById("btn_soTien").addEventListener("click",function(e)
{
    var soTien = document.getElementById("soTien").value;
    var USD = soTien * 23500;
    var format = new Intl.NumberFormat('vn-VN').format(USD); 
    
    document.getElementById("quyDoi").innerHTML = "Số tiền quy đổi: " + format + "VNĐ";
    
});

//BT4
document.getElementById("btn_hcn").addEventListener("click",function(e)
{
    var widthHCN = parseFloat(document.getElementById("width").value);
    var heightHCN = parseFloat(document.getElementById("height").value);

    var dienTich =  widthHCN * heightHCN;
    var chuVi = (widthHCN + heightHCN) * 2;

    document.getElementById("dientichHCN").innerHTML = "Diện tích hình chữ nhật: " +dienTich +"m2";
    document.getElementById("chuviHCN").innerHTML = "Chu vi hình chữ nhật: " +chuVi +"m";
});

// BT5
document.getElementById("btn_so").addEventListener("click", function(e) {
    var so = parseFloat(document.getElementById("number_so").value);
  
    if (so >= 10 && so <= 99) {
      var so1 = Math.floor(so / 10);
      var so2 = so % 10;
  
      var sO = so1 + so2;
      console.log(so1);
      console.log(so2);
      document.getElementById("lbl_tong").innerHTML = "Tổng 2 ký số: " + sO;
    } else {
      alert("Vui lòng nhập giá trị từ 10 đến 99.");
    }
  });
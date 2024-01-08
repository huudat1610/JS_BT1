//BT1
document.getElementById("btn_salary").addEventListener("click", function(e)

    {
        var saLary_day = parseFloat(document.getElementById("salary_day").value);
        var dayS = parseFloat(document.getElementById("days").value);

        var saLary = saLary_day * dayS;
        document.getElementById("salary").innerHTML = "Lương của nhân viên là: " + saLary;
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
        

        var toTal = (numBer1+numBer2+numBer3+numBer4+numBer5) / 5;
        document.getElementById("number").innerHTML = "Giá trị trung bình  = " +toTal;
});

//BT3
document.getElementById("btn_money").addEventListener("click",function(e)
{
    var moNey = document.getElementById("money").value;
    var uSd = moNey*23500;
    var format = new Intl.NumberFormat('vn-VN').format(uSd); 
    
    document.getElementById("lbl_usd").innerHTML = "Số tiền quy đổi: " +format +"VNĐ";
    
});

//BT4
document.getElementById("btn_hcn").addEventListener("click",function(e)
{
    var wiDth = parseFloat(document.getElementById("width_HCN").value);
    var heiGht = parseFloat(document.getElementById("height_HCN").value);

    var arEa = wiDth*heiGht;
    var peRi = 2* (wiDth + heiGht);

    document.getElementById("lbl_area").innerHTML = "Diện tích hình chữ nhật: " +arEa +"m2";
    document.getElementById("lbl_peri").innerHTML = "Chu vi hình chữ nhật: " +peRi +"m";
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
  //bài 1
document.getElementById("btn_salary").addEventListener("click", function(e)

    {
        var saLary_day = parseFloat(document.getElementById("salary_day").value);
        var dayS = parseFloat(document.getElementById("days").value);

        var saLary = saLary_day*dayS;
        document.getElementById("salary").innerHTML = "Lương của nhân viên là: " + saLary;
    }
);
//bài 2
document.getElementById("btn_number").addEventListener("click",function(e)
{
        var numBer1=parseFloat(document.getElementById("number_1").value);
        var numBer2=parseFloat(document.getElementById("number_2").value);
        var numBer3=parseFloat(document.getElementById("number_3").value);
        var numBer4=parseFloat(document.getElementById("number_4").value);
        var numBer5=parseFloat(document.getElementById("number_5").value);
        

        var toTal = (numBer1+numBer2+numBer3+numBer4+numBer5) / 5;
        document.getElementById("number").innerHTML = "Giá trị trung bình  = " +toTal;
});
//bài 3
document.getElementById("btn_money").addEventListener("click",function(e)
{
    var moNey = document.getElementById("money").value;
    var uSd = moNey*23500;
    var format = new Intl.NumberFormat('vn-VN').format(uSd); 
    
    document.getElementById("lbl_usd").innerHTML = "Số tiền quy đổi: " +format +"VNĐ";
    
});
//bài 4
document.getElementById("btn_hcn").addEventListener("click",function(e)
{
    var wiDth = parseFloat(document.getElementById("width_HCN").value);
    var heiGht = parseFloat(document.getElementById("height_HCN").value);

    var arEa = wiDth*heiGht;
    var peRi = 2* (wiDth + heiGht);

    document.getElementById("lbl_area").innerHTML = "Diện tích hình chữ nhật: " +arEa +"m2";
    document.getElementById("lbl_peri").innerHTML = "Chu vi hình chữ nhật: " +peRi +"m";
});
// bài 5
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
  
$(document).ready(function() {
    $('#hi').on('show.bs.modal', function() {
        $('#myInput').trigger('focus')
    });

    function checkMSSV() {
        var maSV = $("#maSV").val();
        re = /^\d{10}$/
        if (maSV == '') {
            $('#tbMaSV').html('Mã sinh viên không được để trống');
            $('#maSV').focus();
            return false;
        }
        if (!re.test(maSV)) {
            $('#tbMaSV').html('Chỉ dùng 10 chữ số');
            $('#maSV').focus();
            return false;
        }
        $('#tbMaSV').html('*');
        return true;
    }

    function checkHoTen() {
        var tenSV = $("#tenSV").val();
        if (tenSV == '') {
            $('#tbTenSV').html('Họ tên không được để trống');
            $('#tenSV').focus();
            return false;
        }
        re = /^([A-Z]{1}[A-Za-z]*)(\s*[A-Z]{1}[A-Za-z]*)*$/
        if (!re.test(tenSV)) {
            $('#tbTenSV').html('Chỉ dùng chữ hoa đầu từ (ví dụ: Tran Anh) ');
            $('#tenSV').focus();
            return false;
        }
        $('#tbTenSV').html('*');
        return true;
    }

    function checkNgayThamGia() {
        var ngayThamGia = $('#ngayThamGia').val();
        if (ngayThamGia == '') {
            $('#tbngayThamGia').html('Ngày tham gia không được để trống');
            $('#ngayThamGia').focus();
            return false;
        }
        var today = new Date();
        var ngayThamGia = new Date(ngayThamGia);
        today = today.setDate(today.getDate() + 7);
        if (today > ngayThamGia) {
            $('#tbngayThamGia').html('Vui lòng nhập ngày tham gia sau ngày hiện tại 7 ngày');
            $('#ngayThamGia').focus();
            return false;
        }
        $("#tbngayThamGia").html('*');
        return true;
    }

    function checkMail() {
        reg = /^[A-Za-z]{1}[A-Za-z0-9]*@(iuh.edu.vn)$/
        var email = $('#email').val();
        if (email == '') {
            $('#tbEmail').html('Email không được để trống');
            $('#email').focus();
            return false;
        }
        if (!reg.test(email)) {
            $('#tbEmail').html('Vui lòng nhập email của IUH (@iuh.edu.vn) và dùng chữ ở đầu ');
            $('#email').focus();
            return false;
        }
        $('#tbEmail').html('*');
        return true;
    }

    function checkSDT() {
        re = /^\d{10}$/
        var sdt = $('#sdt').val();
        if (sdt == '') {
            $('#tbSDT').html('Số điện thoại không được để trống');
            $('#sdt').focus();
            return false;
        }
        if (!re.test(sdt)) {
            $('#tbSDT').html('Chỉ dùng 10 chữ số');
            $('#sdt').focus();
            return false;
        }
        $('#tbSDT').html('*');
        return true;
    }
    $('#maSV').blur(checkMSSV);
    $('#tenSV').blur(checkHoTen);
    $('#ngayThamGia').blur(checkNgayThamGia);
    $('#email').blur(checkMail);
    $('#sdt').blur(checkSDT);
    var i = 1;
    $('#save').click(function() {
        if (checkMSSV() && checkHoTen() && checkNgayThamGia() && checkMail() && checkSDT()) {
            alert('Đăng ký thành công');
            var data = `
            <tr>
                <td>${i}</td>
                <td>${$('#maSV').val()}</td>
                <td>${$('#tenSV').val()}</td>   
                <td>${$('#ngayThamGia').val()}</td>
                <td>${$('#email').val()}</td>
                <td>${$('#sdt').val()}</td>
            </tr>`
            $('tbody').append(data);
            i++;
            $('#exampleModalLong').modal('hide')
        } else {
            alert('Vui lòng nhập chính xác và đầy đủ thông tin');
        }
    });

});
// Khởi tạo mảng rỗng, không có dữ liệu mẫu ban đầu
let exams = [];

// Hàm render dữ liệu ra bảng HTML
function renderTable() {
    const tbody = document.getElementById('examBody');
    tbody.innerHTML = ''; // Xóa sạch tbody để vẽ lại từ đầu

    exams.forEach(exam => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${exam.maSV}</td>
            <td>${exam.hoTen}</td>
            <td>${exam.monHoc}</td>
            <td>${exam.diemThi}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Hàm thêm điểm thi
function addExam() {
    const maSV = document.getElementById('maSV').value.trim();
    const hoTen = document.getElementById('hoTen').value.trim();
    const monHoc = document.getElementById('monHoc').value.trim();
    const diemThiStr = document.getElementById('diemThi').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    // Reset thông báo lỗi về màu đỏ
    errorMessage.style.color = '#dc3545';
    errorMessage.innerText = '';

    // Kiểm tra dữ liệu không được để trống
    if (!maSV || !hoTen || !monHoc || !diemThiStr) {
        errorMessage.innerText = 'Lỗi: Vui lòng nhập đầy đủ Mã sinh viên, Họ tên, Môn học và Điểm thi.';
        return;
    }

    // Kiểm tra điểm thi phải là số từ 0 đến 10
    const diemThi = parseFloat(diemThiStr);
    if (isNaN(diemThi) || diemThi < 0 || diemThi > 10) {
        errorMessage.innerText = 'Lỗi: Điểm thi phải là một số hợp lệ từ 0 đến 10.';
        return;
    }

    // Thêm dữ liệu mới vào mảng
    exams.push({
        maSV: maSV,
        hoTen: hoTen,
        monHoc: monHoc,
        diemThi: diemThi
    });

    // Cập nhật lại bảng HTML
    renderTable();

    // Báo thành công bằng chữ màu xanh
    errorMessage.style.color = 'green';
    errorMessage.innerText = 'Thêm điểm thi thành công!';

    // Làm rỗng các ô input sau khi thêm
    document.getElementById('maSV').value = '';
    document.getElementById('hoTen').value = '';
    document.getElementById('monHoc').value = '';
    document.getElementById('diemThi').value = '';
}
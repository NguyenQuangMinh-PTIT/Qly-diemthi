function addExam() {

    const maSV = document.getElementById('maSV').value.trim();
    const hoTen = document.getElementById('hoTen').value.trim();
    const monHoc = document.getElementById('monHoc').value.trim();
    const diemThiStr = document.getElementById('diemThi').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.style.color = '#dc3545';
    errorMessage.innerText = '';

    if (!maSV || !hoTen || !monHoc || !diemThiStr) {
        errorMessage.innerText = 'Lỗi: Vui lòng nhập đầy đủ Mã sinh viên, Họ tên, Môn học và Điểm thi.';
        return;
    }

    const diemThi = parseFloat(diemThiStr);
    if (isNaN(diemThi) || diemThi < 0 || diemThi > 10) {
        errorMessage.innerText = 'Lỗi: Điểm thi phải là một số hợp lệ từ 0 đến 10.';
        return;
    }

    errorMessage.style.color = 'green';
    errorMessage.innerText = 'Thêm điểm thi thành công!';

    document.getElementById('maSV').value = '';
    document.getElementById('hoTen').value = '';
    document.getElementById('monHoc').value = '';
    document.getElementById('diemThi').value = '';
}
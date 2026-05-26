const exams = [
    {
        maSV: "SV001",
        hoTen: "Nguyen Van A",
        monHoc: "Javascript",
        diemThi: 8.5
    },
    {
        maSV: "SV002",
        hoTen: "Tran Thi B",
        monHoc: "HTML CSS",
        diemThi: 7
    }
];

function renderTable() {
    const tbody = document.getElementById('examBody');
    tbody.innerHTML = '';

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

function addExam() {
    const maSV = document.getElementById('maSV').value.trim();
    const hoTen = document.getElementById('hoTen').value.trim();
    const monHoc = document.getElementById('monHoc').value.trim();
    const diemThiStr = document.getElementById('diemThi').value.trim();
    const errorMessage = document.getElementById('errorMessage');

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

    const newExam = {
        maSV: maSV,
        hoTen: hoTen,
        monHoc: monHoc,
        diemThi: diemThi
    };
    exams.push(newExam);

    renderTable();

    document.getElementById('maSV').value = '';
    document.getElementById('hoTen').value = '';
    document.getElementById('monHoc').value = '';
    document.getElementById('diemThi').value = '';
}

renderTable();
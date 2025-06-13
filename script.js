// Dữ liệu văn bản - chỉnh sửa trực tiếp tại đây để thêm văn bản mới
let documentData = {
    daotao: [
        { id: 1, title: "Quy chế đào tạo nghề", link: "https://docs.google.com/document/d/1L5bg4-pfRb-3ps3a7W7IgOlLRC_-mG-2/edit?usp=drive_link&ouid=101441680885312104546&rtpof=true&sd=true" },
        { id: 2, title: "Chương trình khung đào tạo", link: "https://docs.google.com/document/d/1L5bg4-pfRb-3ps3a7W7IgOlLRC_-mG-2/edit?usp=drive_link&ouid=101441680885312104546&rtpof=true&sd=true" },
        { id: 3, title: "Hướng dẫn thực tập", link: "https://example.com/huong-dan-thuc-tap.pdf" }
    ],
    tuyensinh: [
        { id: 4, title: "Thông báo tuyển sinh 2024", link: "https://example.com/thong-bao-tuyen-sinh.pdf" },
        { id: 5, title: "Hồ sơ nhập học", link: "https://example.com/ho-so-nhap-hoc.pdf" },
        { id: 6, title: "Lệ phí tuyển sinh", link: "https://example.com/le-phi-tuyen-sinh.pdf" }
    ],
    hanhchinh: [
        { id: 7, title: "Quy định nội bộ", link: "https://example.com/quy-dinh-noi-bo.pdf" },
        { id: 8, title: "Biểu mẫu hành chính", link: "https://example.com/bieu-mau-hanh-chinh.pdf" },
        { id: 9, title: "Quy trình làm việc", link: "https://example.com/quy-trinh-lam-viec.pdf" }
    ],
    trungtamhoptac: [
        { id: 10, title: "Hợp đồng hợp tác", link: "https://example.com/hop-dong-hop-tac.pdf" },
        { id: 11, title: "Quy chế hợp tác", link: "https://example.com/quy-che-hop-tac.pdf" },
        { id: 12, title: "Hợp đồng hợp tác", link: "https://example.com/hop-dong-hop-tac.pdf" }
    ],
    trungtamboiduong: [
        { id: 13, title: "Hợp đồng bồi dưỡng", link: "https://example.com/hop-dong-boi-duong.pdf" },
        { id: 14, title: "Quy chế bồi dưỡng", link: "https://example.com/quy-che-boi-duong.pdf" },
        { id: 15, title: "Hợp đồng bồi dưỡng", link: "https://example.com/hop-dong-boi-duong.pdf" }
    ]
};

// Khởi tạo ứng dụng
function init() {
    renderDocuments('daotao');
    renderDocuments('tuyensinh');
    renderDocuments('hanhchinh');
    renderDocuments('trungtamhoptac');
    renderDocuments('trungtamboiduong');
}

// Hiển thị tab cụ thể
function showTab(department) {
    // Cập nhật tab buttons
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');

    // Cập nhật nội dung tab
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(department).classList.add('active');
}

// Render danh sách văn bản
function renderDocuments(department) {
    const container = document.getElementById(`${department}-documents`);
    const documents = documentData[department];

    if (documents.length === 0) {
        container.innerHTML = `
                    <div class="empty-state">
                        <div style="font-size: 3rem; margin-bottom: 20px; opacity: 0.5;">📄</div>
                        <h3>Chưa có văn bản nào</h3>
                        <p>Hiện tại chưa có văn bản trong phòng ban này</p>
                    </div>
                `;
        return;
    }

    let tableHTML = `
    <table class="documents-table">
        <thead>
            <tr>
                <th>Tên văn bản</th>
                <th>Link</th>
            </tr>
        </thead>
        <tbody>
            `;

    documents.forEach(doc => {
        tableHTML += `
                    <tr>
                        <td>${escapeHtml(doc.title)}</td>
                        <td><a href="${escapeHtml(doc.link)}" target="_blank" rel="noopener">Xem văn bản</a></td>
                    </tr>
                `;
    });

    tableHTML += `
        </tbody>
    </table>
    `;

    container.innerHTML = tableHTML;
}

// Hàm escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Khởi tạo ứng dụng khi trang load
document.addEventListener('DOMContentLoaded', init);

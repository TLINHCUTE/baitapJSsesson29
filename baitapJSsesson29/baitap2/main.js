let menu = `================== MENU ===================\n`
    + `1. Thêm sản phẩm vào danh sách sản phẩm.\n`
    + `2. Hiển thị tất cả sản phẩm.\n`
    + `3. Hiển thị chi tiết sản phẩm theo ID.\n`
    + `4. Cập nhật thông tin sản phẩm theo ID.\n`
    + `5. Xóa sản phẩm theo ID.\n`
    + `6. Lọc sản phẩm theo khoảng giá.\n`
    + `7. Thoát.\n`
    + `\n============================================\n`
    + `\nLựa chọn của bạn:   `;

let products = [];
while (true) {
    let choice = Number(prompt(menu));
    switch (choice) {
        case 1:
            add_product();
            break;
        case 2:
            show_all_products();
            break;
        case 3:
            show_product_by_id();
            break;
        case 4:
            update_product();
            break;
        case 5:
            delete_product();
            break;
        case 6:
            filter_by_price();
            break;
        case 7:
            alert("Hẹn gặp lại bạn!");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
    if (choice == 7) break;
}

function add_product() {
    let id = Number(prompt("Nhập ID sản phẩm:"));
    let name = prompt("Nhập tên sản phẩm:");
    let price = Number(prompt("Nhập giá sản phẩm:"));
    let category = prompt("Nhập danh mục sản phẩm:");
    let quantity = Number(prompt("Nhập số lượng sản phẩm:"));

    products.push({ id, name, price, category, quantity });
    alert("Thêm sản phẩm thành công!");
}

function show_all_products() {
    if (products.length === 0) {
        alert("Không có sản phẩm nào!");
        return;
    }
    let result = "Danh sách sản phẩm:\n";
    products.forEach((p) => {
        result += `ID: ${p.id}, Tên: ${p.name}, Giá: ${p.price}, Danh mục: ${p.category}, Số lượng: ${p.quantity}\n`;
    });
    alert(result);
}

function show_product_by_id() {
    let id = Number(prompt("Nhập ID sản phẩm cần tìm:"));
    let product = products.find(p => p.id === id);
    if (product) {
        alert(`ID: ${product.id}\nTên: ${product.name}\nGiá: ${product.price}\nDanh mục: ${product.category}\nSố lượng: ${product.quantity}`);
    } else {
        alert("Không tìm thấy sản phẩm!");
    }
}

function update_product() {
    let id = Number(prompt("Nhập ID sản phẩm cần cập nhật:"));
    let product = products.find(p => p.id === id);
    if (product) {
        product.name = prompt("Nhập tên mới:", product.name);
        product.price = Number(prompt("Nhập giá mới:", product.price));
        product.category = prompt("Nhập danh mục mới:", product.category);
        product.quantity = Number(prompt("Nhập số lượng mới:", product.quantity));
        alert("Cập nhật sản phẩm thành công!");
    } else {
        alert("Không tìm thấy sản phẩm!");
    }
}

function delete_product() {
    let id = Number(prompt("Nhập ID sản phẩm cần xóa:"));
    let index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        alert("Xóa sản phẩm thành công!");
    } else {
        alert("Không tìm thấy sản phẩm!");
    }
}

function filter_by_price() {
    let min_price = Number(prompt("Nhập giá thấp nhất:"));
    let max_price = Number(prompt("Nhập giá cao nhất:"));
    let filtered_products = products.filter(p => p.price >= min_price && p.price <= max_price);
    if (filtered_products.length > 0) {
        let result = "Sản phẩm trong khoảng giá:\n";
        filtered_products.forEach((p) => {
            result += `ID: ${p.id}, Tên: ${p.name}, Giá: ${p.price}, Danh mục: ${p.category}, Số lượng: ${p.quantity}\n`;
        });
        alert(result);
    } else {
        alert("Không có sản phẩm nào trong khoảng giá này!");
    }
}
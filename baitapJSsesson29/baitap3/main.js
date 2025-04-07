let menuCategories = {};

function addDish() {
    let category = prompt("Nhập danh mục món ăn (VD: Món chính, Đồ uống, Tráng miệng):").trim();
    let name = prompt("Nhập tên món ăn:").trim();
    let price = Number(prompt("Nhập giá món ăn:").trim());
    let description = prompt("Nhập mô tả món ăn:").trim();

    if (!menuCategories[category]) {
        menuCategories[category] = [];
    }

    menuCategories[category].push({ name, price, description });
    alert("Món ăn đã được thêm vào danh mục " + category);
}

function removeDish() {
    let name = prompt("Nhập tên món ăn cần xóa:").trim();
    let found = false;
    for (let category in menuCategories) {
        menuCategories[category] = menuCategories[category].filter(dish => {
            if (dish.name.toLowerCase() === name.toLowerCase()) {
                found = true;
                return false;
            }
            return true;
        });
    }
    alert(found ? "Đã xóa món ăn." : "Không tìm thấy món ăn.");
}

function updateDish() {
    let name = prompt("Nhập tên món ăn cần cập nhật:").trim();
    for (let category in menuCategories) {
        let dish = menuCategories[category].find(d => d.name.toLowerCase() === name.toLowerCase());
        if (dish) {
            dish.name = prompt("Nhập tên mới:", dish.name).trim();
            dish.price = Number(prompt("Nhập giá mới:", dish.price).trim());
            dish.description = prompt("Nhập mô tả mới:", dish.description).trim();
            alert("Cập nhật món ăn thành công.");
            return;
        }
    }
    alert("Không tìm thấy món ăn.");
}

function showMenu() {
    if (Object.keys(menuCategories).length === 0) {
        alert("Menu hiện đang trống!");
        return;
    }
    let menuText = "=== MENU NHÀ HÀNG ===\n";
    for (let category in menuCategories) {
        menuText += `\n ${category}\n`;
        menuCategories[category].forEach(dish => {
            menuText += ` ${dish.name} - ${dish.price} VND\n    ${dish.description}\n`;
        });
    }
    alert(menuText);
}

function searchDish() {
    let name = prompt("Nhập tên món ăn cần tìm:").trim();
    let results = [];
    for (let category in menuCategories) {
        menuCategories[category].forEach(dish => {
            if (dish.name.toLowerCase().includes(name.toLowerCase())) {
                results.push(` ${category} -  ${dish.name} - ${dish.price} VND\n    ${dish.description}`);
            }
        });
    }
    alert(results.length > 0 ? results.join('\n\n') : "Không tìm thấy món ăn.");
}

while (true) {
    let choice = Number(prompt("=== QUẢN LÝ MENU NHÀ HÀNG ===\n1. Thêm món ăn\n2. Xóa món ăn\n3. Cập nhật món ăn\n4. Hiển thị toàn bộ menu\n5. Tìm kiếm món ăn\n6. Thoát\n\nLựa chọn của bạn:"));
    switch (choice) {
        case 1:
            addDish();
            break;
        case 2:
            removeDish();
            break;
        case 3:
            updateDish();
            break;
        case 4:
            showMenu();
            break;
        case 5:
            searchDish();
            break;
        case 6:
            alert("Hẹn gặp lại!");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
    if (choice === 6) break;
}
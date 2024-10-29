const productsSection = document.getElementById('products');

for (let i = 1; i <= 20; i++) {
    const product = document.createElement('div');
    product.classList.add('product');

    product.innerHTML = `
        <img src="image${i}.jpg" alt="Sản phẩm ${i}">
        <h3>Sản phẩm ${i}</h3>
        <p>Giá: ${Math.floor(Math.random() * 1000000)}đ</p>
        <button>Thêm vào giỏ</button>
    `;

    productsSection.appendChild(product);
}
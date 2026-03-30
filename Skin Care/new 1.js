// عندما يضغط المستخدم على "ابدأ التسوق"، إخفاء بطاقة الترحيب وعرض المنتجات
document.getElementById("start-btn").addEventListener("click", function() {
    // إخفاء بطاقة الترحيب
    document.getElementById("welcome-card").style.display = "none";

    // إظهار قسم المنتجات
    document.getElementById("products-section").style.display = "block";
});

document.querySelector(".fast-delivery-btn").addEventListener("click", function() {
    alert("تم اختيار التوصيل السريع! سيتم إرسال منتجاتك خلال 24 ساعة.");
});

    let totalPrice = 0;

function toggleCart() {
  const cartBox = document.getElementById('cart');
  cartBox.style.display = cartBox.style.display === 'block' ? 'none' : 'block';
}


function checkout() {
  const paymentForm = document.getElementById('payment-form');
  if (paymentForm) {
    paymentForm.style.display = 'block'; // يطلع النموذج
  } else {
    alert('نموذج الدفع غير موجود!');
  }
}



window.onload = initCartButtons;

let totalPrice = 0;

const productsData = {
  "skin-care": [
    { name: "غسول الوجه", price: 25 },
    { name: "مرطب يومي", price: 30 },
    { name: "كريم ليلي", price: 35 }
  ],
  "brightening": [
    { name: "سيروم تفتيح", price: 40 },
    { name: "كريم توحيد لون البشرة", price: 50 },
    { name: "ماسك الفيتامين سي", price: 45 }
  ],
  "body-care": [
    { name: "لوشن الجسم", price: 28 },
    { name: "مقشر الجسم", price: 33 },
    { name: "زبدة الشيا", price: 38 }
  ],
  "hair-care": [
    { name: "زيت الأرغان", price: 60 },
    { name: "شامبو طبيعي", price: 35 },
    { name: "ماسك للشعر التالف", price: 55 }
  ]
};

function toggleCart() {
  const cartBox = document.getElementById('cart');
  cartBox.style.display = cartBox.style.display === 'block' ? 'none' : 'block';
}

function showPaymentPopup() {
  document.getElementById('payment-popup').style.display = 'block';
}

function submitPayment() {
  alert(`تم الدفع بنجاح! سيتم التواصل معك لتوصيل الطلب 🚚`);
  document.getElementById('cart-items').innerHTML = '';
  totalPrice = 0;
  document.getElementById('total-price').textContent = 'المجموع: 0 ريال';
  document.getElementById('checkout-btn').style.display = 'none';
  document.getElementById('payment-popup').style.display = 'none';
}

function updateCheckoutVisibility() {
  const cartItems = document.getElementById('cart-items');
  const checkoutBtn = document.getElementById('checkout-btn');
  checkoutBtn.style.display = cartItems.children.length > 0 ? 'block' : 'none';
}

function createProductCard(name, price) {
  const card = document.createElement('div');
  card.className = 'product';
  card.innerHTML = `
    <img src="https://via.placeholder.com/300x200/ffc0cb/000000?text=${name}" alt="${name}">
    <h3>${name}</h3>
    <p class="price">${price} ريال</p>
    <button class="btn">أضف للسلة 🛍️</button>
  `;
  const button = card.querySelector('button');
  button.addEventListener('click', () => addToCart(name, price));
  return card;
}

function addToCart(name, price) {
  const cart = document.getElementById('cart-items');
  const total = document.getElementById('total-price');

  const listItem = document.createElement('li');

  const itemText = document.createElement('span');
  itemText.textContent = `${name} - ${price} ريال`;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = '❌';
  removeBtn.classList.add('remove-btn');
  removeBtn.onclick = () => {
    totalPrice -= price;
    total.textContent = `المجموع: ${totalPrice} ريال`;
    listItem.remove();
    updateCheckoutVisibility();
  };

  listItem.appendChild(itemText);
  listItem.appendChild(removeBtn);
  cart.appendChild(listItem);

  totalPrice += price;
  total.textContent = `المجموع: ${totalPrice} ريال`;
  updateCheckoutVisibility();
}


// تابع لتفريغ السلة
function clearCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = "";
  document.getElementById('cart-total').innerText = "الإجمالي: 0 ر.س";
}

/

const productList = document.getElementById('product-list');
products.forEach(product => {
  const div = document.createElement('div');
  div.className = 'product';
  div.innerHTML = `
    <h3>${product.name}</h3>
    <p>${product.price} ر.س</p>
    <button onclick="addToCart('${product.name}', ${product.price})">أضف إلى السلة 🛍️</button>
  `;
  productList.appendChild(div);
});

// السلة
let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.name} - ${item.price} ر.س`;
    cartItems.appendChild(div);
    total += item.price;
  });

  cartTotal.textContent = `الإجمالي: ${total} ر.س`;
}

function checkout() {
  if (cart.length === 0) {
    alert('السلة فارغة 🛒');
  } else {
    alert('تم إتمام الشراء بنجاح 💳✨');
  }
}

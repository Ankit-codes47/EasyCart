/* ==================================================
   EASYCART MAIN JAVASCRIPT
================================================== */


/* ==================================================
   PRODUCT DATABASE
================================================== */

const products = [

    // FRUITS

    {
        id: 1,
        name: "Fresh Apples",
        category: "Fruits",
        price: 120,
        unit: "1 kg",
        image: "🍎"
    },

    {
        id: 2,
        name: "Fresh Bananas",
        category: "Fruits",
        price: 60,
        unit: "1 dozen",
        image: "🍌"
    },

    {
        id: 3,
        name: "Fresh Oranges",
        category: "Fruits",
        price: 100,
        unit: "1 kg",
        image: "🍊"
    },

    {
        id: 4,
        name: "Fresh Mangoes",
        category: "Fruits",
        price: 150,
        unit: "1 kg",
        image: "🥭"
    },

    {
        id: 5,
        name: "Fresh Grapes",
        category: "Fruits",
        price: 90,
        unit: "500 g",
        image: "🍇"
    },

    {
        id: 6,
        name: "Watermelon",
        category: "Fruits",
        price: 80,
        unit: "1 piece",
        image: "🍉"
    },


    // VEGETABLES

    {
        id: 7,
        name: "Fresh Potatoes",
        category: "Vegetables",
        price: 40,
        unit: "1 kg",
        image: "🥔"
    },

    {
        id: 8,
        name: "Fresh Tomatoes",
        category: "Vegetables",
        price: 50,
        unit: "1 kg",
        image: "🍅"
    },

    {
        id: 9,
        name: "Fresh Onions",
        category: "Vegetables",
        price: 45,
        unit: "1 kg",
        image: "🧅"
    },

    {
        id: 10,
        name: "Fresh Carrots",
        category: "Vegetables",
        price: 60,
        unit: "1 kg",
        image: "🥕"
    },

    {
        id: 11,
        name: "Lady Finger",
        category: "Vegetables",
        price: 55,
        unit: "500 g",
        image: "🥬"
    },

    {
        id: 12,
        name: "Cauliflower",
        category: "Vegetables",
        price: 50,
        unit: "1 piece",
        image: "🥦"
    },


    // DAIRY

    {
        id: 13,
        name: "Fresh Cow Milk",
        category: "Dairy",
        price: 65,
        unit: "1 litre",
        image: "🥛"
    },

    {
        id: 14,
        name: "Fresh Butter",
        category: "Dairy",
        price: 58,
        unit: "100 g",
        image: "🧈"
    },

    {
        id: 15,
        name: "Fresh Paneer",
        category: "Dairy",
        price: 95,
        unit: "200 g",
        image: "🧀"
    },

    {
        id: 16,
        name: "Fresh Curd",
        category: "Dairy",
        price: 40,
        unit: "400 g",
        image: "🥣"
    },

    {
        id: 17,
        name: "Cheese Slices",
        category: "Dairy",
        price: 130,
        unit: "1 pack",
        image: "🧀"
    },


    // BAKERY

    {
        id: 18,
        name: "Fresh Bread",
        category: "Bakery",
        price: 45,
        unit: "1 loaf",
        image: "🍞"
    },

    {
        id: 19,
        name: "Burger Buns",
        category: "Bakery",
        price: 50,
        unit: "4 pieces",
        image: "🍔"
    },


    // SNACKS

    {
        id: 20,
        name: "Tea Biscuits",
        category: "Snacks",
        price: 30,
        unit: "1 pack",
        image: "🍪"
    },

    {
        id: 21,
        name: "Potato Chips",
        category: "Snacks",
        price: 20,
        unit: "1 pack",
        image: "🍟"
    },

    {
        id: 22,
        name: "Namkeen",
        category: "Snacks",
        price: 60,
        unit: "1 pack",
        image: "🥨"
    },

    {
        id: 23,
        name: "Milk Chocolate",
        category: "Snacks",
        price: 50,
        unit: "1 bar",
        image: "🍫"
    },

    {
        id: 24,
        name: "Instant Noodles",
        category: "Snacks",
        price: 15,
        unit: "1 pack",
        image: "🍜"
    },

    {
        id: 25,
        name: "Pasta",
        category: "Snacks",
        price: 80,
        unit: "500 g",
        image: "🍝"
    },


    // BEVERAGES

    {
        id: 26,
        name: "Cold Drink",
        category: "Beverages",
        price: 40,
        unit: "750 ml",
        image: "🥤"
    },

    {
        id: 27,
        name: "Orange Juice",
        category: "Beverages",
        price: 110,
        unit: "1 litre",
        image: "🧃"
    },

    {
        id: 28,
        name: "Mineral Water",
        category: "Beverages",
        price: 20,
        unit: "1 litre",
        image: "💧"
    },

    {
        id: 29,
        name: "Tea",
        category: "Beverages",
        price: 140,
        unit: "250 g",
        image: "🍵"
    },

    {
        id: 30,
        name: "Coffee",
        category: "Beverages",
        price: 180,
        unit: "100 g",
        image: "☕"
    },


    // STAPLES

    {
        id: 31,
        name: "Basmati Rice",
        category: "Staples",
        price: 120,
        unit: "1 kg",
        image: "🍚"
    },

    {
        id: 32,
        name: "Wheat Flour",
        category: "Staples",
        price: 55,
        unit: "1 kg",
        image: "🌾"
    },

    {
        id: 33,
        name: "Toor Dal",
        category: "Staples",
        price: 150,
        unit: "1 kg",
        image: "🫘"
    },

    {
        id: 34,
        name: "Sugar",
        category: "Staples",
        price: 50,
        unit: "1 kg",
        image: "🧂"
    },

    {
        id: 35,
        name: "Iodised Salt",
        category: "Staples",
        price: 25,
        unit: "1 kg",
        image: "🧂"
    },

    {
        id: 36,
        name: "Cooking Oil",
        category: "Staples",
        price: 145,
        unit: "1 litre",
        image: "🫗"
    },


    // DRY FRUITS

    {
        id: 37,
        name: "Premium Almonds",
        category: "Dry Fruits",
        price: 220,
        unit: "250 g",
        image: "🥜"
    },

    {
        id: 38,
        name: "Premium Cashews",
        category: "Dry Fruits",
        price: 240,
        unit: "250 g",
        image: "🥜"
    },


    // HOUSEHOLD

    {
        id: 39,
        name: "Dishwash Liquid",
        category: "Household",
        price: 110,
        unit: "500 ml",
        image: "🧴"
    },

    {
        id: 40,
        name: "Laundry Detergent",
        category: "Household",
        price: 190,
        unit: "1 kg",
        image: "🧺"
    }

];


/* ==================================================
   CART
================================================== */

let cart =
    JSON.parse(
        localStorage.getItem("easyCart")
    ) || [];


/* ==================================================
   SAVE CART
================================================== */

function saveCart() {

    localStorage.setItem(
        "easyCart",
        JSON.stringify(cart)
    );

    updateCartCount();

}


/* ==================================================
   ADD TO CART
================================================== */

function addToCart(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) {
        return;
    }


    const existingProduct =
        cart.find(
            item => item.id === productId
        );


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    saveCart();

    showToast(
        product.name + " added to cart"
    );

}


/* ==================================================
   CART COUNT
================================================== */

function updateCartCount() {

    const cartCounters =
        document.querySelectorAll(
            ".cart-count"
        );


    const totalItems =
        cart.reduce(

            (total, item) =>
                total + item.quantity,

            0

        );


    cartCounters.forEach(counter => {

        counter.textContent =
            totalItems;

    });

}


/* ==================================================
   DISPLAY PRODUCTS
================================================== */

function displayProducts(
    productList = products
) {

    const productGrid =
        document.getElementById(
            "products-grid"
        );


    if (!productGrid) {
        return;
    }


    productGrid.innerHTML = "";


    if (productList.length === 0) {

        productGrid.innerHTML = `

            <div class="no-products">

                <div>🔍</div>

                <h2>
                    No products found
                </h2>

                <p>
                    Try another product name
                    or category.
                </p>

            </div>

        `;

        return;

    }


    productList.forEach(product => {


        const productCard =
            document.createElement(
                "article"
            );


        productCard.className =
            "product-card";


        productCard.innerHTML = `

            <div class="product-image">

                ${product.image}

            </div>


            <span class="product-category">

                ${product.category}

            </span>


            <h3>

                ${product.name}

            </h3>


            <p class="product-unit">

                ${product.unit}

            </p>


            <div class="product-bottom">


                <p class="product-price">

                    ₹${product.price}

                </p>


                <button
                    type="button"
                    onclick="addToCart(${product.id})">

                    Add +

                </button>


            </div>

        `;


        productGrid.appendChild(
            productCard
        );

    });

}


/* ==================================================
   PRODUCT SEARCH AND FILTER
================================================== */

function filterProductList() {

    const searchInput =
        document.getElementById(
            "product-search"
        );


    const categoryFilter =
        document.getElementById(
            "category-filter"
        );


    if (
        !searchInput ||
        !categoryFilter
    ) {
        return;
    }


    const searchText =
        searchInput.value
            .trim()
            .toLowerCase();


    const selectedCategory =
        categoryFilter.value;


    const filteredProducts =
        products.filter(product => {


            const matchesSearch =

                product.name
                    .toLowerCase()
                    .includes(searchText)

                ||

                product.category
                    .toLowerCase()
                    .includes(searchText);


            const matchesCategory =

                selectedCategory === "All"

                ||

                product.category ===
                selectedCategory;


            return (
                matchesSearch &&
                matchesCategory
            );

        });


    displayProducts(
        filteredProducts
    );

}


/* ==================================================
   DISPLAY CART
================================================== */

function displayCart() {

    const cartContainer =
        document.getElementById(
            "cart-items"
        );


    if (!cartContainer) {
        return;
    }


    cartContainer.innerHTML = "";


    if (cart.length === 0) {

        cartContainer.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">

                    🛒

                </div>


                <h2>

                    Your cart is empty

                </h2>


                <p>

                    Add some grocery products
                    to start your order.

                </p>


                <a
                    href="products.html"
                    class="primary-btn">

                    Start Shopping

                </a>

            </div>

        `;


        updateCartSummary();

        return;

    }


    cart.forEach(item => {


        const cartItem =
            document.createElement(
                "article"
            );


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <div class="cart-product-image">

                ${item.image}

            </div>


            <div class="cart-product-info">


                <span class="product-category">

                    ${item.category}

                </span>


                <h3>

                    ${item.name}

                </h3>


                <p class="product-unit">

                    ${item.unit}

                </p>


                <p class="cart-price">

                    ₹${item.price}

                </p>


            </div>


            <div class="cart-item-actions">


                <div class="quantity">


                    <button
                        type="button"
                        onclick="decreaseQuantity(${item.id})">

                        −

                    </button>


                    <span>

                        ${item.quantity}

                    </span>


                    <button
                        type="button"
                        onclick="increaseQuantity(${item.id})">

                        +

                    </button>


                </div>


                <strong class="item-total">

                    ₹${item.price * item.quantity}

                </strong>


                <button
                    type="button"
                    class="remove-button"
                    onclick="removeFromCart(${item.id})">

                    Remove

                </button>


            </div>

        `;


        cartContainer.appendChild(
            cartItem
        );

    });


    updateCartSummary();

}


/* ==================================================
   INCREASE QUANTITY
================================================== */

function increaseQuantity(productId) {

    const item =
        cart.find(
            product =>
                product.id === productId
        );


    if (item) {

        item.quantity++;

        saveCart();

        displayCart();

    }

}


/* ==================================================
   DECREASE QUANTITY
================================================== */

function decreaseQuantity(productId) {

    const item =
        cart.find(
            product =>
                product.id === productId
        );


    if (!item) {
        return;
    }


    if (item.quantity > 1) {

        item.quantity--;

    } else {

        cart =
            cart.filter(
                product =>
                    product.id !== productId
            );

    }


    saveCart();

    displayCart();

}


/* ==================================================
   REMOVE FROM CART
================================================== */

function removeFromCart(productId) {

    cart =
        cart.filter(
            item =>
                item.id !== productId
        );


    saveCart();

    displayCart();

}


/* ==================================================
   CLEAR CART
================================================== */

function clearCart() {

    if (cart.length === 0) {

        showToast(
            "Your cart is already empty"
        );

        return;

    }


    const confirmed =
        confirm(
            "Remove all products from your cart?"
        );


    if (!confirmed) {
        return;
    }


    cart = [];


    saveCart();

    displayCart();

}


/* ==================================================
   CART SUMMARY
================================================== */

function updateCartSummary() {

    const subtotalElement =
        document.getElementById(
            "subtotal"
        );


    const deliveryElement =
        document.getElementById(
            "delivery"
        );


    const totalElement =
        document.getElementById(
            "total"
        );


    if (
        !subtotalElement ||
        !deliveryElement ||
        !totalElement
    ) {
        return;
    }


    const subtotal =
        cart.reduce(

            (total, item) =>

                total +
                item.price *
                item.quantity,

            0

        );


    const delivery =

        subtotal === 0 ||
        subtotal >= 200

            ? 0

            : 40;


    const total =
        subtotal + delivery;


    subtotalElement.textContent =
        "₹" + subtotal;


    deliveryElement.textContent =

        delivery === 0

            ? "FREE"

            : "₹" + delivery;


    totalElement.textContent =
        "₹" + total;

}


/* ==================================================
   MOBILE NAVIGATION
================================================== */

function toggleMenu() {

    const navigation =
        document.querySelector(
            ".nav-links"
        );


    if (navigation) {

        navigation.classList.toggle(
            "show"
        );

    }

}


/* ==================================================
   SIGN UP
   DEMO ONLY
================================================== */

function setupSignup() {

    const signupForm =
        document.getElementById(
            "signup-form"
        );


    if (!signupForm) {
        return;
    }


    signupForm.addEventListener(
        "submit",
        function (event) {


            event.preventDefault();


            const name =
                document.getElementById(
                    "signup-name"
                ).value.trim();


            const mobile =
                document.getElementById(
                    "signup-mobile"
                ).value.trim();


            const email =
                document.getElementById(
                    "signup-email"
                ).value
                    .trim()
                    .toLowerCase();


            const password =
                document.getElementById(
                    "signup-password"
                ).value;


            const confirmPassword =
                document.getElementById(
                    "confirm-password"
                ).value;


            const message =
                document.getElementById(
                    "signup-message"
                );


            if (!/^[0-9]{10}$/.test(mobile)) {

                message.textContent =
                    "Please enter a valid 10-digit mobile number.";

                message.className =
                    "form-message error-message";

                return;

            }


            if (password.length < 6) {

                message.textContent =
                    "Password must contain at least 6 characters.";

                message.className =
                    "form-message error-message";

                return;

            }


            if (
                password !==
                confirmPassword
            ) {

                message.textContent =
                    "Passwords do not match.";

                message.className =
                    "form-message error-message";

                return;

            }


            /*
               Front-end demonstration only.
               Do not use localStorage for real
               password authentication.
            */

            const user = {

                name,
                mobile,
                email,
                password

            };


            localStorage.setItem(

                "easyCartUser",

                JSON.stringify(user)

            );


            message.textContent =
                "Account created successfully! Redirecting to login...";


            message.className =
                "form-message success-message";


            setTimeout(
                function () {

                    window.location.href =
                        "login.html";

                },
                1200
            );


        }
    );

}


/* ==================================================
   LOGIN
   DEMO ONLY
================================================== */

function setupLogin() {

    const loginForm =
        document.getElementById(
            "login-form"
        );


    if (!loginForm) {
        return;
    }


    loginForm.addEventListener(
        "submit",
        function (event) {


            event.preventDefault();


            const email =
                document.getElementById(
                    "login-email"
                ).value
                    .trim()
                    .toLowerCase();


            const password =
                document.getElementById(
                    "login-password"
                ).value;


            const message =
                document.getElementById(
                    "login-message"
                );


            const savedUser =
                JSON.parse(

                    localStorage.getItem(
                        "easyCartUser"
                    )

                );


            if (!savedUser) {

                message.textContent =
                    "No account found. Please create an account first.";

                message.className =
                    "form-message error-message";

                return;

            }


            if (
                email === savedUser.email &&
                password === savedUser.password
            ) {


                localStorage.setItem(

                    "easyCartLoggedIn",

                    "true"

                );


                localStorage.setItem(

                    "easyCartCurrentUser",

                    savedUser.name

                );


                message.textContent =
                    "Login successful! Redirecting...";


                message.className =
                    "form-message success-message";


                setTimeout(
                    function () {

                        window.location.href =
                            "index.html";

                    },
                    1000
                );


            } else {


                message.textContent =
                    "Incorrect email or password.";


                message.className =
                    "form-message error-message";


            }


        }
    );

}


/* ==================================================
   ORDER TRACKING
================================================== */

function setupTracking() {

    const trackingForm =
        document.getElementById(
            "tracking-form"
        );


    if (!trackingForm) {
        return;
    }


    trackingForm.addEventListener(
        "submit",
        function (event) {


            event.preventDefault();


            const orderId =
                document.getElementById(
                    "tracking-order-id"
                ).value
                    .trim()
                    .toUpperCase();


            const mobile =
                document.getElementById(
                    "tracking-mobile"
                ).value
                    .trim();


            const result =
                document.getElementById(
                    "tracking-result"
                );


            if (
                orderId === "" ||
                mobile === ""
            ) {

                return;

            }


            result.innerHTML = `

                <div class="tracking-order-info">

                    <div>

                        <span>
                            ORDER ID
                        </span>

                        <h2>
                            ${orderId}
                        </h2>

                    </div>


                    <span class="status-badge status-delivery">

                        Out for Delivery

                    </span>

                </div>


                <div class="tracking-progress">


                    <div class="tracking-step completed">

                        <div class="tracking-icon">
                            ✓
                        </div>

                        <h3>
                            Order Placed
                        </h3>

                        <p>
                            Order confirmed
                        </p>

                    </div>


                    <div class="tracking-line completed-line">
                    </div>


                    <div class="tracking-step completed">

                        <div class="tracking-icon">
                            ✓
                        </div>

                        <h3>
                            Packed
                        </h3>

                        <p>
                            Items packed
                        </p>

                    </div>


                    <div class="tracking-line completed-line">
                    </div>


                    <div class="tracking-step active">

                        <div class="tracking-icon">
                            🚚
                        </div>

                        <h3>
                            Out for Delivery
                        </h3>

                        <p>
                            On the way
                        </p>

                    </div>


                    <div class="tracking-line">
                    </div>


                    <div class="tracking-step">

                        <div class="tracking-icon">
                            📦
                        </div>

                        <h3>
                            Delivered
                        </h3>

                        <p>
                            Pending
                        </p>

                    </div>


                </div>


                <div class="delivery-estimate">

                    <span>
                        🚚
                    </span>

                    <div>

                        <strong>
                            Expected Delivery
                        </strong>

                        <p>
                            Your order is expected
                            to arrive today.
                        </p>

                    </div>

                </div>

            `;


        }
    );

}


/* ==================================================
   ADDRESS
================================================== */

function setupAddress() {

    const addressForm =
        document.getElementById(
            "address-form"
        );


    if (!addressForm) {
        return;
    }


    displaySavedAddress();


    addressForm.addEventListener(
        "submit",
        function (event) {


            event.preventDefault();


            const address = {

                name:
                    document.getElementById(
                        "address-name"
                    ).value.trim(),

                mobile:
                    document.getElementById(
                        "address-mobile"
                    ).value.trim(),

                house:
                    document.getElementById(
                        "house-number"
                    ).value.trim(),

                pincode:
                    document.getElementById(
                        "pincode"
                    ).value.trim(),

                area:
                    document.getElementById(
                        "address-area"
                    ).value.trim(),

                landmark:
                    document.getElementById(
                        "landmark"
                    ).value.trim(),

                city:
                    document.getElementById(
                        "city"
                    ).value.trim(),

                state:
                    document.getElementById(
                        "state"
                    ).value.trim(),

                type:
                    document.getElementById(
                        "address-type"
                    ).value

            };


            const message =
                document.getElementById(
                    "address-message"
                );


            if (
                !/^[0-9]{6}$/.test(
                    address.pincode
                )
            ) {

                message.textContent =
                    "Please enter a valid 6-digit PIN code.";

                message.className =
                    "form-message error-message";

                return;

            }


            localStorage.setItem(

                "easyCartAddress",

                JSON.stringify(address)

            );


            message.textContent =
                "Delivery address saved successfully.";


            message.className =
                "form-message success-message";


            displaySavedAddress();


        }
    );

}


/* ==================================================
   DISPLAY SAVED ADDRESS
================================================== */

function displaySavedAddress() {

    const container =
        document.getElementById(
            "saved-address"
        );


    if (!container) {
        return;
    }


    const address =
        JSON.parse(

            localStorage.getItem(
                "easyCartAddress"
            )

        );


    if (!address) {

        container.innerHTML = `

            <p>

                You have not saved
                an address yet.

            </p>

        `;

        return;

    }


    container.innerHTML = `

        <article class="saved-address-card">


            <div class="saved-address-header">

                <h3>

                    ${address.name}

                </h3>


                <span>

                    ${address.type}

                </span>

            </div>


            <p>

                ${address.house},
                ${address.area}

            </p>


            ${
                address.landmark

                    ? `<p>
                           Near ${address.landmark}
                       </p>`

                    : ""
            }


            <p>

                ${address.city},
                ${address.state}
                - ${address.pincode}

            </p>


            <p>

                📞 ${address.mobile}

            </p>


        </article>

    `;

}


/* ==================================================
   TOAST MESSAGE
================================================== */

function showToast(message) {

    const oldToast =
        document.querySelector(
            ".toast-message"
        );


    if (oldToast) {

        oldToast.remove();

    }


    const toast =
        document.createElement(
            "div"
        );


    toast.className =
        "toast-message";


    toast.textContent =
        "✓ " + message;


    document.body.appendChild(
        toast
    );


    setTimeout(
        function () {

            toast.classList.add(
                "show"
            );

        },
        10
    );


    setTimeout(
        function () {

            toast.classList.remove(
                "show"
            );


            setTimeout(
                function () {

                    toast.remove();

                },
                300
            );

        },
        2200
    );

}


/* ==================================================
   INITIALIZE WEBSITE
================================================== */

document.addEventListener(

    "DOMContentLoaded",

    function () {


        updateCartCount();


        displayProducts();


        displayCart();


        setupSignup();


        setupLogin();


        setupTracking();


        setupAddress();


        const searchInput =
            document.getElementById(
                "product-search"
            );


        const categoryFilter =
            document.getElementById(
                "category-filter"
            );


        if (searchInput) {

            searchInput.addEventListener(

                "input",

                filterProductList

            );

        }


        if (categoryFilter) {

            categoryFilter.addEventListener(

                "change",

                filterProductList

            );

        }


    }

);
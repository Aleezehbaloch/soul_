document.currentScript.insertAdjacentHTML("beforebegin", `
  <div class="announcement-bar">A little treat for you — free delivery on orders over Rs. 5,000 <span>♡</span></div>
  <header class="site-header">
    <nav class="navbar navbar-expand-lg container" aria-label="Main navigation">
      <a class="navbar-brand soul-logo" href="index.html">soul<span>.</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#soulNav" aria-controls="soulNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="soulNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item home-nav-item"><a class="nav-link" href="index.html">Home</a></li>
          <li class="nav-item new-in-nav-item">
            <button class="nav-link new-in-nav-toggle" type="button" aria-expanded="false" aria-controls="newInMegaMenu">
              New in <i class="bi bi-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="new-in-mega-menu" id="newInMegaMenu" aria-label="New arrivals">
              <div class="shop-all-categories">
                <h2>Shop By Category</h2>
                <a href="shop.html">New Arrivals</a>
                <a href="shop.html">Everyday in Colour</a>
                <a href="shop.html">Soft Statements</a>
                <a class="shop-all-view-all" href="shop.html">Explore New In <i class="bi bi-arrow-right" aria-hidden="true"></i></a>
              </div>
              <a class="shop-all-hero new-in-hero" id="new-in-hero" href="shop.html" aria-label="Explore New In">
                <img src="assets/new-in-blue-print-front.png" alt="New arrival outfit" loading="lazy">
              </a>
              <div class="shop-all-featured">
                <h2>Explore More</h2>
                <div class="shop-all-feature-list" id="new-in-products" aria-label="New arrival styles"></div>
              </div>
            </div>
          </li>
          <li class="nav-item women-nav-item">
            <button class="nav-link women-nav-toggle" type="button" aria-expanded="false" aria-controls="womenMegaMenu">
              Women <i class="bi bi-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="women-mega-menu" id="womenMegaMenu" aria-label="Women's latest styles">
              <div class="shop-all-categories">
                <h2>Shop By Category</h2>
                <a href="shop.html">Embroidered Sets</a>
                <a href="shop.html">Co-ord Sets</a>
                <a href="shop.html">Statement Suits</a>
                <a class="shop-all-view-all" href="shop.html">Explore Women <i class="bi bi-arrow-right" aria-hidden="true"></i></a>
              </div>
              <a class="shop-all-hero women-hero" id="women-hero" href="shop.html" aria-label="Explore Women's Styles">
                <img src="assets/women-emerald-rose-front.png" alt="Women's embroidered outfit" loading="lazy">
              </a>
              <div class="shop-all-featured">
                <h2>Explore More</h2>
                <div class="shop-all-feature-list" id="women-products" aria-label="Women's styles"></div>
              </div>
            </div>
          </li>
          <li class="nav-item bridal-nav-item">
            <button class="nav-link bridal-nav-toggle" type="button" aria-expanded="false" aria-controls="bridalMegaMenu">
              Bridals <i class="bi bi-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="bridal-mega-menu" id="bridalMegaMenu" aria-label="Bridal collections">
              <div class="bridal-mega-categories">
                <h2>Shop By Category</h2>
                <a href="bridals.html">Bridal Couture</a>
                <a href="bridals.html">Nikkah Ensembles</a>
                <a href="bridals.html">Mehndi Muse</a>
                <a href="bridals.html">Pastel Splendour</a>
                <a href="bridals.html">The Quintessential Red</a>
                <a href="bridals.html">Bridal Consultation</a>
                <a href="bridals.html">In Season</a>
                <a class="bridal-mega-all" href="bridals.html">View all bridals <i class="bi bi-arrow-right" aria-hidden="true"></i></a>
              </div>
              <a class="bridal-mega-hero" href="bridals.html" aria-label="Explore the bridal collection">
                <img src="assets/bridal-look-1.png" alt="Bride in an ivory embroidered bridal ensemble" loading="lazy">
              </a>
              <div class="bridal-mega-featured">
                <h2>Explore More</h2>
                <a href="bridals.html" class="bridal-mega-feature">
                  <img src="assets/bridal-zareen-front.png" alt="" loading="lazy">
                  <span><strong>The Quintessential Red</strong><small>A tribute to bridal grandeur, reimagined with signature detail.</small></span>
                </a>
                <a href="bridals.html" class="bridal-mega-feature">
                  <img src="assets/yasha-front.png" alt="" loading="lazy">
                  <span><strong>Pastel Splendour</strong><small>Soft hues that evoke romance.</small></span>
                </a>
                <a href="bridals.html" class="bridal-mega-feature">
                  <img src="assets/bridal-mehr-front.png" alt="" loading="lazy">
                  <span><strong>Mehndi Muse</strong><small>Vibrant hues for joyful celebrations.</small></span>
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item shop-all-nav-item">
            <div class="shop-all-nav-controls">
              <a class="nav-link shop-all-nav-link" href="shop.html">Shop all</a>
              <button class="shop-all-nav-toggle" type="button" aria-label="Open Shop All menu" aria-expanded="false" aria-controls="shopAllMegaMenu">
                <i class="bi bi-chevron-down" aria-hidden="true"></i>
              </button>
            </div>
            <div class="shop-all-mega-menu" id="shopAllMegaMenu" aria-label="Explore all collections">
              <div class="shop-all-categories">
                <h2>Shop By Category</h2>
                <a href="shop.html#shop-all-products">The Curated Edit</a>
                <a href="shop.html#shop-all-kids-products">Little Looks, Made with Love</a>
                <a href="shop.html#shop-all-products">New Arrivals</a>
                <a class="shop-all-view-all" href="shop.html">Explore all collections <i class="bi bi-arrow-right" aria-hidden="true"></i></a>
              </div>
              <a class="shop-all-hero" href="shop.html#shop-all-products" aria-label="Explore The Curated Edit">
                <img src="assets/arrival-neel-front.png" alt="Model wearing a colourful new arrival" loading="lazy">
              </a>
              <div class="shop-all-featured">
                <h2>Explore More</h2>
                <a class="shop-all-feature" href="shop.html#shop-all-products">
                  <img src="assets/daydream-front.png" alt="" loading="lazy">
                  <span><strong>The Curated Edit</strong><small>Thoughtful pieces for your everyday and beyond.</small></span>
                </a>
                <a class="shop-all-feature" href="shop.html#shop-all-kids-products">
                  <img src="assets/little-look-01-front.png" alt="" loading="lazy">
                  <span><strong>Little Looks, Made with Love</strong><small>Thoughtful outfits for the little ones in your life.</small></span>
                </a>
                <a class="shop-all-feature" href="shop.html#shop-all-products">
                  <img src="assets/arrival-gulabi-front.png" alt="" loading="lazy">
                  <span><strong>New Arrivals</strong><small>Fresh styles, thoughtfully made for your everyday.</small></span>
                </a>
              </div>
            </div>
          </li>
        </ul>
        <div class="header-actions">
          <form class="header-search" action="index.html#shop" role="search">
            <label class="visually-hidden" for="headerSearch">Search products</label>
            <input id="headerSearch" type="search" name="search" placeholder="Search products">
            <button class="search-toggle" type="button" aria-label="Open product search" aria-expanded="false"><i class="bi bi-search"></i></button>
          </form>
          <a class="cart-link" href="cart.html" aria-label="Shopping bag"><i class="bi bi-bag"></i><span>Bag</span><b class="cart-count" data-cart-count>0</b></a>
        </div>
      </div>
    </nav>
  </header>
`);

function setupMegaMenu(itemSelector, toggleSelector) {
  const navItem = document.querySelector(itemSelector);
  const navToggle = navItem?.querySelector(toggleSelector);

  if (!navItem || !navToggle) return;

  const closeMenu = () => {
    navItem.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navItem.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    if (!navItem.contains(event.target)) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navItem.classList.contains("is-open")) {
      closeMenu();
      navToggle.focus();
    }
  });
}

setupMegaMenu(".bridal-nav-item", ".bridal-nav-toggle");
setupMegaMenu(".new-in-nav-item", ".new-in-nav-toggle");
setupMegaMenu(".women-nav-item", ".women-nav-toggle");
setupMegaMenu(".shop-all-nav-item", ".shop-all-nav-toggle");

const navbarItems = document.querySelector(".navbar-nav");
[
  ".home-nav-item",
  ".shop-all-nav-item",
  ".new-in-nav-item",
  ".bridal-nav-item",
  ".women-nav-item",
].forEach((selector) => navbarItems.appendChild(navbarItems.querySelector(selector)));

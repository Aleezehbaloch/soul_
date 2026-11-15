// Add kids' items here with category: "Kids" to show them in the Kids Edit.
const products = [
  {
    id: "daydream-dress",
    name: "Daydream Midi Dress",
    category: "Easy does it",
    price: 5200,
    oldPrice: 6500,
    badge: "A little favourite",
    color: "Lavender",
    image: "assets/daydream-front.png",
    backImage: "assets/daydream-detail.png",
    description: "The dress that makes getting ready feel like the fun part. A floaty silhouette, soft feel, and just-right details for coffee dates, sunny strolls, and everything in between."
  },
  {
    id: "cloud-nine-shirt",
    name: "Cloud Nine Shirt",
    category: "Soft layers",
    price: 3800,
    oldPrice: null,
    badge: "New in",
    color: "Sky blue",
    image: "assets/cloud-nine-front.png",
    backImage: "assets/cloud-nine-detail.png",
    description: "Meet your new throw-on-and-go best friend. This easy, airy shirt brings a little sunshine to your everyday rotation and layers beautifully over absolutely everything."
  },
  {
    id: "main-character-top",
    name: "Main Character Top",
    category: "The fun one",
    price: 2900,
    oldPrice: null,
    badge: "",
    color: "Blush pink",
    image: "assets/main-character-front.png",
    backImage: "assets/main-character-detail.png",
    description: "For days when the outfit is the plan. A flattering fit and a pop of feel-good colour make this top an instant mood-lifter, whether you dress it up or keep it casual."
  },
  {
    id: "weekend-wide-leg",
    name: "Weekend Wide-Leg Pants",
    category: "Off-duty energy",
    price: 4500,
    oldPrice: null,
    badge: "Best seller",
    color: "Lilac",
    image: "assets/weekend-wide-leg-front.png",
    backImage: "assets/weekend-wide-leg-detail.png",
    description: "Comfy enough for your slow mornings, cute enough for all your plans. These easy wide-leg pants are the definition of doing the most while feeling like you're doing the least."
  },
  {
    id: "haya-floral-kurta",
    name: "Haya Floral Kurta",
    category: "Printed favourites",
    price: 5900,
    oldPrice: null,
    badge: "New in",
    color: "Rose pink",
    image: "assets/haya-floral-front.png",
    backImage: "assets/haya-floral-detail.png",
    description: "A soft rose-pink floral kurta with an easy, flowy shape for everyday plans and dressed-up moments."
  },
  {
    id: "garden-floral-dress",
    name: "Garden Floral Dress",
    category: "Made for moments",
    price: 6200,
    oldPrice: null,
    badge: "New in",
    color: "Pink floral",
    image: "https://krutico.com/cdn/shop/files/337.jpg?v=1783549178&width=900",
    description: "A cheerful floral dress with thoughtful details and a relaxed fit that feels lovely all day."
  },
  {
    id: "rangrez-kurta-set",
    name: "Rangrez Printed Kurta Set",
    category: "Colourful favourites",
    price: 5900,
    oldPrice: null,
    badge: "New in",
    color: "Marigold, teal and ivory",
    image: "assets/arrival-sunehri-front.png",
    backImage: "assets/arrival-sunehri-detail.png",
    description: "A vibrant marigold kurta with playful multicolour embroidery, paired with an easy ivory trouser."
  },
  {
    id: "gulabi-embroidered-set",
    name: "Gulabi Embroidered Set",
    category: "Printed favourites",
    price: 5200,
    oldPrice: null,
    badge: "New in",
    color: "Berry pink and ivory",
    image: "assets/arrival-gulabi-front.png",
    backImage: "assets/arrival-gulabi-detail.png",
    description: "A berry-pink embroidered kurta and ivory trousers, finished with delicate floral details."
  },
  {
    id: "sahar-ombre-kaftan",
    name: "Sahar Ombre Kaftan",
    category: "Soft statements",
    price: 6200,
    oldPrice: null,
    badge: "New in",
    color: "Navy and soft grey",
    image: "assets/arrival-sahar-front.png",
    backImage: "assets/arrival-sahar-detail.png",
    description: "A relaxed ombre kaftan in deep navy and soft grey, styled with a coordinating floral dupatta."
  },
  {
    id: "neel-floral-suit",
    name: "Neel Floral Suit",
    category: "Everyday in colour",
    price: 5500,
    oldPrice: null,
    badge: "New in",
    color: "Deep teal and rose",
    image: "assets/arrival-neel-front.png",
    backImage: "assets/arrival-neel-detail.png",
    description: "A deep-teal kurta set with colourful floral accents and a contrasting rose-pink dupatta."
  },
  {
    id: "midnight-teal-kaftan",
    name: "Midnight Teal Embroidered Kaftan",
    category: "New In",
    showInWomenMenu: true,
    price: null,
    badge: "New in",
    color: "Midnight teal and antique gold",
    image: "assets/new-in-teal-front.png",
    backImage: "assets/new-in-teal-detail.png",
    description: "A flowing midnight-teal kaftan with intricate antique-gold embroidery and a coordinating embellished hem."
  },
  {
    id: "noir-embroidered-set",
    name: "Noir Embroidered Set",
    category: "New In",
    showInWomenMenu: true,
    price: null,
    badge: "New in",
    color: "Black and antique gold",
    image: "assets/new-in-noir-front.png",
    backImage: "assets/new-in-noir-detail.png",
    description: "A striking black ensemble finished with ornate antique-gold embroidery and statement details."
  },
  {
    id: "amethyst-embroidered-suit",
    name: "Amethyst Embroidered Suit",
    category: "New In",
    showInWomenMenu: true,
    price: null,
    badge: "New in",
    color: "Amethyst and lilac",
    image: "assets/new-in-amethyst-front.png",
    backImage: "assets/new-in-amethyst-detail.png",
    description: "A rich amethyst suit with delicate floral embroidery, paired with a soft lilac dupatta."
  },
  {
    id: "meadow-print-coord-set",
    name: "Meadow Print Co-ord Set",
    category: "New In",
    price: null,
    badge: "New in",
    color: "Ivory, coral and sage",
    image: "assets/new-in-pastel-print-front.png",
    backImage: "assets/new-in-pastel-print-detail.png",
    description: "A relaxed ivory co-ord set with playful coral, yellow and sage botanical prints."
  },
  {
    id: "emerald-rose-embroidered-kaftan",
    name: "Emerald Rose Embroidered Kaftan",
    category: "Women",
    showInWomenMenu: true,
    price: null,
    badge: "Women",
    color: "Emerald and rose",
    image: "assets/women-emerald-rose-front.png",
    backImage: "assets/women-emerald-rose-detail.png",
    description: "An emerald kaftan featuring intricate rose-toned embroidery across the bodice, sleeves and hem."
  },
  {
    id: "forest-bloom-embroidered-suit",
    name: "Forest Bloom Embroidered Suit",
    category: "Women",
    showInWomenMenu: true,
    price: null,
    badge: "Women",
    color: "Deep green with multicolor embroidery",
    image: "assets/women-forest-bloom-front.png",
    backImage: "assets/women-forest-bloom-detail.png",
    description: "A deep-green embroidered suit with vivid floral accents and a colorful printed dupatta."
  },
  {
    id: "ruby-satin-jacket-set",
    name: "Ruby Satin Jacket Set",
    category: "Women",
    showInWomenMenu: true,
    price: null,
    badge: "Women",
    color: "Ruby and silver",
    image: "assets/women-ruby-set-front.png",
    backImage: "assets/women-ruby-set-detail.png",
    description: "A ruby satin outfit with a tailored jacket, relaxed trousers and delicate silver embellishment."
  },
  {
    id: "black-floral-embroidered-kaftan",
    name: "Black Floral Embroidered Kaftan",
    category: "Women",
    showInWomenMenu: true,
    price: null,
    badge: "Women",
    color: "Black with pastel embroidery",
    image: "assets/women-black-embroidered-kaftan-front.png",
    backImage: "assets/women-black-embroidered-kaftan-detail.png",
    description: "A flowing black kaftan with pastel floral embroidery and sparkling details."
  },
  {
    id: "cobalt-blue-embroidered-suit",
    name: "Cobalt Blue Embroidered Suit",
    category: "Women",
    showInWomenMenu: true,
    price: null,
    badge: "Women",
    color: "Ivory and cobalt blue",
    image: "assets/women-cobalt-embroidered-suit-front.png",
    backImage: "assets/women-cobalt-embroidered-suit-detail.png",
    description: "An ivory embroidered suit with cobalt-blue trousers and a coordinating dupatta."
  },
  {
    id: "azure-abstract-print-set",
    name: "Azure Abstract Print Set",
    category: "New In",
    showInHeaderMenus: true,
    price: null,
    badge: "New in",
    color: "Ocean blue, mint and ivory",
    image: "assets/new-in-blue-print-front.png",
    backImage: "assets/new-in-blue-print-detail.png",
    description: "A vibrant blue abstract-print shirt paired with relaxed black wide-leg trousers."
  },
  {
    id: "blush-linen-coord-set",
    name: "Blush Linen Co-ord Set",
    category: "New In",
    showInHeaderMenus: true,
    price: null,
    badge: "New in",
    color: "Dusty rose",
    image: "assets/new-in-blush-set-front.png",
    backImage: "assets/new-in-blush-set-back.png",
    description: "A softly textured blush co-ord featuring an easy longline top and matching wide-leg trousers."
  },
  {
    id: "sunny-floral-suit",
    name: "Sunny Floral Suit",
    category: "New In",
    showInHeaderMenus: true,
    price: null,
    badge: "New in",
    color: "Sunshine yellow and teal",
    image: "assets/new-in-yellow-floral-front.png",
    backImage: "assets/new-in-yellow-floral-detail.png",
    description: "A bright yellow floral suit with intricate teal embroidery and a relaxed matching trouser."
  },
  {
    id: "ivory-embroidered-trousers",
    name: "Ivory Embroidered Trousers",
    category: "New In",
    showInHeaderMenus: true,
    price: null,
    badge: "New in",
    color: "Ivory",
    image: "assets/new-in-ivory-trouser-detail.png",
    description: "Ivory trousers finished with delicate embroidered detailing at the hem."
  },
  {
    id: "mauve-embroidered-coord-set",
    name: "Mauve Embroidered Co-ord Set",
    category: "New In",
    showInHeaderMenus: true,
    price: null,
    badge: "New in",
    color: "Mauve and multicolor embroidery",
    image: "assets/new-in-mauve-set-front.png",
    backImage: "assets/new-in-mauve-set-detail.png",
    description: "A relaxed mauve co-ord set with colorful embroidery along the sleeves and hem."
  },
  {
    id: "red-floral-embroidered-suit",
    name: "Red Floral Embroidered Suit",
    category: "New In",
    showInHeaderMenus: true,
    price: null,
    badge: "New in",
    color: "Red and ivory",
    image: "assets/new-in-red-embroidered-set-front.png",
    backImage: "assets/new-in-red-embroidered-set-detail.png",
    description: "A red embroidered suit with statement floral cuffs and a coordinating dupatta."
  },
  {
    id: "cobalt-embroidered-coord-set",
    name: "Cobalt Embroidered Co-ord Set",
    category: "New In",
    showInHeaderMenus: true,
    price: null,
    badge: "New in",
    color: "Cobalt blue",
    image: "assets/new-in-cobalt-set-front.png",
    backImage: "assets/new-in-cobalt-set-detail.png",
    description: "A cobalt-blue co-ord set with delicate embroidery and a coordinating dupatta."
  },
  {
    id: "ivory-paisley-embroidered-suit",
    name: "Ivory Paisley Embroidered Suit",
    category: "New In",
    showInHeaderMenus: true,
    price: null,
    badge: "New in",
    color: "Ivory and burgundy",
    image: "assets/new-in-ivory-paisley-set-front.png",
    backImage: "assets/new-in-ivory-paisley-set-detail.png",
    description: "An ivory suit decorated with subtle paisley motifs and burgundy embroidery."
  }
];

const bridalProducts = [
  {
    id: "bridal-ayra",
    name: "AYRA",
    category: "BRIDALS",
    color: "Burgundy and antique gold",
    image: "assets/bridal-ayra-front.png",
    backImage: "assets/bridal-ayra-detail.png",
    description: "A richly embroidered burgundy bridal look with antique-gold embellishments and a statement lehenga."
  },
  {
    id: "bridal-yasha",
    name: "YASHA",
    category: "BRIDALS",
    color: "Ivory and blush pink",
    image: "assets/yasha-front.png",
    backImage: "assets/yasha-detail.png",
    description: "An ivory bridal ensemble with blush-pink embroidery and a delicate embellished dupatta."
  },
  {
    id: "bridal-nisha",
    name: "NISHA",
    category: "BRIDALS",
    color: "Ivory",
    image: "assets/nisha-front.png",
    backImage: "assets/nisha-detail.png",
    description: "An ivory bridal ensemble with intricate embroidery and delicate pearl details."
  },
  {
    id: "bridal-ifza",
    name: "IFZA",
    category: "BRIDALS",
    color: "Ivory and antique gold",
    image: "assets/ifza-front.png",
    backImage: "assets/ifza-detail.png",
    description: "An ivory bridal look with antique-gold embroidery and a flowing embellished dupatta."
  },
  {
    id: "bridal-mahnoor",
    name: "MAHNOOR",
    category: "BRIDALS",
    color: "Blush pink and antique gold",
    image: "assets/bridal-mahnoor-front.png",
    backImage: "assets/bridal-mahnoor-back.png",
    description: "A blush-pink bridal ensemble with intricate antique-gold embroidery and a flowing embellished dupatta."
  },
  {
    id: "bridal-zareen",
    name: "ZAREEN",
    category: "BRIDALS",
    color: "Champagne and antique gold",
    image: "assets/bridal-zareen-front.png",
    backImage: "assets/bridal-zareen-back.png",
    description: "A champagne bridal ensemble with delicate gold embroidery and a graceful, flowing silhouette."
  },
  {
    id: "bridal-mehr",
    name: "MEHR",
    category: "BRIDALS",
    color: "Deep burgundy and gold",
    image: "assets/bridal-mehr-front.png",
    backImage: "assets/bridal-mehr-detail.png",
    description: "A rich burgundy bridal look adorned with ornate gold embroidery and heirloom-inspired details."
  },
  {
    id: "bridal-noor",
    name: "NOOR",
    category: "BRIDALS",
    color: "Warm beige and gold",
    image: "assets/bridal-noor-front.png",
    backImage: "assets/bridal-noor-back.png",
    description: "A warm beige bridal ensemble with intricate goldwork, a flowing dupatta, and a softly draped silhouette."
  },
  {
    id: "bridal-gul",
    name: "GUL",
    category: "BRIDALS",
    color: "Antique gold",
    image: "assets/bridal-gul-front.png",
    backImage: "assets/bridal-gul-back.png",
    description: "An antique-gold bridal ensemble featuring richly embroidered details and a statement dupatta."
  },
  {
    id: "bridal-araya",
    name: "ARAYA",
    category: "BRIDALS",
    color: "Ivory, blush and mint",
    image: "assets/bridal-araya-front.png",
    backImage: "assets/bridal-araya-detail.png",
    description: "An ivory bridal lehenga accented with blush and mint embroidery and a flowing embellished dupatta."
  }
];

const currency = new Intl.NumberFormat("en-PK", {
  style: "currency",
  currency: "PKR",
  maximumFractionDigits: 0
});

const shopWhatsAppNumber = "923183325984";

function formatPrice(price) {
  return currency.format(price).replace("PKR", "Rs.");
}

function productCard(product) {
  const productUrl = `product.html?id=${encodeURIComponent(product.id)}`;
  return collectionCardMarkup(product, {
    kind: "new-arrivals",
    productUrl,
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "NEW",
    footer: product.price === null ? "Price on request" : formatPrice(product.price),
    action: product.price === null ? "Inquire" : "Shop now"
  });
}

function kidsProductCard(product) {
  const productUrl = `product.html?id=${encodeURIComponent(product.id)}`;
  return collectionCardMarkup(product, {
    kind: "kids",
    productUrl,
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    footer: formatPrice(product.price),
    action: "Shop now"
  });
}

const littleLooks = [
  { id: "little-look-01", name: "Little look 01", category: "Little Looks", price: null, image: "assets/little-look-01-front.png", detailImage: "assets/little-look-01-detail.png", description: "Blue floral kaftan against a pink backdrop" },
  { id: "little-look-02", name: "Little look 02", category: "Little Looks", price: null, image: "assets/little-look-02-front.png", detailImage: "assets/little-look-02-detail.png", description: "Ivory sari with delicate green floral detailing" },
  { id: "little-look-03", name: "Little look 03", category: "Little Looks", price: null, image: "assets/little-look-03-front.png", detailImage: "assets/little-look-03-detail.png", description: "Black floral tunic with ivory trousers" },
  { id: "little-look-04", name: "Little look 04", category: "Little Looks", price: null, image: "assets/little-look-04-front.png", detailImage: "assets/little-look-04-detail.png", description: "Navy floral outfit with a printed dupatta" },
  { id: "little-look-05", name: "Little look 05", category: "Little Looks", price: null, image: "assets/little-look-05-front.png", detailImage: "assets/little-look-05-detail.png", description: "Ivory outfit with pale blue embroidery" }
];

function findProductById(id) {
  return products.find((product) => product.id === id) || littleLooks.find((look) => look.id === id);
}

function kidsPlaceholderCard(look, index) {
  const number = String(index + 1).padStart(2, "0");
  const lookName = `Little look ${number}`;
  const productUrl = `product.html?id=${encodeURIComponent(look.id)}`;
  const sizes = ["XS", "S", "M", "L", "XL"];
  const sizeLinks = sizes.map((size) => {
    return `<a class="collection-card-size" href="${productUrl}&size=${encodeURIComponent(size)}" aria-label="Shop ${lookName}, size ${size}">${size}</a>`;
  }).join("");
  return `
    <article class="collection-card kids-placeholder-card has-alternate-image" data-gallery-kind="little-look" aria-label="${lookName}">
      <div class="collection-card-image kids-placeholder-image">
        <img class="collection-card-primary-image" src="${look.image}" alt="${look.description}" loading="lazy">
        <img class="collection-card-alternate-image" src="${look.detailImage}" alt="" aria-hidden="true" loading="lazy">
        <button class="collection-card-photo-button" type="button" aria-label="Show sizes for ${lookName}" aria-expanded="false"></button>
        <div class="collection-card-sizes">${sizeLinks}</div>
      </div>
      <div class="collection-card-info">
        <p class="collection-card-category">Made to order</p>
        <span class="collection-card-title">${lookName}</span>
        <div class="collection-card-footer"><span>Price on request</span><a href="${productUrl}" aria-label="Shop ${lookName}">Shop now <i class="bi bi-arrow-up-right" aria-hidden="true"></i></a></div>
      </div>
    </article>`;
}

function relatedProductCard(product, index) {
  const productUrl = `product.html?id=${encodeURIComponent(product.id)}`;
  const oldPrice = product.oldPrice ? `<del>${formatPrice(product.oldPrice)}</del>` : "";
  const price = product.price === null ? "Price on request" : formatPrice(product.price);
  return `
    <div class="col-12 col-sm-6 col-lg-4" data-aos="fade-up" data-aos-delay="${(index % 3) * 70}">
      <article class="product-card">
        <div class="product-image-wrap">
          <a class="product-image-link" href="${productUrl}" aria-label="View ${product.name}">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <span class="product-badge">${product.badge || "NEW"}</span>
            <span class="quick-view">Meet your new fave <i class="bi bi-arrow-up-right"></i></span>
          </a>
        </div>
        <div class="product-info">
          <div class="product-meta"><span>${product.category}</span><span>Women</span></div>
          <a class="product-title" href="${productUrl}">${product.name}</a>
          <p class="product-description">${product.description}</p>
          <div class="product-card-footer"><div class="product-price">${price} ${oldPrice}</div><a class="product-card-link" href="${productUrl}" aria-label="View ${product.name}"><i class="bi bi-arrow-up-right"></i></a></div>
        </div>
      </article>
    </div>`;
}

function bridalCard(product) {
  const productUrl = `product.html?id=${encodeURIComponent(product.id)}`;
  return collectionCardMarkup(product, {
    kind: "bridals",
    productUrl,
    sizes: ["XS", "S", "M", "L", "XL"],
    footer: "Made to order",
    action: "Inquire"
  });
}

function collectionCardMarkup(product, { kind, productUrl, sizes, badge, footer, action }) {
  const sizeLinks = sizes.map((size) => {
    const url = `${productUrl}&size=${encodeURIComponent(size)}`;
    return `<a class="collection-card-size" href="${url}">${size}</a>`;
  }).join("");
  const sizePanel = `<div class="collection-card-sizes">${sizeLinks}</div>`;
  const overlaySizePanel = sizePanel;
  const belowImageSizePanel = "";
  return `
    <article class="collection-card${product.backImage ? " has-alternate-image" : ""}" data-gallery-kind="${kind}">
      <div class="collection-card-image">
        <img class="collection-card-primary-image" src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.backImage ? `<img class="collection-card-alternate-image" src="${product.backImage}" alt="${product.name} detail view" aria-hidden="true" loading="lazy">` : ""}
        ${badge ? `<span class="collection-card-badge">${badge}</span>` : ""}
        <button class="collection-card-photo-button" type="button" aria-label="Show sizes for ${product.name}" aria-expanded="false"></button>
        ${overlaySizePanel}
      </div>
      ${belowImageSizePanel}
      <div class="collection-card-info">
        <p class="collection-card-category">${product.category}</p>
        <a class="collection-card-title" href="${productUrl}">${product.name}</a>
        <div class="collection-card-footer"><span>${footer}</span><a href="${productUrl}">${action} <i class="bi bi-arrow-up-right"></i></a></div>
      </div>
    </article>`;
}

function renderBridalCards() {
  const container = document.getElementById("bridal-products");
  if (container) container.innerHTML = bridalProducts.map(bridalCard).join("");
}

function getCart() {
  try {
    const stored = JSON.parse(localStorage.getItem("soul-cart") || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch (error) {
    console.error("Could not read the shopping bag from local storage.", error);
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("soul-cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = getCart().reduce((total, item) => total + item.quantity, 0);
  document.querySelectorAll("[data-cart-count]").forEach((element) => {
    element.textContent = count;
  });
}

function addToCart(product, size, quantity) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === product.id && item.size === size);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ id: product.id, size, quantity });
  }
  saveCart(cart);
}

function renderProductDetail() {
  const container = document.getElementById("product-detail");
  if (!container) return;

  const id = new URLSearchParams(window.location.search).get("id");
  const bridalProduct = bridalProducts.find((item) => item.id === id);
  if (bridalProduct) {
    renderBridalProductDetail(container, bridalProduct);
    return;
  }

  const littleLook = littleLooks.find((item) => item.id === id);
  const product = products.find((item) => item.id === id) || littleLook;
  if (!product) {
    container.innerHTML = `<div class="empty-state"><span class="empty-icon">✿</span><h2>We couldn't find that piece.</h2><p>It may have moved on to its next adventure.</p><a class="btn btn-soul" href="index.html#shop">Back to the collection</a></div>`;
    return;
  }

  const isLittleLook = Boolean(littleLook);
  document.title = `${product.name} — Soul`;
  document.getElementById("product-breadcrumb").textContent = product.name;
  const availableSizes = isLittleLook
    ? ["XS", "S", "M", "L", "XL"]
    : product.category.toLowerCase() === "kids"
    ? ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"]
    : ["XS", "S", "M", "L", "XL"];
  const requestedSize = new URLSearchParams(window.location.search).get("size");
  const selectedSize = availableSizes.includes(requestedSize) ? requestedSize : availableSizes[Math.floor(availableSizes.length / 2)];
  const oldPrice = product.oldPrice ? `<del>${formatPrice(product.oldPrice)}</del>` : "";
  const price = product.price === null ? "Price on request" : formatPrice(product.price);
  const colorNote = product.color ? `<div class="color-note"><span class="color-swatch"></span> Colour: <b>${product.color}</b></div>` : "";
  const deliveryPerk = product.price === null ? "Price & delivery confirmed on WhatsApp" : "Free delivery over Rs. 5,000";
  container.innerHTML = `
    <div class="product-detail-image" data-aos="fade-right">
      <img src="${product.image}" alt="${product.name}">
      <span class="product-badge">${product.badge || "Made for your moments"}</span>
    </div>
    <div class="product-detail-copy" data-aos="fade-left">
      <span class="eyebrow">${product.category}</span>
      <h1>${product.name}</h1>
      <div class="detail-rating"><span aria-label="Rated 5 out of 5">★★★★★</span> <small>Made to be loved</small></div>
      <div class="detail-price">${price} ${oldPrice}</div>
      <p class="detail-description">${product.description}</p>
      ${colorNote}
      <fieldset class="size-picker">
        <legend>Choose your size <a href="#size-guide">Size guide</a></legend>
        <div class="size-options">${availableSizes.map((size) => `<label><input type="radio" name="size" value="${size}" ${size === selectedSize ? "checked" : ""}><span>${size}</span></label>`).join("")}</div>
      </fieldset>
      <div class="detail-actions">
        <div class="quantity-picker" aria-label="Quantity"><button type="button" data-quantity="-1" aria-label="Decrease quantity">−</button><output id="quantity-value">1</output><button type="button" data-quantity="1" aria-label="Increase quantity">+</button></div>
        <button class="btn btn-soul add-to-cart" type="button"><i class="bi bi-bag-plus"></i> Add to bag</button>
      </div>
      <p class="add-message" aria-live="polite"></p>
      <div class="product-perks"><span><i class="bi bi-box-seam"></i> Carefully packed with love</span><span><i class="bi bi-arrow-repeat"></i> Easy 7-day returns</span><span><i class="bi bi-truck"></i> ${deliveryPerk}</span></div>
      <details class="product-description-detail" id="size-guide"><summary>Size guide & care <i class="bi bi-plus"></i></summary><p>Our pieces are designed for a relaxed, comfortable fit. If you prefer a closer fit, consider sizing down. ${product.description} Please follow the care instructions on the garment label.</p></details>
    </div>`;

  let quantity = 1;
  container.querySelectorAll("[data-quantity]").forEach((button) => {
    button.addEventListener("click", () => {
      quantity = Math.max(1, quantity + Number(button.dataset.quantity));
      container.querySelector("#quantity-value").textContent = quantity;
    });
  });
  container.querySelector(".add-to-cart").addEventListener("click", () => {
    const size = container.querySelector('input[name="size"]:checked').value;
    addToCart(product, size, quantity);
    const message = container.querySelector(".add-message");
    message.textContent = `${product.name}, size ${size}, added to your bag ♡`;
    message.classList.add("is-visible");
  });

  const related = document.getElementById("related-products");
  if (related) {
    if (isLittleLook) {
      related.closest(".related-products").hidden = true;
    } else {
      related.innerHTML = products.filter((item) => item.id !== product.id && (product.category.toLowerCase() === "kids" ? item.category.toLowerCase() === "kids" : item.category.toLowerCase() !== "kids")).slice(0, 3).map(relatedProductCard).join("");
    }
  }
}

function renderBridalProductDetail(container, product) {
  document.title = `${product.name} — Bridal collection | Soul`;
  document.getElementById("product-breadcrumb").textContent = product.name;
  const bridalBreadcrumb = document.querySelector('.breadcrumbs a[href*="#shop"]');
  if (bridalBreadcrumb) {
    bridalBreadcrumb.href = "index.html#bridal";
    bridalBreadcrumb.textContent = "Bridals";
  }
  document.querySelector(".related-products")?.setAttribute("hidden", "");
  const images = [
    { src: product.image, label: `${product.name} front view` },
    ...(product.backImage ? [{ src: product.backImage, label: `${product.name} back view` }] : [])
  ];
  container.innerHTML = `
    <div class="bridal-detail-gallery" aria-label="${product.name} product photos">
      ${images.map((image) => `<figure><img src="${image.src}" alt="${image.label}"></figure>`).join("")}
    </div>
    <div class="product-detail-copy bridal-detail-copy">
      <span class="eyebrow">${product.category}</span>
      <h1>${product.name}</h1>
      <p class="bridal-detail-inquiry">Inquire on WhatsApp</p>
      <p class="detail-description">${product.description}</p>
      <div class="color-note"><span class="color-swatch"></span> Style: <b>${product.color}</b></div>
      <fieldset class="size-picker bridal-size-picker">
        <legend>Choose your size</legend>
        <div class="size-options">${["XS", "S", "M", "ML", "L", "XL", "CUSTOMIZED", "ONE SIZE"].map((size) => `<label><input type="radio" name="bridal-size" value="${size}" ${size === new URLSearchParams(window.location.search).get("size") ? "checked" : ""}><span>${size}</span></label>`).join("")}</div>
      </fieldset>
      <a class="btn btn-soul bridal-order-link" href="https://wa.me/${shopWhatsAppNumber}" target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp"></i> Inquire on WhatsApp</a>
      <p class="bridal-size-message" aria-live="polite">Select a size to include it in your inquiry.</p>
      <div class="product-perks"><span><i class="bi bi-box-seam"></i> Made for your special moments</span><span><i class="bi bi-truck"></i> Delivery details confirmed on WhatsApp</span></div>
    </div>`;

  const orderLink = container.querySelector(".bridal-order-link");
  const sizeMessage = container.querySelector(".bridal-size-message");
  orderLink.addEventListener("click", (event) => {
    const selectedSize = container.querySelector('input[name="bridal-size"]:checked');
    if (selectedSize) return;
    event.preventDefault();
    sizeMessage.textContent = "Please choose a size before sending your inquiry.";
    container.querySelector('input[name="bridal-size"]').focus();
  });
  container.querySelectorAll('input[name="bridal-size"]').forEach((input) => {
    input.addEventListener("change", () => {
      const message = `Assalam o Alaikum, I would like to inquire about ${product.name} bridal wear in size ${input.value}.`;
      orderLink.href = `https://wa.me/${shopWhatsAppNumber}?text=${encodeURIComponent(message)}`;
      sizeMessage.textContent = `Your inquiry will include size ${input.value}.`;
    });
  });
}

function setupBridalCardInteractions() {
  document.querySelectorAll(".bridal-product-image[data-back-image]").forEach((link) => {
    const image = link.querySelector("img");
    const frontImage = image?.src;
    const backImage = link.dataset.backImage;
    if (!image || !frontImage || !backImage) return;
    let lastPointerType = "";

    const showFront = () => {
      image.src = frontImage;
      link.dataset.showingBack = "false";
    };
    const showBack = () => {
      image.src = backImage;
      link.dataset.showingBack = "true";
    };
    link.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "mouse") showBack();
    });
    link.addEventListener("pointerdown", (event) => {
      lastPointerType = event.pointerType;
    });
    link.addEventListener("pointerleave", (event) => {
      if (event.pointerType === "mouse") showFront();
    });
    link.addEventListener("click", (event) => {
      if (lastPointerType !== "touch" || link.dataset.showingBack === "true") return;
      event.preventDefault();
      showBack();
    });
  });
}

function setupCollectionCardInteractions() {
  document.querySelectorAll(".collection-card[data-gallery-kind]").forEach((card) => {
    const photoButton = card.querySelector(".collection-card-photo-button");
    const sizePanel = card.querySelector(".collection-card-sizes");
    const primaryImage = card.querySelector(".collection-card-primary-image");
    const alternateImage = card.querySelector(".collection-card-alternate-image");
    if (!photoButton || !sizePanel) return;
    let lastPointerType = "";
    let revealedByTouch = false;

    photoButton.addEventListener("pointerdown", (event) => {
      lastPointerType = event.pointerType;
      revealedByTouch = event.pointerType === "touch" && !sizePanel.classList.contains("is-open");
      if (revealedByTouch) {
        sizePanel.classList.add("is-open");
        photoButton.setAttribute("aria-expanded", "true");
        if (primaryImage && alternateImage) {
          card.classList.add("is-showing-alternate");
          primaryImage.setAttribute("aria-hidden", "true");
          alternateImage.setAttribute("aria-hidden", "false");
        }
      }
    });

    photoButton.addEventListener("click", () => {
      if (lastPointerType === "touch" && revealedByTouch) {
        lastPointerType = "";
        revealedByTouch = false;
        return;
      }
      const isOpen = sizePanel.classList.toggle("is-open");
      photoButton.setAttribute("aria-expanded", String(isOpen));
      if (primaryImage && alternateImage && lastPointerType === "touch") {
        card.classList.toggle("is-showing-alternate", isOpen);
        primaryImage.setAttribute("aria-hidden", String(isOpen));
        alternateImage.setAttribute("aria-hidden", String(!isOpen));
      }
      lastPointerType = "";
    });
  });

  document.querySelectorAll(".collection-carousel").forEach((carousel) => {
    const rail = carousel.querySelector(".collection-rail");
    const previous = carousel.querySelector(".collection-carousel-prev");
    const next = carousel.querySelector(".collection-carousel-next");
    const toggle = carousel.querySelector(".collection-carousel-toggle");
    const progress = carousel.querySelector(".collection-carousel-progress span");
    if (!rail || !previous || !next || !toggle || !progress) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const label = rail.getAttribute("aria-label") || "collection";
    let autoplayEnabled = !reducedMotion;
    let interactionPaused = false;
    let autoAdvanceTimer = null;
    let resumeTimer = null;
    const stopAutoplay = () => {
      window.clearInterval(autoAdvanceTimer);
      autoAdvanceTimer = null;
    };
    const scrollOneCard = (direction, behavior) => {
      const card = rail.querySelector(".collection-card");
      if (!card) return;
      const gap = Number.parseFloat(getComputedStyle(rail).columnGap) || 0;
      rail.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior });
    };
    const updateProgress = () => {
      const maxScroll = rail.scrollWidth - rail.clientWidth;
      const travel = progress.parentElement.clientWidth - progress.clientWidth;
      const position = maxScroll > 0 ? Math.max(0, Math.min(1, rail.scrollLeft / maxScroll)) * travel : 0;
      progress.style.transform = `translateX(${position}px)`;
    };
    const startAutoplay = () => {
      stopAutoplay();
      if (!autoplayEnabled || interactionPaused || document.hidden || rail.scrollWidth <= rail.clientWidth) return;
      autoAdvanceTimer = window.setInterval(() => {
        const maxScroll = rail.scrollWidth - rail.clientWidth;
        if (rail.scrollLeft >= maxScroll - 2) {
          rail.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollOneCard(1, "smooth");
        }
      }, 3500);
    };
    const pauseForInteraction = () => {
      interactionPaused = true;
      window.clearTimeout(resumeTimer);
      stopAutoplay();
    };
    const resumeAfterInteraction = () => {
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => {
        interactionPaused = false;
        startAutoplay();
      }, 6000);
    };
    const updateToggle = () => {
      toggle.setAttribute("aria-pressed", String(autoplayEnabled));
      toggle.setAttribute("aria-label", `${autoplayEnabled ? "Pause" : "Play"} automatic movement of ${label}`);
      toggle.innerHTML = `<i class="bi ${autoplayEnabled ? "bi-pause-fill" : "bi-play-fill"}" aria-hidden="true"></i>`;
    };
    const moveManually = (direction) => {
      pauseForInteraction();
      scrollOneCard(direction, reducedMotion ? "auto" : "smooth");
      resumeAfterInteraction();
    };

    previous.addEventListener("click", () => moveManually(-1));
    next.addEventListener("click", () => moveManually(1));
    toggle.addEventListener("click", () => {
      autoplayEnabled = !autoplayEnabled;
      updateToggle();
      if (autoplayEnabled) startAutoplay();
      else stopAutoplay();
    });
    carousel.addEventListener("mouseenter", pauseForInteraction);
    carousel.addEventListener("mouseleave", () => {
      interactionPaused = false;
      startAutoplay();
    });
    carousel.addEventListener("focusin", pauseForInteraction);
    carousel.addEventListener("focusout", (event) => {
      if (!carousel.contains(event.relatedTarget)) resumeAfterInteraction();
    });
    rail.addEventListener("touchstart", pauseForInteraction, { passive: true });
    rail.addEventListener("touchend", resumeAfterInteraction, { passive: true });
    rail.addEventListener("scroll", updateProgress, { passive: true });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stopAutoplay();
      else startAutoplay();
    });
    window.addEventListener("resize", () => {
      startAutoplay();
      updateProgress();
    });
    updateToggle();
    updateProgress();
    startAutoplay();
  });
}

function renderCart() {
  const container = document.getElementById("cart-content");
  if (!container) return;

  const cart = getCart();
  const entries = cart.map((item) => ({
    ...item,
    product: findProductById(item.id)
  })).filter((item) => item.product);

  if (!entries.length) {
    container.innerHTML = `<div class="empty-state"><span class="empty-icon">♡</span><h2>Your bag is taking a little breather.</h2><p>Let's find something that feels like you.</p><a class="btn btn-soul" href="index.html#shop">Explore the collection <i class="bi bi-arrow-up-right"></i></a></div>`;
    return;
  }

  const hasUnpricedItems = entries.some((item) => item.product.price === null);
  const subtotal = entries.reduce((sum, item) => sum + (item.product.price === null ? 0 : item.product.price * item.quantity), 0);
  const subtotalLabel = hasUnpricedItems ? "Price on request" : formatPrice(subtotal);
  const deliveryLabel = hasUnpricedItems || subtotal < 5000 ? "Confirmed on WhatsApp" : "On us ♡";
  container.innerHTML = `
    <div class="cart-layout">
      <div class="cart-items">${entries.map((item) => {
        const productUrl = `product.html?id=${encodeURIComponent(item.product.id)}`;
        const itemPrice = item.product.price === null ? "Price on request" : formatPrice(item.product.price * item.quantity);
        return `
          <article class="cart-item">
            <a href="${productUrl}" class="cart-item-image"><img src="${item.product.image}" alt="${item.product.name}"></a>
            <div class="cart-item-info"><span class="eyebrow">${item.product.category}</span><a class="cart-item-name" href="${productUrl}">${item.product.name}</a><span>Size: ${item.size}</span><div class="cart-item-controls"><button type="button" data-cart-change="-1" data-id="${item.id}" data-size="${item.size}" aria-label="Decrease quantity">−</button><span>${item.quantity}</span><button type="button" data-cart-change="1" data-id="${item.id}" data-size="${item.size}" aria-label="Increase quantity">+</button><button type="button" class="remove-item" data-remove="${item.id}" data-size="${item.size}">Remove</button></div></div>
            <strong class="cart-item-price${item.product.price === null ? " is-price-on-request" : ""}">${itemPrice}</strong>
          </article>`;
      }).join("")}</div>
      <aside class="cart-summary"><h2>Your little total</h2><div><span>Subtotal</span><strong>${subtotalLabel}</strong></div><div><span>Delivery</span><span>${deliveryLabel}</span></div><p>We'll confirm product prices, delivery, and payment details with you on WhatsApp.</p><a class="btn btn-soul checkout-button" href="checkout.html">Continue to checkout <i class="bi bi-arrow-right"></i></a><a class="continue-shopping" href="index.html#shop"><i class="bi bi-arrow-left"></i> Keep looking</a></aside>
    </div>`;

  container.querySelectorAll("[data-cart-change]").forEach((button) => {
    button.addEventListener("click", () => {
      const next = getCart();
      const item = next.find((entry) => entry.id === button.dataset.id && entry.size === button.dataset.size);
      if (!item) return;
      item.quantity += Number(button.dataset.cartChange);
      saveCart(next.filter((entry) => entry.quantity > 0));
      renderCart();
    });
  });
  container.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      saveCart(getCart().filter((item) => !(item.id === button.dataset.remove && item.size === button.dataset.size)));
      renderCart();
    });
  });
}

function renderCheckout() {
  const container = document.getElementById("checkout-content");
  if (!container) return;

  const entries = getCart().map((item) => ({
    ...item,
    product: findProductById(item.id)
  })).filter((item) => item.product);

  if (!entries.length) {
    container.innerHTML = `<div class="empty-state"><span class="empty-icon">♡</span><h2>Your bag is taking a little breather.</h2><p>Add something you love before checking out.</p><a class="btn btn-soul" href="index.html#shop">Explore the collection <i class="bi bi-arrow-up-right"></i></a></div>`;
    return;
  }

  const hasUnpricedItems = entries.some((item) => item.product.price === null);
  const subtotal = entries.reduce((sum, item) => sum + (item.product.price === null ? 0 : item.product.price * item.quantity), 0);
  const subtotalLabel = hasUnpricedItems ? "Price on request" : formatPrice(subtotal);
  const deliveryLabel = hasUnpricedItems || subtotal < 5000 ? "Confirmed on WhatsApp" : "On us ♡";
  container.innerHTML = `
    <div class="checkout-layout">
      <form class="checkout-form" id="checkout-form">
        <h2>Where should we send your order?</h2>
        <label for="checkout-name">Full name</label>
        <input id="checkout-name" name="name" type="text" autocomplete="name" placeholder="Your full name" required>
        <label for="checkout-phone">WhatsApp / phone number</label>
        <input id="checkout-phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" pattern="(?:\\+92|0)?3[0-9]{9}" placeholder="03XXXXXXXXX" title="Enter a Pakistani mobile number, e.g. 03123456789" required>
        <label for="checkout-address">Complete delivery address</label>
        <textarea id="checkout-address" name="address" autocomplete="street-address" rows="3" placeholder="House, street, area, and any helpful directions" required></textarea>
        <label for="checkout-city">City</label>
        <input id="checkout-city" name="city" type="text" autocomplete="address-level2" placeholder="Your city" required>
        <label for="checkout-notes">Order notes <span>(optional)</span></label>
        <textarea id="checkout-notes" name="notes" rows="2" placeholder="Anything else we should know?"></textarea>
        <button class="btn btn-soul whatsapp-checkout" type="submit"><i class="bi bi-whatsapp"></i> Send order on WhatsApp</button>
        <p class="checkout-disclaimer">Your WhatsApp app will open with your order details ready. Review the message and tap Send to place your order. We'll confirm delivery and payment with you there.</p>
        <a class="continue-shopping" href="cart.html"><i class="bi bi-arrow-left"></i> Back to your bag</a>
      </form>
      <aside class="checkout-order">
        <h2>Your order</h2>
        <div class="checkout-order-items">${entries.map((item) => `
          <div class="checkout-order-item">
            <img src="${item.product.image}" alt="">
            <div><strong>${item.product.name}</strong><span>Size: ${item.size} · Qty: ${item.quantity}</span></div>
            <b class="${item.product.price === null ? "is-price-on-request" : ""}">${item.product.price === null ? "Price on request" : formatPrice(item.product.price * item.quantity)}</b>
          </div>`).join("")}</div>
        <div class="checkout-total"><span>Subtotal</span><strong>${subtotalLabel}</strong></div>
        <div class="checkout-total"><span>Delivery</span><span>${deliveryLabel}</span></div>
        <p>Product prices, delivery, and payment details will be confirmed with you on WhatsApp.</p>
      </aside>
    </div>`;

  container.querySelector("#checkout-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const message = [
      "Hi Soul! I'd like to place this order:",
      "",
      ...entries.map((item) => `• ${item.product.name} — Size ${item.size} × ${item.quantity}: ${item.product.price === null ? "Price on request" : formatPrice(item.product.price * item.quantity)}`),
      "",
      `Subtotal: ${subtotalLabel}`,
      `Delivery: ${deliveryLabel === "On us ♡" ? "Free" : "Please confirm"}`,
      "",
      "Delivery details:",
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      `Address: ${formData.get("address")}`,
      `City: ${formData.get("city")}`,
      formData.get("notes") ? `Order notes: ${formData.get("notes")}` : "",
      "",
      "Please confirm my order, delivery charges, and payment options. Thank you!"
    ].filter(Boolean).join("\n");

    window.location.href = `https://wa.me/${shopWhatsAppNumber}?text=${encodeURIComponent(message)}`;
  });
}

function setupHomePage() {
  const featured = document.getElementById("featured-products");
  if (featured) {
    const searchTerm = new URLSearchParams(window.location.search).get("search")?.trim().toLowerCase() || "";
    const adultProducts = products.filter((product) => product.category.toLowerCase() !== "kids");
    const curatedProducts = [...adultProducts, adultProducts.find((product) => product.id === "daydream-dress")];
    const matchingProducts = searchTerm
      ? products.filter((product) => `${product.name} ${product.category} ${product.color}`.toLowerCase().includes(searchTerm))
      : curatedProducts;
    featured.innerHTML = matchingProducts.length
      ? matchingProducts.map((product) => product.category.toLowerCase() === "kids" ? kidsProductCard(product) : productCard(product)).join("")
      : `<p class="text-center">No pieces found for “${searchTerm.replace(/[&<>"']/g, "")}”. Try another search.</p>`;
  }
}

function renderKidsCollection() {
  const container = document.getElementById("kids-products");
  if (!container) return;

  const kidsProducts = products.filter((product) => product.category.toLowerCase() === "kids");
  const carousel = container.closest(".collection-carousel");
  container.innerHTML = kidsProducts.length
    ? kidsProducts.map(kidsProductCard).join("")
    : littleLooks.map(kidsPlaceholderCard).join("");
  carousel.classList.toggle("is-placeholder", kidsProducts.length === 0 && littleLooks.length === 0);
}

function renderShopAllPage() {
  const productsContainer = document.getElementById("shop-all-products");
  if (productsContainer) {
    const shopProducts = products.filter((product) => product.category.toLowerCase() !== "kids");
    productsContainer.innerHTML = shopProducts.map((product) => collectionCardMarkup(product, {
      kind: "shop-all",
      productUrl: `product.html?id=${encodeURIComponent(product.id)}`,
      sizes: ["XS", "S", "M", "L", "XL"],
      badge: product.badge,
      footer: product.price === null ? "Price on request" : formatPrice(product.price),
      action: product.price === null ? "Inquire" : "Shop now"
    })).join("");
  }

  const kidsContainer = document.getElementById("shop-all-kids-products");
  if (kidsContainer) {
    const kidsProducts = products.filter((product) => product.category.toLowerCase() === "kids");
    kidsContainer.innerHTML = kidsProducts.length
      ? kidsProducts.map(kidsProductCard).join("")
      : littleLooks.map(kidsPlaceholderCard).join("");
  }

  const sectionId = window.location.hash.slice(1);
  const targetSection = sectionId && document.getElementById(sectionId);
  if (targetSection) {
    window.requestAnimationFrame(() => targetSection.scrollIntoView());
  }
}

function renderNewInProducts() {
  const menuContainers = [
    { id: "new-in-products", heroId: "new-in-hero", shouldShow: (product) => product.showInHeaderMenus },
    { id: "women-products", heroId: "women-hero", shouldShow: (product) => product.showInWomenMenu }
  ];
  menuContainers.forEach(({ id, heroId, shouldShow }) => {
    const container = document.getElementById(id);
    if (!container) return;

    const menuProducts = products.filter(shouldShow);
    const hero = document.getElementById(heroId);
    if (hero && menuProducts.length) {
      const featuredProduct = menuProducts[0];
      hero.href = `product.html?id=${encodeURIComponent(featuredProduct.id)}`;
      const image = hero.querySelector("img");
      if (image) {
        image.src = featuredProduct.image;
        image.alt = featuredProduct.name;
      }
    }

    container.innerHTML = menuProducts.map((product) => `
      <a href="product.html?id=${encodeURIComponent(product.id)}" class="shop-all-feature">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <span><strong>${product.name}</strong><small>${product.description}</small></span>
      </a>
    `).join("");
  });
}

function setupNewsletter() {
  const newsletter = document.getElementById("newsletter-form");
  if (newsletter) {
    newsletter.addEventListener("submit", (event) => {
      event.preventDefault();
      newsletter.querySelector(".newsletter-message").textContent = "You're on the list — see you in your inbox ♡";
      newsletter.reset();
    });
  }
}

function setupWishlistButtons() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest(".wishlist-button");
    if (!button) return;
    const active = button.getAttribute("aria-pressed") !== "true";
    button.setAttribute("aria-pressed", String(active));
    button.innerHTML = `<i class="bi ${active ? "bi-heart-fill" : "bi-heart"}"></i>`;
    button.classList.remove("is-animating");
    requestAnimationFrame(() => button.classList.add("is-animating"));
  });
}

function setupLiveInteractions() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  document.body.append(progress);

  const backToTop = document.createElement("button");
  backToTop.className = "scroll-top-button";
  backToTop.type = "button";
  backToTop.setAttribute("aria-label", "Back to top");
  backToTop.innerHTML = '<i class="bi bi-arrow-up"></i>';
  document.body.append(backToTop);
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  });

  let scrollUpdateScheduled = false;
  const updateScrollState = () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progressRatio = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
    progress.style.transform = `scaleX(${progressRatio})`;
    document.querySelector(".site-header")?.classList.toggle("is-scrolled", window.scrollY > 12);
    backToTop.classList.toggle("is-visible", window.scrollY > 500);
    scrollUpdateScheduled = false;
  };

  window.addEventListener("scroll", () => {
    if (scrollUpdateScheduled) return;
    scrollUpdateScheduled = true;
    window.requestAnimationFrame(updateScrollState);
  }, { passive: true });
  updateScrollState();

  const searchForm = document.querySelector(".header-search");
  const searchToggle = searchForm?.querySelector(".search-toggle");
  const searchInput = searchForm?.querySelector("input");
  searchToggle?.addEventListener("click", () => {
    const isOpen = searchForm.classList.toggle("is-open");
    searchToggle.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) searchInput.focus();
  });

}

function setupScrollAnimations() {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  gsap.registerPlugin(ScrollTrigger);

  const hero = document.querySelector(".hero-section");
  const heroImage = document.querySelector(".hero-image");
  const heroCopy = document.querySelector(".hero-copy");
  if (hero && heroImage) {
    gsap.to(heroImage, {
      yPercent: 12,
      ease: "none",
      scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true }
    });
  }
  if (heroCopy) {
    gsap.from(heroCopy, { y: 30, autoAlpha: 0, duration: 0.9, delay: 0.15, ease: "power3.out" });
  }

  const bridalTitle = document.querySelector(".bridal-title");
  if (bridalTitle) {
    gsap.from(bridalTitle, {
      y: 45,
      autoAlpha: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: bridalTitle, start: "top 88%", once: true }
    });
  }

  const bridalIntro = document.querySelector(".bridal-intro");
  if (bridalIntro) {
    gsap.from(bridalIntro, {
      y: 24,
      autoAlpha: 0,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: { trigger: bridalIntro, start: "top 88%", once: true }
    });
  }

  const storyImage = document.querySelector(".story-image img");
  const storySection = document.querySelector(".story-section");
  if (storyImage && storySection) {
    gsap.fromTo(storyImage, { yPercent: -7 }, {
      yPercent: 7,
      ease: "none",
      scrollTrigger: { trigger: storySection, start: "top bottom", end: "bottom top", scrub: true }
    });
  }

  const storyCategories = document.querySelector(".story-categories");
  if (storyCategories) {
    gsap.from(storyCategories.querySelectorAll("a"), {
      x: 22,
      autoAlpha: 0,
      duration: 0.55,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: { trigger: storyCategories, start: "top 86%", once: true }
    });
  }

  gsap.utils.toArray(".footer-newsletter > *, .footer-main > *").forEach((element) => {
    gsap.from(element, {
      y: 22,
      autoAlpha: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: { trigger: element, start: "top 92%", once: true }
    });
  });

  window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
}

function setupHeroCarousel() {
  const hero = document.querySelector(".hero-section");
  if (!hero) return;

  const slides = [...hero.querySelectorAll("[data-hero-slide]")];
  const dots = [...hero.querySelectorAll(".hero-dots button")];
  if (slides.length < 2 || slides.length !== dots.length) return;

  let activeIndex = 0;
  let timer;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const activate = (index) => {
    activeIndex = index;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === activeIndex;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
      slide.inert = !active;
      dots[slideIndex].classList.toggle("is-active", active);
      dots[slideIndex].setAttribute("aria-pressed", String(active));
    });
  };
  const stop = () => window.clearInterval(timer);
  const start = () => {
    stop();
    if (!reducedMotion) {
      timer = window.setInterval(() => activate((activeIndex + 1) % slides.length), 3000);
    }
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      activate(index);
      start();
    });
  });
  hero.addEventListener("mouseenter", stop);
  hero.addEventListener("mouseleave", start);
  hero.addEventListener("focusin", stop);
  hero.addEventListener("focusout", (event) => {
    if (!hero.contains(event.relatedTarget)) start();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else start();
  });
  start();
}

document.addEventListener("DOMContentLoaded", async () => {
  setupHeroCarousel();
  setupHomePage();
  renderKidsCollection();
  renderBridalCards();
  renderShopAllPage();
  renderNewInProducts();
  setupCollectionCardInteractions();
  renderProductDetail();
  setupBridalCardInteractions();
  renderCart();
  renderCheckout();
  setupWishlistButtons();
  setupLiveInteractions();
  updateCartCount();
  setupNewsletter();
  if (window.AOS) AOS.init({ duration: 650, once: true, offset: 55 });
  setupScrollAnimations();
});

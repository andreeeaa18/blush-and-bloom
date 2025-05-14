export const products = [
  {
    id: 1,
    linkId: "pink-dress",
    src: "/assets/img/pink_dress.png",
    title: "Fairy Baby Pink Dress",
    description:
      "Rochia scurtă roz, fără bretele, are un corset care accentuează talia și o fustă evazată din tul, decorată cu flori delicate. Perfectă pentru ocazii speciale, combină eleganța cu un aer jucăuș.",
    price: 290,
  },
  {
    id: 2,
    linkId: "earrings",
    src: "/assets/img/earrings.png",
    title: "Glowy Butterfly Earrings",
    description:
      "Acest set elegant de cercei în formă de flori este prezentat într-o cutie sofisticată, cu un design minimalist, gri și fundă roz. Cerceii sunt fin decorați cu pietre strălucitoare, oferind un aspect rafinat și delicat, perfect pentru un cadou special sau pentru a completa o ținută deosebită.",
    price: 120,
  },
  {
    id: 3,
    linkId: "shoes",
    src: "/assets/img/shoes.png",
    title: "Ballerina Cappucinna Shoes",
    description:
      "Balerini roz din satin, cu o fundiță delicată și bentițe elastice pentru susținere.",
    price: 2500,
  },
  {
    id: 4,
    linkId: "bag",
    src: "/assets/img/bag.png",
    title: "Dream Baby Blue Bag",
    description:
      "Geanta albastră pastel cucerește prin designul său minimalist și detaliile rafinate, cum ar fi logo-ul auriu și pielea întoarsă catifelată. Cu un mâner dublu sculptural, aduce un plus de eleganță oricărei ținute, fiind un accesoriu modern și sofisticat.",
    price: 800,
  },
  {
    id: 5,
    linkId: "white-dress",
    src: "/assets/img/white_dress.png",
    title: "Elegant Bride Dress",
    description:
      "Rochia albă, cu un corset structurat și umeri lăsați, emană eleganță și rafinament. Detaliile cu strasuri pe linia decolteului și mâneci adaugă un plus de strălucire și sofisticare, evidențiind o croială ce conturează delicat silueta. Ideală pentru evenimente speciale, combină modernitatea cu un stil clasic senzual.",
    price: 900,
  },
];

export const htmlTemplate = [
  `<div class="item item-1">
    <img class="photo photo-jordan-bag" src="" alt="" />
  </div>
  <div class="item item-2 flex-column">
    <p class="products-styling-title"></p>
    <p class="text"></p>
    <p class="products-styling-price"></p>
    <div class="buy-btn-prod" id="dress-btn"><p>Adaugă în coș!</p></div>
  </div>`,

  `<div class="item item-3">
    <img class="photo photo-duffle-bag" src="" alt="" />
  </div>
  <div class="item item-4 flex-column">
    <p class="products-styling-title"></p>
    <p class="text"></p>
    <p class="products-styling-price"></p>
    <div class="buy-btn-prod" id="earrings-btn"><p>Adaugă în coș!</p></div>
  </div>`,

  `<div class="item item-5">
    <img class="photo photo-travis" src="" alt="" />
  </div>
  <div class="item item-6">
    <p class="products-styling-title"></p>
    <p class="text text-center mx-0 my-0"></p>
    <p class="products-styling-price"></p>
    <div class="buy-btn-prod" id="shoes-btn"><p>Adaugă în coș!</p></div>
  </div>`,

  `<div class="item item-7">
    <img class="photo photo-jordan1" src="" alt="" />
  </div>
  <div class="item item-8 flex-column p-4">
    <p class="products-styling-title"></p>
    <p class="text"></p>
    <p class="products-styling-price"></p>
    <div class="buy-btn-prod" id="bag-btn"><p>Adaugă în coș!</p></div>
  </div>`,

  `<div class="item item-9">
    <div class="item item-10 flex-column p-3">
      <p class="products-styling-title"></p>
      <p class="text"></p>
      <p class="products-styling-price"></p>
      <div class="buy-btn-prod" id="corset-btn"><p>Adaugă în coș!</p></div>
    </div>
    <div class="item item-11">
      <img class="photo photo-fleece" src="" alt="" />
    </div>
  </div>`,
];

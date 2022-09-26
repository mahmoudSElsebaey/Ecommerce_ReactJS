// const offer = (p) => p - p * 0.1;

import p1 from "./productsImages/p1.jpg";
import p2 from "./productsImages/p2.jpg";
import p3 from "./productsImages/p3.jpg";
import p4 from "./productsImages/p4.jpg";
import p5 from "./productsImages/p5.jpg";
import p6 from "./productsImages/p6.jpg";
import tv1 from "./productsImages/tv1.jpg";
import tv2 from "./productsImages/tv2.jpg";
import tv3 from "./productsImages/tv3.jpg";
import l1 from "./productsImages/l1.jpg";
import l2 from "./productsImages/l2.jpg";
import l3 from "./productsImages/l3.jpg";
import m1 from "./productsImages/m1.jpg";
import m2 from "./productsImages/m2.jpg";
import m3 from "./productsImages/m3.jpg";
import m4 from "./productsImages/m4.jpg";
import m5 from "./productsImages/m5.jpg";
import k1 from "./productsImages/k1.jpg";
import k2 from "./productsImages/k2.jpg";
import k3 from "./productsImages/k3.jpg";
import k4 from "./productsImages/k4.jpg";
import w1 from "./productsImages/w1.jpg";
import w2 from "./productsImages/w2.jpg";
import w3 from "./productsImages/w3.jpg";
import w4 from "./productsImages/w4.jpg";
import hp1 from "./productsImages/hp1.jpg";
import hp2 from "./productsImages/hp2.jpg";
import hp3 from "./productsImages/hp3.jpg";
import hs1 from "./productsImages/hs1.jpg";
import hs2 from "./productsImages/hs2.jpg";
import hs3 from "./productsImages/hs3.jpg";
import hs4 from "./productsImages/hs4.jpg";
import hs5 from "./productsImages/hs5.jpg";

const productsData = [
  {
    id: 1,
    name: "iphone 13 pro",
    price: 5000.0,
    amount: 1,
    image: `${p1}`,
    category: "mobile",
    info: "some informatoin about this product",
  },
  {
    id: 11,
    name: "samsung 32-inch HD 2021",
    price: 16300.0,
    amount: 1,
    image: `${tv2}`,
    category: "tv",
    info: "some informatoin about this product",
  },
  {
    id: 19,
    name: "Thecno Zone Keyboard",
    price: 380.0,
    amount: 1,
    image: `${k2}`,
    category: "keyboard",
    info: "some informatoin about this product",
  },
  {
    id: 12,
    name: "toshiba smart-TV 2022",
    price: 19400.0,
    amount: 1,
    image: `${tv3}`,
    category: "tv",
    info: "some informatoin about this product",
  },
  {
    id: 4,
    name: "iphone 12 pro max",
    price: 5000.0,
    amount: 1,
    image: `${p4}`,
    category: "mobile",
    info: "some informatoin about this product",
  },

  {
    id: 13,
    name: "HP wireless mouse",
    price: 200.0,
    amount: 1,
    image: `${m1}`,
    category: "mouse",
    info: "some informatoin about this product",
  },

  {
    id: 17,
    name: "Hp wireless mouse white",
    price: 310.0,
    amount: 1,
    image: `${m5}`,
    category: "mouse",
    info: "some informatoin about this product",
  },
  {
    id: 29,
    name: "Onikuma headphone 2022",
    price: 255.0,
    amount: 1,
    image: `${hs1}`,
    category: "headphone",
    info: "some informatoin about this product",
  },
  {
    id: 30,
    name: "Onikuma headphone gaming",
    price: 255.0,
    amount: 1,
    image: `${hs2}`,
    category: "headphone",
    info: "some informatoin about this product",
  },
  {
    id: 14,
    name: "Zero wireless mouse black",
    price: 270.0,
    amount: 1,
    image: `${m2}`,
    category: "mouse",
    info: "some informatoin about this product",
  },
  {
    id: 31,
    name: "Aula headphone gaming 2022",
    price: 400.0,
    amount: 1,
    image: `${hs3}`,
    category: "headphone",
    info: "some informatoin about this product",
  },

  {
    id: 2,
    name: "iphone 12 pro",
    price: 4000.0,
    amount: 1,
    image: `${p2}`,
    category: "mobile",
    info: "some informatoin about this product",
  },

  {
    id: 20,
    name: "Aula Keyboard",
    price: 130.0,
    amount: 1,
    image: `${k3}`,
    category: "keyboard",
    info: "some informatoin about this product",
  },
  {
    id: 24,
    name: "Nabi27 smart watch 2021",
    price: 1870.0,
    amount: 1,
    image: `${w3}`,
    category: "watch",
    info: "some informatoin about this product",
  },
  {
    id: 3,
    name: "iphone 13 pro max",
    price: 6000.0,
    amount: 1,
    image: `${p3}`,
    category: "mobile",
    info: "some informatoin about this product",
  },

  {
    id: 21,
    name: "Redragon Keyboard 2022",
    price: 360.0,
    amount: 1,
    image: `${k4}`,
    category: "keyboard",
    info: "some informatoin about this product",
  },

  {
    id: 18,
    name: "Zero ZR Keyboard",
    price: 230.0,
    amount: 1,
    image: `${k1}`,
    category: "keyboard",
    info: "some informatoin about this product",
  },

  {
    id: 6,
    name: "iphone 11 pro",
    price: 5000.0,
    amount: 1,
    image: `${p6}`,
    category: "mobile",
    info: "some informatoin about this product",
  },
  {
    id: 23,
    name: "HUAWEI smart watch 2022",
    price: 1360.0,
    amount: 1,
    image: `${w2}`,
    category: "watch",
    info: "some informatoin about this product",
  },

  {
    id: 25,
    name: "Apple smart watch 2022",
    price: 1360.0,
    amount: 1,
    image: `${w4}`,
    category: "watch",
    info: "some informatoin about this product",
  },
  {
    id: 5,
    name: "iphone 11 pro",
    price: 3000.0,
    amount: 1,
    image: `${p5}`,
    category: "mobile",
    info: "some informatoin about this product",
  },
  {
    id: 22,
    name: "Apple smart watch 2022",
    price: 1360.0,
    amount: 1,
    image: `${w1}`,
    category: "watch",
    info: "some informatoin about this product",
  },
  {
    id: 26,
    name: "handfree 2022",
    price: 60.0,
    amount: 1,
    image: `${hp1}`,
    category: "handfree",
    info: "some informatoin about this product",
  },
  {
    id: 15,
    name: "HP wireless mouse 2022",
    price: 220.0,
    amount: 1,
    image: `${m3}`,
    category: "mouse",
    info: "some informatoin about this product",
  },
  {
    id: 27,
    name: "wireless handfree 2022",
    price: 175.0,
    amount: 1,
    image: `${hp2}`,
    category: "handfree",
    info: "some informatoin about this product",
  },
  {
    id: 16,
    name: "Zero wireless mouse 2022",
    price: 400.0,
    amount: 1,
    image: `${m4}`,
    category: "mouse",
    info: "some informatoin about this product",
  },
  {
    id: 8,
    name: "labtop lenevo 2022",
    price: 17700.0,
    amount: 1,
    image: `${l2}`,
    category: "laptop",
    info: "some informatoin about this product",
  },

  {
    id: 28,
    name: "handfree 2022",
    price: 55.0,
    amount: 1,
    image: `${hp3}`,
    category: "handfree",
    info: "some informatoin about this product",
  },

  {
    id: 33,
    name: "Hunterspider headphone gaming white 2022",
    price: 520.0,
    amount: 1,
    image: `${hs4}`,
    category: "headphone",
    info: "some informatoin about this product",
  },
  {
    id: 9,
    name: "labtop Dell 2021",
    price: 13700.0,
    amount: 1,
    image: `${l3}`,
    category: "laptop",
    info: "some informatoin about this product",
  },
  {
    id: 7,
    name: "labtop hd 2021",
    price: 15700.0,
    amount: 1,
    image: `${l1}`,
    category: "laptop",
    info: "some informatoin about this product",
  },

  {
    id: 10,
    name: "toshiba 32-inch HD",
    price: 13000.0,
    amount: 1,
    image: `${tv1}`,
    category: "tv",
    info: "some informatoin about this product",
  },
  {
    id: 32,
    name: "Kotion headphone gaming 2022",
    price: 320.0,
    amount: 1,
    image: `${hs5}`,
    category: "headphone",
    info: "some informatoin about this product",
  },
];

export default productsData;

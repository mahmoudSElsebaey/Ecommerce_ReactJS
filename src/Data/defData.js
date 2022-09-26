// const offer = (p) => p - p * 0.1;

const productsData = [
    {
      id: 1,
      name: "iphone 13 pro",
      price: 5000.0,
      amount: 1,
      image: "./assets/p1.jpg",
      category: "mobile",
      info: "some informatoin about this product",
    },
    {
      id: 2,
      name: "iphone 12 pro",
      price: 4000.0,
      amount: 1,
      image: "./assets/p2.jpg",
      category: "mobile",
      info: "some informatoin about this product",
    },
    {
      id: 3,
      name: "iphone 13 pro max",
      price: 6000.0,
      amount: 1,
      image: "./assets/p3.jpg",
      category: "mobile",
      info: "some informatoin about this product",
    },
    {
      id: 4,
      name: "iphone 12 pro max",
      price: 5000.0,
      amount: 1,
      image: "./assets/p4.jpg",
      category: "mobile",
      info: "some informatoin about this product",
    },
    {
      id: 5,
      name: "iphone 11 pro",
      price: 3000.0,
      amount: 1,
      image: "./assets/p5.jpg",
      category: "mobile",
      info: "some informatoin about this product",
    },
    {
      id: 6,
      name: "iphone 11 pro",
      price: 5000.0,
      amount: 1,
      image: "./assets/p6.jpg",
      category: "mobile",
      info: "some informatoin about this product",
    },
    {
      id: 7,
      name: "labtop hd 2021",
      price: 15700.0,
      amount: 1,
      image: "./assets/l1.jpg",
      category: "laptop",
      info: "some informatoin about this product",
    },
    {
      id: 8,
      name: "labtop lenevo 2022",
      price: 17700.0,
      amount: 1,
      image: "./assets/l2.jpg",
      category: "laptop",
      info: "some informatoin about this product",
    },
    {
      id: 9,
      name: "labtop Dell 2021",
      price: 13700.0,
      amount: 1,
      image: "./assets/l3.jpg",
      category: "laptop",
      info: "some informatoin about this product",
    },
    {
      id: 10,
      name: "toshiba 32-inch HD",
      price: 13000.0,
      amount: 1,
      image: "./assets/tv1.jpg",
      category: "tv",
      info: "some informatoin about this product",
    },
    {
      id: 11,
      name: "samsung 32-inch HD 2021",
      price: 16300.0,
      amount: 1,
      image: "./assets/tv2.jpg",
      category: "tv",
      info: "some informatoin about this product",
    },
    {
      id: 12,
      name: "toshiba smart-TV 2022",
      price: 19400.0,
      amount: 1,
      image: "./assets/tv3.jpg",
      category: "tv",
      info: "some informatoin about this product",
    },
    {
      id: 13,
      name: "HP wireless mouse",
      price: 200.0,
      amount: 1,
      image: "./assets/m1.jpg",
      category: "mouse",
      info: "some informatoin about this product",
    },
    {
      id: 14,
      name: "Zero wireless mouse black",
      price: 270.0,
      amount: 1,
      image: "./assets/m2.jpg",
      category: "mouse",
      info: "some informatoin about this product",
    },
    {
      id: 15,
      name: "HP wireless mouse 2022",
      price: 220.0,
      amount: 1,
      image: "./assets/m3.jpg",
      category: "mouse",
      info: "some informatoin about this product",
    },
    {
      id: 16,
      name: "Zero wireless mouse 2022",
      price: 400.0,
      amount: 1,
      image: "./assets/m4.jpg",
      category: "mouse",
      info: "some informatoin about this product",
    },
    {
      id: 17,
      name: "Hp wireless mouse white",
      price: 310.0,
      amount: 1,
      image: "./assets/m5.jpg",
      category: "mouse",
      info: "some informatoin about this product",
    },
    {
      id: 18,
      name: "Zero ZR Keyboard",
      price: 230.0,
      amount: 1,
      image: "./assets/k1.jpg",
      category: "keyboard",
      info: "some informatoin about this product",
    },
    {
      id: 19,
      name: "Thecno Zone Keyboard",
      price: 380.0,
      amount: 1,
      image: "./assets/k2.jpg",
      category: "keyboard",
      info: "some informatoin about this product",
    },
    {
      id: 20,
      name: "Aula Keyboard",
      price: 130.0,
      amount: 1,
      image: "./assets/k3.jpg",
      category: "keyboard",
      info: "some informatoin about this product",
    },
    {
      id: 21,
      name: "Redragon Keyboard 2022",
      price: 360.0,
      amount: 1,
      image: "./assets/k4.jpg",
      category: "keyboard",
      info: "some informatoin about this product",
    },
    {
      id: 22,
      name: "Apple smart watch 2022",
      price: 1360.0,
      amount: 1,
      image: "./assets/w1.jpg",
      category: "watch",
      info: "some informatoin about this product",
    },
    {
      id: 23,
      name: "HUAWEI smart watch 2022",
      price: 1360.0,
      amount: 1,
      image: "./assets/w2.jpg",
      category: "watch",
      info: "some informatoin about this product",
    },
    {
      id: 24,
      name: "Nabi27 smart watch 2021",
      price: 1870.0,
      amount: 1,
      image: "./assets/w3.jpg",
      category: "watch",
      info: "some informatoin about this product",
    },
    {
      id: 25,
      name: "Apple smart watch 2022",
      price: 1360.0,
      amount: 1,
      image: "./assets/w4.jpg",
      category: "watch",
      info: "some informatoin about this product",
    },
    {
      id: 26,
      name: "handfree 2022",
      price: 60.0,
      amount: 1,
      image: "./assets/hp1.jpg",
      category: "handfree",
      info: "some informatoin about this product",
    },
    {
      id: 27,
      name: "wireless handfree 2022",
      price: 175.0,
      amount: 1,
      image: "./assets/hp2.jpg",
      category: "handfree",
      info: "some informatoin about this product",
    },
    {
      id: 28,
      name: "handfree 2022",
      price: 55.0,
      amount: 1,
      image: "./assets/hp3.jpg",
      category: "handfree",
      info: "some informatoin about this product",
    },
    {
      id: 29,
      name: "Onikuma headphone 2022",
      price: 255.0,
      amount: 1,
      image: "./assets/hs1.jpg",
      category: "headphone",
      info: "some informatoin about this product",
    },
    {
      id: 30,
      name: "Onikuma headphone gaming",
      price: 255.0,
      amount: 1,
      image: "./assets/hs2.jpg",
      category: "headphone",
      info: "some informatoin about this product",
    },
    {
      id: 31,
      name: "Aula headphone gaming 2022",
      price: 400.0,
      amount: 1,
      image: "./assets/hs3.jpg",
      category: "headphone",
      info: "some informatoin about this product",
    },
    {
      id: 32,
      name: "Kotion headphone gaming 2022",
      price: 320.0,
      amount: 1,
      image: "./assets/hs5.jpg",
      category: "headphone",
      info: "some informatoin about this product",
    },
    {
      id: 33,
      name: "Hunterspider headphone gaming white 2022",
      price: 520.0,
      amount: 1,
      image: "./assets/hs4.jpg",
      category: "headphone",
      info: "some informatoin about this product",
    },
  ];
  
  export default productsData;
  
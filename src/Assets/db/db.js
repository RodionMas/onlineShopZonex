import i1 from "../../Assets/img/imgFilter/1.png";
import i2 from "../../Assets/img/imgFilter/2.png";
import i3 from "../../Assets/img/imgFilter/3.png";
import i4 from "../../Assets/img/imgFilter/4.png";
import i5 from "../../Assets/img/imgFilter/5.png";
import i6 from "../../Assets/img/imgFilter/6.png";
import i7 from "../../Assets/img/imgFilter/7.png";
import i8 from "../../Assets/img/imgFilter/8.png";
import i9 from "../../Assets/img/imgFilter/9.png";
import i10 from "../../Assets/img/imgFilter/10.png";
export const db = [
  {
    imgUrl: `${i1}`,
    newShop: true,
    name: "Eye Mesh Boat Shoes",
    price: 220.0,
    newPrice: false,
    sale: false,
    id: 1,
    bestSellers: false,
    hot: false,
    top: false,
    brand: "Vero Moda",
    categories: "Shoes",
    count: 1,
    color: ["black"],
    size: ["24", "29", "30", "31"],
    discount: false,
    sex: "men",
    additional:
      "Material: imitation cashmere (50% acrylic + 50% polyester), Size: 190*65cm, Weight: 360 g., Package: opp bag",
    reviews: [
      {
        name: "Charles",
        review: "Great shoes, but for autumn",
      },
      {
        name: "Christopher",
        review: "The size approached, they look great!",
      },
    ],
    descr:
      "Autumn boots for men, warm fashion leather winter boots, comfortable men's winter shoes",
  },
  {
    imgUrl: `${i2}`,
    newShop: false,
    name: "Azure Tote",
    price: 290.0,
    newPrice: false,
    sale: false,
    id: 2,
    bestSellers: false,
    hot: false,
    count: 1,
    top: false,
    brand: "Betty Barclay",
    categories: "Dresses",
    color: ["red", "summer"],
    size: ["23", "24", "29"],
    discount: false,
    sex: "women",
    additional:
      "Material: imitation cashmere (50% acrylic + 50% polyester), Size: 190*65cm, Weight: 360 g., Package: opp bag",
    reviews: [
      {
        name: "Barbara",
        review:
          "The dress is beautiful especially in red, thanks for the product",
      },
      {
        name: "Ann",
        review:
          "I ordered for the summer, but it came already in the beginning of autumn",
      },
    ],
    descr:
      "Women's Bohemian Party Dress Chiffon Ankle Length One Shoulder Long Sleeve Embroidered Boho Ankle Length A Line Dress New 202",
  },
  {
    imgUrl: `${i3}`,
    newShop: true,
    name: "Blue Raincoat",
    price: 200.0,
    newPrice: false,
    sale: false,
    id: 3,
    bestSellers: false,
    hot: false,
    count: 1,
    top: false,
    brand: "Gerry Weber",
    categories: "Jacket",
    color: ["grey"],
    size: ["23", "24", "25", "29"],
    discount: false,
    sex: "men",
    additional:
      "Material: imitation cashmere (50% acrylic + 50% polyester), Size: 190*65cm, Weight: 360 g., Package: opp bag",
    reviews: [
      {
        name: "Chad",
        review:
          "This vest is the best I have ever ordered, but the delivery is very long",
      },
    ],
    descr:
      "Fashion Men's Jacket Vest Sleeveless Spring Thermal Model Casual Coats Male Cotton Waistcoat Male Thicken Waistcoat",
  },
  {
    imgUrl: `${i4}`,
    newShop: false,
    name: "Backpack with contrasting buckle colorfull",
    price: 125.0,
    newPrice: 125 + 40,
    sale: true,
    id: 4,
    bestSellers: true,
    hot: false,
    count: 1,
    top: false,
    brand: "Desigual",
    categories: "Sweatshirts",
    color: ["colorful"],
    size: ["23", "24", "25", "29", "30", "31"],
    discount: "Less Than 40% Off",
    sex: "men",
    additional:
      "Material: imitation cashmere (50% acrylic + 50% polyester), Size: 190*65cm, Weight: 360 g., Package: opp bag",
    reviews: [
      {
        name: "Adrian",
        review:
          "I wanted to order this jacket for a long time, but I still couldn’t get my hands on it, after the jacket arrived I was pleasantly surprised by the size, everything fit and looks very good",
      },
      {
        name: "Thomas",
        review:
          "Everything would be fine, but the delivery is terrible, I waited 2 months!",
      },
      {
        name: "Adam",
        review:
          "They took my son to school in the fall, while everything seems to be fine, the son does not complain",
      },
    ],
    descr: "Men's Long Sleeve Crew Neck Knitted Sweater",
  },
  {
    imgUrl: `${i5}`,
    newShop: false,
    name: "Shirt in organic cotton classic gingham",
    price: 59.0,
    newPrice: false,
    sale: false,
    id: 5,
    bestSellers: true,
    hot: false,
    count: 1,
    top: false,
    brand: "Jack & Jones",
    categories: "Shirts",
    color: ["white"],
    size: ["23", "24", "25", "27"],
    discount: false,
    sex: "men",
    additional:
      "Material: imitation cashmere (50% acrylic + 50% polyester), Size: 190*65cm, Weight: 360 g., Package: opp bag",
    reviews: [
      {
        name: "Charley",
        review: "I wear it to work, I like it",
      },
    ],
    descr:
      "Men Cotton Oxford Shirt Plaid Striped Casual Shirt Long Sleeve Pockets Classic Work Shirt Button Collar",
  },
  {
    imgUrl: `${i6}`,
    newShop: false,
    name: "Tailored indigo jumpsuit ",
    price: 128.0,
    newPrice: false,
    sale: false,
    id: 6,
    bestSellers: false,
    hot: true,
    count: 1,
    top: false,
    brand: "Noom",
    categories: "Summer",
    color: ["blue", "summer"],
    size: ["23", "24", "25", "26", "29"],
    sex: "women",
    additional:
      "Material: imitation cashmere (50% acrylic + 50% polyester), Size: 190*65cm, Weight: 360 g., Package: opp bag",
    reviews: [
      {
        name: "Iris",
        review:
          "I ordered for the summer, but it came almost at the end of August, I measured it, it fit in size. Thank you for the goods",
      },
      {
        name: "Amanda",
        review:
          "The order is taking too long, you need to do something about it!!!!",
      },
    ],
    discount: false,
    descr:
      "American spice girl denim jumpsuit for women designer niche loose fit jumpsuit vestidos de verano mujer 2022 plus size jean",
  },
  {
    imgUrl: `${i7}`,
    newShop: false,
    name: "Triple stone drop earrings",
    price: 49.5,
    newPrice: false,
    sale: false,
    id: 7,
    bestSellers: false,
    hot: false,
    count: 1,
    top: true,
    brand: "EMPORIO ARMANI",
    categories: "Sweatshirts",
    color: ["green"],
    size: ["23", "24", "25", "29", "31"],
    sex: "men",
    additional:
      "Material: imitation cashmere (50% acrylic + 50% polyester), Size: 190*65cm, Weight: 360 g., Package: opp bag",
    reviews: [
      {
        name: "Charley",
        review:
          "You won’t find such sweaters anymore, the quality is just perfect, I ordered another one. Satisfied unrealistically",
      },
      {
        name: "Thomas",
        review: "This jacket is worth taking only green",
      },
    ],
    descr:
      "Casual Solid Color Knitted Cardigans for Men Winter Warm Turn-down Collar Button Knitted Jacket Coat Men Fashion Autumn Winter Solid Color Sweaters",
    discount: false,
  },
  {
    imgUrl: `${i8}`,
    newShop: false,
    name: "Stud Accessories Gold",
    price: 158.0,
    newPrice: 158 + 40,
    sale: true,
    id: 8,
    bestSellers: false,
    hot: false,
    count: 1,
    top: false,
    brand: "S.Oliver",
    categories: "Accessories",
    color: ["yellow"],
    size: ["23", "24", "25", "28", "29", "30"],
    discount: "Less Than 40% Off",
    sex: "women",
    additional:
      "Material: imitation cashmere (50% acrylic + 50% polyester), Size: 190*65cm, Weight: 360 g., Package: opp bag",
    reviews: [
      {
        name: "Harry",
        review:
          "I bought it for my wife for our wedding anniversary, she is happy and so am I, it's always nice to make a good gift for a loved one",
      },
      {
        name: "Ida",
        review: "Fine goods",
      },
      {
        name: "Amelia",
        review: "Long delivery",
      },
    ],
    descr: "Women's 2022 gold stud earrings with pendant",
  },
  {
    imgUrl: `${i9}`,
    newShop: false,
    name: "Eye Mesh Boat Shoes female",
    price: 220.0,
    newPrice: 220 + 40,
    sale: true,
    id: 9,
    bestSellers: false,
    hot: false,
    count: 1,
    top: false,
    brand: "Marc OPolo",
    categories: "Shoes",
    color: ["colorful"],
    size: ["27", "24", "25", "29"],
    sex: "women",
    additional:
      "Material: imitation cashmere (50% acrylic + 50% polyester), Size: 190*65cm, Weight: 360 g., Package: opp bag",
    reviews: [
      {
        name: "Agata",
        review: "Shoes for my grandmother",
      },
      {
        name: "Agnes",
        review: "Lovely design!",
      },
    ],
    descr:
      "British style women's shoes 2022 new casual girls fashion genuine leather shoes",
    discount: false,
  },
  {
    imgUrl: `${i10}`,
    newShop: true,
    name: "Azure Tote Coat",
    price: 290.0,
    newPrice: false,
    sale: false,
    id: 10,
    bestSellers: false,
    hot: false,
    count: 1,
    top: false,
    brand: "Karl Lagerfeld",
    categories: "Coats",
    color: ["black"],
    size: ["23", "24", "25", "29", "30"],
    descr: "Coat for men, autumn, warm, single-breasted",
    discount: false,
    sex: "men",
    additional:
      "Material: imitation cashmere (50% acrylic + 50% polyester), Size: 190*65cm, Weight: 360 g., Package: opp bag",
    reviews: [
      {
        name: "Alex",
        review: "Cool men's coat",
      },
      {
        name: "John",
        review: "Great coat to work!",
      },
      {
        name: "Olive",
        review: "I will always order here from now on",
      },
    ],
  },
];

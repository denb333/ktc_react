import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './Lesson4/Button'
import Rating from './CardAfternoon/Rating/index'
import Card from './CardAfternoon/index'
import Device from './CardAfternoon/device'
import ColorPicker from './CardAfternoon/ColorState/ColorState'
// import './App.css'
import styles from './CardAfternoon/Card.module.css'
import Thump from './HomeWork/Thumb/index'
import ButtonChangeContent from './HomeWork/ButtonChangeContent/index1'
import ButtonChangeContent2 from './HomeWork/ButtonChangeContent/index2'
import SingleAccordions from './HomeWork/ButtonAccouedtions/index'
import MultiAccordions from './HomeWork/ButtonAccouedtions/index2'
import styles1 from './HomeWork/ButtonAccouedtions/Button.module.css'
import Slider from './Slider1/index'
function App() {
  // const [count, setCount] = useState(0)
  type Product = {
    id: number;
    img: string;
    title: string;
    view: number;
  };
  type Divice = {
    id: number
    salePercent?: number;
    img?: string;
    title?: string;
    price?: number;
    salePrice?: number;

  }
  
type ColorOption = {
  id: string;
  label: string;
};


const COLOR_OPTIONS: ColorOption[] = [
  { id: 'black', label: 'Đen' },
  { id: 'pink',  label: 'Hồng' },
  { id: 'blue',  label: 'Xanh' },
];

  const products: Product[] = [
    {
      id: 1,
      img: 'https://cdn.tgdd.vn/Products/Images/42/339177/oppo-reno14-f-5g-blue-thumb-600x600.jpg',
      title: 'OPPO Reno14 F 5G 12GB/256GB',
      view: 1233,
    },
    {
      id: 2,
      img: 'https://cdn.tgdd.vn/Products/Images/42/329149/iphone-16-pro-max-sa-mac-thumb-1-600x600.jpg',
      title: 'Điện thoại iPhone 16 Pro Max 256GB',
      view: 4566,
    },
    {
      id: 3,
      img: 'https://cdn.tgdd.vn/Products/Images/42/339172/oppo-reno14-pro-5g-white-thumb-600x600.jpg',
      title: 'Điện thoại iPhone 16 Pro Max 256GB',
      view: 789,
    },
    {
      id: 4,
      img: 'https://cdn.tgdd.vn/Products/Images/42/320730/xiaomi-redmi-note-14-pro-thumb-600x600.jpg',
      title: 'Xiaomi Redmi Note 14 Pro 8GB/256GB',
      view: 101,
    },
  ];
  const devices: Divice[] = [
    {
      id: 1,
      salePercent: 15,
      img: 'images/airpod.png',
      title: 'iPhone 15 Pro Max 256 GB',
      price: 34990000,
      salePrice: 29740000, // = price * (1 - salePercent/100)
    },
    {
      id: 2,

      img: 'images/cap.png',
      title: 'MacBook Air M3 13″ 512 GB',
      price: 32990000,
      salePrice: 26392000,
    },
    {
      id: 3,
      salePercent: 12,
      img: 'images/type.png',
      title: 'Sony WH‑1000XM5 Wireless Headphones',
      price: 9990000,
      salePrice: 8791200,
    },
    {
      id: 4,

      img: 'images/image.png',
      title: 'Samsung Galaxy Watch 6 Classic LTE 47 mm',
      price: 10990000,
      salePrice: 9011800,
    },
  ];
  type TabItem = {
  id: string;
  label: string;
  content: string;          // có thể là JSX nếu bạn muốn
}
  const TABS: TabItem[] = [
  {
    id: 'history',
    label: 'HISTORY',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
  },
  {
    id: 'approach',
    label: 'APPROACH',
    content:
      'Contenido de tabNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
  },
  {
    id: 'culture',
    label: 'CULTURE',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.',
  },
  {
    id: 'method',
    label: 'METHOD',
    content:
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
  },
];
  const images = [
    '/images/slide1.jpg',
    '/images/slide2.jpg',
    '/images/slide3.jpg',
    '/images/slide4.jpg',
    
  ];



  return (
    <>
      <div className={styles.headerCard}>
        <h2>TIN MOI</h2>
        <span>Xem them</span>
      </div>
      <div className={styles.homePage}>
        {products.map((prod) => (
          <Card key={prod.id} product={prod} />
        ))}
      </div>
      <div className={styles.homePage}>
        {devices.map((prod) => (
          <Device key={prod.id} device={prod} />
        ))}
      </div>
      <div style={{ padding: 20 }}>
    <div className="blockHeight" style={{ marginBottom: 50 }}></div>

      <ColorPicker options={COLOR_OPTIONS} />
    </div>
    <div className="blockHeight" style={{ marginBottom: 50 }}></div>

    <Rating ></Rating>
    <div className="blockHeight" style={{ marginBottom: 50 }}></div>
    <Thump></Thump>
    <div className="blockHeight" style={{ marginBottom: 100 }}></div>
    
    <ButtonChangeContent items={TABS}></ButtonChangeContent>
    <ButtonChangeContent2 items={TABS}></ButtonChangeContent2>
    <div className="blockHeight" style={{ marginBottom: 100 }}></div>
    {/* <SingleAccordions></SingleAccordions> */}

    <div className={styles1.page}>
      <h1>Button Accordions</h1>

      <div className={styles1.grid}>
        <div>
          <h3>Single Accordions</h3>
          <SingleAccordions />
        </div>

        <div>
          <h3>Multi Accordions</h3>
          <MultiAccordions />
        </div>
      </div>
    </div>
    <div className="blockHeight" style={{ marginBottom: 100 }}></div>
    <Slider images={images}></Slider>
    </>
  )
}

export default App

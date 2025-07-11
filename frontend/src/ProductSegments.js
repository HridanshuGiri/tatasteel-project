import React from 'react';
import './ProductSegments.css';

const segments = [
  { name: "Agriculture", image: "/images/agriculture.jpg", link: "https://www.tatasteel.com/products-solutions/india/segments/agriculture/" },
  { name: "Automotive Steels", image: "/images/automotive.jpg", link: "https://www.tatasteel.com/products-solutions/india/segments/automotive/" },
  { name: "Construction", image: "/images/construction.jpg", link: "https://www.tatasteel.com/products-solutions/india/segments/construction/" },
  { name: "Consumer Goods", image: "/images/consumer.jpg", link: "https://www.tatasteel.com/products-solutions/india/segments/consumer-goods/" },
  { name: "Energy and Power", image: "/images/energy.jpg", link: "https://www.tatasteel.com/products-solutions/india/segments/energy-and-power/" },
  { name: "Engineering", image: "/images/engineering.jpg", link: "https://www.tatasteel.com/products-solutions/india/segments/engineering/" },
  { name: "Material Handling", image: "/images/material-handling.jpg", link: "https://www.tatasteel.com/products-solutions/india/segments/material-handling/" },
];

const keyProducts = [
  { name: "Hot Rolled", image: "/images/hotrolled.jpg", link: "https://www.tatasteel.com/products-solutions/india/products/tata-astrum/" },
  { name: "Cold Rolled", image: "/images/coldrolled.jpg", link: "https://www.tatasteel.com/products-solutions/india/products/tata-steelium/" },
  { name: "Coated coil", image: "/images/coatedcoil.jpg", link: "https://www.tatasteel.com/products-solutions/india/" },
  { name: "Tubes", image: "/images/tubes.jpg", link: "https://www.tatasteel.com/products-solutions/india/" },
  { name: "Rebar", image: "/images/rebar.jpg", link: "https://www.tatasteel.com/products-solutions/india/" },
  { name: "Wire Rods", image: "/images/wirerods.jpg", link: "https://www.tatasteel.com/products-solutions/india/" },
];

const brands = [
  { name: "Automotive Steels", logo: "/images/automotive_steels.jpg", link: "https://www.tatasteel.com/products-solutions/india/segments/automotive/" },
  { name: "Galvano", logo: "/images/galvano.jpg", link: "https://www.tatasteel.com/products-solutions/india/products/galvano/" },
  { name: "Tata Agrico", logo: "/images/agrico.jpg", link: "https://www.tatasteel.com/products-solutions/india/products/tata-agrico/" },
  { name: "Tata Astrum", logo: "/images/astrum.jpg", link: "https://www.tatasteel.com/products-solutions/india/products/tata-astrum/" },
  { name: "Tata Bearings", logo: "/images/bearings.jpg", link: "https://www.tatasteel.com/products-solutions/india/products/tata-astrum/" },
  { name: "Ferromag", logo: "/images/ferromag.jpg", link: "https://www.tatasteel.com/products-solutions/india/products/tata-ferro-alloys-and-minerals-division/" },
  { name: "IBMD", logo: "/images/ibmd.jpg", link: "https://www.tatasteel.com/products-solutions/india/products/tata-industrial-by-products-management-division-ibmd/" },
  { name: "Tata Pipes", logo: "/images/pipes.jpg", link: "https://www.tatasteel.com/products-solutions/india/products/tata-pipes/" },
  { name: "Tata Precision Tubes", logo: "/images/precision_tubes.jpg", link: "https://www.tatasteel.com/products-solutions/india/products/tata-precision-tubes/" },
  { name: "Raw Material", logo: "/images/raw_material.jpg", link: "https://www.tatasteel.com/products-solutions/india/products/raw-materials-and-responsible-mining/" },
  { name: "Tata Shaktee", logo: "/images/shaktee.jpg", link: "https://www.tatasteel.com/products-solutions/india/products/tata-shaktee/" },
  { name: "Tata Steelium", logo: "/images/steelium.jpg", link: "https://www.tatasteel.com/products-solutions/india/products/tata-steelium/" },
  { name: "Tata Structura", logo: "/images/structura.jpg", link: "https://www.tatasteel.com/products-solutions/india/products/tata-structura/" },
  { name: "Tata Tiscon", logo: "/images/tiscon.jpg", link: "https://www.tatasteel.com/products-solutions/india/products/tata-tiscon/" },
  { name: "Tata Wiron", logo: "/images/wiron.jpg", link: "https://www.tatasteel.com/products-solutions/india/products/tata-wiron/" },
  { name: "Tata KOSH", logo: "/images/kosh.jpg", link: "https://www.tatasteel.com/products-solutions/india/solutions/#KOSH" },
  { name: "Tata eFee", logo: "/images/efee.jpg", link: "https://www.tatasteel.com/products-solutions/india/products/tata-efee/" },
  { name: "Tata Ductura", logo: "/images/ductura.jpg", link: "https://www.tatasteel.com/products-solutions/india/products/tata-ductura/" },
];

const solutions = [
  { name: "Cyan", logo: "/images/cyan.jpg", link: "https://www.tatasteel.com/products-solutions/india/solutions/#Cyan" },
  { name: "Steel n Style", logo: "/images/steelnstyle.jpg", link: "https://www.tatasteel.com/products-solutions/india/solutions/#Style" },
  { name: "Tata Pravesh", logo: "/images/pravesh.jpg", link: "https://www.tatasteel.com/products-solutions/india/solutions/#Pravesh" },
  { name: "Tiscon Superlinks", logo: "/images/superlinks.jpg", link: "https://www.tatasteel.com/products-solutions/india/solutions/#Superlinks" },
  { name: "Tiscon Footings", logo: "/images/footings.jpg", link: "https://www.tatasteel.com/products-solutions/india/solutions/#Footings" },
  { name: "Tiscon ReadyBuild", logo: "/images/readybuild.jpg", link: "https://www.tatasteel.com/products-solutions/india/solutions/#ReadyBuild" },
  { name: "Roof Junction", logo: "/images/roofjunction.jpg", link: "https://www.tatasteel.com/products-solutions/india/solutions/#Roof" },
  { name: "Tata Shaktee Ridges", logo: "/images/shaktee_ridges.jpg", link: "https://www.tatasteel.com/products-solutions/india/solutions/#Ridges" },
];

const ProductSegments = () => {
  return (
    <div className="product-page">
      <div className="intro-section">
        <p className="intro-text">
          Continuous improvement in our product and service portfolio, along with success in value-creating initiatives for customers,
          has led to the Company’s unique position to serve domestic markets.
        </p>
      </div>

      <h2 className="section-title">We Cater to These Product Segments:</h2>
      <div className="segments-container">
        {segments.map((seg, index) => (
          <div className="segment-card" key={index}>
            <a href={seg.link} target="_blank" rel="noopener noreferrer">
              <img src={seg.image} alt={seg.name} className="product-image" />
            </a>
            <p>{seg.name}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">We Cater to the Indian Market with Key Products:</h2>
      <div className="products-container">
        {keyProducts.map((prod, index) => (
          <div className="product-card" key={index}>
            <a href={prod.link} target="_blank" rel="noopener noreferrer">
              <img src={prod.image} alt={prod.name} className="product-image" />
            </a>
            <p>{prod.name}</p>
          </div>
        ))}
      </div>

      <div className="description-text">
        <p>
          Some of the key segments that we target in Indian markets are Construction, Automotive, General Engineering, and Industrial Products & Agriculture apart from serving other sectors such as Packaging, Consumer Goods etc.
        </p>
        <p>
          Branded products and retail solutions segment is targeted to provide an end-to-end customer service and has expanded its base to provide unique services to its existing & new customers.
        </p>
      </div>

      <h2 className="section-title">Our Products / Brands</h2>
      <div className="grid-container">
        {brands.map((brand, index) => (
          <div className="brand-card" key={index}>
            <a href={brand.link} target="_blank" rel="noopener noreferrer">
              <img src={brand.logo} alt={brand.name} className="brand-image" />
            </a>
            <p>{brand.name}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Our Solutions</h2>
      <div className="grid-container">
        {solutions.map((sol, index) => (
          <div className="brand-card" key={index}>
            <a href={sol.link} target="_blank" rel="noopener noreferrer">
              <img src={sol.logo} alt={sol.name} className="brand-image" />
            </a>
            <p>{sol.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSegments;

import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Header from '../src/Header'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Brands from '../src/Brands';

export default function Home() {
  const [companies, setCompanies] = useState([]);
  const [categories, setCategories] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  // const cookieData = document?.cookie
  useEffect(async () => {
    const allcompanies = await fetch(`http://localhost:9101/api/v1/company`).then(res => res.json())
    setCompanies(allcompanies)
  }, [])
  useEffect(async () => {
    const allCategories = await fetch(`http://localhost:9101/api/v1/company/categories`).then(res => res.json())
    setCategories(allCategories)
  })
  return (
    <div className={styles.container}>
      <Header />
      <Slider {...settings}>
        <img src={"/sustainability_banner.jpg"} />
        <img src={"/sustainability_banner.jpg"} />

      </Slider>
      <div className={styles.nf}>
        <div className={styles.nf_text}>
          <img src={"/nf_register.png"} />;
          <h3>Cadastrar NF</h3>
        </div>
      </div>
      <div className={styles.alternative_bg}>
          <h1>Categorias</h1>
          <div className={styles.brand}>
          {categories.map((category, index) => (<Brands name={category} id={index + 1} image={`${category.toLowerCase()}.png`} isBrand={false}/>))}
          </div>
      </div>
      <div className={styles.alternative_bg}>
          <h1>Empresas</h1>
          <div className={styles.brand}>
          {companies.map((company, index) => (<Brands name={company?.fantasy_name} id={index + 1} image={`${company?.fantasy_name.toLowerCase()}.png`} isBrand={true}/>))}
          </div>
      </div>
      <div className={styles.alternative_bg}>
          <h1>Certificados</h1>
          <div className={`${styles.certifiers} ${styles.brand}`}>
              <Brands name={"Positiv.a"} image={"/certificado1.png"} />
              <Brands name={"Yvy"} image={"/certificado2.png"} />
              <Brands name={"Positiv.a"} image={"/certificado3.png"} />
              <Brands name={"Yvy"} image={"/certificado4.png"}/>
          </div>
      </div>
    </div>
  )
}

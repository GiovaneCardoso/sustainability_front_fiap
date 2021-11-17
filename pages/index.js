import styles from '../styles/Home.module.css'
import Header from '../src/Header'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Brands from '../src/Brands';

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
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
              <Brands name={"Limpeza"} image={"/brand1.png"} isBrand={false}/>
              <Brands name={"Alimento"} image={"/brand2.png"} isBrand={false}/>
              <Brands name={"Higiene"} image={"/brand3.png"} isBrand={false}/>
              <Brands name={"Energia"} image={"/brand4.png"} isBrand={false}/>


          </div>
      </div>
      <div className={styles.alternative_bg}>
          <h1>Empresas</h1>
          <div className={styles.brand}>
              <Brands name={"Positiv.a"} image={"/empresa2.png"} isBrand={true}/>
              <Brands name={"Yvy"} image={"/empresa1.png"} isBrand={true}/>
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

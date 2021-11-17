import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Brand.module.css";
import SearchBanner from "../../src/SearchBanner";
import Header from "../../src/Header";

const Brand = () => {
  const router = useRouter();
  const { id } = router.query;
  const [brands, setBrands] = useState([]);
  useEffect(async() => {
    const response = await fetch(`http://localhost:9101/api/v1/company/by/${id}`);
    const data = await response.json();
    setBrands(data);
  }, [id])
  return (
    <>
      {" "}
      <Header />
      <div>
        <h1>{id}</h1>
        <div className={styles.brand_container}>
          {brands.map((brand, index) => (<SearchBanner name={brand.fantasy_name} description={brand.description} index={index + 1} total_visitants={brand.total_visitants} contact={brand.phone} />))}

          {/* <SearchBanner
            name={"empresa1"}
            description="Olá eu sou uma descrição"
            pdv="Físico"
            contact={"(11) 94444-4444"}
          /> */}
        </div>
      </div>
    </>
  );
};

export default Brand;

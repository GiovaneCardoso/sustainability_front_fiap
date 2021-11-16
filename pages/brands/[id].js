import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Brand.module.css";
import SearchBanner from "../../src/SearchBanner";
import Header from "../../src/Header";

const Brand = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      {" "}
      <Header />
      <div>
        <h1>{id}</h1>
        <div className={styles.brand_container}>
          <SearchBanner
            name={"empresa1"}
            description="Olá eu sou uma descrição"
            pdv="Físico"
            contact={"(11) 94444-4444"}
          />
          <SearchBanner
            name={"empresa1"}
            description="Olá eu sou uma descrição"
            pdv="Físico"
            contact={"(11) 94444-4444"}
          />
          <SearchBanner
            name={"empresa1"}
            description="Olá eu sou uma descrição"
            pdv="Físico"
            contact={"(11) 94444-4444"}
          />
          <SearchBanner
            name={"empresa1"}
            description="Olá eu sou uma descrição"
            pdv="Físico"
            contact={"(11) 94444-4444"}
          />
          <SearchBanner
            name={"empresa1"}
            description="Olá eu sou uma descrição"
            pdv="Físico"
            contact={"(11) 94444-4444"}
          />
          <SearchBanner
            name={"empresa1"}
            description="Olá eu sou uma descrição"
            pdv="Físico"
            contact={"(11) 94444-4444"}
          />
        </div>
      </div>
    </>
  );
};

export default Brand;

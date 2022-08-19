import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SearchInput } from "../../components/SearchInput";
import { Card } from "../../components/Card";
import "./index.css";
import "./responsive.css";
import { theme } from "../../utils/theme";
import partnersInfo from "../../features/PartnersPage/partners.json"
import { useState } from "react";

export function PartnersPage() {

  const [pageSize, setPageSize] = useState(8)

  function handlePageSize() {
    upadetArray();
    setPageSize(pageSize + 4);
  }

  function upadetArray() {
    setPartnersArray(partners.slice(0, pageSize))
  }

  const partners = partnersInfo;
  const [partnersArray, setPartnersArray] = useState(partners.slice(0, 4));
  function handleSearch(value) {
    value ? filterPartners(value.toLowerCase()) : setPartnersArray(partnersInfo.slice(0, pageSize - 4))
  }
  function filterPartners(value) {
    const filteredPartners = partnersInfo.filter(partners => partners.subtitle.toLowerCase().includes(value))
    setPartnersArray(filteredPartners)
  }

  return (
    <div>
      <Header type={"USER"} />
      <main className="partners__main">
        <h2 className="partners__subtitle">Cadastre-se e garanta seu cupom de desconto</h2>
        <h1 className="partners__title"> Parceiros na sua cidade</h1>
        <SearchInput handleSearch={handleSearch} />
        <section className="partners__section">
          {partnersArray.length > 0 ? partnersArray.map((partner, index) => (
            <Card
              key={index}
              item={partner}
              color={theme.colors.quaternary}
              width={243}
              height={374}
              />
          )) :
            <p> Nenhum parceiro encontrado :( </p>
          }
        </section>
        <Button
          value="Carregar mais"
          color={theme.colors.secundary}
          handleClick={handlePageSize}
        />
      </main>
      <Footer />
    </div>
  );
}

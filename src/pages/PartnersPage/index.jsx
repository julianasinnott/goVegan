import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SearchInput } from "../../components/SearchInput";
import { Card } from "../../components/Card";
import { theme } from "../../utils/theme";
import { useState } from "react";
import { useEffect } from "react";
import api from '../../services/api'
import "./index.css";
import "./responsive.css";

export function PartnersPage() {
  const [partners, setPartners] = useState([])
  const [pageSize, setPageSize] = useState(3)
  const [key, setKey] = useState('')

  useEffect(() => {
    async function getPartners() {
      try {
        const response = await api.get(`/partners?_page=1&_limit=${pageSize}&q=${key}`)
        setPartners(response.data)
      }
      catch (err) {
        console.error(err);
      }
    }
    getPartners()
  }, [key, pageSize])

  function handlePageSize() {
    setPageSize(pageSize + 3);
  }

  function handleSearch(value) {
    setKey(value)
  }

  return (
    <div>
      <Header type={"USER"} />
      <main className="partners__main">
        <h2 className="partners__subtitle">Cadastre-se e garanta seu cupom de desconto</h2>
        <h1 className="partners__title"> Parceiros na sua cidade</h1>
        <SearchInput handleSearch={handleSearch} />
        <section className="partners__section">
          {partners.length > 0 ? partners.map((partner, index) => (
            <Card
              key={index}
              item={partner}
              color={theme.colors.quaternary}
              width={300}
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

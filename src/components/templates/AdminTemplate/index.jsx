import "./index.css";
import { Header } from "../../Header";
import { Container } from "../../Container";
import { Footer } from "../../Footer";
import { useNavigate } from 'react-router-dom';


export function AdminTemplate({ children, colorRecipes, colorPartners }) {
  const navigate = useNavigate();
  return (
    <Container>
      <Header type={"ADMIN"} />
      <div className="adm-template">
        <nav className="main-adm__navbar">        
          <button
            onClick={() => navigate('/admin/receitas')}
            className="column_recipes"
            style={{
              borderLeft:`6px solid var(${colorRecipes})`,             
              }}
          >
            Receitas
          </button>
          <button
            onClick={() => navigate('/admin/parceiros')}
            className="column_partners"
            style={{
              borderLeft:`6px solid var(${colorPartners})`,             
              }}
          >
            Parceiros
          </button>   
        </nav>
        <div>{children}</div>
      </div>
      <Footer hasIdealizers={false} />
    </Container>
  );
}

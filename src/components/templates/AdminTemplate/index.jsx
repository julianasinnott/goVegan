
import { Header } from "../../Header";
import { Container } from "../../Container";
import "./index.css";
import { Footer } from "../../Footer";

export function AdminTemplate({ children }) {
  return (
    <Container>
      <Header type={"ADMIN"} />
      <div className="adm-template">
        <nav className="main-adm__navbar">

        </nav>
        <div style={{ padding: "60px 20px" }}>{children}</div>
      </div>
      <Footer hasIdealizers={false} />
    </Container>
  );
}

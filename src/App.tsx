import { Header } from "./components/Header";
import { Container } from "./components/Container";
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <div className="h-[300vh]">Hero Component</div>
        </Container>
        <Container>
          <div>USP's</div>
        </Container>
        <Container>
          <div>3 Col Layout</div>
        </Container>
        <Container>
          <div>Carousel with posters</div>
        </Container>
      </main>
    </>
  );
}

export default App;

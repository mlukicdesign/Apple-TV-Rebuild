import { Container } from "./Container";
import { Button } from "./button";

export const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast text-white">
        <Container className="flex items-center min-h-11">
          <a href="/" className="h-11 flex items-center px-6 -m-6">
            🍎 <span className="sr-only">Back to homepage</span>
          </a>
        </Container>
      </header>
      <div className="bg-backgroundContrast text-white sticky top-0">
        <Container className="flex items-center min-h-11 justify-between">
          <p>Apple TV+</p> <Button>Test</Button>
        </Container>
      </div>
    </>
  );
};

import { Helmet, HelmetProvider } from "react-helmet-async";
import "./Home.css";

function Home() {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Promoções Inteligentes - Canal Oficial no Telegram</title>
          <meta
            name="description"
            content="Junte-se ao nosso canal exclusivo no Telegram para receber as melhores promoções da Amazon Brasil com links de afiliados."
          />
          <meta name="robots" content="index, follow" />
          <meta charSet="utf-8" />
        </Helmet>

        <main className="container">
          <h1 className="title">Promoções Inteligentes</h1>
          <p className="description">
            Receba as melhores ofertas e descontos direto no seu Telegram! Nosso
            canal seleciona diariamente as promoções mais quentes da Amazon
            Brasil, tudo com links exclusivos de afiliados.
          </p>

          <a
            href="https://t.me/promo_inteligentes"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
            aria-label="Entrar no canal Promoções Inteligentes no Telegram"
          >
            Entrar no Canal do Telegram
          </a>

          <footer className="footer">
            <small>
              © 2025 Promoções Inteligentes - Todos os direitos reservados.
            </small>
          </footer>
        </main>
      </>
    </HelmetProvider>
  );
}

export default Home;

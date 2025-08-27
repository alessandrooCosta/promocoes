import { Helmet, HelmetProvider } from "react-helmet-async";
<<<<<<< HEAD
import "./home.css";
=======
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faSquareXTwitter} from "@fortawesome/free-brands-svg-icons";
import "./Home.css";
>>>>>>> main


function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <HelmetProvider>
      <div className="app-container">
        <Helmet>
          <title>Promoções Inteligentes - As Melhores Ofertas</title>
          <meta
            name="description"
            content="Junte-se ao nosso canal exclusivo no Telegram para receber as melhores promoções."
          />
          <meta name="robots" content="index, follow" />
          <meta charSet="utf-8" />
        </Helmet>

        <main className="container">
          {/* Header com efeito visual */}
          <header className="header">
            <div className="logo-container">
              <img
                src="../imagens/logo.png"
                alt="Logo Promoções Inteligentes"
                className="logo"
              />
              <div className="logo-glow"></div>
            </div>
            <div className="header-info">
              <p>Ofertas atualizadas: {currentTime.toLocaleTimeString()}</p>
            </div>
          </header>

          {/* Conteúdo principal */}
          <div className="content-wrapper">
            <h1 className="title">
              <span className="title-gradient">Promoções Inteligentes</span>
            </h1>

            <div className="descriptions">
              <p className="description highlight">
                Entre no Grupo de Promoções no WhatsApp, é 100% grátis!
              </p>
              <p className="description">
                Receba as melhores promoções e economize em tudo que comprar!
              </p>
            </div>

            {/* Contador de membros (fake) */}
            <div className="members-counter">
              <div className="counter-text">
                <span className="counter-number">12.859</span>
                <span className="counter-label">pessoas já economizando</span>
              </div>
            </div>

            {/* Botão principal */}
            <a
              href="https://t.me/promo_inteligentes"
              target="_blank"
              rel="noopener noreferrer"
              className="buttonTelegram"
              aria-label="Entrar no canal Promoções Inteligentes no Telegram"
            >
              Entrar no grupo do Telegram
            </a>

            {/* Botão secundário */}
            <a
              href="#"
              className="buttonWhatsApp"
              aria-label="Entrar no grupo do WhatsApp"
            >
              Entrar no grupo do WhatsApp
            </a>

            {/* Vantagens */}
            <div className="benefits">
              <h2 className="benefits-title">Por que se juntar a nós?</h2>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <div className="benefit-icon">💰</div>
                  <h3>Economize Dinheiro</h3>
                  <p>Promoções, Cupons de desconto e muito mais!</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">⚡</div>
                  <h3>Ofertas Rápidas</h3>
                  <p>Alertas instantâneos para promoções relâmpago</p>
                </div>
              </div>
            </div>

            {/* Ícones de redes sociais */}
            <div className="social-section">
              <p className="social-text">Siga-nos em nossas redes sociais</p>
              <div className="iconesRedes">
                <a href="#" aria-label="X">
                  <FontAwesomeIcon icon={faSquareXTwitter} className="social-icon" />              
                </a>
                <a href="#" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                </a>
                <a href="#" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebook} className="social-icon" />     
                </a>
              </div>
            </div>
          </div>

          <footer className="footer">
            <small>
              © 2025 Promoções Inteligentes - Todos os direitos reservados.
            </small>
          </footer>
        </main>
      </div>
    </HelmetProvider>
  );
}

export default Home;
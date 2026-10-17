import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className="top">
        <a className="brand" href="/" aria-label="UZTA, accueil">UZTA</a>
        <nav aria-label="Navigation principale">
          <a className="active" aria-current="page" href="/">Accueil</a>
          <a href="/a-propos">À propos</a>
          <a href="/blog">Blog</a>
        </nav>
      </header>
      <main>
        <div className="flag" aria-label="Drapeau basque avec le logo UZTA">
          <Image className="logo" src="/logo-uzta.jpg" alt="Logo UZTA — association des commerçants" width={210} height={210} priority />
        </div>
        <section className="intro">
          <h1>Tu cherches un <strong className="red">commerçant</strong><br className="mobile-break"/> ou un <strong className="green">artisan</strong> de confiance<br className="mobile-break"/> à <strong className="red">Ustaritz</strong>, mais tu ne sais pas<br className="mobile-break"/> vers qui te tourner ?</h1>
          <p>Découvre les <strong className="red">commerçants</strong>, <strong className="green">artisans</strong> et<br className="mobile-break"/> <strong className="red">professionnels</strong> d'<strong className="green">Ustaritz</strong> réunis au sein de<br className="mobile-break"/> l'association <strong className="red">UZTA</strong>.</p>
          <p>Des professionnels <strong className="green">près de chez toi</strong>, des<br className="mobile-break"/> <strong className="red">savoir-faire locaux</strong> et des <strong className="green">visages</strong> à découvrir.</p>
          <a className="cta" href="#professionnels">Je découvre les professionnels d'Ustaritz <span aria-hidden="true" className="arrow">→</span></a>
        </section>
        <div className="village" role="img" aria-label="Vue du village figurant dans la référence fournie" />
      </main>
      <footer><span>UZTA</span><nav aria-label="Navigation de pied de page"><a href="/">Accueil</a><a href="/a-propos">À propos</a><a href="/blog">Blog</a></nav></footer>
    </>
  );
}

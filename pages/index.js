import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Ned Ryerson - Im a people person
        </title>
        <link rel="icon" href="./static/favicon.ico" />
        <meta
          name="description"
          content="Ned Ryerson Im a people person."
        />
        <meta name="author" content="Owen Bick" />
      </Head>
      <header className="header">
        <div className="header__logo">
          <Link href="/">
            <a>
              <div className="header__logo__img"></div>
            </a>
          </Link>
        </div>
        <div className="header__nav">
          <ul className="header__nav__list">
            <li className="header__nav__item">
              <Link className="header__nav__link" href="/">
                <a className="header__nav__link active">Index</a>
              </Link>
            </li>
            <li className="header__nav__item">
              <Link href="/about">
                <a className="header__nav__link">About</a>
              </Link>
            </li>
            <li className="header__nav__item">
              <Link className="header__nav__link" href="/contact">
                <a className="header__nav__link">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <Layout>
        <section className="hero">
          <div className="container">
            <h1>
              Hi, I&apos;m <span className="line">Ned Ryerson</span>{" "}
              <span className="wave">👋</span>
            </h1>
            <h2>I&apos;m a people person, people like me</h2>
          </div>
        </section>
        <section className="portfolio">
          <div className="container">
            <h3>Featured Projects</h3>
            <ul className="portfolio__list">
              <li>
                <a href="//weekendlabs.net" target="_blank">Weekend Labs</a>
                <span>, A full-service branding & product agency</span>
              </li>
              <li>
                <a href="//macdb.io" target="_blank">MacDB</a>
                <span>, A database of macOS versions (coming soon)</span>
              </li>
              <li>
                <a href="//devgigs.com" target="_blank">DevGigs.com</a>
                <span>, Jobs for coders (coming soon)</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="about">
          <div className="container">
            <h3>About Me</h3>
            <p>
              I&apos;m Owen, I&apos;m a product designer and web developer that currently lives in
              Boston. I&apos;ve helped many companies build digital products that are
              more human. My philosophy is simple: design products in a way that
              allows someone to use the product for the first time and feel like
              they understand what they&apos;re looking at. They don&apos;t need to be
              experts, but a digital product should not be overwhelming.
              Currently, I work at 829 Studios, but I&apos;m always open to freelance
              projects and can be contacted here.
            </p>
            <Link href="/about">
              <a>Read more &#8594;</a>
            </Link>
          </div>
        </section>
        <section className="social">
          <div className="container">
            <h3>Follow me</h3>
            <span>Twitter: </span>
            <a href="//twitter.com/VaLandscapes" target="_blank">@VaLandscapes</a>
            <br />
            <span>LinkedIn: </span>
            <a href="//linkedin.com/in/alecbcampbell" target="_blank">@alecbcampbell</a>
            <br />
            <span>Codepen: </span>
            <a href="//codepen.com/@uvacoder" target="_blank">@uvacoder</a>
            <br />
            <span>Hashnode: </span>
            <a href="//hashnode.com/@uvacoder" target="_blank">@uvacoder</a>
            <br />
            <span>GitHub: </span>
            <a href="//github.com/uvacoder" target="_blank">@uvacoder</a>
            <br />
            <span>Dribbble: </span>
            <a href="//dribbble.com/uvacoder" target="_blank">@uvacoder</a>
          </div>
        </section>
      </Layout>
      <footer className="footer">
        <div className="container">
          <ul className="footer__list">
            <li className="footer__list__item">
              <Link href="/">
                <a className="footer__list__link">Index</a>
              </Link>
            </li>
            <li className="footer__list__item">
              <Link href="/about">
                <a className="footer__list__link">About</a>
              </Link>
            </li>
            <li className="footer__list__item">
              <Link href="/contact">
                <a className="footer__list__link">Contact</a>
              </Link>
            </li>
          </ul>
          <span>
            Copyright &copy; 2022 uvacoder. All Rights Reserved. This website
            doesn’t use any cookies.
          </span>
        </div>
      </footer>
    </>
  );
}

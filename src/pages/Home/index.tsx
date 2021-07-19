import { About } from "../../components/About";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { InitialSession } from "../../components/InitialSession";
import { Projects } from "../../components/Projects";
import { Skills } from "../../components/Skills";

export const Home = () => {
  return (
    <>
      <Header />
      <InitialSession />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

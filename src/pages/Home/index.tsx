import { About } from "../../components/About";
import { Header } from "../../components/Header";
import { InitialSession } from "../../components/InitialSession";

export const Home = () => {
  return (
    <body>
      <Header />
      <InitialSession />
      <About />
    </body>
  );
};

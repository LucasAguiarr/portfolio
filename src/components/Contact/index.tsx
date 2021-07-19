import { Wrapper, Header, ContactCardWrapper } from "./styles";
import { AiOutlineGithub } from "react-icons/ai";
import { BiCheckboxSquare } from "react-icons/bi";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { colors } from "../../Tools/colors";
import { ContactCard } from "../Cards/ContactCard";

export const Contact = () => {
  return (
    <Wrapper>
      <Header>
        <BiCheckboxSquare size={30} color={colors.cyan} />
        <h4>Contato</h4>
      </Header>

      <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h6>
      <h6>Lorem ipsum, dolor sit amet.</h6>

      <ContactCardWrapper>
        <div>
          <ContactCard
            title={"(48) 9 9811 1249"}
            icon={<FaWhatsapp size={30} color={colors.cyan} />}
            onClick={() => {}}
          />
          <ContactCard
            title={"luqkinhaas@gmail.com"}
            icon={<HiOutlineMail size={30} color={colors.cyan} />}
            onClick={() => {}}
          />
        </div>

        <div>
          <ContactCard
            title={"LucasAguiarr"}
            icon={<AiOutlineGithub size={30} color={colors.cyan} />}
            onClick={() => {}}
          />
          <ContactCard
            title={"lucasaguiiar"}
            icon={<RiLinkedinBoxLine size={30} color={colors.cyan} />}
            onClick={() => {}}
          />
        </div>
      </ContactCardWrapper>
    </Wrapper>
  );
};

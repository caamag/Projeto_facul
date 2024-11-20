import * as Css from "./style";
import communityImage from "../../assets/community.jpg";
import { useState } from "react";
import ResponseMessage from "../../components/reponseMessage";

const Community = () => {
  const [message, setMessage] = useState<boolean>();

  return (
    <Css.CommunityContainer>
      {message && (
        <>
          <ResponseMessage
            status="success"
            message="Email enviado com sucesso"
          />
        </>
      )}
      <h1>Faça parte da nossa comunidade!</h1>
      <p>Acompanhe as novas receitas e venha para o nosso time.</p>

      <Css.PresentationSection>
        <Css.PresentationText>
          <h2>Uma Comunidade Unida Pelo Sabor e Pela Saúde</h2>
          <p>
            Imagina um lugar onde o doce é sinônimo de cuidado, criatividade e
            saúde. Nossa comunidade nasceu para reunir pessoas que acreditam que
            é possível transformar receitas tradicionais em verdadeiras
            experiências inclusivas, perfeitas para quem precisa cuidar dos
            níveis de açúcar no sangue, mas não quer abrir mão de sabor e
            prazer.
          </p>
          <p>
            Aqui, você encontra apoio, troca de ideias e uma fonte infinita de
            inspiração para criar doces que encantam paladares e promovem o
            bem-estar. Seja compartilhando suas receitas, aprendendo novas
            técnicas ou apenas conectando-se com pessoas que compartilham da
            mesma paixão, você sempre encontrará um espaço acolhedor.
          </p>
          <p>
            Junte-se a nós e descubra como adoçar a vida de forma saudável,
            criativa e cheia de amor!
          </p>
        </Css.PresentationText>
        <Css.PresentationImage>
          <img src={communityImage} alt="" />
        </Css.PresentationImage>
      </Css.PresentationSection>

      <Css.InviteContainer>
        <h1>Deseja receber notificações?</h1>
        <p>Informe o seu e-mail e esteja por dentro de todas as novidades.</p>
        <input type="email" placeholder="Informe o seu e-mail:" />
        <button
          onClick={() => {
            setMessage(true);
            setTimeout(() => {
              setMessage(false);
            }, 4000);
          }}
        >
          Enviar
        </button>
      </Css.InviteContainer>
    </Css.CommunityContainer>
  );
};

export default Community;

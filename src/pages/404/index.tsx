import { useNavigate } from "react-router-dom";
import { cursorTypist } from "src/static/const";
import Typist from "react-typist";

function Custom404() {
  const navigate = useNavigate();

  return (
    <div className="custom404">
      <div className="caution-tape">
        <Typist avgTypingDelay={60} cursor={cursorTypist}>
          <Typist.Delay ms={2500} />
          <p>404 Page not found</p>
        </Typist>
      </div>

      <button onClick={() => navigate("/")} type="button" name="back">
        <Typist avgTypingDelay={50} cursor={cursorTypist}>
          <Typist.Delay ms={4200} />
          Go back
        </Typist>
      </button>
      <Typist stdTypingDelay={0} avgTypingDelay={50} cursor={cursorTypist}>
        <Typist.Delay ms={500} />
        <p className="problem-text">Oops. Something went wrong.</p>
      </Typist>
    </div>
  );
}

export default Custom404;

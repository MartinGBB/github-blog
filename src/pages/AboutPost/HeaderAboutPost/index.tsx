import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { HeaderPostContainer } from "./styles";


export function HeaderAboutPost() {
  
  return (
    <HeaderPostContainer>
      <header>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </Link>

        <Link to="/">
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      </header>

      <h1>JavaScript data types and data structures</h1>

      <div>
        <span><FontAwesomeIcon icon={faGithub} /> cameronwll</span>
        <span><FontAwesomeIcon icon={faCalendarDay} /> Rocketseat</span>
        <span><FontAwesomeIcon icon={faComment} /> 32 seguidores</span>
      </div>
    </HeaderPostContainer>
  )
}
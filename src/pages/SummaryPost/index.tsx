import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBuilding, faCalendarDay, faChevronLeft, faChevronRight, faComment, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import { SummaryPostContainer, SummaryPostContent } from "./styles";

export function SummaryPost() {
  // const { id } = useParams();
  
  return (
    <SummaryPostContainer>
      <SummaryPostContent>
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
      </SummaryPostContent>
    </SummaryPostContainer>
  )
}
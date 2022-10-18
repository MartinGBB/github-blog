import { faArrowUpRightFromSquare, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
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
      </SummaryPostContent>
    </SummaryPostContainer>
  )
}
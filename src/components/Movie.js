import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import {
  SideSheet,
  Heading,
  Paragraph,
  Button,
  AddIcon,
  Alert,
} from "evergreen-ui";

const defaultImagePlaceholder =
  "https://critics.io/img/movies/poster-placeholder.png";

export default function Movie({ movie, Title, Year }) {
  const { addMovieToNominateList, nominateList } = useContext(GlobalContext);

  const [show, setShow] = useState(false);

  const poster =
    movie.Poster === "N/A" ? defaultImagePlaceholder : movie.Poster;

  let storedMovie = nominateList.find((o) => o.imdbID === movie.imdbID);

  const nominationDisabled = storedMovie ? true : false;

  return (
    <div className="movie">
      <h2>{Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${Title}`}
          src={poster}
          onClick={() => setShow({ isShown: true })}
        />
      </div>
      <React.Fragment>
        <SideSheet
          isShown={show.isShown}
          onCloseComplete={() => setShow({ isShown: false })}
        >
          <img src={poster} alt=""></img>
          <Heading margin={40} size={900}>
            {Title}
          </Heading>
          <Paragraph margin={40} color="muted" size={500}>
            ({Year})
          </Paragraph>
          {nominateList.length >= 5 &&
          <Alert
          intent="danger"
          title="You have added the max (5) amount of nominations to your List"
        />
          }
          

          <Button
            appearance="primary"
            intent="success"
            iconBefore={AddIcon}
            margin={40}
            disabled={nominationDisabled}
            onClick={() => addMovieToNominateList(movie)}
          >
            Nominate
          </Button>
        </SideSheet>
      </React.Fragment>
    </div>
  );
}

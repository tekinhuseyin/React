import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  console.log(data);
  return (
    <Container className="rounded-4 my-4 p-3 card-container">
      <Row>
        {data.map((player, index) => {
          return <PlayerCard key={index} {...player} />;
        })}
      </Row>
    </Container>
  );
};
export default CardContainer;

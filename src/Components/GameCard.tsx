import { Card, CardBody, Heading, Image} from "@chakra-ui/react";
import { Game } from "../Hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
      </CardBody>
    </Card>
  );
<<<<<<< HEAD
}; 
=======
};
>>>>>>> ae6957df5b3e97980874859f7674fbfe7a75ff80

export default GameCard;

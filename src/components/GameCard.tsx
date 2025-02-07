import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card height="100%" display="flex" flexDirection="column">
            <Image
                src={getCroppedImageUrl(game.background_image)}
                height="200px"
                objectFit="cover"
            />
            <CardBody display="flex" flexDirection="column" flex="1">
                <HStack justifyContent="space-between" marginBottom={3}>
                    <PlatformIconList
                        platforms={game.parent_platforms?.map((p) => p.platform)}
                    />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize="2xl" flex="1">
                    <Link to={"/games/" + game.slug}>{game.name}</Link>
                    <Emoji rating={game.rating_top} />
                </Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;

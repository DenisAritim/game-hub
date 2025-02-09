import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
    const { slug } = useParams();
    const { data: game, isLoading, error } = useGame(slug!);

    if (isLoading) return <Spinner />;

    if (error) throw error;

    return (
        <>
            <Heading>{game?.name}</Heading>
            <ExpandableText>
                {game?.description_raw
                    ? game.description_raw
                    : "No description avaliable"}
            </ExpandableText>
        </>
    );
};

export default GameDetailPage;

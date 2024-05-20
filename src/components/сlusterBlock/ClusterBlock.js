import {ClusterName, Container, OutCluster, Participants} from "./clusterStyles";
import ChallengeBlock from "../challengeBlock/ChallengeBlock";
import React from "react";
import PublicationFeed from "../publicationFeed/PublicationFeed";
const ClusterBlock =({ clusterName })=>{
    return(
        <Container>
            <ClusterName>{clusterName}</ClusterName>
            <OutCluster>Покинуть кластер</OutCluster>
            <Participants>1,956 участников</Participants>
            <ChallengeBlock/>
            <PublicationFeed/>
        </Container>
    )
}
export default ClusterBlock;

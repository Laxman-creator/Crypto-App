import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Container,
  HStack,
  VStack,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import Loader from "./loader";
import Error from "./error";
const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(false);
  useEffect(() => {
    const fecthExchanges = async () => {
    try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
  
        setLoading(false);
    } catch (error) {
        seterror(true);
       // setLoading(false);
    }
    };
    fecthExchanges();
  }, []);
  if(error) return<Error msg={'error while fetching data...'}/>
  return (
    <Container maxW={"container.xl"} >
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"}>
            {exchanges.map((i) => (
              <ExchangeCard
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
                key={i.id}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};
const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target={"blank"}>
    <VStack
      width={"52 "}
      shadow={"lg"}
      p={"30"}
      borderRadius={"2xl"}
      transition={"all 0.3s"}
      margin={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.2)",
        },
      }}
    >
      <Image src={img} w={"10"} h={"10"} objectFit={"contain"}></Image>
      <Heading size={"md"} noOfLines={"1"}>
        {rank}
      </Heading>
      <Text noOfLines={"1"}>{name}</Text>
    </VStack>
  </a>
);

export default Exchanges;

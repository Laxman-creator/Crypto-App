import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Container,
  HStack,
 
} from "@chakra-ui/react";
import Loader from "./loader";
import Error from "./error";
import CoinCard from "./CoinCard";
const Coin = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const CurrencySymbol=currency==="inr"?"₹":currency==="euro"?"€ ":"$";
  useEffect(() => {
    const fecthCoin = async () => {
    try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        console.log(data);
  
        setLoading(false);
    } catch (error) {
        seterror(true);
       // setLoading(false);
    }
    };
    fecthCoin();
  }, [currency,page]);
  if(error) return<Error msg={'error while fetching data...'}/>
  return (
    <Container maxW={"container.xl"} >
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"}>
            {coins.map((i) => (
              <CoinCard
                name={i.name}
                img={i.image}
                symbol={i.symbol}
                url={i.url}
                price={i.current_price}
                key={i.id}
                id={i.id}
                CurrencySymbol={CurrencySymbol}
               
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};




export default Coin;

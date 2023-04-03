import React from 'react'
import {
    
    
    VStack,
    Image,
    Heading,
    Text,
    Link
  } from "@chakra-ui/react";

    const CoinCard= ({ name, img, symbol, url,id,price,CurrencySymbol="h" }) => (
        <Link  to={`/coin/${id}`} target={"blank"}>
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
              {name}
            </Heading>
            <Text noOfLines={"1"}>{symbol}</Text> 
            <Text noOfLines={"1"}>{url}</Text>
            <Text noOfLines={"1"}>{price ?`${CurrencySymbol}${price}`:"NA" }</Text>
          </VStack>
        </Link>
      );
      
    
  


export default CoinCard

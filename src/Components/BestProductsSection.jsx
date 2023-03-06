import React from 'react'
import { Box, 
    Button,
     Heading, 
     Text,
     Icon, 
 } from '@chakra-ui/react'
import Carousels from './Carousels'
import {AiOutlineArrowRight} from "react-icons/ai"
import img0 from "../Images/image 26-0.png"
import img1 from "../Images/image 26-1.png"
import img2 from "../Images/image 26-2.png"
import img3 from "../Images/image 26-3.png"
import img4 from "../Images/image 26-4.png"
import { useState } from 'react'
import { useEffect } from 'react'

const BestProductsSection = () => {

    const [moreDisplay,setMoreDisplay]=useState("none");
    const [btnDisplay,setBtnDisplay]=useState("block");
    const [moreDisplayStatus,setMoreDisplayStatus]=useState(false)

    let items= [
        {
            img:img0,
            discount:"-20%",
            category:"Mens Shoes",
            title:"BasketBall Sports Blue Shoes",
            price:"$101.00 - $111.00",
            star:"⭐⭐⭐⭐⭐",
            btnText:"ADD TO CART"  
        },
        {
            img:img1,
            discount:"HOT",
            category:"Mens Shoes",
            title:"Gentle Casual Blue Shoes",
            price:"$101.00 - $111.00",
            star:"⭐⭐⭐⭐",
            btnText:"SELECET OPTIONS"  
        },
        {
            img:img2,
            discount:"-20%",
            category:"Mens Belt",
            title:"Mens Belt Set",
            price:"$101.00 - $111.00",
            star:"⭐⭐⭐⭐⭐",
            btnText:"SELECET OPTIONS"  
        },
        {
            img:img3,
            discount:"-20%",
            category:"Mens Bag",
            title:"Mens Sports Travel Bag",
            price:"$101.00 - $111.00",
            star:"⭐⭐⭐⭐⭐",
            btnText:"SELECET OPTIONS"  
        },
        {
            img:img4,
            discount:"-20%",
            category:"Womens Purse",
            title:"Women Casual HandBag",
            price:"$101.00 - $111.00",
            star:"⭐⭐⭐⭐",
            btnText:"ADD TO CART"  
        }
      ];

      let xtraItems= [
        {
            img:img0,
            discount:"-20%",
            category:"Mens Shoes",
            title:"BasketBall Sports Blue Shoes",
            price:"$101.00 - $111.00",
            star:"⭐⭐⭐⭐⭐",
            btnText:"ADD TO CART"  
        },
        {
            img:img1,
            discount:"HOT",
            category:"Mens Shoes",
            title:"Gentle Casual Blue Shoes",
            price:"$101.00 - $111.00",
            star:"⭐⭐⭐⭐",
            btnText:"SELECET OPTIONS"  
        },
        {
            img:img2,
            discount:"-20%",
            category:"Mens Belt",
            title:"Mens Belt Set",
            price:"$101.00 - $111.00",
            star:"⭐⭐⭐⭐⭐",
            btnText:"SELECET OPTIONS"  
        },
        {
            img:img3,
            discount:"-20%",
            category:"Mens Bag",
            title:"Mens Sports Travel Bag",
            price:"$101.00 - $111.00",
            star:"⭐⭐⭐⭐⭐",
            btnText:"SELECET OPTIONS"  
        },
        {
            img:img4,
            discount:"-20%",
            category:"Womens Purse",
            title:"Women Casual HandBag",
            price:"$101.00 - $111.00",
            star:"⭐⭐⭐⭐",
            btnText:"ADD TO CART"  
        }
      ];

      
     const handleDisplay=()=>{
        setMoreDisplayStatus(!moreDisplayStatus)
        setBtnDisplay("none")
        console.log(moreDisplay)
     }

     useEffect(()=>{
        moreDisplayStatus?setMoreDisplay("block"):setMoreDisplay("none");
     },[moreDisplayStatus,handleDisplay])


  return (
    <>
        <Text mt="5%" fontFamily="Montserrat">RECOMMENDED FOR YOU</Text>
        <Heading color="blue.700" mb="2%" 
        fontSize={["20px","22px","25px","30px"]}
        fontFamily="Montserrat">BEST PRODUCTS</Heading>

        <Box w="80%" m="auto" >
        <Carousels items={items}></Carousels>
        </Box>
        <Box display={moreDisplay} w="80%" m="auto" mt="5%">
        <Carousels  items={xtraItems}></Carousels>
        </Box >
        

        <Button m="auto" display={btnDisplay} mt="2%" bg="blue.700" onClick={handleDisplay}>View More <Icon as={AiOutlineArrowRight}></Icon></Button>
    </>
  )
}

export default BestProductsSection
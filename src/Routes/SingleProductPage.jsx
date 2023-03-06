import React, { useState } from 'react'
import productImg from"../Images/Rectangle 99.png"
import productpic1 from"../Images/Rectangle 107-0.png";
import productpic2 from"../Images/Rectangle 107-1.png";
import productpic3 from"../Images/Rectangle 107-2.png";
import reviewerImg1 from"../Images/Rectangle 146-0.png";
import reviewerImg2 from"../Images/Rectangle 146-1.png";
import reviewerImg3 from"../Images/Rectangle 146-2.png";
import addReviewImg from"../Images/Rectangle 70.png";
import {BsBag} from "react-icons/bs";
import { Tabs, TabList, TabPanels, Tab, TabPanel, UnorderedList, ListItem, SimpleGrid, Grid, GridItem, Input, FormControl, Textarea, useDisclosure } from '@chakra-ui/react'
import { Box,Icon, Button, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import BestProductsSection from '../Components/BestProductsSection';
import BlogsSection from '../Components/BlogsSection';
import Footer from '../Components/Footer';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
  } from '@chakra-ui/react';

const SingleProductPage = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [pic,setPic]=useState("")

    let data={
        title:"Brown women casual handBag",
        image:productImg,
        stars:"⭐⭐⭐⭐⭐",
        price:"300.00",
        finalPrice:"$209.00-$269.00",
        info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quo natus vero! Recusandae beatae alias ipsam assumenda quod aipisci, nam vel dolor!",
        sku:"654111995-1-2",
        categories:["ACCESSORIES,","FASHION,","WOMEN"],
        tags:["BAG,","CLOTHES,","FASHION"],
        colors:["#ccc","bisque","yellowgreen"],
        size:["M","L","XL"],
        qty:1,
        pics:[productpic1,productpic2,productpic3],
        description:{
            heading:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates illo asperiores consequatur saepe officiis perspiciatis alias maiores tempora adipisci vero? Quaerat eveniet dolores adipisci sint laborum ad, unde distinctio quae!",
            bullet_points:[
                "Lorem ipsum Dolor",
                "Lorem ipsum, dolor sit amet",
                "Lorem ipsum, dolor sit"
            ],
            ending:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        },
        additional_info:[
            "Lorem ipsum Dolor",
            "Lorem ipsum, dolor sit amet",
            "Lorem ipsum, dolor sit"
        ],
        reviews:[
            {
                image:reviewerImg1,
                name:"Joe Adam",
                comment:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates illo asperiores consequatur saepe officiis perspiciatis alias maiores tempora adipisci vero? Quaerat eveniet dolores adipisci sint laborum ad, unde distinctio quae!",
                stars:"⭐⭐⭐⭐⭐"
            },
            {
                image:reviewerImg2,
                name:"Anna",
                comment:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates illo asperiores consequatur saepe officiis perspiciatis alias maiores tempora adipisci vero? Quaerat eveniet dolores adipisci sint laborum ad, unde distinctio quae!",
                stars:"⭐⭐⭐⭐⭐"
            },
            {
                image:reviewerImg3,
                name:"Alex",
                comment:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates illo asperiores consequatur saepe officiis perspiciatis alias maiores tempora adipisci vero? Quaerat eveniet dolores adipisci sint laborum ad, unde distinctio quae!",
                stars:"⭐⭐⭐⭐⭐"
            }
        ]
    }

    const handleModal=(e)=>{
        setPic(e)
        onOpen()
    }

    const closeModal=()=>{
        onClose();
    }

  return (
    <>
      <Flex w="80%" m="auto" mt="3%"  
      flexDirection={["column","column","row","row"]}
      justifyContent={["space-between"]}
      >
        <Box 
        w={["100%","100%","50%","40%"]} 
        >
            <Image src={data.image} h={["100%","100%","100%","554px"]} w="100%"></Image>
        </Box>
       
        <VStack pb="2%" w={["100%","100%","50%","60%"]}
        pl="2%" textAlign={"start"}
        alignItems="start" 
        justifyContent="space-between">
            <Heading color="#225886" 
            fontSize={['20px','20px','22px','30px']} 
            lineHeight="36.57px"
            fontWeight={"800"}
            fontFamily="Montserrat">{data.title}</Heading>

            <Text h="22.17px">{data.stars}</Text>

            <HStack justifyContent={"start"} w="100%">
                <Text textDecoration={"line-through"}
                 color="gray" 
            fontSize={['10px','12px','14px','16px']}
            lineHeight="20.57px"
            fontWeight={"700"}
            fontFamily="Montserrat">{data.price}</Text>
                <Text color="#1E1E1E" 
            fontSize={['16px','16px','16px','22px']} 
            lineHeight="27px"
            fontWeight={"700"}
            fontFamily="Montserrat">{data.finalPrice}</Text>
            </HStack>

            <Text color="#1E1E1E" 
            fontSize={['14px','14px','14px','16px']} 
            fontWeight={"400"}
            fontFamily="Montserrat">{data.info}</Text>

            <Text color="#1E1E1E" 
            fontSize={['11px','12px','12px','15px']}
            fontWeight={"400"}
            lineHeight="18px"
            fontFamily="Montserrat">SKU: <span style={{fontWeight:"bold"}}>{data.sku}</span></Text>

            <HStack w="100%">
            <Text color="#1E1E1E" 
            fontSize={['11px','12px','12px','15px']}
            fontWeight={"400"}
            lineHeight="18px"
            fontFamily="Montserrat">
                CATEGORIES: 
            </Text> 
             <HStack flexWrap={'wrap'}
               justifyContent={"start"} textAlign="start" w="100%">
                {data.categories?.map((el,i)=>
                <Text key={i}
                color="#1E1E1E" 
                fontSize={['12px','12px','12px','15px']}
                fontWeight={"bold"}
                lineHeight="18px"
                fontFamily="Montserrat" 
                 textAlign="start">{el}</Text>
                )}
            </HStack>
            </HStack>

            <HStack w="100%">
            <Text color="#1E1E1E" 
                fontSize={['11px','12px','12px','15px']}
                fontWeight={"400"}
                lineHeight="18px"
                fontFamily="Montserrat" >
                TAGS: 
            </Text> 
             <HStack flexWrap={'wrap'} justifyContent={"start"} textAlign="start" w="100%">
                {data.tags?.map((el,i)=>
                <Text key={i} color="#1E1E1E" 
                fontSize={['11px','12px','12px','15px']}
                fontWeight={"bold"}
                lineHeight="18px"
                fontFamily="Montserrat" textAlign="start">{el}</Text>
                )}
            </HStack>
            </HStack>

            <VStack w="100%" alignItems={"start"}>
            <Text color="#1E1E1E" 
                fontSize={['11px','12px','13px','15px']}
                fontWeight={"400"}
                lineHeight="18px"
                fontFamily="Montserrat" >
                COLORS: 
            </Text> 
             <HStack flexWrap={'wrap'} 
             justifyContent={"start"} textAlign="start" w="100%">
                {data.colors?.map((el,i)=>
                <Box key={i} 
                h={['25px','30px','35px','40px']}
                w={['25px','30px','35px','40px']}
                 bg={el}></Box>
                )}
            </HStack>
            </VStack>

            <VStack w="100%" alignItems={"start"}>
            <Text color="#1E1E1E" 
                fontSize={['11px','12px','13px','15px']}
                fontWeight={"400"}
                lineHeight="18px"
                fontFamily="Montserrat">
                SIZE: 
            </Text> 
             <HStack flexWrap={'wrap'} justifyContent={"start"} textAlign="start" w="100%">
                {data.size?.map((el,i)=>
                <Box key={i}
                h={['25px','30px','35px','40px']}
                w={['25px','30px','35px','40px']} 
                  display={"flex"} fontWeight={'600'}
                justifyContent="center" alignItems={"center"} 
                fontSize={['12px','14px','16px','18px']}
                lineHeight="22px" color={"#1E1E1E"}
                border="2px solid #1E1E1E">{el}</Box>
                )}
            </HStack>
            </VStack>

            <HStack  alignItems={'center'} >
                <HStack boxSizing='border-box' justifyContent={"start"}>
                <Box position={'relative'} left="0px" 
                h={['28px','33px','38px','43px']} 
                w={['22px','37px','32px','37px']} 
                display={"flex"} fontWeight={'500'}
                justifyContent="center" alignItems={"center"} 
                fontSize={['12px','14px','16px','18px']}
                border="2px solid #ccc" color={"#1E1E1E"}>-</Box>
                <Box position={'relative'} left="-8px" 
                 h={['28px','33px','38px','43px']} 
                 w={['22px','37px','32px','37px']}  
                display={"flex"} fontWeight={'500'}
                justifyContent="center" 
                alignItems={"center"} 
                fontSize={['12px','14px','16px','18px']}
                border="2px solid #ccc" color={"#1E1E1E"}>{data.qty}</Box>
                <Box  position={'relative'} left="-16px" ml="-8px" 
                 h={['28px','33px','38px','43px']} 
                 w={['22px','37px','32px','37px']} 
                 display={"flex"} fontWeight={'500'}
                justifyContent="center" alignItems={"center"} 
                fontSize={['12px','14px','16px','18px']}
                border="2px solid #ccc" color={"#1E1E1E"}>+</Box>
                </HStack>
                <Button 
                h={['28px','33px','38px','43px']} 
                color="#FFFFFF" mt="7%" 
                fontSize={'15px'}
                fontWeight={"400"}
                lineHeight="18px"
                fontFamily="Montserrat" 
                borderRadius="1.4641px" bg="#225886"
                  >Add to cart <Icon ml="5%" as={BsBag}></Icon></Button>
            </HStack>
        </VStack>
      </Flex>

      {/* screenshot-pics */}

      <HStack h="97px" w="80%" m="auto" justifyContent={'flex-start'} mt="2%" mb="1%">
            {data.pics.map((e,i)=>
            <Image 
            key={i}  h="97px" w="97px" src={e}></Image>)}
      </HStack>

      {/* Tabs-section */}

       <Tabs w="80%" m="auto" maxW="80%">
            <TabList color="#D9D9D9" w="100%"
                fontSize={['10px','12px','14px','16px']} maxW="100%"
                lineHeight="22px"
                fontFamily="Montserrat"  >
                <Tab fontWeight={"700"} fontSize={['10px','12px','14px','16px']}>DESCRIPTION</Tab>
                <Tab fontWeight={"700"}  fontSize={['10px','12px','14px','16px']}>ADDITIONAL INFORMATION</Tab>
                <Tab fontWeight={"700"} fontSize={['10px','12px','14px','16px']}>REVIEWS({data.reviews.length})</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <VStack textAlign={"start"} alignItems="start">
                        <Text color="#282828" 
                            fontSize='16px'
                            fontWeight={"400"}
                            lineHeight="20.4px"
                            fontFamily="Montserrat" >{data.description.heading}</Text>
                        <UnorderedList w="100%" pl="7%">
                        {data.description.bullet_points.map((e,i)=>
                            <ListItem key={i} color="#282828" 
                            fontSize={'16px'}
                            fontWeight={"400"}
                            lineHeight="20.4px"
                            fontFamily="Montserrat">{e}</ListItem>
                        )}
                        </UnorderedList>
                        <Text color="#282828" 
                            fontSize={'16px'}
                            fontWeight={"400"}
                            lineHeight="20.4px"
                            fontFamily="Montserrat">{data.description.ending}</Text>
                    </VStack>
                </TabPanel>
                <TabPanel>
                    <UnorderedList w="100%" pl="7%"
                     textAlign={'start'}
                     color="#282828" 
                            fontSize={'16px'}
                            fontWeight={"400"}
                            lineHeight="20.4px"
                            fontFamily="Montserrat">
                    {data.additional_info.map((e,i)=>
                        <ListItem key={i}>{e}</ListItem>
                    )}
                    </UnorderedList>
                </TabPanel>
                <TabPanel>
                    <SimpleGrid columns={[1,1,2,3]}>
                        {data.reviews.map((e,i)=>
                            <HStack key={i} w="100%" alignItems={'flex-start'} m={'2%'}>
                                <Image w="58px" h="58px" src={e.image}></Image>
                                <VStack textAlign={'start'} alignItems={'start'}
                                justifyContent="start">
                                    <Heading color="#282828" 
                                        fontSize={'16px'}
                                        fontWeight={"700"}
                                        lineHeight="20.4px"
                                        fontFamily="Montserrat">{e.name}</Heading>
                                    <Text color="#282828" 
                                        fontSize={'16px'}
                                        fontWeight={"400"}
                                        lineHeight="20.4px"
                                        fontFamily="Montserrat">{e.comment}</Text>
                                    <Text h="22px">{e.stars}</Text>
                                </VStack>
                            </HStack>
                        )} 
                    </SimpleGrid>

                    <Flex w="80%" 
                        gap={"2%"} m="auto" mt="7%" 
                        flexDirection={["column","column","row","row"]}> 
                        <Box w={["100%","100%","50%","50%"]}>
                        <Image src={addReviewImg}  h="100%"
                            w="100%">
                        </Image>
                        </Box>
                        <FormControl pl={["0px","0px","2%","2%"]} 
                        pt={["2%","2%","0%","0%"]} w={["100%","100%","50%","50%"]}>
                            <Heading color="#225886" 
                            fontSize={'25px'}
                            fontWeight={"400"}
                            lineHeight="30.4px"
                            fontFamily="Montserrat">ADD YOUR REVIEW</Heading>
                            <Grid templateColumns={"repeat(2,1fr)"} gap="2%">
                            <GridItem >
                                <Input mt={["5%","5%","5%","5%"]} _placeholder={{color:"#282828"}} borderBottom="2px" type='text' variant='flushed' placeholder='Name*'/>
                                <Input mt={["5%","5%","5%","5%"]} _placeholder={{color:"#282828"}} borderBottom="2px" type='text' variant='flushed' placeholder='Phone No.'/>
                                <Text mt={["5%","5%","5%","5%"]} textAlign="start"  h="40px" color="black">Comments*</Text>
                            </GridItem>
                            <GridItem >
                                <Input mt={["5%","5%","5%","5%"]} _placeholder={{color:"#282828"}} borderBottom="2px" type='text' variant='flushed' placeholder='Email*'/>
                                <Input mt={["5%","5%","5%","5%"]} _placeholder={{color:"#282828"}} borderBottom="2px" type='text' variant='flushed' placeholder='Product*'/>
                            </GridItem>
                            </Grid>
                            <Textarea borderBottom={"2px solid"} borderRadius="0px" />
                            <HStack><Button mt="2%" bg="#225886" 
                            color="#FFFFFF" 
                            fontSize={'15.9px'}
                            fontWeight={"700"}
                            lineHeight="23.4px"
                            fontFamily="Montserrat"
                            borderRadius={"2px"}>SUBMIT</Button></HStack>
                        </FormControl>
                    </Flex>
                </TabPanel>
            </TabPanels>
        </Tabs>
    
       <BestProductsSection></BestProductsSection>

        <BlogsSection></BlogsSection>

        <Footer></Footer>

      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent>
          <ModalBody p="7%">
            <Image h="400px" src={pic}></Image>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SingleProductPage
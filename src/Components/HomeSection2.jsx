import React from 'react'
import {
    Button, 
    Grid, 
    GridItem, 
    Heading, 
    HStack, 
    Flex, 
    Input, 
    Select, 
    Textarea, 
    FormControl} from '@chakra-ui/react'

const HomeSection2 = () => {
  return (
    <>
      <Flex w="80%" color={"#D9D9D9"} borderRadius="10px"
       gap={"2%"} m="auto" mt="7%" 
       flexDirection={["column","column","column","row"]}> 
       <iframe width="100%" height={["350.32px","400.32px","444.32px","516.32px"]} borderr-radius="10px"
       src="https://www.youtube.com/embed/mReZr_e70OA" 
       title="YouTube video player" frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowfullscreen></iframe>
       
       <FormControl>
        <Heading color={"#225886"} fontSize={"25px"} 
        mt={["2%","2%","2px","0px"]}
        fontWeight={"800"} textTransform="uppercase">Lorem ipsum dolor sit.</Heading>
        <Grid templateColumns={"repeat(2,1fr)"} gap="2%">
          <GridItem >
              <Input  _placeholder={{color:"#225886"}} m="1%" size="md" fontSize="12px" fontWeight="400" borderBottom="2px" type='text' variant='flushed' placeholder='Name*'/>
              <Input _placeholder={{color:"#225886"}} m="1%" size="md" fontSize="12px" fontWeight="400" borderBottom="2px" type='text' variant='flushed' placeholder='Phone No.'/>
              <Input _placeholder={{color:"#225886"}} m="1%" size="md" fontSize="12px" fontWeight="400" borderBottom="2px" type='text' variant='flushed' placeholder='Category'/>
              <Select _placeholder={{color:"#225886"}} m="1%" size="md" fontSize="12px" fontWeight="400" mt="10%" variant='unstyled' placeholder="Comments*" border="0px">

              </Select>
          </GridItem>
          <GridItem >
              <Input _placeholder={{color:"#225886"}} m="1%" size="md" fontSize="12px" fontWeight="400" borderBottom="2px" type='text' variant='flushed' placeholder='Email*'/>
              <Input _placeholder={{color:"#225886"}} m="1%" size="md" fontSize="12px" fontWeight="400" borderBottom="2px" type='text' variant='flushed' placeholder='Product.'/>
              <Input _placeholder={{color:"#225886"}} m="1%" size="md" fontSize="12px" fontWeight="400" borderBottom="2px" type='text' variant='flushed'  placeholder='Size'/>
              <Select _placeholder={{color:"#225886"}} m="1%" size="md" fontSize="12px" fontWeight="400" variant='unstyled' mt="10%" border="0px">
              </Select>
          </GridItem>
        </Grid>
        <Textarea borderBottom={"2px solid"} borderRadius="0px" />
        <HStack><Button mt="2%" bg="#225886" borderRadius="2px">SEND</Button></HStack>
      </FormControl>

       </Flex>
    </>
  )
}

export default HomeSection2
import { Box, 
  Button, 
  Divider,
  Icon, 
  Grid, 
  GridItem, 
  Heading, 
  HStack, 
  Image, 
  Text, 
  Flex, 
  Input, 
  Select, 
  Textarea } from '@chakra-ui/react'
import React from 'react'

import {
  FormControl,
} from '@chakra-ui/react'
import BrandSection from '../Components/BrandSection'
import Footer from '../Components/Footer'
import HomeSection1 from '../Components/HomeSection1'
import HomeSection2 from '../Components/HomeSection2'
import BestProductsSection from '../Components/BestProductsSection'
import BlogsSection from '../Components/BlogsSection'
import VendorSection from '../Components/VendorSection'


const Home = () => {
  return (
    <>
      {/* homeSection1  */}

      <HomeSection1></HomeSection1>

       {/* homeSection2  */}

       <HomeSection2></HomeSection2>

       {/* Brand-Section */}

       <BrandSection></BrandSection>

       {/* Vendor-Section */}

       <VendorSection></VendorSection>

       {/* BestProduct-Section */}

       <BestProductsSection></BestProductsSection>

       {/* Blogs-Section */}
      
       <BlogsSection></BlogsSection>

       {/* Footer */}

       <Footer/>

    </>
  )
}

export default Home
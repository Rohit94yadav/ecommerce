import { Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const BlogsDescription = ({desc}) => {

    const [readMore,setReadMore]=useState(false);
    const [name,setName]=useState("Read More");
    const [des,setDes]=useState("block");
    const [description,setDescription]=useState("none");
    const [desStatus,setDesStatus]=useState(true);
    const [descriptionStatus,setDescriptionStatus]=useState(false);

    const handleDes=(description)=>{
        let des = description.split("").map(String).filter((e,i)=>{
            if(i<50) return e
         })
         
         return <p>{des}<span>...</span></p>
     }
 
     const handleDescriptions=()=>{
         setReadMore(!readMore)
         setDescriptionStatus(!descriptionStatus)
         setDesStatus(!desStatus)
     }

    useEffect(()=>{
        descriptionStatus?setDescription("block"):setDescription("none")
        desStatus?setDes("block"):setDes("none")
        readMore?setName("Read Less"):setName("Read More")
    },[readMore,descriptionStatus,desStatus])

  return (
    <>
        <Text textAlign={"start"} display={des}
        fontSize="16px" fontWeight="400" >
            {handleDes(desc)}
        </Text>
        <Text fontSize="16px" fontWeight="400"
         textAlign={"start"} display={description} >
            {desc}
        </Text>
        <Text onClick={handleDescriptions} 
        textAlign={"start"} fontSize="16px" fontWeight={"bold"}>{name}</Text>
    </>
  )
}

export default BlogsDescription
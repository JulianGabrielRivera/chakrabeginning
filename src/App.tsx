import { useState } from 'react'

import Header from './components/Header'
import './App.css'
import {Box,Flex, Stack,VStack,HStack, Text, Heading,Button} from "@chakra-ui/react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Heading as="h1" fontSize="48px">Create React App</Heading>
      {/* <Flex justify="space-between" align="center"> */}
      {/* applies spacing */}
      {/* vstack applies spacing and also align center prop */}
      {/* Hstack does the same thing but horizontally */}
        <VStack spacing='24px'>
      {/* box becomes a div in the dom */}
   <Box bg='green' w="120px" h='150px'>This is a box</Box>
   {/* if we want semantic html dom then we have to use as and set that equal to whatever we want the element to be. */}
   <Box as='section' bg='green' w="120px" h='150px'>This is a box</Box>
   <Box bg='red' w="120px" h='150px'>This is a box</Box>
   <Box bg='blue' w="120px" h='150px'>This is a box</Box>
   </VStack>
   <Text as="i">hello there</Text>

{/* center with margin auto */}
   <Box bg="green" h="300px" w="300px" margin="auto" mt="32px">
    <Text fontSize="32px">Example here</Text>
    <Button mt='32px' colorScheme="red" _hover={{background: 'blue'}}>Click Me!</Button>
   </Box>
   {/* </Flex> */}
   
    </div>
  )
}

export default App

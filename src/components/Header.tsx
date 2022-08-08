import React from 'react'
import {Box, Heading,Text} from '@chakra-ui/react'

const Header = ()=>{

    return (
        <Box as="section" color="#F7FAFC" bg='purple' pt="90px" pb="198px" px="32px">
            <Heading fontWeight="80px" fontSize="48px">Simple pricing for your business</Heading>
            <Text fontWeight="500" fontSize='24px' pt="16px">Plans that are carefully crafted to suit your business</Text>

        </Box>
    )
}

export default Header
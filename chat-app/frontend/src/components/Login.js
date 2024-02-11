import { Button, FormControl, FormHelperText, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Login = () => {

    const [show, setShow] = useState(true);
    
    function handleClick(){
setShow(!show);
    }
  return (
   <VStack>
    <FormControl isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input placeholder='Enter your email' ></Input>
    </FormControl>
    <FormControl isRequired>
        <FormLabel >Password</FormLabel>
        <InputGroup size="md">
        <Input type={show?'password': 'text'}/>
        
        <InputRightElement width="4.5rem">
        <Button width='100%' onClick={handleClick}>{show?'Show': 'Hide'}</Button>
        </InputRightElement>
        </InputGroup>
    </FormControl>
    <Button colorScheme='blue' variant='solid' className='btn login' mt='15px' width="100%">Login</Button>
    <Button colorScheme='red' variant='solid' className='btn' width="100%">Get Guest User Credentials</Button>
   </VStack>
  )
}

export default Login
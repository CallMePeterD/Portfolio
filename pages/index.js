import { Container, Box, Heading, Image, Button, useColorModeValue, Text} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import NextLink from 'next/link';
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";




const Page = () => {
    return (     
        <Layout>
        <Container >            
            
            
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as='h2' variant='page-title'>
                        Pedro Costa
                    </Heading>
                    <Text mt={2}>
                        Desenvolvedor de software
                    </Text>
                </Box>
                <Box flexShrink={0} mt={{base:4, md:0}} ml={{md:6}} align='center'>
                    <Image borderColor='whiteAlpha.800' borderWidth={2} borderStyle='solid' maxWidth='100px' display='inline-block' borderRadius='full' src='/images/foto.png' alt='Profile Photo' />
                </Box>
            </Box>

            <Section delay={0.1}>
            <Box borderRadius="10" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={10} mb={6} mt={6} text_align='center' align='center'>
            <Paragraph>
                Estudante de Ciência da Computação e Desenvolvedor focado em Delphi e Web.
            </Paragraph> 
            </Box>
                
            <Box align='center' my={4} >
                <NextLink href='https://github.com/CallMePeterD'>
                    <a target='_blank'rel="noopener noreferrer">
                    <Button rightIcon={<ChevronRightIcon/>} colorScheme='teal' m={4}>
                        Github
                    </Button>
                    </a>
                </NextLink>
                
                <NextLink href='https://www.linkedin.com/in/bettercallpedro/'>
                    <a target='_blank'rel="noopener noreferrer">
                    <Button rightIcon={<ChevronRightIcon/>} colorScheme='teal' m={4}>
                        Linkedin
                    </Button>
                    </a>
                </NextLink>
            </Box>
                
            </Section>
        </Container>
        </Layout>   
    )
}

export default Page
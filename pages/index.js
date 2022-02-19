import { Container, Box, Heading, Image, useColorModeValue, Button } from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import NextLink from 'next/link';
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";




const Page = () => {
    return (     
        <Layout>
        <Container >            
            <Box borderRadius="10" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={10} mb={6} align='center'>
                Hello, I&apos;m a front-end developer based in Rio
            </Box>
            
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as='h2' variant='page-title'>
                        Pedro Costa
                    </Heading>
                    <p>Front-End Developer</p>
                </Box>
                <Box flexShrink={0} mt={{base:4, md:0}} ml={{md:6}} align='center'>
                    <Image borderColor='whiteAlpha.800' borderWidth={2} borderStyle='solid' maxWidth='100px' display='inline-block' borderRadius='full' src='/images/foto.png' alt='Profile Photo' />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as='h3' variant='section-title' style={{textDecoration: 'none'}} >
                    Sobre
                </Heading>
                <Paragraph>Extremamente motivado, sempre em constante desenvolvimento de minhas habilidades e crescimento profissional.
                </Paragraph>
                <Box align='center' my={4}>
                    <NextLink href='https://github.com/CallMePeterD'>
                        <a target='_blank'rel="noopener noreferrer">
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme='teal'>
                            Github
                        </Button>
                        </a>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as='h3' variant='section-title' style={{textDecoration: 'none'}} >
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1997</BioYear>
                    Nascido no Rio de Janeiro, Brasil
                </BioSection>
                <BioSection>
                    <BioYear>2014</BioYear>
                    Formou-se no Colégio Militar do Rio de Janeiro
                </BioSection>
                <BioSection>
                    <BioYear>2016</BioYear>
                    Formado em Técnico em Eletrotécnica pelo Senai
                </BioSection>
                <BioSection>
                    <BioYear>2019 até o presente</BioYear>
                    Graduação em Ciência da Computação pela Universidade Federal Fluminense
                </BioSection>
            </Section>
            <Section delay={0.3}>
                <Heading as='h3' variant='section-title' style={{textDecoration: 'none'}} >
                    Eu ❤️
                </Heading>
                <Paragraph>
                    Música, Jogos, Tocar Guitarra
                </Paragraph>
                
            </Section>
        </Container>
        </Layout>   
    )
}

export default Page
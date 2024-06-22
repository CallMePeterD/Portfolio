import { Container, Heading, Box, Text } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'


const About = () => {
    return (
        <Layout>
            <Container>
            <Section delay={0.2}>
                <Heading as='h3' variant='section-title' style={{ textDecoration: 'none' }}>
                    Sobre mim
                </Heading>
                <Text>
                Atualmente trabalho como desenvolvedor front-end e back-end, mantendo um sistema que usa Notas Fiscais. Diariamente uso tecnologias como: Delphi, PHP, JavaScript e MySQL. Além disso curso Ciência da Computação na Universidade Federal Fluminense.
                </Text>

                <Heading as='h3' variant='section-title' style={{ textDecoration: 'none', marginTop: '20px' }}>
                    Experiências
                </Heading>
                <Box mb={5}>
                    <Text fontWeight="bold">Fidelity Pesquisas Cadastrais</Text>
                    <Text>Manutenção e atualização de um sistema legado desenvolvido em Delphi, e desenvolvimento de aplicações web utilizando PHP e JavaScript.</Text>
                    <Text fontSize="sm">2022 - Present</Text>
                    <Text>
                        
                    </Text>
                </Box>
                <Box mb={5}>
                    <Text fontWeight="bold">DriveIT</Text>
                    <Text>Analista de Suporte</Text>
                    <Text fontSize="sm">2020 - 2021</Text>
                    <Text>
                        Suporte técnico de primeira e segunda linha, solucionando problemas de hardware, software e redes, manutenção preventiva e corretiva de sistemas e equipamentos, monitorando o desempenho para antecipar e resolver possíveis falhas.
                    </Text>
                </Box>

                <Heading as='h3' variant='section-title' style={{ textDecoration: 'none', marginTop: '20px' }}>
                    Educação
                </Heading>
                <Box>
                    <Text fontWeight="bold">University of Illinois Urbana-Champaign</Text>
                    <Text fontSize="sm">Presente</Text>
                    <Text>
                        Bacharelado em Ciência da Computação.
                    </Text>
                </Box>
            </Section>
            </Container>
        </Layout>
    )}

export default About;
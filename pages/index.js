import { Container, Box, Heading, Image, Button, useColorModeValue, Text, SimpleGrid, Flex, Icon, Link } from "@chakra-ui/react";
import Section from "../components/section";
import NextLink from 'next/link';
import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin, FaEnvelope, FaTrophy } from 'react-icons/fa';
import Layout from "../components/layouts/article";
import { WorkGridItem } from '../components/grid-item';
import { CurriculoButtons } from '../components/resume';
import { getProject } from '../libs/projects';
import { contato, getProfile } from '../libs/profile';
import { useLocale, useT } from '../libs/i18n';

const destaques = ['chess-ia', 'style-store']


const Page = () => {
    const muted = useColorModeValue('gray.600', 'gray.400')
    const locale = useLocale()
    const t = useT()
    const profile = getProfile(locale)
    const premio = profile.premios[0]

    return (
        <Layout>
        <Container >


            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as='h2' variant='page-title'>
                        Pedro Costa
                    </Heading>
                    <Text mt={2}>
                        {t.headline}
                    </Text>
                    <Text fontSize='sm' color={muted}>
                        {profile.local}
                    </Text>
                </Box>
                <Box flexShrink={0} mt={{base:4, md:0}} ml={{md:6}} align='center'>
                    <Image borderColor='whiteAlpha.800' borderWidth={2} borderStyle='solid' maxWidth='100px' display='inline-block' borderRadius='full' src='/images/foto.png' alt='Profile Photo' />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Flex borderRadius='10' borderWidth='2px' borderColor='yellow.400' p={5} mt={6} align='center' gap={4}>
                    <Icon as={FaTrophy} boxSize={8} color='yellow.400' flexShrink={0} />
                    <Box>
                        <Text fontWeight='bold'>{premio.titulo}</Text>
                        <Text fontSize='sm' color={muted}>{premio.org} · {premio.periodo}</Text>
                        <Text fontSize='sm' mt={1}>
                            {premio.resumo}
                        </Text>
                        <Link href={premio.link} isExternal display='inline-flex' alignItems='center' mt={2} fontSize='sm'>
                            {t.news} <ExternalLinkIcon mx={1} />
                        </Link>
                    </Box>
                </Flex>
            </Section>

            <Section delay={0.2}>
                <Heading as='h3' variant='section-title'>
                    {t.featured}
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    {destaques.map(slug => (
                        <WorkGridItem key={slug} project={getProject(slug, locale)} />
                    ))}
                </SimpleGrid>
                <Box align='center' mt={6}>
                    <NextLink href='/works' passHref scroll={false}>
                        <Button as='a' rightIcon={<ChevronRightIcon/>} colorScheme='teal'>
                            {t.allProjects}
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.3}>
                <Heading as='h3' variant='section-title'>
                    {t.resume}
                </Heading>
                <CurriculoButtons />
            </Section>

            <Section delay={0.4}>
                <Heading as='h3' variant='section-title'>
                    {t.contact}
                </Heading>
                <Flex wrap='wrap' justify='center' gap={3}>
                    <Button as='a' href={contato.github} target='_blank' rel='noopener noreferrer' leftIcon={<FaGithub />} colorScheme='teal' variant='ghost'>
                        GitHub
                    </Button>
                    <Button as='a' href={contato.linkedin} target='_blank' rel='noopener noreferrer' leftIcon={<FaLinkedin />} colorScheme='teal' variant='ghost'>
                        LinkedIn
                    </Button>
                    <Button as='a' href={`mailto:${contato.email}`} leftIcon={<FaEnvelope />} colorScheme='teal' variant='ghost'>
                        {contato.email}
                    </Button>
                </Flex>
            </Section>
        </Container>
        </Layout>
    )
}

export default Page

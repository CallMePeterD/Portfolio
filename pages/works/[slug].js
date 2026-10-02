import NextLink from 'next/link'
import {
    Container,
    Heading,
    Text,
    Badge,
    Box,
    Button,
    Wrap,
    WrapItem,
    List,
    ListItem,
    ListIcon,
    Link,
    useColorModeValue
} from '@chakra-ui/react'
import { ChevronLeftIcon, CheckCircleIcon } from '@chakra-ui/icons'
import { FaGithub } from 'react-icons/fa'
import Section from '../../components/section'
import Layout from '../../components/layouts/article'
import { ProjectCover } from '../../components/grid-item'
import projects, { getProject } from '../../libs/projects'
import { locales, useLocale, useT } from '../../libs/i18n'

const Project = ({ slug }) => {
    const t = useT()
    const project = getProject(slug, useLocale())
    const muted = useColorModeValue('gray.600', 'gray.400')

    return (
        <Layout title={project.title}>
            <Container>
                <Section>
                    <NextLink href='/works' passHref scroll={false}>
                        <Link display='inline-flex' alignItems='center' mb={4}>
                            <ChevronLeftIcon /> {t.back}
                        </Link>
                    </NextLink>

                    <Box borderRadius='lg' overflow='hidden' mb={6}>
                        <ProjectCover cover={project.cover} icon={project.icon} height='200px' />
                    </Box>

                    <Heading as='h2' fontSize={28} mb={1}>
                        {project.title}
                    </Heading>
                    <Text color={muted} mb={3}>
                        {project.subtitle}
                    </Text>
                    <Wrap spacing={2} mb={6}>
                        {project.tecnologias.map(tec => (
                            <WrapItem key={tec}>
                                <Badge borderRadius='full' px='2' colorScheme='teal'>
                                    {tec}
                                </Badge>
                            </WrapItem>
                        ))}
                    </Wrap>
                </Section>

                <Section delay={0.1}>
                    <Heading as='h3' variant='section-title'>
                        {t.aboutProject}
                    </Heading>
                    {project.descricao.map((p, i) => (
                        <Text key={i} mb={3} textAlign='justify'>
                            {p}
                        </Text>
                    ))}
                </Section>

                <Section delay={0.2}>
                    <Heading as='h3' variant='section-title'>
                        {t.highlights}
                    </Heading>
                    <List spacing={2}>
                        {project.destaques.map(d => (
                            <ListItem key={d} display='flex'>
                                <ListIcon as={CheckCircleIcon} color='teal.400' mt={1} />
                                <Text>{d}</Text>
                            </ListItem>
                        ))}
                    </List>
                </Section>

                <Section delay={0.3}>
                    <Heading as='h3' variant='section-title'>
                        {t.technologies}
                    </Heading>
                    <Wrap spacing={2}>
                        {project.stack.map(s => (
                            <WrapItem key={s}>
                                <Badge variant='outline' colorScheme='teal' px={2} py={1}>
                                    {s}
                                </Badge>
                            </WrapItem>
                        ))}
                    </Wrap>
                </Section>

                <Section delay={0.4}>
                    <Box textAlign='center' mt={4}>
                        <Button
                            as='a'
                            href={project.github}
                            target='_blank'
                            rel='noopener noreferrer'
                            leftIcon={<FaGithub />}
                            colorScheme='teal'
                        >
                            {t.viewCode}
                        </Button>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export const getStaticPaths = async () => ({
    paths: locales.flatMap(locale => projects.map(p => ({ params: { slug: p.slug }, locale }))),
    fallback: false
})

export const getStaticProps = async ({ params }) => ({
    props: { slug: params.slug }
})

export default Project

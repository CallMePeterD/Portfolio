import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section';
import Layout from '../components/layouts/article';
import { WorkGridItem } from '../components/grid-item';
import { getProjects } from '../libs/projects';
import { useLocale, useT } from '../libs/i18n';


const Works = () => {
    const t = useT()
    const projects = getProjects(useLocale())

    return (
        <Layout title={t.works}>
            <Container>
                <Heading as='h3' fontSize={20} mb={4}>
                    {t.works}
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    {projects.map((project, i) => (
                        <Section key={project.slug} delay={i * 0.1}>
                            <WorkGridItem project={project} />
                        </Section>
                    ))}
                </SimpleGrid>
            </Container>
        </Layout>
    )
}




export default Works

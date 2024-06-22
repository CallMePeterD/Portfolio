import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import montyhall from '../public/images/works/montyhall.png';
import galinha from '../public/images/works/galinha.png';
import netflix from '../public/images/works/netflix.png';
import flask from '../public/images/works/flask.png';
//import breve from '../public/images/works/Design_sem_nome__1_-removebg-preview.png'


const Works = () => {
    return (
        <Container>
            <Heading as='h3' fontSize={20} mb={4}>
                Projetos
            </Heading>
            {/* <Heading as='h4' fontSize={16} mb={4}>
                Front-End
            </Heading> */}
            <SimpleGrid columns={[1,1,2]} gap={6}>
                
                <Section>                
                <WorkGridItem link={'https://monty-hall-next-js.vercel.app/'} tecnologia="NextJS" thumbnail={montyhall}>
                        MontyHall
                    </WorkGridItem>
                </Section>
                
                <Section>
                <WorkGridItem link={'https://callmepeterd.github.io/netflix/'} tecnologia="HTML/CSS" thumbnail={netflix}>
                        Clone Netflix
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
            <Heading as='h3' fontSize={16} mb={4}>
                Python
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section>
                <WorkGridItem link='https://callmepeterd.itch.io/save-the-chicken' tecnologia="Pygame" thumbnail={galinha}>
                        Projeto de Faculdade usando Python
                    </WorkGridItem>
                </Section>
                <Section>
                <WorkGridItem link='https://github.com/CallMePeterD/SimpleFlaskBlog' tecnologia="Flask" thumbnail={flask}>
                        Blog Simples
                    </WorkGridItem>
                </Section>

            </SimpleGrid>
        </Container>
    )
}




export default Works
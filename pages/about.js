import { Container, Heading, Text } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { Entry, SkillGroups, CurriculoButtons } from '../components/resume'
import { getProfile } from '../libs/profile'
import { useLocale, useT } from '../libs/i18n'


const About = () => {
    const t = useT()
    const { resumo, experiencias, premios, atividades, educacao, habilidades, idiomas } = getProfile(useLocale())

    return (
        <Layout title={t.about}>
            <Container>
            <Section delay={0.1}>
                <Heading as='h3' variant='section-title'>
                    {t.aboutMe}
                </Heading>
                <Text textAlign='justify' mb={5}>
                    {resumo}
                </Text>
                <CurriculoButtons />
            </Section>

            <Section delay={0.2}>
                <Heading as='h3' variant='section-title'>
                    {t.experience}
                </Heading>
                {experiencias.map(e => (
                    <Entry key={e.empresa} titulo={e.empresa} subtitulo={e.cargo} lateral={e.local} itens={e.itens} />
                ))}
            </Section>

            <Section delay={0.3}>
                <Heading as='h3' variant='section-title'>
                    {t.awards}
                </Heading>
                {premios.map(p => (
                    <Entry key={p.titulo} titulo={`${p.titulo} (${p.org})`} subtitulo={p.papel} lateral={p.periodo} itens={p.itens} link={p.link} linkLabel={t.awardLink} />
                ))}
            </Section>

            <Section delay={0.4}>
                <Heading as='h3' variant='section-title'>
                    {t.activities}
                </Heading>
                {atividades.map(a => (
                    <Entry key={a.nome} titulo={a.nome} subtitulo={a.papel} itens={a.itens} />
                ))}
            </Section>

            <Section delay={0.5}>
                <Heading as='h3' variant='section-title'>
                    {t.education}
                </Heading>
                {educacao.map(e => (
                    <Entry key={e.nome} titulo={e.nome} subtitulo={e.curso} lateral={e.local} itens={e.itens} />
                ))}
            </Section>

            <Section delay={0.6}>
                <Heading as='h3' variant='section-title'>
                    {t.skills}
                </Heading>
                <SkillGroups grupos={habilidades} />
                <Text mt={4}>
                    <b>{t.spokenLanguages}:</b> {idiomas}
                </Text>
            </Section>
            </Container>
        </Layout>
    )}

export default About;

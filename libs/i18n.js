import { useRouter } from 'next/router'

export const locales = ['pt', 'en']

export const useLocale = () => {
    const { locale } = useRouter()
    return locales.includes(locale) ? locale : 'pt'
}

export const tr = (value, locale) =>
    value && typeof value === 'object' && !Array.isArray(value) && 'pt' in value ? value[locale] : value

const ui = {
    pt: {
        homeTitle: 'Pedro Costa - Homepage',
        nav: { works: 'Projetos', about: 'Sobre' },
        headline: 'Desenvolvedor de Software · Ciência da Computação na UFF',
        news: 'Ver notícia na COPPE/UFRJ',
        featured: 'Projetos em destaque',
        allProjects: 'Todos os projetos',
        resume: 'Currículo',
        contact: 'Contato',
        works: 'Projetos',
        back: 'Projetos',
        aboutProject: 'Sobre o projeto',
        highlights: 'Destaques',
        technologies: 'Tecnologias',
        viewCode: 'Ver código no GitHub',
        about: 'Sobre',
        aboutMe: 'Sobre mim',
        experience: 'Experiência',
        awards: 'Prêmios',
        awardLink: 'Notícia na COPPE/UFRJ',
        activities: 'Atividades extracurriculares',
        education: 'Educação',
        skills: 'Habilidades',
        spokenLanguages: 'Idiomas',
        notFoundTitle: 'Talvez na próxima',
        notFoundText: 'A página está em construção.',
        notFoundBack: 'Retornar',
        switchTo: 'Switch to English'
    },
    en: {
        homeTitle: 'Pedro Costa - Homepage',
        nav: { works: 'Projects', about: 'About' },
        headline: 'Software Developer · Computer Science at UFF',
        news: 'Read the news on COPPE/UFRJ',
        featured: 'Featured projects',
        allProjects: 'All projects',
        resume: 'Resume',
        contact: 'Contact',
        works: 'Projects',
        back: 'Projects',
        aboutProject: 'About the project',
        highlights: 'Highlights',
        technologies: 'Technologies',
        viewCode: 'View code on GitHub',
        about: 'About',
        aboutMe: 'About me',
        experience: 'Experience',
        awards: 'Awards',
        awardLink: 'News on COPPE/UFRJ',
        activities: 'Extracurricular activities',
        education: 'Education',
        skills: 'Skills',
        spokenLanguages: 'Languages',
        notFoundTitle: 'Maybe next time',
        notFoundText: 'This page is under construction.',
        notFoundBack: 'Go back',
        switchTo: 'Mudar para português'
    }
}

export const useT = () => ui[useLocale()]

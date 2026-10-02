export const contato = {
    nome: 'Pedro Aquino da Costa',
    email: 'pedrobrezil@gmail.com',
    github: 'https://github.com/CallMePeterD',
    linkedin: 'https://www.linkedin.com/in/bettercallpedro/'
}

const coppeLink = 'https://coppe.ufrj.br/planeta-coppe/hackathon-ia-2026-transforma-desafios-reais-da-energia-em-solucoes-tecnologicas/'

const profiles = {
    pt: {
        local: 'Niterói, RJ',
        resumo: 'Estudante de Ciência da Computação na UFF com formação técnica em Eletrotécnica. Trabalho como desenvolvedor de software modernizando sistemas legados: migro aplicações Delphi e PHP para APIs REST em Go integradas com PostgreSQL e serviços AWS. Tenho interesse em software embarcado, sistemas críticos e aviônica, e gosto de projetos que exigem entender a máquina por baixo, como motores de xadrez e simuladores de processador.',
        premios: [
            {
                titulo: '1º lugar no Hackathon de IA da COPPE 2026',
                org: 'COPPE/UFRJ',
                periodo: 'Set. 2026',
                link: coppeLink,
                resumo: 'Previsão de demanda da rede elétrica brasileira com Ridge e XGBoost, transformada em tarifa dinâmica.',
                papel: 'Desenvolvedor, Time 20 | Atanora, Projeto Predicta',
                itens: [
                    'MVP que prevê a demanda da rede elétrica brasileira a partir de dados do operador e do clima e a transforma em uma tarifa dinâmica',
                    'Modelos por horizonte (H01–H24) para os 4 subsistemas da rede com Ridge e XGBoost, validados contra o DESSEM',
                    'Dois motores (previsão e tarifa auditável sobre tarifas reguladas) ligados por um contrato de dados, em Python/Django'
                ]
            }
        ],
        experiencias: [
            {
                empresa: 'Fidelity Labs (Fidelity Pesquisas)',
                cargo: 'Desenvolvedor de Software',
                local: 'Remoto',
                itens: [
                    'Liderei a migração de dois sistemas legados (Delphi 2010 e PHP/Docker) para uma API REST em Go com PostgreSQL, eliminando a autenticação direta das aplicações no MariaDB',
                    'Migrei o gerenciamento de arquivos de FTP para API em dezenas de formulários Delphi, com cliente XML em Indy 10 e endpoints Go integrados com DynamoDB, S3 e AWS SSM',
                    'Resolvi problemas críticos de integração entre stacks, como parsing de JSON no Delphi 2010 (DBXJson) e erros de certificado SSL em containers PHP/Docker',
                    'Criei ferramentas de suporte para a equipe: script PowerShell para ambiente local e coleção Postman para onboarding'
                ]
            },
            {
                empresa: 'DupTec',
                cargo: 'Desenvolvedor Júnior',
                local: 'Remoto, São Paulo/SP',
                itens: [
                    'Desenvolvi e mantive aplicações desktop em Delphi/Pascal para fluxos internos de negócio',
                    'Escrevi consultas SQL e fiz manutenção de banco de dados',
                    'Automatizei rotinas de processamento de dados com Python'
                ]
            },
            {
                empresa: 'DriveIT',
                cargo: 'Analista Técnico',
                local: 'Remoto, São Paulo/SP',
                itens: ['Suporte técnico e resolução de problemas para clientes e equipes internas']
            }
        ],
        atividades: [
            {
                nome: 'Blackbird Aerodesign, equipe de Aerodesign da UFF',
                papel: 'Membro, Célula de Gestão e Desempenho',
                itens: [
                    'Equipe de competição que projeta, constrói e ensaia aeronaves rádio-controladas para o SAE Brasil AeroDesign',
                    'Ensaios experimentais das aeronaves, como a determinação de momento de inércia por pêndulo bifilar'
                ]
            },
            {
                nome: 'Programa “Seja Digital”, Governo Federal',
                papel: 'Instrutor voluntário',
                itens: ['Instrutor de inclusão digital, ajudando cidadãos a acessar serviços digitais do governo']
            }
        ],
        educacao: [
            {
                nome: 'Universidade Federal Fluminense (UFF)',
                curso: 'Bacharelado em Ciência da Computação, em andamento',
                local: 'Niterói, RJ',
                itens: ['Disciplinas relevantes: Arquiteturas de Computadores, Circuitos Digitais, Sistemas Operacionais, Desenvolvimento de Kit Arduino']
            },
            {
                nome: 'SENAI Taguatinga',
                curso: 'Técnico em Eletrotécnica',
                local: 'Brasília, DF',
                itens: ['Eleito vice-presidente da turma e reconhecido como Aluno Exemplar em todos os semestres']
            }
        ],
        habilidades: [
            { grupo: 'Linguagens', itens: ['Go', 'C++', 'Python', 'Delphi/Pascal', 'JavaScript/TypeScript', 'PHP', 'SQL', 'RISC-V Assembly'] },
            { grupo: 'Embarcados e Dados', itens: ['Arduino', 'Eletrônica', 'XGBoost', 'scikit-learn', 'pandas'] },
            { grupo: 'Frameworks e Ferramentas', itens: ['Django', 'Flask', 'Next.js', 'Node.js', 'Raylib', 'Git', 'GitHub Actions', 'Docker'] },
            { grupo: 'Banco de Dados e Cloud', itens: ['PostgreSQL', 'MariaDB', 'DynamoDB', 'S3', 'AWS SSM'] }
        ],
        idiomas: 'Português (nativo), Inglês (intermediário, leitura e escrita)',
        curriculos: [
            { label: 'Currículo (PT)', href: '/curriculo/Pedro_Costa_Curriculo.pdf' },
            { label: 'Resume (EN)', href: '/curriculo/Pedro_Costa_Resume_EN.pdf' }
        ]
    },
    en: {
        local: 'Niterói, RJ, Brazil',
        resumo: 'Computer Science student at UFF with a technical degree in Electrotechnics. I work as a software developer modernizing legacy systems: I migrate Delphi and PHP applications to Go REST APIs integrated with PostgreSQL and AWS services. I am interested in embedded software, safety-critical systems and avionics, and I enjoy projects that require understanding the machine underneath, like chess engines and processor simulators.',
        premios: [
            {
                titulo: '1st Place – COPPE AI Hackathon 2026',
                org: 'COPPE/UFRJ',
                periodo: 'Sep. 2026',
                link: coppeLink,
                resumo: 'Brazilian power grid demand forecasting with Ridge and XGBoost, turned into a dynamic tariff.',
                papel: 'Developer, Team 20 | Atanora, Project Predicta',
                itens: [
                    'MVP that forecasts Brazilian grid demand from operator and weather data and turns it into a dynamic tariff',
                    'Per-horizon models (H01–H24) for 4 grid subsystems with Ridge and XGBoost, validated against DESSEM',
                    'Two engines (forecast and auditable tariff on regulated rates) linked by a data contract, in Python/Django'
                ]
            }
        ],
        experiencias: [
            {
                empresa: 'Fidelity Labs (Fidelity Pesquisas)',
                cargo: 'Software Developer',
                local: 'Remote',
                itens: [
                    'Led the migration of two legacy systems (Delphi 2010 and PHP/Docker) to a Go REST API with PostgreSQL, removing direct application authentication against MariaDB',
                    'Moved file handling from FTP to an API across dozens of Delphi forms, with an XML client (Indy 10) and Go endpoints integrated with DynamoDB, S3 and AWS SSM',
                    'Solved critical cross-stack integration issues, such as JSON parsing in Delphi 2010 (DBXJson) and SSL certificate errors in PHP/Docker containers',
                    'Built support tooling for the team: a PowerShell script for the local environment and a Postman collection for onboarding'
                ]
            },
            {
                empresa: 'DupTec',
                cargo: 'Junior Developer',
                local: 'Remote, São Paulo, Brazil',
                itens: [
                    'Developed and maintained Delphi/Pascal desktop applications for internal business workflows',
                    'Wrote SQL queries and performed database maintenance',
                    'Automated data-processing routines with Python'
                ]
            },
            {
                empresa: 'DriveIT',
                cargo: 'Technical Analyst',
                local: 'Remote, São Paulo, Brazil',
                itens: ['Technical support and troubleshooting for customers and internal teams']
            }
        ],
        atividades: [
            {
                nome: 'Blackbird Aerodesign, UFF Aerodesign Team',
                papel: 'Member, Management & Performance Cell',
                itens: [
                    'Competition team that designs, builds and tests radio-controlled aircraft for SAE Brasil AeroDesign',
                    'Experimental aircraft testing, such as determining the moment of inertia with a bifilar pendulum'
                ]
            },
            {
                nome: '“Seja Digital” Program, Brazilian Federal Government',
                papel: 'Volunteer instructor',
                itens: ['Digital inclusion instructor, helping citizens access government digital services']
            }
        ],
        educacao: [
            {
                nome: 'Universidade Federal Fluminense (UFF)',
                curso: 'B.Sc. in Computer Science, in progress',
                local: 'Niterói, Brazil',
                itens: ['Coursework: Computer Architecture, Digital Circuits, Operating Systems, Arduino Kit Development']
            },
            {
                nome: 'SENAI Taguatinga',
                curso: 'Technical Degree in Electrotechnics',
                local: 'Brasília, Brazil',
                itens: ['Elected class vice-president; recognized as Model Student in every semester']
            }
        ],
        habilidades: [
            { grupo: 'Languages', itens: ['Go', 'C++', 'Python', 'Delphi/Pascal', 'JavaScript/TypeScript', 'PHP', 'SQL', 'RISC-V Assembly'] },
            { grupo: 'Embedded and Data', itens: ['Arduino', 'Electronics', 'XGBoost', 'scikit-learn', 'pandas'] },
            { grupo: 'Frameworks and Tools', itens: ['Django', 'Flask', 'Next.js', 'Node.js', 'Raylib', 'Git', 'GitHub Actions', 'Docker'] },
            { grupo: 'Databases and Cloud', itens: ['PostgreSQL', 'MariaDB', 'DynamoDB', 'S3', 'AWS SSM'] }
        ],
        idiomas: 'Portuguese (native), English (intermediate, reading and writing)',
        curriculos: [
            { label: 'Resume (EN)', href: '/curriculo/Pedro_Costa_Resume_EN.pdf' },
            { label: 'Currículo (PT)', href: '/curriculo/Pedro_Costa_Curriculo.pdf' }
        ]
    }
}

export const getProfile = locale => profiles[locale] || profiles.pt

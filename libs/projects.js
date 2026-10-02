import { tr } from './i18n'

const projects = [
    {
        slug: 'chess-ia',
        title: { pt: 'IA de Xadrez', en: 'Chess AI' },
        subtitle: {
            pt: 'Motor de xadrez próprio em Go com bitboards e alfa-beta',
            en: 'Custom chess engine in Go with bitboards and alpha-beta'
        },
        tecnologias: ['Go'],
        cover: 'linear(to-br, gray.500, gray.800)',
        icon: 'chess',
        github: 'https://github.com/CallMePeterD/chess-ia',
        descricao: {
            pt: [
                'Módulo de inteligência artificial de um jogo de xadrez contra o computador, desenvolvido para a disciplina de Engenharia de Software. Recebe uma posição em FEN e devolve um lance em notação UCI.',
                'A IA roda como worker: ela mesma consulta o backend perguntando se há um lance a calcular, calcula e devolve o resultado. Assim não é necessário hospedar um serviço público para a IA.'
            ],
            en: [
                'Artificial intelligence module for a chess game against the computer, built for the Software Engineering course. It takes a position in FEN and returns a move in UCI notation.',
                'The AI runs as a worker: it polls the backend for pending moves, computes them and sends the result back. This way there is no need to host a public service for the AI.'
            ]
        },
        destaques: {
            pt: [
                'Motor próprio com bitboards, magic bitboards e Zobrist hashing, validado com testes perft',
                'Busca alfa-beta com iterative deepening, busca de quiescência e ordenação de lances',
                'Tabela de transposição e livro de aberturas PolyGlot',
                'Gestão de tempo com interrupção da busca e níveis de dificuldade',
                'Worker HTTP com retry/backoff integrado ao backend do jogo',
                'Mock do backend e harness de linha de comando para testar FEN → lance localmente',
                'CI com testes automatizados no GitHub Actions'
            ],
            en: [
                'Custom engine with bitboards, magic bitboards and Zobrist hashing, validated with perft tests',
                'Alpha-beta search with iterative deepening, quiescence search and move ordering',
                'Transposition table and PolyGlot opening book',
                'Time management with search interruption and difficulty levels',
                'HTTP worker with retry/backoff integrated with the game backend',
                'Backend mock and command-line harness to test FEN → move locally',
                'CI with automated tests on GitHub Actions'
            ]
        },
        stack: ['Go', 'Bitboards', 'HTTP', 'go test', 'GitHub Actions']
    },
    {
        slug: 'style-store',
        title: 'Style Store',
        subtitle: {
            pt: 'E-commerce full-stack com Spring Boot e React',
            en: 'Full-stack e-commerce with Spring Boot and React'
        },
        tecnologias: ['Java', 'Spring Boot', 'React', 'TypeScript'],
        cover: 'linear(to-br, teal.400, blue.600)',
        icon: 'store',
        github: 'https://github.com/CallMePeterD/Projeto---Desenvolvimento-Web',
        descricao: {
            pt: [
                'Simulação de uma loja de roupas online com as funcionalidades essenciais de um e-commerce moderno. O backend é uma API REST em Spring Boot e o frontend é uma SPA em React com TypeScript.',
                'O projeto foi estruturado para ser modular e seguro, separando controllers, services, repositories e DTOs no backend, e estado do servidor (TanStack Query) do estado do cliente (Zustand) no frontend.'
            ],
            en: [
                'Simulation of an online clothing store with the core features of a modern e-commerce. The backend is a Spring Boot REST API and the frontend is a React SPA written in TypeScript.',
                'The project is structured to be modular and secure, splitting controllers, services, repositories and DTOs on the backend, and server state (TanStack Query) from client state (Zustand) on the frontend.'
            ]
        },
        destaques: {
            pt: [
                'Carrinho híbrido: salvo no localStorage para visitantes e no banco para usuários logados, com merge automático no login',
                'Controle de estoque ao adicionar itens no carrinho',
                'Autenticação com Spring Security e controle de acesso por papel (ROLE_USER / ROLE_ADMIN)',
                'Painel administrativo com CRUD de produtos, busca e paginação em rotas protegidas',
                'Scroll infinito na listagem de produtos com useInfiniteQuery',
                'Formulários validados no cliente (React Hook Form + Zod) e no servidor'
            ],
            en: [
                'Hybrid cart: stored in localStorage for guests and in the database for logged-in users, merged automatically on login',
                'Stock control when adding items to the cart',
                'Authentication with Spring Security and role-based access control (ROLE_USER / ROLE_ADMIN)',
                'Admin panel with product CRUD, search and pagination on protected routes',
                'Infinite scroll on the product list with useInfiniteQuery',
                'Forms validated on the client (React Hook Form + Zod) and on the server'
            ]
        },
        stack: ['Java 17', 'Spring Boot 3', 'Spring Data JPA', 'Spring Security', 'H2', 'React 18', 'Vite', 'TypeScript', 'TanStack Query', 'Zustand', 'Bootstrap 5']
    },
    {
        slug: 'simulador-riscv',
        title: { pt: 'Simulador RISC-V', en: 'RISC-V Simulator' },
        subtitle: {
            pt: 'Montador e simulador de pipeline de 5 estágios',
            en: 'Assembler and 5-stage pipeline simulator'
        },
        tecnologias: ['Python', 'Assembly'],
        cover: 'linear(to-br, orange.400, red.600)',
        icon: 'cpu',
        github: 'https://github.com/CallMePeterD/SimuladorRISCV',
        descricao: {
            pt: [
                'Simulador funcional de um processador RISC-V de 32 bits com pipeline de 5 estágios (IF, ID, EX, MEM, WB), feito para a disciplina de Arquitetura de Computadores.',
                'O programa lê um arquivo .asm, monta as instruções para binário e hexadecimal e executa ciclo a ciclo, gerando um log detalhado do estado de cada estágio do pipeline e dos registradores.'
            ],
            en: [
                'Functional simulator of a 32-bit RISC-V processor with a 5-stage pipeline (IF, ID, EX, MEM, WB), built for the Computer Architecture course.',
                'The program reads an .asm file, assembles the instructions into binary and hexadecimal and runs them cycle by cycle, producing a detailed log of every pipeline stage and the registers.'
            ]
        },
        destaques: {
            pt: [
                'Montador de duas passadas que exporta cada instrução em binário (32 bits) e hexadecimal',
                'Subconjunto do RV32I: tipos R, I, S, B e J, além das pseudo-instruções LI e MV',
                'Unidade de forwarding opcional para resolver hazards de dados',
                'Detecção de hazards com inserção de bolhas (stalls)',
                'Preditor de desvio de 2 bits',
                'Com as otimizações, o programa de teste cai de ~45 para ~25 ciclos',
                'Log ciclo a ciclo do pipeline no arquivo de saída'
            ],
            en: [
                'Two-pass assembler that exports every instruction in binary (32 bits) and hexadecimal',
                'RV32I subset: R, I, S, B and J types, plus the LI and MV pseudo-instructions',
                'Optional forwarding unit to resolve data hazards',
                'Hazard detection with bubble insertion (stalls)',
                '2-bit branch predictor',
                'With the optimizations, the test program drops from ~45 to ~25 cycles',
                'Cycle-by-cycle pipeline log in the output file'
            ]
        },
        stack: ['Python 3', 'RISC-V RV32I', 'Assembly']
    },
    {
        slug: 'monopoly-3d',
        title: 'Monopoly 3D',
        subtitle: {
            pt: 'Jogo de tabuleiro completo em 3D feito na Godot',
            en: 'Complete 3D board game built in Godot'
        },
        tecnologias: ['Godot 4', 'GDScript'],
        cover: 'linear(to-br, green.400, green.700)',
        icon: 'dice',
        github: 'https://github.com/CallMePeterD/Projeto-de-Software---Monopoly---3D',
        descricao: {
            pt: [
                'Implementação completa do Monopoly em 3D, desenvolvida para a disciplina de Projeto de Software. O tabuleiro, os peões e os dados são objetos 3D, e a câmera acompanha o jogador da vez.',
                'Toda a regra do jogo foi implementada: compra de propriedades, aluguel, cartas de Sorte e Cofre, prisão, construção de casas e hotéis, dívidas e falência. Também há jogadores controlados pelo computador.'
            ],
            en: [
                'Complete 3D implementation of Monopoly, built for the Software Design course. The board, pawns and dice are 3D objects, and the camera follows the current player.',
                'All the game rules are implemented: buying properties, rent, Chance and Community Chest cards, jail, building houses and hotels, debt and bankruptcy. There are also computer-controlled players.'
            ]
        },
        destaques: {
            pt: [
                'Dados com física real (RigidBody3D): o resultado é lido da face que cai para cima',
                'Leilão de propriedades com lances de 1, 10 e 100 e animação por jogador',
                'Tela de negociação entre jogadores para trocar propriedades e dinheiro',
                'Bots que jogam sozinhos, incluindo turnos extras ao tirar dados iguais',
                'Regras de prisão com até 3 tentativas de sair tirando dados iguais',
                'Gerenciamento de propriedades, estado de dívida e declaração de falência'
            ],
            en: [
                'Physics-based dice (RigidBody3D): the result is read from the face that lands up',
                'Property auctions with bids of 1, 10 and 100 and per-player animation',
                'Trade screen for players to exchange properties and money',
                'Bots that play on their own, including extra turns on doubles',
                'Jail rules with up to 3 attempts to roll doubles and get out',
                'Property management, debt state and bankruptcy'
            ]
        },
        stack: ['Godot 4', 'GDScript', { pt: 'Física 3D', en: '3D physics' }, { pt: 'UI com Control nodes', en: 'UI with Control nodes' }]
    }
]

const localize = (project, locale) => ({
    ...project,
    title: tr(project.title, locale),
    subtitle: tr(project.subtitle, locale),
    descricao: tr(project.descricao, locale),
    destaques: tr(project.destaques, locale),
    stack: project.stack.map(s => tr(s, locale))
})

export const getProjects = locale => projects.map(p => localize(p, locale))

export const getProject = (slug, locale) => {
    const project = projects.find(p => p.slug === slug)
    return project && localize(project, locale)
}

export default projects

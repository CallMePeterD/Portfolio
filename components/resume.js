import { Box, Flex, Text, List, ListItem, Wrap, WrapItem, Badge, Button, Link, useColorModeValue } from '@chakra-ui/react'
import { DownloadIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { useLocale } from '../libs/i18n'
import { getProfile } from '../libs/profile'

export const CurriculoButtons = () => {
    const { curriculos } = getProfile(useLocale())
    return (
        <Flex wrap='wrap' justify='center' gap={3}>
            {curriculos.map(c => (
                <Button key={c.href} as='a' href={c.href} download leftIcon={<DownloadIcon />} colorScheme='teal'>
                    {c.label}
                </Button>
            ))}
        </Flex>
    )
}

export const Entry = ({ titulo, subtitulo, lateral, itens = [], link, linkLabel }) => {
    const muted = useColorModeValue('gray.600', 'gray.400')
    return (
        <Box mb={5}>
            <Flex justify='space-between' wrap='wrap' columnGap={4}>
                <Text fontWeight='bold'>{titulo}</Text>
                {lateral && <Text fontSize='sm' color={muted}>{lateral}</Text>}
            </Flex>
            {subtitulo && <Text fontStyle='italic' fontSize='sm' color={muted} mb={1}>{subtitulo}</Text>}
            <List styleType='disc' pl={5} spacing={1}>
                {itens.map(i => (
                    <ListItem key={i}>{i}</ListItem>
                ))}
            </List>
            {link && (
                <Link href={link} isExternal display='inline-flex' alignItems='center' mt={2} fontSize='sm'>
                    {linkLabel} <ExternalLinkIcon mx={1} />
                </Link>
            )}
        </Box>
    )
}

export const SkillGroups = ({ grupos }) => (
    <>
        {grupos.map(g => (
            <Box key={g.grupo} mb={3}>
                <Text fontWeight='bold' fontSize='sm' mb={1}>{g.grupo}</Text>
                <Wrap spacing={2}>
                    {g.itens.map(s => (
                        <WrapItem key={s}>
                            <Badge variant='outline' colorScheme='teal' px={2} py={1}>{s}</Badge>
                        </WrapItem>
                    ))}
                </Wrap>
            </Box>
        ))}
    </>
)

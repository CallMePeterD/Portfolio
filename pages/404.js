import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react'


const NotFound = () => {
    return (
        <Container>
            <Heading as='h1'>Talvez na próxima</Heading>
            <Text>A Página está em construção.</Text>
            <Divider my={6} />

            <Box my={6} align='center'>
                <NextLink href='/' passHref>
                    <Button colorScheme='teal'>
                        Retornar
                    </Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound
import Head from 'next/head';
import Navbar from '../navbar';
//import {Box, Container } from '@chakra-ui/react';
import VoxelComp from '../voxel-comp';
import NoSsr from '../no-ssr';
import { Container, Box, Heading, Image, useColorModeValue, Button, Text, Paragraph } from "@chakra-ui/react";

const Main = ({children, router}) => {
    return(
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Pedro Costa - Homepage</title>
            </Head>

            <Navbar path={router.asPath}/>

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                <VoxelComp/>
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}

export default Main
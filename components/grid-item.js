import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Badge, useColorModeValue } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, tecnologia, thumbnail }) => (
    <Box w="100%" textAlign="center" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={tecnologia}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy" 
          layout="fill"
          objectFit="cover"
          objectPosition="center"         
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{tecnologia}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )


  export const WorkGridItem = ({ children, link, tecnologia, thumbnail}) => (
    // <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
    //   <NextLink href={`${link}`} target='_blank' scroll={false} passHref>
    //   <Image
    //         src={thumbnail}
    //         alt={title}
    //         className="grid-item-thumbnail"
    //         placeholder="blur"
    //       />
        
    //     <LinkBox cursor="pointer">
    //       <Image
    //         src={thumbnail}
    //         alt={title}
    //         className="grid-item-thumbnail"
    //         placeholder="blur"
    //       />
    //       <LinkOverlay href={`${link}`}  passHref>
    //         <Text mt={2} fontSize={20}>
    //           {title}
    //         </Text>
    //       </LinkOverlay>
    //       <Text fontSize={14}>{children}</Text>
    //     </LinkBox>
    //   </NextLink>
    // </Box>
    <NextLink href={`${link}`} target='_blank' scroll={false} passHref>
    <a target='_blank'rel="noopener noreferrer">
    <Box maxW='sm' borderWidth='3px' borderColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.300')}borderRadius='lg' overflow='hidden' cursor="pointer" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}>
    <Image src={thumbnail} alt={thumbnail} />

    <Box p='6'>
      <Box display='flex' alignItems='baseline'>    
      <Badge borderRadius='full' px='2' colorScheme='teal'>
            {tecnologia}
          </Badge>   
        <Box
          color='gray.500'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='xs'
          textTransform='uppercase'
          ml='2'
        >          
        </Box>
      </Box>
      <Box
        mt='1'
        fontWeight='semibold'
        as='h4'
        lineHeight='tight'
        noOfLines={1}
      >
        {children}
      </Box>
      <Box>
      </Box>      
    </Box>
  </Box>
  </a>
  </NextLink>
  )
  
  export const GridItemStyle = () => (
    <Global
      styles={`
        .grid-item-thumbnail {
          border-radius: 50px;
        }
      `}
    />
  )
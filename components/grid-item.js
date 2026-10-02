import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Flex, Text, LinkBox, LinkOverlay, Badge, Wrap, WrapItem, Icon, useColorModeValue } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { FaStore, FaDice, FaMicrochip, FaChessKnight, FaCode } from 'react-icons/fa'

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

  const icons = {
    store: FaStore,
    dice: FaDice,
    cpu: FaMicrochip,
    chess: FaChessKnight
  }

  export const ProjectCover = ({ cover, icon, height = '160px' }) => (
    <Flex h={height} bgGradient={cover} align='center' justify='center'>
      <Icon as={icons[icon] || FaCode} boxSize={16} color='whiteAlpha.900' />
    </Flex>
  )

  export const WorkGridItem = ({ project }) => (
    <LinkBox
      as='article'
      h='100%'
      borderWidth='3px'
      borderColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.300')}
      borderRadius='lg'
      overflow='hidden'
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      transition='transform 0.2s'
      _hover={{ transform: 'translateY(-4px)' }}
    >
      <ProjectCover cover={project.cover} icon={project.icon} />
      <Box p='5'>
        <Wrap spacing={2} mb={2}>
          {project.tecnologias.map(t => (
            <WrapItem key={t}>
              <Badge borderRadius='full' px='2' colorScheme='teal'>
                {t}
              </Badge>
            </WrapItem>
          ))}
        </Wrap>
        <NextLink href={`/works/${project.slug}`} scroll={false} passHref>
          <LinkOverlay>
            <Text fontWeight='semibold' fontSize='lg'>
              {project.title}
            </Text>
          </LinkOverlay>
        </NextLink>
        <Text fontSize='sm' color={useColorModeValue('gray.600', 'gray.400')}>
          {project.subtitle}
        </Text>
      </Box>
    </LinkBox>
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

import { Box, Container, Flex, Heading, Text, VStack, Link, HStack } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">My Blog</Heading>
            <HStack spacing={4}>
              <Link href="#home" color="white">Home</Link>
              <Link href="#about" color="white">About</Link>
              <Link href="#contact" color="white">Contact</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxW="container.lg" py={10}>
        <VStack spacing={8} align="start">
          <Box>
            <Heading as="h2" size="xl">Welcome to My Blog</Heading>
            <Text mt={4}>This is a place where I share my thoughts and experiences. Stay tuned for more updates!</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg">Latest Posts</Heading>
            <VStack spacing={4} mt={4} align="start">
              <Box p={4} borderWidth="1px" borderRadius="md" w="100%">
                <Heading as="h4" size="md">Post Title 1</Heading>
                <Text mt={2}>A brief description of the first blog post...</Text>
              </Box>
              <Box p={4} borderWidth="1px" borderRadius="md" w="100%">
                <Heading as="h4" size="md">Post Title 2</Heading>
                <Text mt={2}>A brief description of the second blog post...</Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.900" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Text>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="https://twitter.com" isExternal>
                <FaTwitter />
              </Link>
              <Link href="https://github.com" isExternal>
                <FaGithub />
              </Link>
              <Link href="https://linkedin.com" isExternal>
                <FaLinkedin />
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
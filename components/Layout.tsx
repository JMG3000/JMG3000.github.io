import { Box, Container, Flex, Link, Stack, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <VStack minH="100vh" gap={0}>
      <Box bg="gray.800" color="white" py={4} w="100%">
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Link as={NextLink} href="/" fontSize="xl" fontWeight="bold" _hover={{ textDecoration: "none" }}>
              Jacob Garrett
            </Link>

            <Stack direction="row" gap={6}>
              <Link as={NextLink} href="/" _hover={{ textDecoration: "underline" }}>
                Home
              </Link>
              <Link as={NextLink} href="/portfolio" _hover={{ textDecoration: "underline" }}>
                Portfolio
              </Link>
            </Stack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.lg" py={8} flex={1} w="100%">
        {children}
      </Container>

      <Box bg="gray.800" color="white" py={6} w="100%" mt="auto">
        <Container maxW="container.lg">
          <Stack gap={4}>
            <Stack direction="row" gap={6}>
              <Link href="https://github.com/JMG3000" target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "underline" }}>
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/jacobgarrett/"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{ textDecoration: "underline" }}
              >
                LinkedIn
              </Link>
              <Link href="mailto:jakeincbusinesssolutions@gmail.com" _hover={{ textDecoration: "underline" }}>
                Email
              </Link>
            </Stack>
            <Text fontSize="sm" color="gray.400">
              © {new Date().getFullYear()} Jacob Garrett. All rights reserved.
            </Text>
          </Stack>
        </Container>
      </Box>
    </VStack>
  );
}

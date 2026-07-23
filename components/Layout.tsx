import { Box, Container, Flex, Link, Stack, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <VStack minH="100vh" gap={0}>
      <Box as="header" bg="gray.800" color="white" py={4} w="100%">
        <Container maxW="6xl">
          <Flex
            as="nav"
            aria-label="Primary"
            align={{ base: "flex-start", sm: "center" }}
            direction={{ base: "column", sm: "row" }}
            gap={4}
            justify="space-between"
          >
            <Link asChild _hover={{ textDecoration: "underline" }}>
              <NextLink href="/">
                <Text as="span" fontSize="xl" fontWeight="bold">
                  Jacob Garrett
                </Text>
              </NextLink>
            </Link>
            <Stack as="span" direction="row" gap={{ base: 4, sm: 6 }} wrap="wrap">
              <Link asChild _hover={{ textDecoration: "underline" }}>
                <NextLink href="/">Home</NextLink>
              </Link>
              <Link asChild _hover={{ textDecoration: "underline" }}>
                <NextLink href="/portfolio">Portfolio</NextLink>
              </Link>
            </Stack>
          </Flex>
        </Container>
      </Box>

      <Container as="main" maxW="6xl" py={{ base: 8, md: 12 }} flex={1} w="100%">
        {children}
      </Container>

      <Box as="footer" bg="gray.800" color="white" py={6} w="100%" mt="auto">
        <Container maxW="6xl">
          <Stack gap={4}>
            <Stack direction="row" gap={{ base: 4, sm: 6 }} wrap="wrap">
              <Link
                href="https://github.com/JMG3000"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{ textDecoration: "underline" }}
              >
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
              <Link
                href="mailto:jakeincbusinesssolutions@gmail.com"
                _hover={{ textDecoration: "underline" }}
              >
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

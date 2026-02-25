import { Box, Container, Flex, Link, Stack, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <VStack minH="100vh" gap={0}>
      <Box bg="gray.800" color="white" py={4} w="100%">
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">

            // change href and a href tags to CharkraLinks 
            <NextLink href="/">
              <Text fontSize="xl" fontWeight="bold" cursor="pointer">
                Jacob Garrett
              </Text>
            </NextLink>
            <Stack direction="row" gap={6}>
              <NextLink href="/">
                <Link _hover={{ textDecoration: "underline" }}>Home</Link>
              </NextLink>
              <NextLink href="/portfolio">
                <Link _hover={{ textDecoration: "underline" }}>Portfolio</Link>
              </NextLink>
              <NextLink href="/tutorials">
                <Link _hover={{ textDecoration: "underline" }}>Tutorials</Link>
              </NextLink>
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
              <NextLink href="https://github.com/JMG3000" target="_blank">
                <Link _hover={{ textDecoration: "underline" }}>GitHub</Link>
              </NextLink>
              <NextLink href="https://www.linkedin.com/in/jacobgarrett/" target="_blank">
                <Link _hover={{ textDecoration: "underline" }}>LinkedIn</Link>
              </NextLink>
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
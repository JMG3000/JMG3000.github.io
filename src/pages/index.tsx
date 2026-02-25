import Head from "next/head";
import NextLink from "next/link";
import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jacob Garrett</title>
        <meta name="description" content="Jacob Garrett – Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack align="start" gap={10}>
        {/* Hero */}
        <Box>
          <Heading as="h1" size="3xl" mb={4}>
            Hi, I&apos;m Jacob Garrett
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="600px">
            Software developer passionate about building clean, useful products.
            Welcome to my personal site.
          </Text>
          <Stack direction="row" gap={4} mt={6}>
            <NextLink href="/portfolio">
              <Button colorPalette="blue" size="lg">
                View Portfolio
              </Button>
            </NextLink>
            <NextLink href="mailto:jakeincbusinesssolutions@gmail.com">
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </NextLink>
          </Stack>
        </Box>

        {/* About */}
        <Box>
          <Heading as="h2" size="xl" mb={3}>
            About Me
          </Heading>
          <Text color="gray.600" maxW="700px" lineHeight="tall">
            I enjoy working across the full stack — from designing intuitive
            front-end interfaces to building reliable back-end systems. Check
            out my portfolio to see what I&apos;ve been working on.
          </Text>
        </Box>

        {/* Links */}
        <Box>
          <Heading as="h2" size="xl" mb={3}>
            Connect
          </Heading>
          <Stack direction="row" gap={4}>
            <NextLink href="https://github.com/JMG3000" target="_blank">
              <Button variant="outline">GitHub</Button>
            </NextLink>
            <NextLink
              href="https://www.linkedin.com/in/jacobgarrett/"
              target="_blank"
            >
              <Button variant="outline">LinkedIn</Button>
            </NextLink>
          </Stack>
        </Box>
      </VStack>
    </>
  );
}

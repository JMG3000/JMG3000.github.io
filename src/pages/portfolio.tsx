import Head from "next/head";
import NextLink from "next/link";
import { Box, Button, Heading, Link, List, Text, VStack } from "@chakra-ui/react";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio | Jacob Garrett</title>
        <meta
          name="description"
          content="Selected software projects by Jacob Garrett, including full-stack web development and technical writing."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack align="start" gap={8}>
        <Box>
          <Heading as="h1" size="2xl" mb={3}>
            Portfolio
          </Heading>
          <Text color="gray.600" maxW="700px">
            A snapshot of the projects and learning work I am actively building and refining.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={3}>
            Featured Project
          </Heading>
          <Heading as="h3" size="md" mb={2}>
            Personal Site Revamp
          </Heading>
          <Text color="gray.600" mb={3}>
            Modernized my portfolio from a legacy static stack to a Next.js + Chakra UI application with reusable
            layout components and cleaner page architecture.
          </Text>
          <List.Root as="ul" gap={1} ps={5}>
            <List.Item>Rebuilt navigation and shared layout components for consistency.</List.Item>
            <List.Item>Improved page metadata and route organization.</List.Item>
            <List.Item>Documented setup and validation workflows for future maintenance.</List.Item>
          </List.Root>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={3}>
            Connect
          </Heading>
          <Text color="gray.600" mb={3}>
            Browse source code and professional background.
          </Text>
          <VStack align="start" gap={2}>
            <Link href="https://github.com/JMG3000" target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </Link>
            <Link href="https://www.linkedin.com/in/jacobgarrett/" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </Link>
          </VStack>
        </Box>

        <Button as={NextLink} href="/" variant="outline">
          Back to Home
        </Button>
      </VStack>
    </>
  );
}

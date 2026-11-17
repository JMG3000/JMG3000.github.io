import { Badge, Box, Heading, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";

const projects = [
  {
    title: "Personal Site Modernization",
    description:
      "A history-preserving rebuild of this portfolio from its original Jekyll foundation into a typed, responsive Next.js application deployed through GitHub Pages.",
    technologies: ["Next.js", "React", "TypeScript", "GitHub Actions"],
    href: "https://github.com/JMG3000/JMG3000.github.io",
    linkLabel: "View repository",
  },
  {
    title: "GitHub Profile",
    description:
      "Current software, infrastructure, and automation work, including public repositories and contribution history.",
    technologies: ["DevOps", "Web Engineering", "Automation"],
    href: "https://github.com/JMG3000",
    linkLabel: "Explore GitHub Profile",
  },
];

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio | Jacob Garrett</title>
        <meta
          name="description"
          content="Selected web engineering, DevOps, and automation work by Jacob Garrett."
        />
      </Head>

      <Stack as="section" aria-labelledby="portfolio-title" gap={{ base: 8, md: 10 }}>
        <Stack gap={3} maxW="3xl">
          <Text color="blue.600" fontWeight="semibold" letterSpacing="wide" textTransform="uppercase">
            Selected work
          </Text>
          <Heading id="portfolio-title" as="h1" size={{ base: "2xl", md: "3xl" }}>
            Portfolio
          </Heading>
          <Text color="fg.muted" fontSize={{ base: "lg", md: "xl" }}>
            Practical engineering focused on reliable delivery, maintainable systems, and clear user experiences.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {projects.map((project) => (
            <Box
              as="article"
              key={project.title}
              borderWidth="1px"
              borderColor="border"
              borderRadius="xl"
              p={{ base: 6, md: 8 }}
              shadow="sm"
            >
              <Stack gap={5} h="100%">
                <Heading as="h2" size="lg">
                  {project.title}
                </Heading>
                <Text color="fg.muted" flex="1">
                  {project.description}
                </Text>
                <Stack direction="row" gap={2} wrap="wrap">
                  {project.technologies.map((technology) => (
                    <Badge key={technology} colorPalette="blue" variant="subtle">
                      {technology}
                    </Badge>
                  ))}
                </Stack>
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="blue.600"
                  fontWeight="semibold"
                  alignSelf="flex-start"
                >
                  {project.linkLabel}
                </Link>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Stack>
    </>
  );
}

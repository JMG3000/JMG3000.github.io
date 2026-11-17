import { Box, Heading, Link, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";

import { getResearchDocuments, readResearchIndex, renderResearchMarkdown } from "@/config/research";

type ResearchIndexProps = {
  html: string;
  documents: ReturnType<typeof getResearchDocuments>;
};

export default function ResearchIndex({ html, documents }: ResearchIndexProps) {
  return (
    <>
      <Head>
        <title>Research | Jacob Garrett</title>
        <meta name="description" content="Research, evidence, and engineering governance for the portfolio." />
      </Head>
      <Stack as="section" gap={8}>
        <Box
          className="research-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Box as="section" aria-labelledby="research-documents-heading">
          <Heading id="research-documents-heading" size="xl" mb={4}>
            Research documents
          </Heading>
          <Stack gap={4}>
            {documents.map((document) => (
              <Box
                as="article"
                key={document.slug}
                borderWidth="1px"
                borderColor="border"
                borderRadius="lg"
                p={{ base: 4, md: 5 }}
              >
                <Link asChild fontWeight="semibold" color="blue.600">
                  <NextLink href={`/research/${document.slug}`}>{document.title}</NextLink>
                </Link>
                <Text color="fg.muted" mt={2}>
                  {document.description}
                </Text>
              </Box>
            ))}
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

export function getStaticProps() {
  const index = readResearchIndex();
  return {
    props: {
      html: renderResearchMarkdown(index.content),
      documents: getResearchDocuments(),
    },
  };
}

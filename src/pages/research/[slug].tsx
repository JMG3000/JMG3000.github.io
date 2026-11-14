import { Box, Breadcrumb, Heading, Link, Stack } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";

import {
  getResearchDocumentSlugs,
  readResearchDocument,
  renderResearchMarkdown,
} from "@/config/research";

type ResearchDocumentProps = {
  title: string;
  description: string;
  html: string;
};

export default function ResearchDocumentPage({ title, description, html }: ResearchDocumentProps) {
  return (
    <>
      <Head>
        <title>{title} | Research | Jacob Garrett</title>
        <meta name="description" content={description} />
      </Head>
      <Stack gap={6}>
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link asChild>
                <NextLink href="/research">Research</NextLink>
              </Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.CurrentLink>{title}</Breadcrumb.CurrentLink>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
        <Box className="research-content" dangerouslySetInnerHTML={{ __html: html }} />
        <Link asChild color="blue.600" fontWeight="semibold" alignSelf="flex-start">
          <NextLink href="/research">Back to research index</NextLink>
        </Link>
      </Stack>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getResearchDocumentSlugs().map((slug) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ResearchDocumentProps> = async ({ params }) => {
  const slug = typeof params?.slug === "string" ? params.slug : "";
  try {
    const document = readResearchDocument(slug);
    return {
      props: {
        title: document.title,
        description: document.description,
        html: renderResearchMarkdown(document.content, document.source),
      },
    };
  } catch {
    return { notFound: true };
  }
};

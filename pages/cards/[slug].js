import Head from "next/head";
import { Fragment } from "react";

import cardContent from "../../components/cards/card-detail/card-content";
import { getcardData, getcardsFiles } from "../../lib/cards-util";

function cardDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.card.title}</title>
        <meta name="description" content={props.card.excerpt} />
      </Head>
      <cardContent card={props.card} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const cardData = getcardData(slug);

  return {
    props: {
      card: cardData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const cardFilenames = getcardsFiles();

  const slugs = cardFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default cardDetailPage;

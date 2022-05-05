import Head from "next/head";
import { Fragment } from "react";

import { getAllcards } from "../../lib/cards-util";

function AllcardsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All cards</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and cards!"
        />
      </Head>
    </Fragment>
  );
}

export function getStaticProps() {
  const allcards = getAllcards();

  return {
    props: {
      cards: allcards,
    },
  };
}

export default AllcardsPage;

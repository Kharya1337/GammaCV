import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { DocsPage } from '../../src/pages';

const Doc = (props, context) => {
  const { id, data, desc } = props;
  const { intl } = context;

  const name = intl.getText('operations', undefined, id);
  return (
    <>
      <Head>
        <title>
          {name}
          {' '}
          - GammaCV
        </title>
        <meta name="description" content={name + ' ' + desc} />
      </Head>
      <DocsPage
        data={data}
        id={id}
      />
    </>
  );
};

export async function getStaticPaths() {
  const config = (await import('../../sources/docs/config.json')).default;
  const list = config.reduce((res, group) => res.concat(group.children), []);

  return {
    paths: list.map((doc) => ({
      params: {
        id: doc.name,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const data = (await import(`../../sources/docs/_data/${context.params.id}.md`)).default;
  const json = (await import(`../../sources/docs/_data/${context.params.id}.json`)).default;

  return {
    props: {
      id: context.params.id,
      data,
      desc: json[0].description,
    },
  };
}

Doc.contextTypes = {
  intl: PropTypes.shape({
    getText: PropTypes.func,
  }),
};

export default Doc;

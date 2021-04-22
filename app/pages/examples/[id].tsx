import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { CircularProgress } from 'lib-react-components';

const Example = (props, context) => {
  const { id, description } = props;
  const { intl } = context;
  const [loading, setLoading] = useState(true);
  const [examplePage, setExamplePage] = useState<typeof import('../../src/pages/example')>({} as any);
  const [exampleData, setExampleData] = useState<{ default: any }>({} as any);

  useEffect(() => {
    Promise.all([
      import('../../src/pages/example'),
      import(`../../sources/examples/${id}.js`),
    ]).then((res) => {
      setExamplePage(res[0]);
      setExampleData(res[1]);
      setLoading(false);
    });
  });

  const renderContent = () => {
    if (loading) {
      return (
        <CircularProgress
          size={40}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

      );
    }

    const ExamplePage = examplePage.default;

    return (
      <ExamplePage
        data={exampleData.default}
        exampleName={id}
      />
    );
  };

  const TITLE = `${intl.getText('operations', undefined, id)} - GammaCV`;

  return (
    <>
      <Head>
        <title>
          {TITLE}
        </title>
        <meta name="twitter:title" content={TITLE} />
        <meta property="og:title" content={TITLE} />
        <meta name="description" content={TITLE + description} />
        <meta property="og:description" content={TITLE + description} />
        <meta name="twitter:description" content={TITLE + description} />
      </Head>
      {renderContent()}
    </>
  );
};

export async function getStaticPaths() {
  const config = (await import('../../sources/examples/config.json')).default;
  const list = config.reduce((res, group) => res.concat(group.examples), []);

  return {
    paths: list.map((example) => ({
      params: {
        id: example.path,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const config = (await import('../../sources/examples/config.json')).default;
  const { id } = context.params;
  let description;

  config.forEach((group) => {
    if (!description) {
      group.examples.forEach((example) => {
        if (example.path === id) {
          description = example.description;
        }
      });
      return;
    }
  });

  if (!description) {
    const doc = (await import(`../../sources/docs/_data/${id}.md`)).default;
    description = doc.match(/(?<=(^###### Description).*\n)(.|\n)[^#]*(?=\n\n#)/gm)[0];
  }

  return {
    props: {
      id,
      description: description.replace(/\n/g, ' '),
    },
  };
}

Example.contextTypes = {
  intl: PropTypes.shape({
    getText: PropTypes.func,
  }),
};

export default Example;

import '../styles/tailwind.css';
import CodeBlock from '../components/codeBlock';
import { MDXProvider } from '@mdx-js/react';
import slugify from 'slugify';

const components = {
  pre: (props) => <div {...props} />,
  code: CodeBlock,
  h2: (props) => (
    <h2 id={slugify(props.children.toLowerCase())}>{props.children}</h2>
  )
};

export default ({ Component, pageProps }) => (
  <MDXProvider components={components}>
    <Component {...pageProps} />
  </MDXProvider>
);

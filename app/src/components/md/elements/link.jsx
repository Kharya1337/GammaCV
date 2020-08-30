import React from 'react';
import PropTypes from 'prop-types';

/**
 * Link - link component
 * @param {object} props
 * @return {ReactElement} markup
 */
const Link = (props) => {
  const { children, href, title } = props;

  return (
    <a
      href={href}
      title={title}
      className="text_primary"
    >
      {children}
    </a>
  );
};

/**
 * PropTypes
 * @type {{
 *  children: object
 *  href: string
 *  title: string
 * }}
 */
Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  title: PropTypes.string,
};

Link.defaultProps = {
  children: null,
  href: '',
  title: '',
};

export default Link;

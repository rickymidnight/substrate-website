import { Link } from 'gatsby-plugin-substrate/src/components/default/Link';
import React from 'react';

import { useSiteMetadata } from '../../hooks/use-site-metadata';
import Icon from '../default/Icon';

export default function DocsButton() {
  const { siteMetadata } = useSiteMetadata();
  const docsLink = siteMetadata.docsUrl + '/v' + siteMetadata.docsVersion;

  return (
    // TODO: add docs link
    // TODO: add docs title i18n
    <Link to={docsLink} className="block opacity-100 transform transition duration-300 ease-in-out hover:opacity-80">
      <button className="flex items-center justify-center bg-substrateDark dark:bg-white  text-sm py-2 w-20 rounded focus:outline-none fill-current text-white dark:text-black">
        <Icon name="docs" />
        <span className="pl-2">Docs</span>
      </button>
    </Link>
  );
}

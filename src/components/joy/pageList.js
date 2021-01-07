/** @jsx jsx */

import React from 'react'; //eslint-disable-line
import { jsx, Box } from 'theme-ui';
import { Link } from 'gatsby';

import { globalHistory } from '@reach/router';

import { useSiteMetadata } from '../../hooks/use-site-metadata';

export default function PageList({ type, limit }) {
  const { page, blog, gallery } = useSiteMetadata();

  const listPages =
    type === 'Gallery'
      ? gallery.edges
      : type === 'Blog'
      ? blog.edges
      : type === 'Page'
      ? page.edges
      : null;

  const path = globalHistory.location.pathname;

  const sliceCount = limit ? limit : '3';

  return (
    <>
      {listPages.slice(0, sliceCount).map(
        (listPage) =>
          listPage.node.pageType === type && (
            <Link
              key={listPage.node.id}
              to={
                path === '/'
                  ? listPage.node.pageType === 'Gallery'
                    ? 'photography/' + listPage.node.slug
                    : listPage.node.pageType === 'Blog'
                    ? 'blog/' + listPage.node.slug
                    : '/' + listPage.node.slug
                  : path === '/photography/'
                  ? listPage.node.pageType === 'Gallery'
                    ? path + listPage.node.slug
                    : listPage.node.pageType === 'Blog'
                    ? path + listPage.node.slug
                    : path + listPage.node.slug
                  : path === '/blog/'
                  ? listPage.node.pageType === 'Gallery'
                    ? path + listPage.node.slug
                    : listPage.node.pageType === 'Blog'
                    ? path + listPage.node.slug
                    : path + listPage.node.slug
                  : ''
              }
            >
              <Box
                sx={{
                  paddingBottom: '2rem',
                  borderBottom: '1px solid',
                  borderColor: 'inherit',
                }}
              >
                {listPage.node.title}
              </Box>
            </Link>
          )
      )}
    </>
  );
}
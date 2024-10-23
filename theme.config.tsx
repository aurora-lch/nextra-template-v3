import type { DocsThemeConfig } from 'nextra-theme-docs';

import { useRouter } from 'nextra/hooks';
import React from 'react';

import UpdateTime from '~/UpdateTime';
import { Logo } from '~/icon';

export default {
  logo: <Logo />,
  footer: {
    component: null
  },
  toc: {
    backToTop: true,
    title: '导航'
  },
  editLink: {
    component: null
  },
  feedback: {
    content: null
  },
  head: (
    <>
      <link rel="icon" href="/help/docs/favicon.png" />
    </>
  ),
  primaryHue: {
    light: 228,
    dark: 0
  },
  primarySaturation: {
    light: 86,
    dark: 80
  },
  gitTimestamp: ({ timestamp }) => <UpdateTime date={timestamp} />,
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath === '/') {
      return {
        title: '帮助文档'
      }
    } else {
      return {
        titleTemplate: '%s - 帮助文档'
      }
    }
  },
} as DocsThemeConfig;

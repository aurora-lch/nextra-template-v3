import type { DocsThemeConfig } from 'nextra-theme-docs';
import { useConfig } from 'nextra-theme-docs';

import { Logo } from '~/icon';

export default {
  logo: <Logo />,
  footer: {
    component: null
  },
  editLink: {
    component: null
  },
  feedback: {
    content: null
  },
  head() {
    const { title } = useConfig();

    return (
      <>
        <title>{title}</title>
      </>
    )
  }
} as DocsThemeConfig;

import React from 'react';

export default {
  getSiteData: async () => ({
    title: 'Hedylity Technology',
    lastBuilt: Date.now()
  }),
  siteRoot: 'https://hedy.tech/',
  Document: class CustomHtml extends React.Component {
    render () {
      const { Html, Head, Body, children } = this.props;
      return (
        <Html>
          <Head>
            <script async src='https://www.googletagmanager.com/gtag/js?id=UA-139204005-1' />
            <script dangerouslySetInnerHTML={{ __html: 'window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments)};gtag(\'js\', new Date());gtag(\'config\', \'UA-139204005-1\');' }} />
            <title>Hedylity Technology</title>
            <meta charSet='utf-8' name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='description' content='Hedy focuses on making successful digitalization journeys with forefront technology, high-skilled people and an innovative environment.' />
            <meta property='og:title' content='Hedylity Technology' />
            <meta property='og:description' content='Hedy focuses on making successful digitalization journeys with forefront technology, high-skilled people and an innovative environment.' />
            <meta property='og:image' content='https://hedy.tech/logo.png' />
            <meta name='twitter:title' content='Hedylity Technology' />
            <meta name='twitter:description' content='Hedy focuses on making successful digitalization journeys with forefront technology, high-skilled people and an innovative environment.' />
            <meta name='twitter:image' content='https://hedy.tech/logo.png' />
            <meta name='twitter:card' content='summary' />
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  },
  getRoutes: async () => {
    return [
      {
        path: '/',
        template: 'src/pages/home'
      },
      {
        path: '/about',
        template: 'src/pages/about'
      },
      {
        path: '/academy',
        template: 'src/pages/academy'
      },
      {
        path: '/bookingconditions',
        template: 'src/pages/bookingconditions'
      },
      {
        path: '/hedy',
        template: 'src/pages/hedy'
      },
      {
        path: '/innovationstudio',
        template: 'src/pages/innovationstudio'
      },
      {
        path: '/kotlin',
        template: 'src/pages/kotlin'
      },
      {
        path: '/privacypolicy',
        template: 'src/pages/privacypolicy'
      },
      {
        path: '/services',
        template: 'src/pages/services'
      },
      {
        path: '/careers',
        template: 'src/pages/careers'
      },
      {
        path: '404',
        template: 'src/pages/404'
      },
    ];
  },
  plugins: [
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ]
};

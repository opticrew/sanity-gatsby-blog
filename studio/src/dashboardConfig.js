export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ead45eee83a657ce088c247',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-svtg3rkz',
                  apiId: '4d48d191-40e5-4520-a045-808b57f546d1'
                },
                {
                  buildHookId: '5ead45ef7feab7093f354589',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8kc433pi',
                  apiId: '9c1999c3-b4ab-40b2-9ea4-a2311419a402'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/opticrew/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8kc433pi.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

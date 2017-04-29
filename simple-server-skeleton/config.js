docute.init({
  repo: 'raidenz/simple-server-skeleton',
  // url: docute.isDev ? location.origin : 'http://localhost:8080',
  // routerMode: 'history',
  nav: [
    // homepage
    {title: 'Home', path: '/'},
    {title: 'Command Line', path: '/cli/knex'},
    {title: 'Vagrant', path: '/cli/vagrant'},
    {title: 'Api', type: 'dropdown', items: [
      {type: 'label', title: 'Auth'},
      {title: 'Auth', path: '/api/auth'},
      {type: 'label', title: 'Post'},
      {title: 'Post', path: '/api/post'},
      {type: 'sep'}, // separator
      {title: 'User', path: '/api/user'},
      {title: 'Start me on github', path: 'https://github.com/raidenz/simple-server-skeleton'}
    ]}
  ]
})

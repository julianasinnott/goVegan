export const routes = {
  USER: {
    featured: {
      path: '/cadastro',
      name:'Cadastre-se'
    },
    routes: [
      {
        path: '/',
        name: 'Início'
      },
      {
        path: '/blog',
        name: 'Blog'
      },
      {
        path: '/receitas',
        name: 'Receitas'
      },
      {
        path: '/parceiros',
        name: 'Parceiros'
      },
      {
        path: '/nutricao',
        name: 'Nutrição'
      },
    ]
  },
  ADMIN: {
    featured: {
      path: '/logout',
      name:'Sair'
    },
    routes: [
      {
        path: '/',
        name: 'Início'
      },
    ]
  }
}
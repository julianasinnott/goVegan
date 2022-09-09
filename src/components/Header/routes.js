import { HouseLine, NewspaperClipping, ForkKnife, Heart, AppleLogo } from "phosphor-react"

export const routes = {
  USER: {
    featured: {
      path: '/cadastro',
      name:'Cadastre-se'
    },
    routes: [
      {
        path: '/',
        name: 'Início',
        icon: HouseLine
      },
      {
        path: '/blog',
        name: 'Blog',
        icon: NewspaperClipping
      },
      {
        path: '/receitas',
        name: 'Receitas',
        icon: ForkKnife
      },
      {
        path: '/parceiros',
        name: 'Parceiros',
        icon: Heart
      },
      {
        path: '/nutricao',
        name: 'Nutrição',
        icon: AppleLogo
      },
    ]
  },
  ADMIN: {
    featured: {
      path: '/',
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
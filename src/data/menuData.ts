import { MenuCategory } from '../types';

export const menuData: MenuCategory[] = [
  {
    id: 'assados',
    title: 'Assados',
    items: [
      {
        id: 'presunto-mussarela',
        name: 'Presunto e Mussarela',
        description: 'Salgado assado com presunto e mussarela.',
        price: 12.00,
        image: '/salgado_presunto_mussarela.png'
      },
      {
        id: 'torta-frango-item',
        name: 'Torta de Frango',
        description: 'Recheio cremoso.',
        price: 10.00,
        image: '/torta-frango.png'
      },
      {
        id: 'pastelao-frango-bacon',
        name: 'Pastelão Frango e Bacon',
        description: '',
        price: 12.00,
        image: '/pastelao.png'
      },
      {
        id: 'esfirra-carne-bacon',
        name: 'Esfirras: Carne ou Bacon',
        description: 'Escolha entre carne moída ou bacon, sempre deliciosa.',
        price: 9.00,
        image: '/esfirra.png'
      },
      {
        id: 'salsicha',
        name: 'Salsicha',
        description: 'Salgado assado com salsicha.',
        price: 9.00,
        image: '/salgado_salsicha.png'
      },
      {
        id: 'calabresa',
        name: 'Calabresa',
        description: 'Salgado assado com calabresa.',
        price: 10.00,
        image: '/salgado_calabresa.png'
      },
      {
        id: 'hamburger',
        name: 'Hambúrguer',
        description: 'Salgado assado com hambúrguer.',
        price: 11.00,
        image: '/hamburger.png'
      }
    ]
  },
  {
    id: 'lanches',
    title: 'Lanches',
    items: [
      {
        id: 'sanduiche-natural',
        name: 'Sanduíche Natural',
        description: 'Opção leve e saudável para seu lanche.',
        price: 9.00,
        image: '/sanduiche-natural.png'
      },
      {
        id: 'bauru',
        name: 'Bauru',
        description: 'Pão, presunto, queijo e tomate.',
        price: 8.00,
        image: '/misto-quente.png'
      },
      {
        id: 'misto-quente',
        name: 'Misto Quente',
        description: 'O clássico pão com presunto e queijo na chapa.',
        price: 8.00,
        image: '/bauru-pao-frances.png'
      },
      {
        id: 'pao-ovo',
        name: 'Pão com Ovo',
        description: 'Feito na chapa, simples e delicioso.',
        price: 6.00,
        image: '/pao-frances-ovo.png',
      },
      {
        id: 'hot-dog',
        name: 'Cachorro Quente',
        description: 'Pão, salsicha e acompanhamentos da casa.',
        price: 10.00,
        image: '/cachorro-quente.png',
      }
    ]
  },
  {
    id: 'fritos',
    title: 'Fritos',
    items: [
      {
        id: 'quibe',
        name: 'Quibe',
        description: 'Salgado frito crocante.',
        price: 9.00,
        image: '/quibe.png'
      },
      {
        id: 'coxinha',
        name: 'Coxinha',
        description: 'Salgado frito recheado.',
        price: 9.00,
        image: '/coxinha.png'
      },
      {
        id: 'enroladinhos',
        name: 'Enroladinhos: Salsicha ou Presunto e Mussarela',
        description: '',
        price: 8.00,
        image: '/enroladinhos.png'
      },
      {
        id: 'risole',
        name: 'Risole',
        description: 'Salgado frito recheado.',
        price: 9.00,
        image: '/risole.png'
      },
      {
        id: 'maia',
        name: 'Maia',
        description: 'Salgado frito tradicional.',
        price: 9.00,
        image: '/maia.png'
      }
    ]
  },
  {
    id: 'panqueca',
    title: 'Panqueca',
    items: [
      {
        id: 'panqueca-item',
        name: 'Panqueca (Unidade)',
        description: 'Massa artesanal com recheio especial.',
        price: 15.00,
        image: '/panqueca.png'
      }
    ]
  },
  {
    id: 'cafeteria',
    title: 'Cafeteria',
    items: [
      {
        id: 'cafe',
        name: 'Café',
        description: 'Para alegrar seu dia.',
        price: 2.00,
        image: '/cafe.png',
      },
      {
        id: 'cafe-leite',
        name: 'Café com Leite',
        description: 'Média clássica de padaria.',
        price: 5.00,
        image: '/cafe-com-leite.png'
      },
      {
        id: 'toddy',
        name: 'Leite com Toddy',
        description: 'Quente ou frio.',
        price: 7.00,
        image: '/leite-com-toddy.png',
      }
    ]
  },
  {
    id: 'refeicoes',
    title: 'refeições',
    items: [
      {
        id: 'prato-feito',
        name: 'Prato Feito (PF)',
        description: 'Arroz, feijão, mistura do dia e salada.',
        price: 20.00,
        image: '/prato-feito-completo.png',
      },
      {
        id: 'marmitex',
        name: 'Marmitex',
        description: 'Sua refeição completa para levar.',
        price: 20.00,
        image: '/marmitex.png',
      }
    ]
  },
  {
    id: 'sucos',
    title: 'Suco Natural',
    items: [
      {
        id: 'suco-laranja',
        name: 'Suco Natural (500ml)',
        description: 'Laranja espremida na hora.',
        price: 10.00,
        badge: 'Fresco',
        image: '/suco-laranja.png'
      }
    ]
  },
  {
    id: 'espetos',
    title: 'Espetinhos & Porções',
    items: [
      {
        id: 'espeto-contra',
        name: 'Espetinho Contra Filé',
        description: 'Carne macia e selecionada.',
        price: 9.00,
        image: '/contra-file.png',
      },
      {
        id: 'espeto-frango',
        name: 'Espetinho de Frango c/ Bacon',
        description: 'Peito de frango suculento enrolado no bacon.',
        price: 9.00,
        image: '/frangocombacon.png',
      },
      {
        id: 'espeto-coracao',
        name: 'Espetinho de Coração',
        description: 'Coraçãozinho de frango temperado.',
        price: 9.00,
        image: '/coracao.png',
      },
      {
        id: 'espeto-kafta',
        name: 'Espetinho de Kafta',
        description: 'Carne moída temperada com especiarias.',
        price: 10.00,
        image: '/kafta.png',
      },
      {
        id: 'espeto-completo',
        name: 'Espeto Completo',
        description: 'Acompanha vinagrete, mandioca e farofa.',
        price: 14.00,
        image: '/completo.png',
      },
      {
        id: 'batata-frita',
        name: 'Porção de Batata Frita',
        description: 'Batatas sequinhas e crocantes (Porção inteira).',
        price: 25.00,
        image: '/porcao-de-batata-frita.png',
      }
    ]
  },
  {
    id: 'jantinhas',
    title: 'Jantinhas',
    items: [
      {
        id: 'jantinha-1',
        name: 'Jantinha (1 Espeto)',
        description: 'Arroz, vinagrete, mandioca, farofa e 1 espeto à escolha.',
        price: 18.00,
        image: '/jantinha-um-espetos.png',
      },
      {
        id: 'jantinha-2',
        name: 'Jantinha (2 Espetos)',
        description: 'Arroz, vinagrete, mandioca, farofa e 2 espetos à escolha.',
        price: 25.00,
        image: '/jantinha-dois-espetos.png',
      },
      {
        id: 'porcao-figado',
        name: 'Porção de Fígado',
        description: 'Fígado acebolado, suculento e bem temperado.',
        price: 35.00,
        image: '/figado.png',
      }
    ]
  },
  {
    id: 'cervejas',
    title: 'Cervejas Geladas',
    items: [
      {
        id: 'barrigudinha',
        name: 'Barrigudinha',
        description: 'Skol ou Brahma (Consulte disponibilidade).',
        price: 5.00,
        badge: 'Gelada',
        image: '/barrigudinha.png',
      },
      {
        id: 'lata',
        name: 'Cerveja Lata',
        description: '350ml bem gelada.',
        price: 5.00,
        image: '/cerveja-lata.png',
      },
      {
        id: 'imperio-long',
        name: 'Império Ultra (Long Neck)',
        description: '275ml.',
        price: 8.00,
        badge: 'Premium',
        image: '/ultra.png',
      },
      {
        id: 'imperio-helles',
        name: 'Império Helles',
        description: '330ml.',
        price: 9.00,
        image: '/imperio-helles.png',
      },
      {
        id: 'heineken',
        name: 'Heineken (Long Neck)',
        description: '330ml.',
        price: 8.00,
        badge: 'Favorita',
        image: '/heineken.png',
      }
    ]
  }
];

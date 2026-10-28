export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'Camisetas' | 'Moletons' | 'Calças' | 'Acessórios';
  price: number;
  originalPrice?: number;
  installments: string;
  freeShipping: boolean;
  color: string;
  images: string[];
  fits: string[];
  sizes: string[];
  badge?: string;
  description: string;
  details: {
    productionTime: string;
    fabric: string;
    weight: string;
    collar?: string;
    reinforcement?: string;
    effect?: string;
    print?: string;
    extras?: string[];
  };
  sizeGuideImage?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    slug: "camiseta-goregeous-preta",
    name: "Camiseta [GOREgeous.]",
    category: "Camisetas",
    price: 210,
    installments: "3x de R$ 70,00 sem juros",
    freeShipping: true,
    color: "Preta",
    images: [
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/goregeous-preta01-4c98d881fb62d55d8e17924339283373-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/goregeous-preta02-e6cf2bdb2946d1a65217924339300572-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_babytee-f65eaf246aefb2893017924339577013-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_boxy-3fac479ed1e1a6a93917924339593578-1024-1024.webp"
    ],
    fits: ["Baby tee", "Boxy", "Oversized", "Regular fit"],
    sizes: ["P", "M", "G", "GG"],
    description: "PRAZO DE PRODUÇÃO DA PEÇA É ENTRE 15 A 20 DIAS ÚTEIS\n\n• Malha: 100% algodão, Fio 26.1 penteado\n• Gramatura: 180g\n• Gola canelada\n• Reforço ombro a ombro\n• Efeito destroyer aplicado pela peça\n• Estampa em DTG\n• Mais de 300 strass cristal 3mm aplicados manualmente\n• Spikes prata de 10mm aplicados na manga direita",
    details: {
      productionTime: "15 a 20 dias úteis",
      fabric: "100% algodão, Fio 26.1 penteado",
      weight: "180g",
      collar: "Gola canelada",
      reinforcement: "Ombro a ombro",
      effect: "Destroyer artesanal aplicado pela peça",
      print: "DTG de alta definição",
      extras: ["Mais de 300 strass cristal 3mm aplicados à mão", "Spikes prata de 10mm na manga direita"]
    },
    sizeGuideImage: "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_boxy-3fac479ed1e1a6a93917924339593578-1024-1024.webp"
  },
  {
    id: "prod-2",
    slug: "camiseta-goregeous-branca",
    name: "Camiseta [GOREgeous.]",
    category: "Camisetas",
    price: 210,
    installments: "3x de R$ 70,00 sem juros",
    freeShipping: true,
    color: "Branca",
    images: [
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/goregeous-branca01-8c21b54a709d0c9c8d17924337594573-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/goregeous-branca02-8fa10561f8f020211c17924337614037-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_babytee-bc8d51a89c009df6af17924338844826-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_boxy-c5d48d647149d6f7bf17924338871866-1024-1024.webp"
    ],
    fits: ["Baby tee", "Boxy", "Oversized", "Regular fit"],
    sizes: ["P", "M", "G", "GG"],
    description: "PRAZO DE PRODUÇÃO DA PEÇA É ENTRE 15 A 20 DIAS ÚTEIS\n\n• Malha: 100% algodão, Fio 26.1 penteado\n• Gramatura: 180g\n• Gola canelada\n• Reforço ombro a ombro\n• Efeito destroyer aplicado pela peça\n• Estampa em DTG\n• Mais de 300 strass cristal 3mm aplicados manualmente",
    details: {
      productionTime: "15 a 20 dias úteis",
      fabric: "100% algodão, Fio 26.1 penteado",
      weight: "180g",
      collar: "Gola canelada",
      reinforcement: "Ombro a ombro",
      effect: "Destroyer artesanal aplicado pela peça",
      print: "DTG de alta definição",
      extras: ["Mais de 300 strass cristal 3mm aplicados manualmente"]
    },
    sizeGuideImage: "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_babytee-bc8d51a89c009df6af17924338844826-1024-1024.webp"
  },
  {
    id: "prod-3",
    slug: "moletom-ziper-desajustados",
    name: "Moletom Zíper [DESAJUSTADOS]",
    category: "Moletons",
    price: 420,
    installments: "3x de R$ 140,00 sem juros",
    freeShipping: true,
    color: "Preto",
    images: [
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/desajustadosmoletom01-4db38e21f42308980117924369398353-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/desajustadosmoletom02-d401cb5b0b8b379bbb17924369393548-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas-moletom-ziper-253fa546da366cd49717924371867398-1024-1024.webp"
    ],
    fits: ["Heavyweight Zip-up"],
    sizes: ["P", "M", "G", "GG"],
    description: "PRAZO DE PRODUÇÃO DA PEÇA É ENTRE 15 A 25 DIAS ÚTEIS\n\n• Malha: 96% algodão e 4% elastano\n• Gramatura: 300g\n• Reforço ombro a ombro\n• Efeito destroyer aplicado pela peça\n• Estampa em DTG\n• Spikes prata de 25mm aplicados em ambas as mangas\n• Zíper de metal inox extra grosso com 75cm",
    details: {
      productionTime: "15 a 25 dias úteis",
      fabric: "96% algodão e 4% elastano",
      weight: "300g (Heavyweight)",
      reinforcement: "Ombro a ombro reforçado",
      effect: "Destroyer aplicado pela peça inteira",
      print: "DTG frontal e traseiro",
      extras: ["Spikes prata maciços de 25mm em ambas mangas", "Zíper de metal inox extra grosso de 75cm", "Capuz duplo forrado"]
    },
    sizeGuideImage: "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas-moletom-ziper-253fa546da366cd49717924371867398-1024-1024.webp"
  },
  {
    id: "prod-4",
    slug: "camiseta-desajustados",
    name: "Camiseta [DESAJUSTADOS]",
    category: "Camisetas",
    price: 160,
    installments: "3x de R$ 53,33 sem juros",
    freeShipping: true,
    color: "Preta",
    images: [
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/desajustados01-76efc1f992c3125a1c17924336023893-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/desajustados02-28c34310c3b29de8df17924336045589-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_babytee-d42724ec8563bee86e17924336106650-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_boxy-fd44aee6a92747ee9917924336123524-1024-1024.webp"
    ],
    fits: ["Baby tee", "Boxy", "Oversized", "Regular fit"],
    sizes: ["P", "M", "G", "GG"],
    description: "PRAZO DE PRODUÇÃO DA PEÇA É ENTRE 15 A 20 DIAS ÚTEIS\n\n• Malha: 100% algodão, Fio 26.1 penteado\n• Gramatura: 180g\n• Gola canelada\n• Reforço ombro a ombro\n• Efeito destroyer aplicado pela peça\n• Estampa em DTG",
    details: {
      productionTime: "15 a 20 dias úteis",
      fabric: "100% algodão, Fio 26.1 penteado",
      weight: "180g",
      collar: "Gola canelada 2,5cm",
      reinforcement: "Ombro a ombro",
      effect: "Destroyer aplicado na barra e gola",
      print: "Estampa DTG industrial"
    },
    sizeGuideImage: "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_boxy-fd44aee6a92747ee9917924336123524-1024-1024.webp"
  },
  {
    id: "prod-5",
    slug: "camiseta-deangore",
    name: "Camiseta [DEANgore]",
    category: "Camisetas",
    price: 160,
    installments: "3x de R$ 53,33 sem juros",
    freeShipping: true,
    color: "Preta",
    images: [
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/deangore01-ca3d7ea1c72eb2e7ab17924335091822-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/deangore02-c362764f07ffde539317924335110927-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_babytee-6c226d94e107d4d4be17924335148012-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_boxy-9bafaa5374a7074ac517924335164208-1024-1024.webp"
    ],
    fits: ["Baby tee", "Boxy", "Oversized", "Regular fit"],
    sizes: ["P", "M", "G", "GG"],
    description: "PRAZO DE PRODUÇÃO DA PEÇA É ENTRE 15 A 20 DIAS ÚTEIS\n\n• Malha: 100% algodão, Fio 26.1 penteado\n• Gramatura: 180g\n• Gola canelada\n• Reforço ombro a ombro\n• Efeito destroyer aplicado pela peça\n• Estampa em DTG",
    details: {
      productionTime: "15 a 20 dias úteis",
      fabric: "100% algodão, Fio 26.1 penteado",
      weight: "180g",
      collar: "Gola canelada",
      reinforcement: "Ombro a ombro",
      effect: "Destroyer sutil na gola",
      print: "DTG com alta fidelidade de cor"
    },
    sizeGuideImage: "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_boxy-9bafaa5374a7074ac517924335164208-1024-1024.webp"
  },
  {
    id: "prod-6",
    slug: "camiseta-mygore",
    name: "Camiseta [MYGORE]",
    category: "Camisetas",
    price: 160,
    installments: "3x de R$ 53,33 sem juros",
    freeShipping: true,
    color: "Preta",
    images: [
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/mygore01-f4636309ed3e755e3717924340706034-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/mygore02-8cbe7535698d99372017924340725477-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_babytee-c0dcff259e7754c22417924340758182-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_boxy-8e0b4084d0345e153517924340776990-1024-1024.webp"
    ],
    fits: ["Baby tee", "Boxy", "Oversized", "Regular fit"],
    sizes: ["P", "M", "G", "GG"],
    description: "PRAZO DE PRODUÇÃO DA PEÇA É ENTRE 15 A 20 DIAS ÚTEIS\n\n• Malha: 100% algodão, Fio 26.1 penteado\n• Gramatura: 180g\n• Gola canelada\n• Reforço ombro a ombro\n• Efeito destroyer aplicado pela peça\n• Estampa em DTG",
    details: {
      productionTime: "15 a 20 dias úteis",
      fabric: "100% algodão, Fio 26.1 penteado",
      weight: "180g",
      collar: "Gola canelada",
      reinforcement: "Ombro a ombro",
      effect: "Destroyer artesanal",
      print: "DTG arte original"
    },
    sizeGuideImage: "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_boxy-8e0b4084d0345e153517924340776990-1024-1024.webp"
  },
  {
    id: "prod-7",
    slug: "camiseta-dead",
    name: "Camiseta [DEAD]",
    category: "Camisetas",
    price: 160,
    installments: "3x de R$ 53,33 sem juros",
    freeShipping: true,
    color: "Preta",
    images: [
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/dead01-c4953831e975e1261517924332932821-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/dead02-eee2e3a2d7ed0adbe817924332966946-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_babytee-83f406a8003d1eae1517924333867183-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_boxy-cd7e9d0230c361af8617924333886590-1024-1024.webp"
    ],
    fits: ["Baby tee", "Boxy", "Oversized", "Regular fit"],
    sizes: ["P", "M", "G", "GG"],
    description: "PRAZO DE PRODUÇÃO DA PEÇA É ENTRE 15 A 20 DIAS ÚTEIS\n\n• Malha: 100% algodão, Fio 26.1 penteado\n• Gramatura: 180g\n• Gola canelada\n• Reforço ombro a ombro\n• Efeito destroyer aplicado pela peça\n• Estampa em DTG\n• Spikes prata de 10mm aplicados em ambas as mangas",
    details: {
      productionTime: "15 a 20 dias úteis",
      fabric: "100% algodão, Fio 26.1 penteado",
      weight: "180g",
      collar: "Gola canelada",
      reinforcement: "Ombro a ombro",
      effect: "Destroyer aplicado pela peça",
      print: "Estampa em DTG",
      extras: ["Spikes prata de 10mm cravados em ambas as mangas"]
    },
    sizeGuideImage: "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_boxy-cd7e9d0230c361af8617924333886590-1024-1024.webp"
  },
  {
    id: "prod-8",
    slug: "camiseta-n33dlove",
    name: "Camiseta [N33Dlove]",
    category: "Camisetas",
    price: 160,
    installments: "3x de R$ 53,33 sem juros",
    freeShipping: true,
    color: "Preta",
    images: [
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/n33dlove01-ef3f0fefced6485d3917924341586827-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/n33dlove02-b127eeb8b022b7f4f517924341605614-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_babytee-930b196d58808b6bb317924342275220-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_boxy-9c5c7412da0551a06717924342289459-1024-1024.webp"
    ],
    fits: ["Baby tee", "Boxy", "Oversized", "Regular fit"],
    sizes: ["P", "M", "G", "GG"],
    description: "PRAZO DE PRODUÇÃO DA PEÇA É ENTRE 15 A 20 DIAS ÚTEIS\n\n• Malha: 100% algodão, Fio 26.1 penteado\n• Gramatura: 180g\n• Gola canelada\n• Reforço ombro a ombro\n• Efeito destroyer aplicado pela peça\n• Estampa em DTG\n• Spikes prata de 10mm aplicados em ambas mangas",
    details: {
      productionTime: "15 a 20 dias úteis",
      fabric: "100% algodão, Fio 26.1 penteado",
      weight: "180g",
      collar: "Gola canelada",
      reinforcement: "Ombro a ombro",
      effect: "Destroyer custom",
      print: "Estampa em DTG",
      extras: ["Spikes prata de 10mm em ambas as mangas"]
    },
    sizeGuideImage: "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_boxy-9c5c7412da0551a06717924342289459-1024-1024.webp"
  },
  {
    id: "prod-9",
    slug: "camiseta-tracking",
    name: "Camiseta [TRACKING]",
    category: "Camisetas",
    price: 160,
    installments: "3x de R$ 53,33 sem juros",
    freeShipping: true,
    color: "Preta",
    images: [
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/tracking01-b3ff802149e29b929e17924342672716-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/tracking02-de281366ab85fdcdef17924342689864-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_babytee-42bbf967340091fa9817924342726047-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_boxy-5f1046b4b3edec4feb17924342745574-1024-1024.webp"
    ],
    fits: ["Baby tee", "Boxy", "Oversized", "Regular fit"],
    sizes: ["P", "M", "G", "GG"],
    description: "PRAZO DE PRODUÇÃO DA PEÇA É ENTRE 15 A 20 DIAS ÚTEIS\n\n• Malha: 100% algodão, Fio 26.1 penteado\n• Gramatura: 180g\n• Gola canelada\n• Reforço ombro a ombro\n• Efeito destroyer aplicado pela peça\n• Estampa em DTG",
    details: {
      productionTime: "15 a 20 dias úteis",
      fabric: "100% algodão, Fio 26.1 penteado",
      weight: "180g",
      collar: "Gola canelada",
      reinforcement: "Ombro a ombro",
      effect: "Destroyer aplicado na peça",
      print: "DTG com tinta de alta durabilidade"
    },
    sizeGuideImage: "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_boxy-5f1046b4b3edec4feb17924342745574-1024-1024.webp"
  },
  {
    id: "prod-10",
    slug: "camiseta-c4nn1b4l",
    name: "Camiseta [C4NN1B4L]",
    category: "Camisetas",
    price: 160,
    installments: "3x de R$ 53,33 sem juros",
    freeShipping: true,
    color: "Preta",
    images: [
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/c4nn1b4l01-f5657ef6288468aae217924328636487-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/c4nn1b4l02-5dc35dbab40b22af4c17924328676253-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_babytee-c9a690370231651a8e17924334130574-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_boxy-42f8482bf85505eff617924334144433-1024-1024.webp"
    ],
    fits: ["Baby tee", "Boxy", "Oversized", "Regular fit"],
    sizes: ["P", "M", "G", "GG"],
    description: "PRAZO DE PRODUÇÃO DA PEÇA É ENTRE 15 A 20 DIAS ÚTEIS\n\n• Malha: 100% algodão, Fio 26.1 penteado\n• Gramatura: 180g\n• Gola canelada\n• Reforço ombro a ombro\n• Efeito destroyer aplicado pela peça\n• Estampa em DTG\n• Spikes prata de 10mm aplicados em ambas as mangas",
    details: {
      productionTime: "15 a 20 dias úteis",
      fabric: "100% algodão, Fio 26.1 penteado",
      weight: "180g",
      collar: "Gola canelada",
      reinforcement: "Ombro a ombro",
      effect: "Destroyer aplicado na peça",
      print: "Estampa DTG C4NN1B4L",
      extras: ["Spikes prata de 10mm aplicados nas duas mangas"]
    },
    sizeGuideImage: "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_boxy-42f8482bf85505eff617924334144433-1024-1024.webp"
  },
  {
    id: "prod-11",
    slug: "pulseiras-shi-o-omoe",
    name: "Pulseiras [死を想え] VEM APENAS 2 CORES SORTIDAS POR PACOTE",
    category: "Acessórios",
    price: 80,
    installments: "2x de R$ 40,00 sem juros",
    freeShipping: true,
    color: "Cores Sortidas",
    images: [
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/pulseira_01-d3b976ac5251aa4c4d17924347264226-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/pulseira_02-3311994188d19e56fb17924347281520-1024-1024.webp"
    ],
    fits: ["Kit 2 Cores"],
    sizes: ["Único (6,5cm)"],
    description: "VEM APENAS 2 CORES SORTIDAS POR PACOTE, PRAZO DE PRODUÇÃO DA PEÇA É ENTRE 15 A 20 DIAS ÚTEIS\n\n• Material: Silicone\n• Estampa realizada em serigrafia\n• Diâmetro: 6,5 cm\n• Largura: 12mm",
    details: {
      productionTime: "15 a 20 dias úteis",
      fabric: "Silicone macio de alta resistência",
      weight: "20g",
      print: "Serigrafia baixo-relevo preenchida",
      extras: ["Vem apenas 2 cores sortidas por pacote", "Diâmetro: 6,5 cm | Largura: 12mm"]
    }
  },
  {
    id: "prod-12",
    slug: "calca-stayparanoid",
    name: "Calça [StayParanoid]",
    category: "Calças",
    price: 360,
    installments: "3x de R$ 120,00 sem juros",
    freeShipping: true,
    color: "Black Denim Washed",
    badge: "Pronta Entrega",
    images: [
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/calaacalaa-bba3e64b3abcb3594b17924373669372-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/calaacalaa02-5cd75dc4c2621fd58a17924373704636-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_calaanormal-580b9f18af28cecc7517924373800563-1024-1024.webp"
    ],
    fits: ["Baggy Exagerada"],
    sizes: ["38", "40", "42", "44"],
    description: "!PEÇA PRONTA ENTREGA!\n\n• Denim brasileiro 13oz 100% algodão\n• Modelagem baggy !EXAGERADA!\n• 3 botões em zemac banhados com prata envelhecida mais cuidado em verniz para proteção, NÃO OXIDAM\n• Zíper de metal fixo preto 15cm",
    details: {
      productionTime: "Pronta Entrega (Envio em 24-48h)",
      fabric: "Denim brasileiro 13oz 100% algodão",
      weight: "Heavyweight 13oz",
      effect: "Lavagem acid washed / dirty black",
      extras: [
        "Modelagem baggy !EXAGERADA!",
        "3 botões em zemac banhados com prata envelhecida com verniz protetor",
        "Zíper de metal fixo preto 15cm",
        "Passantes largos para cinto tático"
      ]
    },
    sizeGuideImage: "https://acdn-us.mitiendanube.com/stores/004/386/155/products/medidas_calaanormal-580b9f18af28cecc7517924373800563-1024-1024.webp"
  }
];

export const BOTTOM_SLIDER_IMAGE = "https://acdn-us.mitiendanube.com/stores/004/386/155/themes/cali/slide-1788908088569-4787845473-12db4a7c90f8f74a8f03c3039e4965911788908089.png?978134236369146262";

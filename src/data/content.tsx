import { BsBoxFill } from 'react-icons/bs';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaTruckFast } from 'react-icons/fa6';
import { FiBox } from 'react-icons/fi';
import { IoChatboxOutline } from 'react-icons/io5';
import { MdOutlineCameraAlt } from 'react-icons/md';
import { PiPercentFill } from 'react-icons/pi';

import type { NavItemType } from '@/components/NavItem';

import brsb from '@/images/brsb.webp';
import compass_profile from '@/images/compass_profile.jpeg';
import compass1 from '@/images/shots/shot5.webp';
import compass2 from '@/images/shots/shot6.webp';
import compass3 from '@/images/shots/shot3.jpg';
import compass4 from '@/images/shots/shot2.jpg';
import dunklow from '@/images/dunklow.jpg';
import lebronxx from '@/images/lebronxx.jpg';
import metcon5 from '@/images/metcon5.jpg';
import metcon9 from '@/images/metcon9.webp';
import new_balance from '@/images/new_balance.png';
import new_balance1 from '@/images/shots/shot1.png';
import new_balance2 from '@/images/shots/shot2.jpg';
import new_balance3 from '@/images/shots/shot3.jpg';
import new_balance4 from '@/images/shots/shot4.jpg';
import blazer from '@/images/blazer.png';
import nike_profile from '@/images/nike_profile.jpg';
import redlow from '@/images/shots/shot4.jpg';
import shot1 from '@/images/shots/shot1.png';
import shot2 from '@/images/shots/shot2.jpg';
import shot3 from '@/images/shots/shot3.jpg';
import shot4 from '@/images/shots/shot4.jpg';
import shot5 from '@/images/shots/shot5.webp';
import shot6 from '@/images/shots/shot6.webp';
import shot7 from '@/images/shots/shot5.webp';
import yellowLow from '@/images/shots/shot1.png';


export const topNavLinks: NavItemType[] = [
  {
    id: 'ee46t',
    name: 'Home',
    href: '/home',
  },
  {
    id: 'eexct',
    name: 'Collections',
    href: '/products',
  },
  {
    id: 'h6ii8g',
    name: 'Contact',
    href: '/contact',
  },
  {
    id: 'h678ty',
    name: 'FAQ',
    href: '/faqs',
  },
  {
    id: 'h6i78g',
    name: 'Checkout',
    href: '/checkout',
  },
  {
    id: 'f678ty',
    name: 'Cart',
    href: '/cart',
  },
];

export const NavLinks: NavItemType[] = [
  {
    id: 'ee46t',
    name: 'Home',
    href: '/home',
  },
  {
    id: 'eexct',
    name: 'Collection',
    href: '/products',
  },

  {
    id: 'h6ii8g',
    name: 'Contact',
    href: '/contact',
  },
  {
    id: 'h678ty',
    name: 'FAQ',
    href: '/faqs',
  },
  {
    id: 'h6i78g',
    name: 'Checkout',
    href: '/checkout',
  },
  {
    id: 'f678ty',
    name: 'Cart',
    href: '/cart',
  },
];

export const headerSection = {
  title: 'NEW ARRIVAL!',
  heading: 'Artisanal products by type of craft.',
  description:
    "Feel unbeatable from the tee box to the final putt in a design that's pure early MJ: speed, class",
};

export const promotionTag = {
  heading: 'DISC UP TO 50% FOR ARTISANAL FEST ID 2023',
  description:
    'Join the artisanal fest 2023 on 23 October. We have more fun gigs too and supported by FootWear!.',
};

export const items = [

  {
    slug: 'item4',
    Name: 'Item 4',
    coverImage: brsb,
    currentPrice: 199,
    previousPrice: 250,
    Category: "Category 2",
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    justIn: false,
    shots: [brsb, shot1, shot2, shot3, shot4, shot5, shot6, shot7],
    overview:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam delectus in quis iure tempore facere, ullam aspernatur perferendis ipsa voluptatibus. Cupiditate, asperiores sapiente? Alias aut optio dolore magnam veritatis repellendus.',
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: 'Discount',
        description: '> $100 Disc 10%',
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: 'Delivery Time',
        description: '6 - 12 Working days',
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: 'Package',
        description: 'Reagular Premium Box',
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: 'Estimated Arrival',
        description: '10 - 12 October 23',
      },
    ],
  },
  {
    slug: 'dunklow',
    Name: 'Dunk Low',
    coverImage: dunklow,
    currentPrice: 199,
    previousPrice: 250,
    Category: "Men's shoes",
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    justIn: false,
    shots: [dunklow, shot1, shot2, shot3, shot4, shot5, shot6, shot7],
    overview:
      'When your workouts wade into the nitty gritty, the Nike Free Metcon 5 can meet you in the depths, help you dig deep to find that final ounce of force and come out of the other side on a high. It matches style with substance, forefoot flexibility with backend stability, perfect for flying through a cardio day or enhancing your agility. A revamped upper offers easier entry with a collar made just for your ankle.',
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: 'Discount',
        description: '> $100 Disc 10%',
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: 'Delivery Time',
        description: '6 - 12 Working days',
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: 'Package',
        description: 'Reagular Premium Box',
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: 'Estimated Arrival',
        description: '10 - 12 October 23',
      },
    ],
  },
  {
    slug: 'item1',
    Name: 'Item 1',
    coverImage: lebronxx,
    currentPrice: 199,
    previousPrice: 250,
    Category: "Category 1",
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    justIn: false,
    shots: [lebronxx, shot1, shot2, shot3, shot4, shot5, shot6, shot7],
    overview:
      'When your workouts wade into the nitty gritty, the Nike Free Metcon 5 can meet you in the depths, help you dig deep to find that final ounce of force and come out of the other side on a high. It matches style with substance, forefoot flexibility with backend stability, perfect for flying through a cardio day or enhancing your agility. A revamped upper offers easier entry with a collar made just for your ankle.',
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: 'Discount',
        description: '> $100 Disc 10%',
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: 'Delivery Time',
        description: '6 - 12 Working days',
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: 'Package',
        description: 'Reagular Premium Box',
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: 'Estimated Arrival',
        description: '10 - 12 October 23',
      },
    ],
  },
  {
    slug: 'item2',
    Name: 'Item 2',
    coverImage: metcon5,
    currentPrice: 199,
    previousPrice: 250,
    Category: "Category 2",
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    justIn: true,
    shots: [metcon5, shot1, shot2, shot3, shot4, shot5, shot6, shot7],
    overview:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam delectus in quis iure tempore facere, ullam aspernatur perferendis ipsa voluptatibus. Cupiditate, asperiores sapiente? Alias aut  optio dolore magnam veritatis repellendus.', 
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: 'Discount',
        description: '> $100 Disc 10%',
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: 'Delivery Time',
        description: '6 - 12 Working days',
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: 'Package',
        description: 'Reagular Premium Box',
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: 'Estimated Arrival',
        description: '10 - 12 October 23',
      },
    ],
  },
  {
    slug: 'item3',
    Name: 'Item 3',
    coverImage: metcon9,
    currentPrice: 199,
    previousPrice: 250,
    Category: "Category 3",
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    justIn: false,
    shots: [metcon9, shot1, shot2, shot3, shot4, shot5, shot6, shot7],
    overview:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam delectus in quis iure tempore facere, ullam aspernatur perferendis ipsa voluptatibus. Cupiditate, asperiores sapiente? Alias aut optio dolore magnam veritatis repellendus.',
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: 'Discount',
        description: '> $100 Disc 10%',
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: 'Delivery Time',
        description: '6 - 12 Working days',
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: 'Package',
        description: 'Reagular Premium Box',
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: 'Estimated Arrival',
        description: '10 - 12 October 23',
      },
    ],
  },
  {
    slug: 'item4',
    Name: 'Item 4',
    coverImage: blazer,
    currentPrice: 199,
    previousPrice: 250,
    Category: "Category 4",
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    justIn: true,
    shots: [blazer, shot1, shot2, shot3, shot4, shot5, shot6, shot7],
    overview:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam delectus in quis iure tempore facere, ullam aspernatur perferendis ipsa voluptatibus. Cupiditate, asperiores sapiente? Alias aut optio dolore magnam veritatis repellendus.',
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: 'Discount',
        description: '> $100 Disc 10%',
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: 'Delivery Time',
        description: '6 - 12 Working days',
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: 'Package',
        description: 'Reagular Premium Box',
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: 'Estimated Arrival',
        description: '10 - 12 October 23',
      },
    ],
  },

];

export const productsSection = {
  heading: 'Shop Now, Look Good Later',
  description:
    'We have a buch of collections for you! Lets explore and find your dream , make it happen',
};

const shoeBrands = ['Nike', 'Alexander Mqueen', 'New Balance', 'Compass'];

const shoeTypes = ['Type', 'Sandals', 'Sneakers', 'Boots'];

const sizes = ['Size', 'S', 'M', 'L', 'XL', 'XXl'];

const prices = [
  'Price',
  'Below $100',
  'Below $200',
  'Below $300',
  'Below $400',
];

export const filters = [shoeBrands, prices, sizes, shoeTypes];

export const brandsSection = {
  heading: 'The Official Store of The Amazing Brand',
  description:
    'We work together with high quality and famous brands around the world',
  brands: [
    {
      brandName: 'New Balance ',
      rating: 4.9,
      reviews: 10334,
      followers: 7.2,
      visitLink: 'https://www.newbalance.com',
      logo: new_balance,
      shoes: [new_balance1, new_balance2, new_balance3, new_balance4],
    },
    {
      brandName: 'Compass',
      rating: 4.9,
      reviews: 10334,
      followers: 8.5,
      visitLink: 'https://www.sepatucompass.com/',
      logo: compass_profile,
      shoes: [compass1, compass2, compass3, compass4],
    },
    {
      brandName: 'Nike',
      rating: 4.9,
      reviews: 10334,
      followers: 11.2,
      visitLink: 'https://nike.com',
      logo: nike_profile,
      shoes: [yellowLow, redlow, dunklow, lebronxx],
    },
  ],
};

export const footerBannerData = {
  heading: 'BRINGING YOU TO UPDATE WITH FANTASTIC FOOTWEAR',
  description:
    'View all brands of our collection on HotKicks, there is another collection. Please check it out bro, like seriously',
};

export const footerData = {
  description:
    'HotKicks was designed and founded in 2023 by Person. The theme is about sneakers ecommerce thet use for shoes selling around the world.',
  footerLinks: [
    {
      title: 'Main Pages',
      links: [
        { href: '/home', name: 'Home' },
        { href: '/products', name: 'Collections' },
        { href: '/cart', name: 'Cart' },
        { href: '/checkout', name: 'Checkout' },
      ],
    },
    {
      title: 'Single Pages',
      links: [
        {
          href: '#',
          name: 'Double Pages',
        },
      ],
    },
    {
      title: 'Other Pages',
      links: [{ href: '/rt', name: 'Not Found' }],
    },
    {
      title: 'Utility Pages',
      links: [
        { href: '/faqs', name: 'FAQS' },
        { href: '/contact', name: 'Contact' },
        { href: '/forgot-pass', name: 'Forgot Password' },
        { href: '/login', name: 'Login' },
        { href: '/signup', name: 'Signup' },
      ],
    },
  ],
};

export const newsletter = {
  heading: "Don't wanna miss our offers?",
  description:
    'Drop your email below and start receiving the best offers from HotKicks',
};

export const shoeSizes = [
  'EU36',
  'EU37',
  'EU38',
  'EU39',
  'EU40',
  'EU41',
  'EU42',
  'EU43',
  'EU44',
];

export const note =
  ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, est eum magnam doloremque, at adipisci debitis, similique dolores ipsa unde necessitatibus vero quibusdam nostrum numquam!';

export const contactSection = {
  heading: 'Contact us',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis quis phasellus eleifend tellus orci ornare.',
  directContactInfoHeader: {
    heading: 'Prefer to reach out directly?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh magna sit diam pharetra.',
  },
  directContactInfo: [
    {
      icon: <FiBox className="text-5xl" />,
      title: 'Sales',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit blandit velit semper aliquam.',
      contactLink: {
        href: 'mailto:sales@hotkicks.com',
        title: 'sales@hotkicks.com',
      },
    },
    {
      icon: <IoChatboxOutline className="text-5xl" />,
      title: 'Support',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit blandit velit semper aliquam.',
      contactLink: {
        href: 'mailto:support@hotckicks.com',
        title: 'support@hotckicks.com',
      },
    },
    {
      icon: <MdOutlineCameraAlt className="text-5xl" />,
      title: 'Influencers',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit blandit velit semper aliquam.',
      contactLink: {
        href: 'mailto:influencers@hotckicks.com',
        title: 'influencers@hotckicks.com',
      },
    },
  ],
  instagramPhotos: [
    'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
};

export const faqsData = {
  heading: 'Frequently Asked Questions',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget adipiscing nibh nunc. Velit rhoncus arcu velesaed.',
  faqs: [
    {
      category: 'Shipping',
      data: [
        {
          question: 'How can I track my order?',
          answer:
            'You can track your order by logging into your account and checking the order status. Additionally, a tracking number will be provided in the shipping confirmation email.',
        },
        {
          question: 'What is the estimated delivery time for my order?',
          answer:
            'Delivery times vary based on your location. Typically, domestic orders take 3-5 business days, while international orders may take 7-14 business days.',
        },
        {
          question: 'Can I change my shipping address after placing an order?',
          answer:
            'Unfortunately, we cannot change the shipping address once the order is placed. Please double-check your information before completing the purchase.',
        },
        {
          question: 'Do you offer expedited shipping options?',
          answer:
            'Yes, we offer expedited shipping at an additional cost. You can choose your preferred shipping method during the checkout process.',
        },
        {
          question: 'What should I do if my order is delayed or lost?',
          answer:
            'If your order is significantly delayed or lost, please contact our customer support team, and we will investigate the issue.',
        },
      ],
    },
    {
      category: 'Products',
      data: [
        {
          question: 'How do I determine the right size for my sneakers?',
          answer:
            'Refer to our size chart available on the product page. It provides measurements and guidelines to help you choose the correct size.',
        },
        {
          question: 'Are your sneakers authentic?',
          answer:
            'Yes, we guarantee the authenticity of all our sneakers. We source them directly from authorized retailers and reputable suppliers.',
        },
        {
          question: "Can I return or exchange my sneakers if they don't fit?",
          answer:
            'Yes, we have a hassle-free return policy. You can return or exchange unworn sneakers within 30 days of receiving your order.',
        },
        {
          question: 'Are the colors of the sneakers accurate in the photos?',
          answer:
            'We strive to provide accurate color representation, but slight variations may occur due to monitor settings. Refer to product descriptions for additional details.',
        },
        {
          question: 'Do you restock sold-out sneakers?',
          answer:
            'We restock popular styles based on demand. You can sign up for notifications to be informed when a specific product is back in stock.',
        },
      ],
    },
    {
      category: 'Payments',
      data: [
        {
          question: 'What payment methods do you accept?',
          answer:
            'We accept major credit cards, PayPal, and other secure payment methods. You can view the full list during the checkout process.',
        },
        {
          question: 'How can I apply a discount code to my order?',
          answer:
            'Enter your discount code in the designated field during checkout. The discount will be applied to your total before payment.',
        },
        {
          question: 'Can I modify or cancel my order after payment?',
          answer:
            'Once an order is placed, it cannot be modified or canceled. Please review your order carefully before completing the purchase.',
        },
        {
          question: 'Is my payment information secure?',
          answer:
            'Yes, we use industry-standard encryption to secure your payment information. Your data is protected and never stored on our servers.',
        },
        {
          question: 'Do you offer gift cards?',
          answer:
            'Yes, we offer gift cards of various denominations. They make great presents for sneaker enthusiasts!',
        },
      ],
    },
    {
      category: 'Returns',
      data: [
        {
          question: 'How do I initiate a return or exchange?',
          answer:
            'Visit the "Returns & Exchanges" page on our website, follow the instructions, and submit a request. Our team will guide you through the process.',
        },
        {
          question: 'What is your return policy for defective products?',
          answer:
            'If you receive a defective product, please contact our customer support within 7 days of receiving the order. We will arrange a replacement or refund.',
        },
        {
          question: 'Are there any restocking fees for returns?',
          answer:
            'We do not charge restocking fees for returns. However, please review our return policy for specific details.',
        },
        {
          question: 'How long does it take to process a refund?',
          answer:
            'Refunds are typically processed within 5-7 business days after we receive the returned items and verify their condition.',
        },
        {
          question: "Can I return sneakers if I've worn them?",
          answer:
            'We only accept returns for unworn sneakers. Please try them on in a clean, indoor environment to ensure they are the right fit before wearing them outside.',
        },
      ],
    },
  ],
};



export const productsCollection = {
  heading: 'Shot Collection',
  description:
    'Lorem ipsum dolor sit amet consectetur adipiscing elit facilisi pellentesque cursus eget morbi sagittis sagittis.',
};

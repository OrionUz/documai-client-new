export interface IntroCardProps {
  item: {
    title: string;
    description: string;
    icon: JSX.Element;
  };
}

export interface AboutCardProps {
  item: {
    title: string;
    description: string[];
    width?: string;
    img?: string;
    icon?: JSX.Element;
    button?: string;
  };
}

export interface PricingCardProps {
  item: {
    type: string;
    current?: boolean;
    main?: boolean;
    description?: string;
    price?: string;
    price_duration?: string;
    requirement?: string;
    includes: string[];
  };
}

export interface NewsCardProps {
  item: {
    date: string;
    title: string;
    description: string;
    img: string;
  };
}

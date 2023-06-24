export interface MemberPicProps {
  item: {
    title: string;
    description: string;
    img: string;
  };
}

export interface AboutProProps {
  item: {
    title: string;
    text: string;
    img: string;
    stat?: {
      count: string;
      title: string;
    }[];
  };

  index: number;
}

export interface ProjectsPartProps {
  item: {
    title: string;
    text: string;
    img: string;
  };
}

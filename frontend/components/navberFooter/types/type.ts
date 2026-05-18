interface Links {
  name: string;
  path: string;
}

export interface LeftDataMenu {
  name: string;
  icon: React.ReactNode;
}

export interface MenuDataInterface {
  leftData: {
    menu: LeftDataMenu;
    link: Links[];
  };
  rightData: {
    link: Links[];
  };
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
  badge?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export enum AppState {
  MENU = 'MENU',
  QR = 'QR',
}

export interface GeneratedImageResponse {
    imageUrl: string;
}

import { ReactNode } from "react";

export interface IButton {
  textSubmit: string;
  submit?: () => void;
}

export interface IDot {
  color: string;
}

export interface IShoes {
  price: number;
  children: ReactNode;
  img: string;
}

export interface ISizeButton {
  color: string;
  bgColor: string;
  children: ReactNode;
}

export interface IBag {
  id: number;
  name: string;
  price: number;
  img: string;
  description: string;
  category: string;
  material: string;
  size: string[];
}

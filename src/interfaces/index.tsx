import { ReactNode } from "react";

export interface IButton {
  textSubmit: string;
  submit: "";
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

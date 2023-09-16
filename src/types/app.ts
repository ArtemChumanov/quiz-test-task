import { AppProps } from "next/app";
import { ComponentProps, ElementType, FC, ReactNode } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<LayoutComponentType> = NextPage & {
  Layout?: FC<LayoutComponentType>;
};
export type AppPropsWithLayout<T> = AppProps & {
  Component: NextPageWithLayout<T>;
};
export type LayoutComponentType = { children: ReactNode };

export type AsProps<E extends ElementType = ElementType> = {
  as?: E;
};

export type MergeProps<E extends ElementType> = AsProps<E> &
  Omit<ComponentProps<E>, keyof AsProps>;

export type PolymorphicComponentProps<E extends ElementType, P> = P &
  MergeProps<E>;

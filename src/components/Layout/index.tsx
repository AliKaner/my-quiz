import { FC, ReactNode } from "react";
import { Header } from "../Header";

export interface ILayout {
  children: ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Header />
      {children}
    </div>
  );
};

import { ReactNode } from "react";

const CartLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="container">
      <div>This is the ads contents</div>
      <div>{children}</div>
    </div>
  );
};

export default CartLayout;

//BT1
// src/Buttons.tsx
import { ArrowRight, Smartphone, Chrome, Facebook } from "lucide-react";
import "./GetIconButton.css";

export interface ButtonProps {
  onClick?: () => void;
}

export const GetStartedButton = ({ onClick }: ButtonProps) => (
  <button  className="btn btn-primary" onClick={onClick}>
    Get started <ArrowRight size={18} style={{ marginLeft: 70 }} />
  </button>
);

export const AppleButton = ({ onClick }: ButtonProps) => (
  <button className="btn btn-primary" onClick={onClick}>
    <Smartphone size={18} />
    Continue with Apple
  </button>
);

export const GoogleButton = ({ onClick }: ButtonProps) => (
  <button className="btn btn-outline" onClick={onClick}>
    <Chrome size={18} />
    Continue with Google
  </button>
);

export const FacebookButton = ({ onClick }: ButtonProps) => (
  <button className="btn btn-outline" onClick={onClick}>
    <Facebook size={18} />
    Continue with Facebook
  </button>
);





import React,{useState} from 'react';
import { ChevronDown } from 'lucide-react';
import './AccordionItem.css';
interface AccordionProps{
  title:string;
  children: React.ReactNode;
}

const AccordionItem:React.FC<AccordionProps> = ({title, children}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = ()=>{
    setIsOpen(!isOpen);
  }
  return (
    <div className="accordion">
    <div onClick={toggle} className="heading">
      <span className="title">{title}</span>
      <span className="arrow"><ChevronDown size={20} style={{transform:isOpen?'rotate(180deg)':'rotate(0deg)',transition:'transform 0.2s ease-in-out'}}/></span>
      </div>
    {isOpen&&(<div className="child">{children}</div>)}
    </div>
  )
}

export default AccordionItem;
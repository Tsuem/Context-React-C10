import { useContext } from "react";
import { ColorContext } from "../../context/ColorContext";

const Nieto = () => {

  const color = useContext(ColorContext);

  return (
    <div style={{backgroundColor: color}}>Nieto</div>
  )
}

export default Nieto
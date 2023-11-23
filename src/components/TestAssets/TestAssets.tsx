import React from 'react';
import imgFond from "@/assets/fond.png";
import Sing from "@/assets/at-sign.svg";

export default function TestAssets() {
  return (
    <div>
        <h3>TestAssets</h3>
        <img src={imgFond}></img>
        <Sing width={50} height={50} />
    </div>
  )
}

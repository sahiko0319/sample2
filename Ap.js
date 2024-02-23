import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [num,setNum] = useState(0);
  const [showFace,setShowFace] = useState(false);

  const countUp = ()=>{
      setNum(num+1);
  }
  
  const showFaceTogle = ()=>{
    setShowFace(!showFace);
  }
  
  // コンソール5
  // コンソール6
  console.log("showFace1:"+showFace+"時間："+Date.now()+",num:"+num);

  useEffect(()=>{
    console.log("showFace2-1:"+showFace+"時間："+Date.now()+",num:"+num);
    if(num > 0){
      if(num % 3 === 0){
        showFace || setShowFace(true);
        console.log("showFace2-2:"+showFace+"時間："+Date.now()+",num:"+num);
      }else{
        showFace && setShowFace(false);
        console.log("showFace2-3:"+showFace+"時間："+Date.now()+",num:"+num);
      }
    }
  },[num]);
  
  return (
    <div className="App">
    <p>{console.log("showFace3:"+showFace+"時間："+Date.now()+",num:"+num)}</p>
      <button onClick={countUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={showFaceTogle}>on/off</button>
      {showFace && (<p>Σ੧(❛□❛✿)</p>)}
    </div>
  );
}
// あインソール5
export default App;

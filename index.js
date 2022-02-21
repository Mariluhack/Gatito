let turno = false;

let victoria =false;

let contador = 0;

const handleClick = (event) => {
    const {id} = event.target;
    const div=document.getElementById(id);

    const Vturnos = turno;
        if(Vturnos){
            document.getElementById("jugadorX").className="jugando";
            document.getElementById("jugadorO").className="standby";
        }else{
            document.getElementById("jugadorO").className="jugando";
            document.getElementById("jugadorX").className="standby";
        }

   
    if (div.innerText === "" && victoria === false){
        div.innerText = turno ? "O" : "X";
        verificarVictoria();
        turno = !turno;
    }
}


const verificarVictoria = () =>{
    contador ++;
  const  div1 =document.getElementById(1); 
  const  div2 =document.getElementById(2); 
  const  div3 =document.getElementById(3); 
  const  div4 =document.getElementById(4); 
  const  div5 =document.getElementById(5); 
  const  div6 =document.getElementById(6); 
  const  div7 =document.getElementById(7); 
  const  div8 =document.getElementById(8); 
  const  div9 =document.getElementById(9); 

  const forma1 = 
  div1.innerText === div2.innerText && 
  div1.innerText === div3.innerText && 
  div1.innerText !=="";

  const forma2 = 
  div4.innerText === div5.innerText && 
  div4.innerText === div6.innerText && 
  div4.innerText !=="";

  const forma3 = 
  div7.innerText === div8.innerText && 
  div7.innerText === div9.innerText && 
  div7.innerText !=="";
  
  const forma4 = 
  div1.innerText === div4.innerText && 
  div1.innerText === div7.innerText && 
  div1.innerText !=="";
  
  const forma5 = 
  div2.innerText === div5.innerText && 
  div2.innerText === div8.innerText && 
  div2.innerText !=="";

  const forma6 = 
  div3.innerText === div6.innerText && 
  div3.innerText === div9.innerText && 
  div3.innerText !=="";

  const forma7 = 
  div1.innerText === div5.innerText && 
  div1.innerText === div9.innerText && 
  div1.innerText !=="";

  const forma8 = 
  div3.innerText === div5.innerText && 
  div3.innerText === div7.innerText && 
  div3.innerText !=="";


  if (forma1 ){
     const linea=document.getElementById('linea');
     linea.style.height ='10px';
     linea.style.width = '350px';
     linea.style.top = '50px';
     linea.style.left = '0px';

    victoria=true;
    alert(`Los ganadores son las ${turno ? "O" : "X"}`); 
    document.getElementById("jugadorX").className="standby";
    document.getElementById("jugadorO").className="standby";
  } else if (forma2){
    const linea=document.getElementById('linea');
    linea.style.height ='10px';
    linea.style.width = '350px';
    linea.style.top = '170px';
    linea.style.left = '0px';

   victoria=true;
   alert(`Los ganadores son las ${turno ? "O" : "X"}`); 
   document.getElementById("jugadorX").className="standby";
    document.getElementById("jugadorO").className="standby";
  }
  else if (forma3){
    const linea=document.getElementById('linea');
    linea.style.height ='10px';
    linea.style.width = '350px';
    linea.style.top = '290px';
    linea.style.left = '0px';

   victoria=true;
   alert(`Los ganadores son las ${turno ? "O" : "X"}`); 
   document.getElementById("jugadorX").className="standby";
    document.getElementById("jugadorO").className="standby";
  }
  else if (forma4){
    const linea=document.getElementById('linea');
    linea.style.height ='350px';
    linea.style.width = '10px';
    linea.style.top = '0px';
    linea.style.left = '50px';

   victoria=true;
   alert(`Los ganadores son las ${turno ? "O" : "X"}`); 
   document.getElementById("jugadorX").className="standby";
    document.getElementById("jugadorO").className="standby";
  }
  else if (forma5){
    const linea=document.getElementById('linea');
    linea.style.height ='350px';
    linea.style.width = '10px';
    linea.style.top = '0px';
    linea.style.left = '170px';

   victoria=true;
   alert(`Los ganadores son las ${turno ? "O" : "X"}`); 
   document.getElementById("jugadorX").className="standby";
    document.getElementById("jugadorO").className="standby";
  }
  else if (forma6){
    const linea=document.getElementById('linea');
    linea.style.height ='350px';
    linea.style.width = '10px';
    linea.style.top = '0px';
    linea.style.left = '290px';

   victoria=true;
   alert(`Los ganadores son las ${turno ? "O" : "X"}`); 
   document.getElementById("jugadorX").className="standby";
    document.getElementById("jugadorO").className="standby";
  }
  else if (forma7){
    const linea=document.getElementById('linea');
    linea.style.height ='10px';
    linea.style.width = '350px';
    linea.style.top = '170px';
    linea.style.left = '0px';
    linea.style.transform = 'rotate(45deg)';

   victoria=true;
   alert(`Los ganadores son las ${turno ? "O" : "X"}`); 
   document.getElementById("jugadorX").className="standby";
    document.getElementById("jugadorO").className="standby";
  }
  else if (forma8){
    const linea=document.getElementById('linea');
    linea.style.height ='10px';
    linea.style.width = '350px';
    linea.style.top = '170px';
    linea.style.left = '0px';
    linea.style.transform = 'rotate(135deg)';

   victoria=true;
   alert(`Los ganadores son las ${turno ? "O" : "X"}`); 
   document.getElementById("jugadorX").className="standby";
    document.getElementById("jugadorO").className="standby";
  }
   else{
      if(contador ===9){
          alert('La partida termino en empate');
      }
  }
}

const reload = () =>{
    const  div1 =document.getElementById(1); 
    const  div2 =document.getElementById(2); 
    const  div3 =document.getElementById(3); 
    const  div4 =document.getElementById(4); 
    const  div5 =document.getElementById(5); 
    const  div6 =document.getElementById(6); 
    const  div7 =document.getElementById(7); 
    const  div8 =document.getElementById(8); 
    const  div9 =document.getElementById(9); 

    div1.innerText = "";
    div2.innerText = "";
    div3.innerText = "";
    div4.innerText = "";
    div5.innerText = "";
    div6.innerText = "";
    div7.innerText = "";
    div8.innerText = "";
    div9.innerText = "";

    turno = false;
    victoria =false;
    contador = 0;

    document.getElementById("jugadorX").className="jugando";
    document.getElementById("jugadorO").className="standby";

    const linea=document.getElementById('linea');
     linea.style.height ='0px';
     linea.style.width = '0px';
     linea.style.top = '0px';
     linea.style.left = '0px';
     linea.style.transform = 'rotate(0deg)';

}

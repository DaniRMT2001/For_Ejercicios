function generartablero(){
    let cantidad=64;
    let alto=70;
    let ancho=80;
    document.getElementById('cuadros').innerHTML='';
    document.getElementById('cuadros').style.width = ((2 + parseInt(ancho)) * 8) + "px";
    
    for (let i=0;i<cantidad;i++){
        if(Math.floor(i/8)%2 == i%2){
            document.getElementById('cuadros').innerHTML+='<div id="cuadros" style="border:solid 1px;width:'+ ancho +'px;height:' + alto +'px;background-color:white;float:left;"><div>';
        }else{
            document.getElementById('cuadros').innerHTML+='<div id="cuadros" style="border:solid 1px;width:'+ ancho +'px;height:' + alto +'px;background-color:black;float:left;"><div>';
    
        }
        }
    }
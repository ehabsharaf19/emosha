let dragSource=null;

function enableDrag(gem){

gem.draggable=true;

gem.addEventListener('dragstart',()=>{
dragSource=gem;
});

gem.addEventListener('dragover',(e)=>{
e.preventDefault();
});

gem.addEventListener('drop',()=>{

swap(dragSource,gem);

});

}

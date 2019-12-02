//Déclaration d'une variable image
  var image=document.getElementById('image');
  //Déclaration d'un addEventListener avec un click pour cliquer sur l'image
  image.addEventListener("click",img);
  //Déclaration d'une fonction img relié à mon addEventListener
  function img(){
    //Régler la taille de l'image lors du clic de la souris
    image.style.width="400px";
}

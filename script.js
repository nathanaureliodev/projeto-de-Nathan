function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile-img")

  //substituir a imagem//
  if (html.classList.contains("light")) {
    //se estiver light mode,adicionar a imagem light//
    img.setAttribute("src", "./macaco_laranja-circular.png")
  } else {
    //se estiver sem o light mode,manter a imagem normal//
    img.setAttribute("src", "./imagem_cortada_circular.png")
  }
}

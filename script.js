function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light e mudar o alt
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Bruno Gomes sem camisa, óculos, boné rosa, com um céu azul, de dia, como plano de fundo."
    )
    // se tiver sem light mode, manter a imagem normal e mudar o alt
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Bruno Gomes de camisa azul, óculos, com a mão encostando no rosto."
    )
  }
}

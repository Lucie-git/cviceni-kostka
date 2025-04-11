// Doplňte do stránky JavaScriptový program, který zařídí, že když uživatel zmáčkne na stránce libovolnou klávesu, na kostce se zobrazí číslo o jedna vyšší. Po šestce zobrazte opět jedničku.

// **Nápověda:** Rozumným postupem je vytvořit si proměnnou `side`, která bude obsahovat číslo strany kostky. Tuto proměnnou můžete vždy při stisknutí klávesy navýšit o jedna a z této hodnoty zkonstruovat řetězec pro atribut `src`.

// const dice = () => {
//   document.querySelector('body').addEventListener('keydown');
//   const side = 1;
// };

let diceSide = 1;

document.addEventListener('keydown', () => {
  if (diceSide < 6) diceSide = diceSide + 1;
  document.querySelector('img').src = `img/side${diceSide}.svg`;
});

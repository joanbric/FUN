const btnSimple = document.getElementById("btnSimple");
const btnHex = document.getElementById("btnHex");
const btnRandom = document.getElementById("btnRandom");
const btnCopy = document.getElementById("btnCopy");

const txtHexColor = document.querySelector("span.color-value");
const txtColorContent = document.querySelector("p.content");
const bodyStyle = document.body.style;

const baseColors = "0123456789ABCDEF";

btnSimple.addEventListener("click", () => {
    bodyStyle.backgroundColor = "#f1f9f8";
});

btnHex.addEventListener("click", () => {
    bodyStyle.backgroundColor = "#000000";
});

btnRandom.addEventListener("click", () => {
    let hexColor = "#";
    let negativeColor = "#";
    const arrBaseColors = baseColors.split("");

    for (let i = 1; i <= 6; i++) {
        const randomValue = parseInt(Math.random() * 16);

        hexColor += arrBaseColors[randomValue];
        negativeColor += arrBaseColors[baseColors.length - randomValue - 1];
    }

    txtHexColor.textContent = hexColor;
    txtColorContent.style.color = negativeColor;
    btnRandom.style.color = negativeColor;
    btnCopy.style.color = negativeColor;
    bodyStyle.backgroundColor = hexColor;
});

btnCopy.addEventListener("click", () => {
    const type = "text/plain";
    const blob = new Blob([txtHexColor.textContent], { type });
    const data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data).then(
        () => {
          // Done
          btnCopy.textContent = 'Copied!';
          setTimeout(() => {
              btnCopy.textContent = 'Copy'
          }, 1000);
        },
        (err) => {
          console.error(err)
        }
    );
});

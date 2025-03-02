function adjustLayout() {
  const svg = document.querySelector(".content");
  const tspanList = svg.querySelectorAll("tspan");
  const maskRect1 = svg.querySelector(".maskRect1");
  const maskRect2 = svg.querySelector(".maskRect2");
  const maskRect3 = svg.querySelector(".maskRect3");
  const maskRect4 = svg.querySelector(".maskRect4");
  const maskRect5 = svg.querySelector(".maskRect5");
  const svgWidth = svg.clientWidth;

  if (svgWidth < 768) {
    tspanList[0].setAttribute("x", "34%");
    tspanList[0].setAttribute("y", "10%");
    tspanList[1].setAttribute("x", "9%");
    tspanList[1].setAttribute("y", "23%");
    tspanList[2].setAttribute("x", "84%");
    tspanList[2].setAttribute("y", "23%");
    tspanList[3].setAttribute("x", "43%");
    tspanList[3].setAttribute("y", "38%");
    tspanList[4].setAttribute("x", "83%");
    tspanList[4].setAttribute("y", "38%");
    tspanList[5].setAttribute("x", "30%");
    tspanList[5].setAttribute("y", "52%");
    tspanList[6].setAttribute("x", "80%");
    tspanList[6].setAttribute("y", "52%");
    tspanList[7].setAttribute("x", "13%");
    tspanList[7].setAttribute("y", "66%");
    tspanList[8].setAttribute("x", "69%");
    tspanList[8].setAttribute("y", "66%");
    tspanList[9].setAttribute("x", "35%");
    tspanList[9].setAttribute("y", "80%");

    maskRect1.setAttribute('width','30%');
    maskRect1.setAttribute('x','66%');
    maskRect2.setAttribute('x', '15%');
    maskRect2.setAttribute('y', '20%');
    maskRect2.setAttribute('width', '50%');
    maskRect3.setAttribute('width', '17%');
    maskRect3.setAttribute('x', '2%');
    maskRect3.setAttribute('y', '35%');
    maskRect4.setAttribute('x', '23%');
    maskRect4.setAttribute('y', '62%');
    maskRect4.setAttribute('width', '14%');
    maskRect5.setAttribute('x', '71%');
    maskRect5.setAttribute('y', '76%');
    maskRect5.setAttribute('width', '26%');
    maskRect5.setAttribute('height', '7%');
  } else {
    tspanList[0].setAttribute("x", "15%");
    tspanList[0].setAttribute("y", "10%");
    tspanList[1].setAttribute("x", "83%");
    tspanList[1].setAttribute("y", "10%");
    tspanList[2].setAttribute("x", "93%");
    tspanList[2].setAttribute("y", "10%");
    tspanList[3].setAttribute("x", "11%");
    tspanList[3].setAttribute("y", "29%");
    tspanList[4].setAttribute("x", "69%");
    tspanList[4].setAttribute("y", "29%");
    tspanList[5].setAttribute("x", "88%");
    tspanList[5].setAttribute("y", "29%");
    tspanList[6].setAttribute("x", "10%");
    tspanList[6].setAttribute("y", "48%");
    tspanList[7].setAttribute("x", "24%");
    tspanList[7].setAttribute("y", "48%");
    tspanList[8].setAttribute("x", "86%");
    tspanList[8].setAttribute("y", "48%");
    tspanList[9].setAttribute("x", "16%");
    tspanList[9].setAttribute("y", "67%");

    maskRect1.setAttribute('x', '29%');
    maskRect1.setAttribute('y', '6%');
    maskRect1.setAttribute('width', '50%');
    maskRect1.setAttribute('height', '7%');
    maskRect2.setAttribute('x', '21%');
    maskRect2.setAttribute('y', '25%');
    maskRect2.setAttribute('width', '40%');
    maskRect2.setAttribute('height', '7%');
    maskRect3.setAttribute('x', '29%');
    maskRect3.setAttribute('y', '44%');
    maskRect3.setAttribute('width', '42%');
    maskRect3.setAttribute('height', '7%');
    maskRect4.setAttribute('x', '31%');
    maskRect4.setAttribute('y', '63%');
    maskRect4.setAttribute('width', '68%');
    maskRect4.setAttribute('height', '7%');
    maskRect5.setAttribute('x', '0');
    maskRect5.setAttribute('y', '0');
    maskRect5.setAttribute('width', '0');
    maskRect5.setAttribute('height', '0');
  }
}

window.addEventListener("load", adjustLayout);
window.addEventListener("resize", adjustLayout);

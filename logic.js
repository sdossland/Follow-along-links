/**
 * Created by sophia on 4/25/17.
 */
document.addEventListener("DOMContentLoaded", function () {

  const links = document.querySelectorAll('a');
  const highlight = document.createElement('span');

  //add CSS class highlight to newly created span tag called 'highlight'
  highlight.classList.add('highlight');
  document.body.appendChild(highlight);

  //defines coordinate variables
  let coordinates = {
    top: 0,
    left: 0,
    width: 0,
    height: 0
  };
  let previousCoords = {};

  //gets the top, left corner of cursor...where to start highlight
  function addHighlight() {
    //'this' refers to links
    //returns the size of element and its position relative to the viewport (window) not the document as a whole
    //therefore, must add X and Y elements to obtain distance from top of document => scrollY(X) returns # of px document has been scrolled
    const linkCoords = this.getBoundingClientRect();
    coordinates = {
      top: linkCoords.top + window.scrollY,
      left: linkCoords.left + window.scrollX,
      width: linkCoords.width,
      height: linkCoords.height
    };
    highlight.style.width = `${coordinates.width}px`;
    highlight.style.height = `${coordinates.height}px`;
    highlight.style.transform = `translate(${coordinates.left}px, ${coordinates.top}px)`;
    //check if coordinates have changed, if so, convert color of text back to white, otherwise leave it orange
    if (coordinates.top !== previousCoords.y || coordinates.left !== previousCoords.x) {
      document.elementFromPoint(previousCoords.x, previousCoords.y).style.color = '#ffffff';
      previousCoords.x = coordinates.left;
      previousCoords.y = coordinates.top;
    }
    this.style.color = '#ff8c00';
  }

  //'mouseenter' fires once when cursor first enters field. 'mouseover' fires every time cursor is moved
  links.forEach(link => {
    link.addEventListener('mouseenter', addHighlight);
  })

});
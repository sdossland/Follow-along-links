/**
 * Created by sophia on 4/25/17.
 */
document.addEventListener("DOMContentLoaded", function () {

  const links = document.querySelectorAll('a');
  const highlight = document.createElement('span');

  //add CSS class highlight to newly created span tag called 'highlight'
  highlight.classList.add('highlight');
  document.body.appendChild(highlight);

  let coordinates;

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

    document.elementFromPoint(`${coordinates.left}`, `${coordinates.top}`).style.color = '#ff8c00';

    document.elementFromPoint(previousCoords).style.color = '#ffffff';

    console.log(previousCoords);
    // this.style.color = '#ff8c00';
  }
  let previousCoords;
console.log('coords: ' + coordinates.top );
  if (coordinates) {
    previousCoords = `${coordinates.left}, ${coordinates.top}`;
  }



  // if (coordinates.top != test)

  // function removeHighlight() {
  //   this.style.color = '#ffffff';
  // }

  //'mouseenter' fires once when cursor first enters field. 'mouseover' fires every time cursor is moved
  links.forEach(link => {
    link.addEventListener('mouseenter', addHighlight);
    // link.addEventListener('mouseleave', removeHighlight);
  })

});
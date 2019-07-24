let sidebar_rightColumn = document.getElementsByClassName('rightColumn');
let leftColumn = document.getElementsByClassName('leftColumn');

//sidebar sappear when click on left column

leftColumn[0].onclick = function() {
  leftColumn[0].style.width = '80%';
  sidebar_rightColumn[0].style.display = 'block';
  sidebar_rightColumn[0].style.width = '20%';
};

//sidebar dissappear when click on right column == sidebar

sidebar_rightColumn[0].onclick = function() {
  sidebar_rightColumn[0].style.display = 'none';
  leftColumn[0].style.width = '100%';
};

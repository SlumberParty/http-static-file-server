const root = document.getElementById('root');

const ul = document.createElement('ul');

root.appendChild(ul);

const cats = ['spot', 'rover', 'bingo'];

cats.forEach(dog => {
  const li = document.createElement('li');
  li.textContent = dog;

  ul.appendChild(li);
});

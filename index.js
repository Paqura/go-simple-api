document.addEventListener('DOMContentLoaded', main);

const ORIGIN_URL = 'http://localhost:8000'
const API = {
  BOOKS: `${ORIGIN_URL}/books`
};

async function main() {
  const responseBooks = await fetch(API.BOOKS);
  const books = await responseBooks.json();

  render(books);
}

function createNodes(data) {
  return data.map(el => {
    const node = document.createElement('div');
    node.textContent = el.title;
    return node;
  });
}

function render(data) {
  const nodes = createNodes(data);

  nodes.forEach(node => {
    document.body.appendChild(node)
  });
}
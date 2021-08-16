import './src/styles/style.css';

const $root = document.querySelector('#root');

const $htmlTitle = /* html */ `
	<h1>Hello Vite!</h1>
	<a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

$root.insertAdjacentHTML('beforeend', $htmlTitle);

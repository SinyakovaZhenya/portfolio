new Rellax('.rellax');

new Parallax(document.getElementById('scene1'));
new Parallax(document.getElementById('scene2'));
new Parallax(document.getElementById('scene3'));
new Parallax(document.getElementById('scene4'));
new Parallax(document.getElementById('scene5'));
new Parallax(document.getElementById('scene6'));
new Parallax(document.getElementById('scene7'));
new Parallax(document.getElementById('scene8'));

const btnDarkMode = document.querySelector('.dark-mode-btn');

if (localStorage.getItem('darkMode') === 'dark') {
	btnDarkMode.classList.add('dark-mode-btn--active');
	document.body.classList.add('dark');
} 

btnDarkMode.onclick = function() {
	btnDarkMode.classList.toggle('dark-mode-btn--active');
	const isDark = document.body.classList.toggle('dark');

	if (isDark) {
		localStorage.setItem('darkMode', 'dark')
	} else {
		localStorage.setItem('darkMode', 'light')
	}
}

const USERNAME = 'calMontez';
const REPO = 'CS-212';

async function fetchFolders() {
    const listElement = document.getElementById('folder-list');
    try {
        const response = await fetch(`https://api.github.com/repos/${USERNAME}/${REPO}/contents`);
        const data = await response.json();

        listElement.innerHTML = ''; // Clear loading text

        const folders = data.filter(item => item.type === 'dir' && !item.name.startsWith('.'));

        if (folders.length === 0) {
            listElement.innerHTML = '<li>No assignment folders found.</li>';
            return;
        }

        folders.forEach(folder => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `./${folder.name}/`;
            a.textContent = folder.name;
            li.appendChild(a);
            listElement.appendChild(li);
        });
    } catch (error) {
        listElement.innerHTML = '<li>Error loading folders.</li>';
        console.error(error);
    }
}

fetchFolders();
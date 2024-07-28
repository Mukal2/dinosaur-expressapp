document.getElementById('load-data').addEventListener('click', async () => {
    const response = await fetch('/api/dinosaurs');
    const data = await response.json();
    const displayDiv = document.getElementById('dinosaur-data');
  
    displayDiv.innerHTML = '<ul>' + data.map(dino => `<li>${dino.name} (${dino.period}) - ${dino.diet}</li>`).join('') + '</ul>';
  });
  
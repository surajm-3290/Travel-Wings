function showPanel(id) {
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.getElementById('panel-' + id).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const items = document.querySelectorAll('.nav-item');
    items.forEach(item => {
      if (item.getAttribute('onclick') && item.getAttribute('onclick').includes(id)) {
        item.classList.add('active');
      }
    });
  }

  function selectGem(el) {
    document.querySelectorAll('.gem-type').forEach(g => g.classList.remove('selected'));
    el.classList.add('selected');
  }

  function toggleChip(el) {
    el.classList.toggle('selected');
  }

  function triggerSOS() {
    const btn = document.querySelector('.sos-fab');
    btn.style.background = '#fff';
    btn.style.color = 'var(--red)';
    btn.textContent = '📡';
    setTimeout(() => {
      btn.style.background = 'var(--red)';
      btn.style.color = 'white';
      btn.textContent = 'SOS';
    }, 2000);
    sendPrompt('SOS triggered — what happens when I press the TravelWings SOS beacon button?');
  }

let pesoname = prompt("ENter Your Name: ");
document.querySelector(".person-name").innerHTML = pesoname;


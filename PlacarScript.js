const marcador = document.querySelector('#placar');

const ptjog1 = document.querySelector('#btnA');
ptjog1.onclick = () => {
  if (parseInt(jog1.textContent) <= parseInt(marcador.value)) {
    jog1.textContent = parseInt(jog1.textContent) + 1
  };
  if (parseInt(jog1.textContent) == parseInt(marcador.value)) {
    alert("Jogador A venceu") 
  };
};

const ptjog2 = document.querySelector('#btnB');
ptjog2.onclick = () => {
  if (parseInt(jog2.textContent) <= parseInt(marcador.value)) {
    jog2.textContent = parseInt(jog2.textContent) + 1
  };
  if (parseInt(jog2.textContent) == parseInt(marcador.value)) {
    alert("Jogador B venceu!!")
  };
};

const zerar = document.querySelector('#btnC');
zerar.onclick = () => {
  reseta();
};

function reseta(){
  jog1.textContent = 0
  jog2.textContent = 0
};


const winningScoreSelect = document.querySelector('#placar');
for (let i = 1; i<=21; i++){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    winningScoreSelect.appendChild(opt);
}



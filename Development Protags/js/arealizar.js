const btnUrgentes = document.getElementById('btnUrgentes');
const menuUrgentes = document.getElementById('menuUrgentes')
const contasAPagar = JSON.parse(localStorage.getItem('contasAPagar'));
const contasAtrasadas = [];

btnUrgentes.addEventListener('click', () => {
    if (menuUrgentes.style.display !== "none") {
        menuUrgentes.style.display = "none"
    }
    else {
        menuUrgentes.style.display = "block"
    }
    });

const dataAtual = new Date();

contasAPagar.forEach(conta => {
  const dataVencimento = new Date(conta.datadevenci);
  
  const dataLimite = new Date(dataVencimento);
  dataLimite.setDate(dataLimite.getDate() - 3);

  if (dataAtual >= dataLimite && dataAtual < dataVencimento) {
    contasAtrasadas.push(conta);
  }
});

console.log(contasAtrasadas);
localStorage.setItem("contasAtrasadas", JSON.stringify(contasAtrasadas));

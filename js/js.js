document.getElementById("aguinaldoForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value.trim();
  let sueldo = parseFloat(document.getElementById("sueldo").value);
  let meses = parseInt(document.getElementById("meses").value);

  
  if (!nombre || isNaN(sueldo) || sueldo <= 0 || isNaN(meses) || meses < 1) {
    document.getElementById("resultado").innerHTML = `<span class="text-danger fw-bold">⚠️ Error: Por favor, ingrese datos válidos en todos los campos.</span>`;
    return;
  }
  

  let anios = Math.floor(meses / 12);
  let sobrantes = meses % 12;

  let aguinaldoAnios = anios * 2000;
  if (aguinaldoAnios > 10000) {
    aguinaldoAnios = 10000;
  }

  
  let aguinaldoMeses = sobrantes * 100;

  
  let aguinaldo = aguinaldoAnios + aguinaldoMeses;
  let total = sueldo + aguinaldo;
  

  const formatter = new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN', 
      minimumFractionDigits: 2,
  });

 
  document.getElementById("resultado").innerHTML = `
    <p class="mb-2"><strong> Empleado:</strong> ${nombre}</p>
    <p class="mb-2"><strong> Aguinaldo (Extra):</strong> ${formatter.format(aguinaldo)}</p>
    <hr class="my-2">
    <p class="mb-0 fs-5 text-success"><strong> Total a Pagar en Diciembre:</strong> ${formatter.format(total)}</p>
  `;
});
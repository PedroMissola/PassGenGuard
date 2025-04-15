function gerarSenha() {
  const form = document.getElementById("dados");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const pais = formData.get("pais");
    const estado = formData.get("estado");
    const cidade = formData.get("cidade");
    const nascimento = formData.get("nascimento");
    const uso = parseInt(formData.get("uso"), 10) || 0;

    if (!pais || !estado || !cidade || !nascimento) {
      alert("Preencha todos os campos!");
      return;
    }

    if (
      !/^[a-zA-Z\s]+$/.test(pais) ||
      !/^[a-zA-Z\s]+$/.test(estado) ||
      !/^[a-zA-Z\s]+$/.test(cidade)
    ) {
      alert("Pais, estado e cidade devem conter apenas letras.");
      return;
    }

    const p1 = pais.charCodeAt(0) || 0;
    const p2 = pais.charCodeAt(1) || 0;
    const p3 = pais.charCodeAt(2) || 0;
    const paisComplex =
      (Math.pow(p1, 2) + Math.pow(p2, 2) + Math.pow(p3, 2)) *
      Math.sin((p1 + p2 + p3) % (2 * Math.PI));

    const e1 = estado.charCodeAt(0) || 0;
    const e2 = estado.charCodeAt(1) || 0;
    const estadoComplex = Math.sqrt(e1 * e2 + 1) * Math.cos(e1 + e2);

    const c1 = cidade.charCodeAt(0) || 0;
    const c2 = cidade.charCodeAt(3) || 0;
    const cidadeComplex = c1 * c2 + Math.log(cidade.length + 1);

    const [ano, mes, dia] = nascimento
      .split("-")
      .map((num) => parseInt(num, 10));
    const nascComplex =
      Math.pow(ano % 100, 2) + Math.pow(mes, 3) - Math.sqrt(dia + 1);

    const rawValue = paisComplex + estadoComplex + cidadeComplex + nascComplex + uso;
    const absValue = Math.abs(rawValue);
    const obfusValue = Math.floor(
      (Math.log(absValue + 1) * 1000 + Math.exp((uso % 10) / 10)) % 1e6
    );
    let senhaBase = obfusValue.toString();

    const var1 = (paisComplex % 1000).toFixed(0);
    const var2 = (estadoComplex % 100).toFixed(0).padStart(2, "0");
    const var3 = (cidadeComplex % 100).toFixed(0).padStart(2, "0");
    const var4 = (nascComplex % 100).toFixed(0).padStart(2, "0");
    const var5 = (Math.floor(Math.sin(uso) * 100) + 50).toString();
    const var6 = senhaBase.slice(-2).split("").reverse().join("");
    const variacoes = [var1, var2, var3, var4, var5, var6];

    const extras = variacoes.sort(() => 0.5 - Math.random()).slice(0, 4).join("");
    const senhaFinal = (senhaBase + extras).padEnd(4, "0").substring(0, 8);

    document.getElementById("senha").innerText = senhaFinal;
  });
}

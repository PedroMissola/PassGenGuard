function gerarSenha(){
    document.getElementById("dados").addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio tradicional

        const formData = new FormData(this);
        const pais = formData.get('pais');
        const estado = formData.get('estado');
        const cidade = formData.get('cidade');
        const nascimento = formData.get('nascimento');
        const uso = formData.get('uso');

        if (!pais || !estado || !cidade || !nascimento) {
            alert("Preencha todos os campos!");
            return;
        }

        // Validação de caracteres: verificar se o nome do país, estado e cidade possuem caracteres válidos
        if (!/^[a-zA-Z\s]+$/.test(pais) || !/^[a-zA-Z\s]+$/.test(estado) || !/^[a-zA-Z\s]+$/.test(cidade)) {
            alert("Pais, estado e cidade devem conter apenas letras.");
            return;
        }

        let paisNum = pais.charCodeAt(0) + pais.charCodeAt(1) + pais.charCodeAt(2);
        let estadoNum = estado.charCodeAt(0) + estado.charCodeAt(1);
        let cidadeNum = cidade.charCodeAt(0) + cidade.charCodeAt(3);

        // Extrai dia, mês e ano da data de nascimento
        let [ano, mes, dia] = nascimento.split("-").map(num => parseInt(num));

        // Passo 1: Cálculos iniciais (multiplicações e divisões)
        let soma1 = paisNum * estadoNum - cidadeNum; // Multiplicação e subtração
        let somaAno = ano.toString().split("").reduce((a, b) => a + parseInt(b), 0); // Soma dos dígitos do ano
        let resultado = Math.floor((soma1 * somaAno) / dia) + uso; // Passo 2 e 3

        // Validação intermediária: se o resultado for menor que 10, não gera senha
        if (resultado < 10) {
            alert("Resultado da fórmula inicial muito baixo! Tente novamente.");
            return;
        }

        // Geração de um número aleatório a partir de um array com números mais variados
        let numerosAleatorios = [123, 456, 789, 321, 654, 987, 101, 202, 303, 404];
        let numeroAleatorio = numerosAleatorios[Math.floor(Math.random() * numerosAleatorios.length)];

        // Modificando o cálculo da senhaBase para incluir o número aleatório do array
        let senhaBase = ((resultado * mes + 357) + numeroAleatorio).toString(); // Passo 4 com número aleatório

        // Geração de variáveis adicionais para aumentar a complexidade
        let variacoes = [
            ano % 100, // Últimos dois dígitos do ano
            (dia * mes) % 100, // Multiplicação do dia pelo mês com operação de módulo
            (dia.toString().split("").reduce((a, b) => a + parseInt(b), 0) * mes) % 100, // Soma dos dígitos do dia multiplicado pelo mês
            senhaBase.substring(0, 2).split("").reverse().join(""), // Inversão dos dois primeiros números
            ((parseInt(senhaBase[0]) + parseInt(senhaBase[1])) * 2).toString().padStart(3, "0"), // Soma dos dois primeiros e multiplicação por 2
            (parseInt(senhaBase[0]) * parseInt(senhaBase[1]) / 2).toString().padStart(2, "0"), // Multiplicação dos dois primeiros e divisão por 2
            (Math.abs(dia - mes) * 5).toString().padStart(2, "0"), // Diferença entre dia e mês multiplicado por 5
            (ano % 2 === 0 ? 11 : 7).toString() // Verificação de ano par/ímpar
        ];

        // Escolhe quatro opções aleatórias para maior complexidade
        let extras = variacoes.sort(() => 0.5 - Math.random()).slice(0, 4).join("");

        // Monta a senha final, garantindo que tenha pelo menos 12 caracteres
        let senhaFinal = senhaBase + extras;
        if (senhaFinal.length < 8) senhaFinal = senhaFinal.padEnd(12, "0"); // Garante pelo menos 4 dígitos extras

        // Validação de comprimento final da senha
        if (senhaFinal.length < 8) {
            alert("Erro na geração da senha! Tente novamente.");
            return;
        }

        // Exibe a senha gerada
        document.getElementById("senha").innerText = senhaFinal.substring(0, 12);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const calcularBtn = document.getElementById('calcular');
    const imcValor = document.getElementById('imc-valor');
    const imcClassificacao = document.getElementById('imc-classificacao');

    calcularBtn.addEventListener('click', calcularIMC);

    function calcularIMC() {
        const peso = parseFloat(pesoInput.value.replace(',', '.'));
        const altura = parseFloat(alturaInput.value.replace(',', '.'));

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            alert('Por favor, insira valores válidos para peso e altura.');
            return;
        }

        // Cálculo do IMC
        const imc = peso / (altura * altura);
        const imcFormatado = imc.toFixed(1).replace('.', ',');

        // Classificação do IMC
        let classificacao;
        if (imc < 18.5) {
            classificacao = 'Baixo peso';
        } else if (imc < 25) {
            classificacao = 'Peso normal';
        } else if (imc < 30) {
            classificacao = 'Sobrepeso';
        } else if (imc < 35) {
            classificacao = 'Obesidade grau I';
        } else if (imc < 40) {
            classificacao = 'Obesidade grau II';
        } else {
            classificacao = 'Obesidade grau III';
        }

        // Exibição dos resultados
        imcValor.textContent = `Seu IMC é: ${imcFormatado}`;
        imcClassificacao.textContent = `Classificação: ${classificacao}`;
    }

    // Permitir calcular pressionando Enter
    [pesoInput, alturaInput].forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calcularIMC();
            }
        });
    });
});
const fs = require('fs');

fs.readFile('faturamento.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    const faturamentoData = JSON.parse(data);
    const faturamento = faturamentoData.faturamento;
    const faturamentoValido = faturamento.filter(dia => dia.valor > 0);
    const menorFaturamento = Math.min(...faturamentoValido.map(dia => dia.valor));
    const maiorFaturamento = Math.max(...faturamentoValido.map(dia => dia.valor));
    const mediaFaturamento = faturamentoValido.reduce((total, dia) => total + dia.valor, 0) / faturamentoValido.length;
    const diasAcimaDaMedia = faturamentoValido.filter(dia => dia.valor > mediaFaturamento).length;

    console.log(`Menor faturamento: R$ ${menorFaturamento.toFixed(2)}`);
    console.log(`Maior faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
});

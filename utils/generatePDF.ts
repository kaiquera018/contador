import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

export async function exportarContagemPDF(count: number) {
  const html = `
    <html>
      <body style="font-family: sans-serif; text-align: center; padding: 20px;">
        <h1>Relatório de Contagem</h1>
        <p><strong>Valor atual:</strong> ${count}</p>
        <p>Gerado em: ${new Date().toLocaleString()}</p>
      </body>
    </html>
  `;

  const { uri } = await Print.printToFileAsync({ html });
  await Sharing.shareAsync(uri);
}

const { PDFDocument } = require('pdf-lib');
const fs = require('fs');


const url = './WWR Service Agreement Interactive.pdf';

async function run() {
  const pdfDoc = await PDFDocument.load(fs.readFileSync(url));
  const form = pdfDoc.getForm();
  const registeredName = form.getTextField('Registered Name:');
  const companyName = form.getTextField('Company Name');
  registeredName.setText('Nilay Jayeshkumar Chikani');
  companyName.setText('ABC Company');
  fs.writeFileSync('./test.pdf', await pdfDoc.save());
}
      
run().catch(err => console.log(err));
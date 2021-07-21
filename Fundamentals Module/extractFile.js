function extractFile(input) {
  let pointIndex = input.lastIndexOf('.');
  let ext = input.substring(pointIndex + 1);

  let lineIndex = input.lastIndexOf(`\\`);
  let name = input.substring(lineIndex + 1, pointIndex);

  console.log(`File name: ${name}`);
  console.log(`File extension: ${ext}`);
}
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');

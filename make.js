const fs = require('fs');
const path = require('path');

const argv = process.argv.slice(2);

if (argv.length < 1) {
  console.error('É necessário informar um nome de módulo.');
  process.exit(1);
}

const modulePath = path.join(__dirname, 'src', 'module', argv[0]);

if (!fs.existsSync(modulePath)) {
  fs.mkdirSync(modulePath);
}

const controllerPath = path.join(modulePath, `${argv[0]}.controller.ts`);
const servicePath = path.join(modulePath, `${argv[0]}.service.ts`);
const repositoryPath = path.join(modulePath, `${argv[0]}.repository.ts`);

fs.writeFileSync(controllerPath, `export class ${argv[0]}Controller {}`, { encoding: 'utf-8' });
fs.writeFileSync(servicePath, `export class ${argv[0]}Service {}`, { encoding: 'utf-8' });
fs.writeFileSync(repositoryPath, `export class ${argv[0]}Repository {}`, { encoding: 'utf-8' });

console.log(`Arquivos de modelo criados com sucesso para o módulo ${argv[0]}.`);
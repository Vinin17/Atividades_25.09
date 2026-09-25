console.log("=== SISTEMA DA LANCHONETE ===");

let senha;

do {
    senha = prompt("Digite a senha:");

    if (senha !== "1234") {
        console.log("Senha incorreta!");
    }

} while (senha !== "1234");

console.log("Acesso permitido!");

let subtotal = 0;
let quantidade = 0;
let opcao;

while (true) {

    console.log("1 - Hambúrguer - R$ 15,00");
    console.log("2 - Pizza - R$ 20,00");
    console.log("3 - Refrigerante - R$ 6,00");
    console.log("4 - Batata Frita - R$ 10,00");
    console.log("0 - Finalizar");

    opcao = Number(prompt("Escolha:"));

    if (opcao === 0) {
        break;
    }

    if (opcao < 1 || opcao > 4) {
        console.log("Opção inválida!");
        continue;
    }

    switch (opcao) {

        case 1:
            subtotal += 15;
            quantidade++;
            console.log("Hambúrguer adicionado!");
            break;

        case 2:
            subtotal += 20;
            quantidade++;
            console.log("Pizza adicionada!");
            break;

        case 3:
            subtotal += 6;
            quantidade++;
            console.log("Refrigerante adicionado!");
            break;

        case 4:
            subtotal += 10;
            quantidade++;
            console.log("Batata Frita adicionada!");
            break;
    }
}

for (let i = 1; i <= quantidade; i++) {
    console.log(`Produto ${i} registrado`);
}

let desconto = subtotal >= 50 ? subtotal * 0.10 : 0;

let total = subtotal - desconto;

console.log(`Subtotal: R$ ${subtotal.toFixed(2).replace(".", ",")}`);
console.log(`Desconto: R$ ${desconto.toFixed(2).replace(".", ",")}`);
console.log(`Total: R$ ${total.toFixed(2).replace(".", ",")}`);

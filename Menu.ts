import readlinesync = require("readline-sync");

export function main () {
    
    let opcao: number;
    
    while (true) {

        console.log("----------------------------------------------------------------------------------------------------");
        console.log("             Bem vindo a Loja de Acessórios para sua Cabeça. Escolha a opção do menu abaixo:");
        console.log("----------------------------------------------------------------------------------------------------");
        console.log("                                   Opção 1: Cadastrar produto");
        console.log("                                   Opção 2: Listar todos os produtos");
        console.log("                                   Opção 3: Listar produto pelo ID");
        console.log("                                   Opção 4: Atualizar produtos");
        console.log("                                   Opção 5: Apagar Produtos");
        console.log("                                   Opção 0: Sair");

        console.log("\n                               Qual opção você deseja prosseguir?")
        opcao = readlinesync.questionInt("")

        if (opcao == 0) {
            console.log("----------------------------------------------------------------------------------------------------");
            console.log("Você saiu da loja. Obrigada pela preferência!");
            console.log("----------------------------------------------------------------------------------------------------");
            sobre();
            process.exit(0);
        }

        switch (opcao){
            case 1: console.log("Cadastrar produto");
        
                keyPress()
                break;
            case 2: console.log("Listar todos os produtos");
                
                keyPress()
                break;
            case 3: console.log("Listar produto pelo ID");
    
                keyPress()
                break;
            case 4: console.log("Atualizar produtos");
                
                keyPress()
                break;
            case 5: console.log("Apagar Produtos");
            
                keyPress()
                break;
            default: console.log("Opção inválida")
                keyPress()
                break;
        }
    }
}

function sobre(): void {
    console.log("Projeto desenvolvido por: Daniele Furtado")
    console.log("Generation Brasil - generation@generation.org")
    console.log("GitHub: https://github.com/dani-furtado")
}

function keyPress(): void {
    console.log("\nPressione ENTER para continuar...");
    readlinesync.prompt();
}

main();
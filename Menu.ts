import readlinesync = require("readline-sync");
import { AcessorioController } from "./src/controller/AcessorioController";
import { Bone } from "./src/model/Bone";
import { Touca } from "./src/model/Touca";

export function main () {
    
    let opcao: number;

    let id, tipo, preco: number;
    let nome, bone, touca: string;
    let tipoAcessorio = ['Bone', 'Touca'];

    const acessorioController: AcessorioController = new AcessorioController();

    acessorioController.cadastrar(new Bone(acessorioController.gerarId(), "Bone vermelho", 1, 60, "bone"));

    acessorioController.cadastrar(new Touca(acessorioController.gerarId(), "Touca azul", 2, 60, "touca"));
    
    acessorioController.listarTodas();

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
                    console.log("Digite o nome do produto: ")
                    nome = readlinesync.question("");

                    console.log("Digite o tipo de produto: ")
                    tipo = readlinesync.keyInSelect(tipoAcessorio, "", {cancel: false}) + 1;

                    console.log("Digite o preço do produto: ")
                    preco = readlinesync.questionFloat("");

                    switch(tipo){
                        case 1: 
                            bone = readlinesync.question("");
                            acessorioController.cadastrar(new Bone(acessorioController.gerarId(), nome, tipo, preco, bone));
                            break;
                        case 2:
                            touca = readlinesync.question("");
                            acessorioController.cadastrar(new Touca(acessorioController.gerarId(), nome, tipo, preco, touca));
                            break;
                    }
                keyPress()
                break;
            case 2: console.log("Listar todos os produtos");
                    acessorioController.listarTodas();
                keyPress()
                break;
            case 3: console.log("Listar produto pelo ID");
                    console.log("Digite o ID  do produto: ");
                    id = readlinesync.questionInt("");
                    acessorioController.listarPorId(id);
                keyPress()
                break;
            case 4: console.log("Atualizar produtos");
                    console.log("Digite o ID  do produto: ");
                    id = readlinesync.questionInt("");
                    let buscarAcessorio = acessorioController.buscarNoArray(id)
                    
                
                    if (buscarAcessorio != null) {
                        console.log("Digite o nome do produto: ")
                        nome = readlinesync.question("");

                        tipo = buscarAcessorio.tipo;

                        console.log("Digite o preço do produto: ")
                        preco = readlinesync.questionFloat("");

                        switch (tipo) {
                            case 1:
                                console.log("Digite o novo nome do produto: ");
                                bone = readlinesync.question("");
                                acessorioController.cadastrar(new Bone(acessorioController.gerarId(), nome, tipo, preco, bone));
                                break;
                            case 2: 
                                console.log("Digite o novo nome do produto: ");
                                touca = readlinesync.question("");
                                acessorioController.cadastrar(new Touca(acessorioController.gerarId(), nome, tipo, preco, touca));
                                break;
                        }
                    } else {
                        console.log("Produto não encontrado!")
                    }

                keyPress()
                break;
            case 5: console.log("Apagar Produtos");
                    console.log("Digite o ID  do produto que deseja apagar: ");
                    id = readlinesync.questionInt("");
                    acessorioController.deletar(id);
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
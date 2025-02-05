//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []; 

        function adicionarAmigo() {
            let input = document.getElementById("amigo");
            let nome = input.value.trim(); // Captura o valor e remove espaços extras

            if (nome === "") {
                alert("Por favor, insira um nome.");
                return;
            }

            amigos.push(nome); // Adiciona o nome ao array
            atualizarLista(); // Atualiza a exibição da lista na tela
            input.value = ""; // Limpa o campo de entrada
        }

        function atualizarLista() {
            let lista = document.getElementById("listaAmigos");
            lista.innerHTML = ""; // Limpa a lista antes de atualizar

            amigos.forEach((nome) => { // Itera sobre os nomes corretamente
                const item = document.createElement("li");
                item.textContent = nome;
                lista.appendChild(item);
            });
        }

        function sortearAmigo() {
            if (amigos.length === 0) {
                alert("A lista de amigos está vazia. Adicione nomes antes de sortear.");
                return;
            }

            const indiceAleatorio = Math.floor(Math.random() * amigos.length);
            const amigoSorteado = amigos[indiceAleatorio];

            document.getElementById("resultado").innerHTML = `🎉 Amigo sorteado: <strong>${amigoSorteado}</strong>!`;
        }
/*
A empresa Savinis, focada no desenvolvimento de software de alta performance, contratou você para
realizar o desenvolvimento de um sistema de cadastro para eventos que será disponibilizado para o
público, o que, até então, era realizado manualmente.

Esse sistema terá como função principal a divulgação dos eventos para a
comunidade de desenvolvimento, para que sejam consultados de forma eficiente.

Você será responsável por escolher qual técnica irá atender os seguintes requisitos:
- Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.
- Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
- Listar participantes e palestrantes por evento.
- Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.
- Criar fluxograma com todos os requisitos que devem ser atendidos pelo sistema.
*/

//sistema de cadastro de evento

//variáveis && entrada
let data = 21;
let diadoevento = 31;
let idade = 27;
let idademinima = 18;
let listadeparticipantes = ["Martha", "Thomas", "Bruce", "Alfred", "Dick", "Todd", "Tim", "Barbara", "Damian", "Thalia", "Cassandra", "Cassie", "Selina", "Katherine", "Stephanie", "Duke", "Lucius", "Harley", "Pamela", "Gordon"]

//processamento && saída
if (diadoevento >= data){
    console.log("Evento marcado!")
}
else{
    console.log("Data inválida. Por favor insira uma nova data.")
}

do
{
    if (listadeparticipantes.lenght >= 100){
        console.log(`${listadeparticipantes.length} - Lista de participantes cheia, impossível cadastrar participante.`)
    }
    else{
        console.log(`${listadeparticipantes.length} - Você ainda pode se cadastrar.`)
    }
} while (listadeparticipantes.lenght < 100)


if (idade >= idademinima){
    console.log("Participante cadastrado!")
}
else{
    console.log("Participante não cadastrado. A idade mínima para este evento é de 18 anos.")

}
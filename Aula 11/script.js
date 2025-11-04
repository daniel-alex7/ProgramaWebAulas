fetch("dadosAlunos.json").then((response) =>{
    response.json().then((data)=>{
        data.alunos.forEach(aluno => {

            //Formatação da data
            
            const idade = new Date () - new Date (aluno.nascimento)

            const nasc = new Date (`${aluno.nascimento}`)
            const nascFormatado = nasc.toLocaleDateString('pt-Br', {timeZone: 'UTC', })

            corpoDaTabela.innerHTML += 
                    `<tr>
                       <td>${aluno.nome}</td>
                       <td>${aluno.nascimento}</td>
                       <td>${nascFormatado}</td>
                       <td>${aluno.email}</td>
                       <td>${aluno.cpf}</td>
                       <td> ${(idade / (365.25 * 24 * 60 * 60 * 1000)).toFixed(0)} anos </td>
                    </tr>`
            
        });
    })
})
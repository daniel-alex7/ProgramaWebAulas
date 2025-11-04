fetch("dadosAlunos.json").then((response) =>{
    response.json().then((data)=>{
        data.alunos.forEach(aluno => {

            //Formatação da data
            

            const nasc = new Date (`${aluno.nascimento}`)
            const nascFormatado = nasc.toLocaleDateString('pt-Br', {timeZone: 'UTC', })

            corpoDaTabela.innerHTML += 
                    `<tr>
                       <td>${aluno.nome}</td>
                       <td>${aluno.nascimento}</td>
                       <td>${nascFormatado}</td>
                       <td>${aluno.email}</td>
                    </tr>`
            
        });
    })
})
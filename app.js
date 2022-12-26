
function cadastro(){
    const usuario = {}
    usuario.name = document.getElementById("nome").value;
    usuario.cpf = document.getElementById("cpf").value;
    usuario.aniversario = document.getElementById("aniversario").value;
    usuario.senha = document.getElementById("senha").value;
    return usuario
}

const DADOS_USUARIOS = []
DADOS_USUARIOS[0] = cadastro()
console.log(DADOS_USUARIOS[0])



import MyImagem from "../model/imagem.js"
import ImagemManager from "../js/imagemManager.js"
export default class imagemController{
    constructor(){
        this.imagemManager = new ImagemManager();
        
    }

    lerDados(){
        let id = document.getElementById("id").value;
        let link = document.getElementById("link").value;
        let titulo = document.getElementById("titulo").value;
               
        this.imagem = new MyImagem(id,link,titulo);
        return this.imagem;    
        
        
        
    }
    cadastrar(){
        let imagem = this.lerDados();
        if (imagem.link=="" || imagem.titulo == "") {
            alert("Todos os campos são obrigatórios");
            return false;
        }
        if (imagem.id=="") {
            this.imagemManager.cadastrar(imagem);    
        } else {
            this.imagemManager.alterarImagem(imagem.id,imagem);
        }
        document.getElementById("btnIncluir").innerHTML = "Incluir";
        document.getElementById("btnCancelar").style.display="none";
        this.listarImagens();
        this.limparCampos();
        

    }
    listarImagens(){
        let strImagens = this.imagemManager.listarImagens();
        document.getElementById("resultado").innerHTML = strImagens;
    }

    alterarImagem(indice){
        let img = this.imagemManager.getImagem(indice);
        document.getElementById("id").value = indice;
        document.getElementById("titulo").value = img.titulo;
        document.getElementById("link").value = img.link;
        document.getElementById("btnCancelar").style.display="block";
        document.getElementById("btnIncluir").innerHTML = "Alterar";
        document.getElementById("titulo").focus();
       this.habilitarDesabilitarBotoesCards(true);
                

    }
    habilitarDesabilitarBotoesCards(valor){
        
       let footers = document.getElementsByClassName("btnCards");
        
       for (let key in footers) {
        footers.item(key).disabled = valor;  
       }        
        
    }
    excluirImagem(indice){
        this.imagemManager.excluirImagem(indice);
        this.listarImagens();
        this.limparCampos();
        document.getElementById("btnIncluir").innerHTML = "Incluir";
        document.getElementById("btnCancelar").style.display="none";
    }
    limparCampos(){
        document.getElementById("id").value = "";
        document.getElementById("titulo").value = "";
        document.getElementById("link").value = "";
        document.getElementById("titulo").focus();
    }
    cancelar(){
        this.limparCampos();
        document.getElementById("btnIncluir").innerHTML = "Incluir";
        document.getElementById("btnCancelar").style.display="none";
        this.habilitarDesabilitarBotoesCards(false);
    }

}
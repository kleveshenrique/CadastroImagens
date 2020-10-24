export default class ImagemManager{
    constructor(){
        this.arrImagens=[];
    }

    cadastrar(imagem){
        this.arrImagens.push(imagem);        
        
    }
    alterarImagem(indice,imagem){
        this.arrImagens.splice(indice,1,imagem);
    }
    excluirImagem(indice){
        this.arrImagens.splice(indice,1);
    
    }
    getImagem(indice){
        return this.arrImagens[indice];
    }

    listarImagens(){
        let strListaImagens="";
        
        this.arrImagens.forEach((img,indice) => {
            
            strListaImagens += `
                <div class="card col-sm-4">                                     
                    <div class="card-body">
                    <h5 class="card-title text-center">${img.titulo}</h5>
                    <img class="card-img-top" src="${img.link}" alt="Imagem de capa do card">                   
                    
                    </div>
                    <div class="card-footer ">
                    <button onclick="imagemController.alterarImagem(${indice})"><i class="fa fa-edit"></i></button> 
                    <button onclick="imagemController.excluirImagem(${indice})"><i class="fas fa-trash"></i></button>                     
                    
                    </div>
                </div>
                
            `
        });
        return strListaImagens;
    }
}
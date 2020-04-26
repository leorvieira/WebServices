class NegociacaoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new ListaNegociacoes();        
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);

     //   this._corrida = new Corrida();
     //   this._corridaView = new CorridaView($('#corridaView'));
     //   this._corridaView.update(this._corrida);
        
    }

    apaga() {
     //   this._listaNegociacoes.esvazia();
     //   this._negociacoesView.update(this._listaNegociacoes);
       
        this._mensagem.texto = 'Negociacoes apagadas com sucesso';
        this._mensagemView.update(this._mensagem);                      
    }

    finalizaCorrida(event){


        // chamar API para solicitar a finalização da corrida passando ( usuario, origem, destino ) e 
        // retornando o status de corrida finalizada e o valor total a ser cobraddo.  
        
        event.preventDefault();
        this._mensagem.texto = 'Corrida finalizada com sucesso. O valor de $$$ será cobrado em seu cartão de crédito final 9999. Obrigado pela preferência.';
        this._mensagemView.update(this._mensagem);          

    }




    iniciaCorrida(event){


        // chamar API para solicitar inicio da corrida passando ( usuario, origem, destino ) e retornando
        // ( carro, placa, origem, destino e previsão de chegada )  
        
        event.preventDefault();
        this._mensagem.texto = 'Carro X, placa Y se deslocando ao DESTINO. Previsão de chegada em N minutos...';
        this._mensagemView.update(this._mensagem);          

    }

    cancelaCorrida(event){


        // chamar API para solicitar cancelamento da corrida passando ( usuario, origem, destino )  e recebendo
        // o status da solicitação ( ok / nok )
        
        event.preventDefault();
        this._mensagem.texto = 'Corrida cancelada com sucesso';
        this._mensagemView.update(this._mensagem);          

    }


    solicitaVeiculo(event){


        // chamar API para solicitar veiculo passando ( usuario, origem, destino ) e 
        // retornando ( usuario, origem, destino, descrição do carro e tempo em que o carro estará disponível na origem)
        
        event.preventDefault();
        this._mensagem.texto = 'Veículo X, placa Y, motorista Z estará disponível em N minutos em Destino...';
        this._mensagemView.update(this._mensagem);          

    }

    
    adiciona(event) {
        
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
        
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);
        
        this._limpaFormulario();   
    }
    
    _criaNegociacao() {
        
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);    
    }
    
    _limpaFormulario() {
     
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();   
    }
}
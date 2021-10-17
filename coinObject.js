const coin = {
    state: 0,
    image: document.createElement("img"),
    flip: function () {
      // Use "this.state" para acessar a propriedade "state".
      // Configure de forma randômica a propriedade “state” do
      // seu objeto moeda. "STATE" deve receber somente os valores 0 ou 1.
       this.state = Math.floor(Math.random() * 2)  
        return this.state
      
    },  
    toString: function () {
      // Se o valor de "state" for 0, retorne "Heads"
      if (this.state === 0) {
          return this.state = 'Heads';
      }      
      // Se o valor de "state" for 1, retorne "Tails"
      if (this.state === 1) {
          return this.state = 'Tails';        
      }
    },      
    toHTML: function () {
      const image = document.createElement("img");
      // Colocar uma imagem correspondente a essa valor.
      // image.src = "./CAMINHO/IMAGEM.JPEG"
      if (this.state === 'Tails'){
        image.src = "./images/tails.png";
        image.alt = "Tails";
      }    

      if(this.state === 'Heads'){
        image.src = "./images/heads.png";
        image.alt = "Heads";
      }
      coin.image = image;
    },
    
  };

  function display20Flips() {
    const results = [];
    for(i = 0; i < 20; i++){
      coin.flip();
      results.push(coin.state)
      coin.toString();
      const span = document.createElement("span");
      span.innerHTML = coin.state;
      document.body.appendChild(span)
    }
    return results;
    
  
  }
  
  function display20Images() {
    const results = [];
    for(i = 0; i < 20; i++){
      coin.flip();
      coin.toString();
      results.push(coin.state)
      coin.toHTML();
      document.body.appendChild(coin.image)  
    }
    
    return  results;
   

  }


  
  
 
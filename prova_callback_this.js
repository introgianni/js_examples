  var persona = {
      nome: "Mario",
      cognome: "Rossi",
      saluta: function() {
          alert("Buongiorno " + this.nome + " " + this.cognome);
      }
  };

  //fix gestione this in callBack
  document.getElementById("pulsante").addEventListener("click", persona.saluta.bind(persona));

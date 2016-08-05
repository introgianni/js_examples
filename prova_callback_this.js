  var persona = {
      nome: "Mario",
      cognome: "Rossi",
      saluta: function() {
          alert("Buongiorno " + this.nome + " " + this.cognome);
      }
  };


  document.getElementById("pulsante").addEventListener("click", persona.saluta.bind(persona));

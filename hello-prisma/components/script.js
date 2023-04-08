  function showOnceADay() {
    document.getElementById("once-a-day-content").style.display = "flex";
    document.getElementById("daily-content").style.display = "none";
    document.getElementById("weekly-content").style.display = "none";
    document.getElementById("monthly-content").style.display = "none";
  }
  function showDaily() {
    document.getElementById("once-a-day-content").style.display = "none";
    document.getElementById("daily-content").style.display = "flex";
    document.getElementById("weekly-content").style.display = "none";
    document.getElementById("monthly-content").style.display = "none";
  }
  function showWeekly() {
    document.getElementById("once-a-day-content").style.display = "none";
    document.getElementById("daily-content").style.display = "none";
    document.getElementById("weekly-content").style.display = "flex";
    document.getElementById("monthly-content").style.display = "none";
  }
  function showMonthly() {
    document.getElementById("once-a-day-content").style.display = "none";
    document.getElementById("daily-content").style.display = "none";
    document.getElementById("weekly-content").style.display = "none";
    document.getElementById("monthly-content").style.display = "flex";
  }
  var search_terms = ['sobre nós', 'serviços', 'combo oi total', 'recarga', 'responsável', 'políticas de privacidade', 'endereço mais próximo', 'história', 'suporte', 'cadastrar', 'oi planos', 'oi banda larga', 'contratar internet', 'oi mais próxima', 'criar conta', 'oi fibra'];

  function autocompleteMatch(input) {
    if (input == '') {
      return [];
    }
    var reg = new RegExp(input)
    return search_terms.filter(function(term) {
      if (term.match(reg)) {
        return term;
      }
    });
  }
  
  function showResults(val) {
    res = document.getElementById("result");
    res.innerHTML = '';
    let list = '';
    let terms = autocompleteMatch(val);
    for (i=0; i<terms.length; i++) {
      list += '<li>' + terms[i] + '</li>';
    }
    res.innerHTML = '<ul>' + list + '</ul>';
  }
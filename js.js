document.addEventListener("click", function() {
    document.getElementById("tlacitko").innerText = 'Hups, asi jste to trochu podělali';
    document.getElementById("nadpis").innerHTML = '<h1 class="text-center text-black">Mezinárodní Mafie</h1>';
    document.getElementById("obrazek").innerHTML = '<src="mafianka.jpg">';


  });
  document.addEventListener("mouseover", function() {
    document.getElementById("jmeno").innerText = "Isabella Cantini";
    document.getElementById("email").innerText = "bestmafianka@gmail.com";
    document.getElementById("napis").innerText = 'Mezinárodní Mafie';

  });
  
  let main = document.getElementById("main");
  main.addEventListener('click', function(){
    main.style.backgroundColor = 'lightgrey';
});


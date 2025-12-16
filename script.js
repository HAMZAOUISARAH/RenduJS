const url = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/chocolatier.json";
fetch(url)
 .then(res => res.json())
 .then(data => 
    {
        // console.log(data);
        
   // NAVBAR
   document.getElementById("logo").textContent = data.nomEntreprise;
   console.log(data.bouton);
   
   document.getElementById("btnNav").textContent = data.bouton;
   // HEADER
   document.getElementById("nomEntreprise").textContent = data.nomEntreprise;
   document.getElementById("slogan").textContent = data.slogan; 

   // BÉNÉFICES CLIENTS
   const benefices = document.getElementById("benefices");
   data.listeBeneficesClients.forEach(b => {
     const li = document.createElement("li");
     li.textContent = b;
     benefices.appendChild(li);
   });

   // PRODUITS
   const produitsContainer = document.getElementById("produitsContainer");
   data.produits.forEach(p => {
     const div = document.createElement("div");
     div.className = "produit";
     div.innerHTML = `
<h3>${p.titre}</h3>
<p>${p.presentation}</p>
<img src="${p['image-url']}" alt="${p.titre}">
     `;
     produitsContainer.appendChild(div);
   });

 
})

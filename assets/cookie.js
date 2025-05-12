 // Fonction pour créer un cookie
  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    const expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  // Lire un cookie
  function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let c of ca) {
      while (c.charAt(0) === ' ') c = c.substring(1);
      if (c.indexOf(cname) === 0) return c.substring(cname.length, c.length);
    }
    return "";
  }

  // Accepter les cookies
  function acceptCookies() {
    const nom = prompt("Entrez votre nom :");
    if (nom) {
      setCookie("cookie_consent", "accepted", 30);
      setCookie("user_name", nom, 30);
    }
    document.getElementById("cookie-banner").style.display = "none";
  }

  // Refuser les cookies
  function refuseCookies() {
    setCookie("cookie_consent", "refused", 30);
    document.getElementById("cookie-banner").style.display = "none";
  }

  // Afficher la bannière si aucun choix n'est enregistré
  window.onload = function() {
    const consent = getCookie("cookie_consent");
    if (!consent) {
      document.getElementById("cookie-banner").style.display = "flex";
    }
  }

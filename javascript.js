document.querySelector('._3WByx').innerHTML += '<button id="cp_btn" class="click_btn">Copiar<span>(contacto)</span></button><button id="cp_btn2" class="click2_btn">Copiar<span>(no contacto)</span></button><div class="tooltip-container"><div class="tooltip-text"><p>| (debajo del escape) - Auto llegando</p><p>Shift + | - Auto afuera</p><p>F2 - Ya te lo mando</p><p>Shift + F2 - Confirmación del viaje</p><p>F3 - Mensjae completo</p><p>F4 - Pedir nombre y donde van</p><p>F6 - Demora de 10-15m</p><p>F7 - Demora de 15-20m</p><p>F8 - Ya te digo aproximado</p><p>F9 - Remisero nuevo</p></div><img src="https://s-media-cache-ak0.pinimg.com/564x/c0/f0/9f/c0f09f6c4d59f94f60f27ba6a05b8f57.jpg"/></div>';


document.getElementById("cp_btn").addEventListener("click", copy_password);

function copy_password() {
    document.querySelector("._2au8k").click();
        setTimeout(function() {
    var copyText = document.querySelector("span.enbbiyaj.e1gr2w1z.hp667wtd").innerText;
    var numero = copyText.slice(6);
    var textArea = document.createElement("textarea");
    textArea.value = numero;
    document.body.appendChild(textArea);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(numero)
        .then(function () {
          document.getElementById("okay").innerHTML = "Copiado"
        })
        .catch(function (erro) {
        document.getElementById("okay").innerHTML = erro
           
        });
    }  
    textArea.remove();
  }, 50);
};

document.querySelector(".click_btn").addEventListener("click", cick_password);

function cick_password() {
    setTimeout(function() {
document.querySelector(".kk3akd72.svlsagor.fewfhwl7.ajgl1lbb.ltyqj8pj").click();
  }, 150);
};

document.getElementById("cp_btn2").addEventListener("click", copy_password2);

function copy_password2() {
    document.querySelector("._2au8k").click();
        setTimeout(function() {
    var copyText = document.querySelector("._3_9fX>div>span>span.l7jjieqr._11JPr").innerText;
    var numero = copyText.slice(6);
    var textArea = document.createElement("textarea");
    textArea.value = numero;
    document.body.appendChild(textArea);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(numero)
        .then(function () {
          document.getElementById("okay").innerHTML = "Copiado"
        })
        .catch(function (erro) {
        document.getElementById("okay").innerHTML = erro
           
        });
    }  
    textArea.remove();
  }, 50);
};

document.querySelector(".click2_btn").addEventListener("click", cick2_password);

function cick2_password() {
    setTimeout(function() {
document.querySelector(".kk3akd72.svlsagor.fewfhwl7.ajgl1lbb.ltyqj8pj").click();
  }, 150);
};

const style = document.createElement('style');
style.innerHTML = `
.tooltip-container img {
  border-radius: inherit;
  height: inherit;
  width: inherit;
}
.tooltip-container{
  border-radius: 100%;
  height: 40px;
  width: 40px;
  position: absolute;
  left: 135px;
  top: 11px;
  z-index: 1;
}

.tooltip-text {
  visibility: hidden;
  width: 210px;
  background-color: rgba(0, 0, 0, .8);
  color: #fff;
  font-size: 12px;
  text-align: center;
  padding: 6px 0px;
  line-height: normal;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  top: 125%; /* Posiciona el tooltip bajo del elemento */
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
}
.tooltip-container:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}
button#cp_btn,button#cp_btn2 {
    color: #FFFFFF;
    position: absolute;
    font-size: 14px;
    left: 39.1rem;
    top: 11px;
    padding: 5px 10px;
    background: #005c4b;
    width: 70px;
    border-radius: 5px;
    font-weight: 500;
    text-transform: uppercase;
}
button#cp_btn2 {
    left: 43.9rem;
    width: 81px;
}
button#cp_btn {
    left: 39.1rem;
    width: 70px;

}
button#cp_btn > span, button#cp_btn2 > span {
    font-size: 8px;
    display: flow;
    text-align: center;
    text-transform: uppercase;
}
    `;
document.head.appendChild(style);

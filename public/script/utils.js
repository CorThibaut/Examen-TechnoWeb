const bouton = document.getElementById("bt_total");
const nbpl = document.getElementById('nbseat');
const assurance = document.getElementById('assurance');

function Total(){

    let Total = 0;
    nbr = parseInt(nbpl.value);
    Total += (45*nbr);
    if (assurance.value == 'on'){
        Total += 20;
    }
    return Total
}
function onConfirm(){
    document.getElementById('total').innerText = `Total de la réservation : ${Total()}`;
}
bouton.addEventListener('click', onConfirm);
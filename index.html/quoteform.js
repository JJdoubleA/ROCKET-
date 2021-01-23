
function commercial(y){

    
    var Com = document.getElementById('slct4').value;
    


    if (y == 0){

        document.getElementById("Recommended").value = Com;
    }
    if(Com < 0){
        document.getElementById("Recommended").value = "nononono!";
    }
    

}


//<!-- resi ele calc-->

function apartments(b){
    var apa =document.getElementById('slct2').value;
    var flo = document.getElementById('flo').value;
    var tot = (apa / flo)/6.0;
    
    
    let ele_columns = Math.ceil(flo/20);

    tot = Math.round (tot);

    if (b == 0){

        document.getElementById("Recommended").value = tot * ele_columns;
    }
    if(flo < 0){
        document.getElementById("Recommended").value = "nononono!";
    }
    if(apa < 0){
        document.getElementById("Recommended").value = "nononono!";
    }
    
}



//<!-- corp ele calc-->					

function corporate(t){
    
    var occ_cor = document.getElementById('occ_cor').value;
    var flo_cor = document.getElementById('flo_cor').value;
    var bas_cor = document.getElementById('bas_cor').value;
    var stories = +flo_cor + +bas_cor;
    var total_occupants = occ_cor * stories;
    let ele_required = Math.ceil(total_occupants / 1000);
    let columns_cor = Math.ceil(stories/20);
    let ele_per_column = Math.ceil(ele_required / columns_cor);
    var total_elevators = ele_per_column * columns_cor;

    if(t == 0){
        document.getElementById("Recommended").value = total_elevators; 
    }
    if(occ_cor < 0){
        document.getElementById("Recommended").value = "nononono!";
    }
    if(flo_cor < 0){
        document.getElementById("Recommended").value = "nononono!";
    }
    if(bas_cor < 0){
        document.getElementById("Recommended").value = "nononono!";
    }



}



//<!--hybride-->					

function hybride(t){
    
    var occ_cor = document.getElementById('occ_hyb').value;
    var flo_cor = document.getElementById('flo_hyb').value;
    var bas_cor = document.getElementById('bas_hyb').value;
    var stories = +flo_cor + +bas_cor;
    var total_occupants = occ_cor * stories;
    let ele_required = Math.ceil(total_occupants / 1000);
    let columns_cor = Math.ceil(stories/20);
    let ele_per_column = Math.ceil(ele_required / columns_cor);
    var total_elevators = ele_per_column * columns_cor;

    if(t == 0){
        document.getElementById("Recommended").value = total_elevators; 
    }
    if(occ_cor < 0){
        document.getElementById("Recommended").value = "nononono!";
    }
    if(flo_cor < 0){
        document.getElementById("Recommended").value = "nononono!";
    }
    if(bas_cor < 0){
        document.getElementById("Recommended").value = "nononono!";
    }


}



//<!--price ele-->

function elevator_price(s){
    var elevator = document.getElementById('Recommended').value;
    var price = document.getElementById('Unit').value;
    var install = document.getElementById('test').value;
    var total = (elevator * price).toFixed(2);
    var install_fees = ( total * install).toFixed(2);
    var final = (+total + +install_fees).toFixed(2);

    if (s == 0){
        document.getElementById("Cheap").value = total;
    }
    if(s == 1){
        document.getElementById("Cheap").value = total;
    }
    
    if (s == 0){
        document.getElementById("Final").value = final;
    }
    if (s == 1){
        document.getElementById("Final").value = final;
    }
    if (s == 0){
        document.getElementById("install").value = install_fees;
    }
    if (s == 1){
        document.getElementById("install").value = install_fees;
    }

}


//</script><!--final-->

function final(v){
    var elevator = document.getElementById('Recommended').value;
    var price = document.getElementById('Unit').value;
    var total = elevator * price;
    var install = document.getElementById('insatll').value;
    var final = total * (install/100 +1);

    if (v == 0){
        document.getElementById("Final").value = "3";
    }



}



// installation fee


function radio(x){

    if(x == 0){
        document.getElementById("test").value ="0.1";

    }
    if( x == 1){
        document.getElementById("test").value = "0.13";
    }
    if (x == 2){
        document.getElementById("test").value = "0.16";
    }
    if (x == 0){
        document.getElementById("Unit").value = "7565.00";
    }
    if( x == 1){
        document.getElementById("Unit").value ="12345.00";
    }
    if( x == 2){
        document.getElementById("Unit").value ="15400.00";
    }

}



						
						window.onload = function() {
							document.getElementById("dynamic_form_commercial").style.display = "none";
						}
						
						
						
						function populate(s1,s2){

						var s1 = document.getElementById(s1);
						var s2 = document.getElementById(s2);
					
							
						

						s2.innerHTML = "";
//residential 
						if(s1.value == "Residential") {
							document.getElementById("dynamic_form").style.display = "block";

						}
						if (s1.value == "Corporate") {
							document.getElementById("dynamic_form").style.display = "none";
						}
						if (s1.value == "Commercial") {
							document.getElementById("dynamic_form").style.display = "none";
						}
						if (s1.value == "Hybride") {
							document.getElementById("dynamic_form").style.display = "none";
						}
// commercial 						
						if (s1.value == "Commercial") {
							document.getElementById("dynamic_form_commercial").style.display = "block";
						}
						if (s1.value == "Corporate") {
							document.getElementById("dynamic_form_commercial").style.display = "none";
						}
					
						if (s1.value == "Residential") {
							document.getElementById("dynamic_form_commercial").style.display = "none";
						}
						if (s1.value == "Hybride") {
							document.getElementById("dynamic_form_commercial").style.display = "none";
						}
// corporate 						
						if (s1.value == "Corporate") {
							document.getElementById("dynamic_form_corporate").style.display = "block";
						}
						if (s1.value == "Residential") {
							document.getElementById("dynamic_form_corporate").style.display = "none";
						}
						if (s1.value == "Hybride") {
							document.getElementById("dynamic_form_corporate").style.display = "none";
						}
						if (s1.value == "Commercial") {
							document.getElementById("dynamic_form_corporate").style.display = "none";
						}
//hybride						
						if (s1.value == "Hybride") {
							document.getElementById("dynamic_form_hybride").style.display = "block";
						}
						if (s1.value == "Residential") {
							document.getElementById("dynamic_form_hybride").style.display = "none";
							 ;
						}
						if (s1.value == "Corporate") {
							document.getElementById("dynamic_form_hybride").style.display = "none";
						}
						if (s1.value == "Commercial") {
							document.getElementById("dynamic_form_hybride").style.display = "none";
						}
						
						}
						
							
								
								window.onload = function tape(){

									var select = document.getElementById('slct1').value;

									if (select == "Residential"){
									document.getElementById("dynamic_form_hybride").style.display = "none";
								}
								if (select == "Residential"){
									document.getElementById("dynamic_form_commercial").style.display = "none";
								}
								if (select == "Residential"){
									document.getElementById("dynamic_form_corporate").style.display = "none";
								}
							}

                           
							
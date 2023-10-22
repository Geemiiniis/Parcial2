var Nombre=0; MasaCorporal=0; 

Nombre = prompt("Escriba el nombre de la persona");
MasaCorporal = prompt ("Escriba el peso de la persona");

if (MasaCorporal < 16 ) {
 alert ( " Usted Señor@ " +Nombre + ", tiene Delgadez severa. ");
}
 else if (MasaCorporal >=16 && MasaCorporal <17 ) {
 alert ( " Usted Señor@ " +Nombre + ", tiene Delgadez moderada. ");
 }
 else if (MasaCorporal >=17 && MasaCorporal <18.5 ) {
    alert ( " Usted Señor@ " +Nombre + ", tiene Delgadez leve. ");
    }
    else if (MasaCorporal >=18.5 && MasaCorporal <25 ) {
        alert ( " Usted Señor@ " +Nombre + ", tiene un Peso normal. ");
        }
        
        else if (MasaCorporal >=25 && MasaCorporal <30 ) {
            alert ( " Usted Señor@ " +Nombre + ", tiene Sobrepeso. ");
        }
            else if (MasaCorporal >=30 && MasaCorporal <35 ) {
                alert ( " Usted Señor@ " +Nombre + ", tiene Obesidad leve. ");
                }
            

            else if (MasaCorporal >=35 && MasaCorporal <40 ) {
                alert ( " Usted Señor@ " +Nombre + ", tiene Obesidad moderada. ");
                }

                else if (MasaCorporal >40 ) {
                    alert ( " Usted Señor@ " +Nombre + ", tiene Obesidad morbida ");
                    }
        
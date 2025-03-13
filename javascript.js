
/*--- Eğer Ekle butonuna tıklandığında input boşsa "görev ekleyin" uyarısı ver*/

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').
    value.length == 0) {
        alert("Lütfen hedef ekleyin.")
    }

    /*  Hedef ekleme fonksiyonu */
    else {
        document.querySelector('#tasks').innerHTML 
        += `
            <div class ="task">
                <span id="taskname">
                    ${document.querySelector
                    ('#newtask input').value}
                </span>
                <button class="delete">
                  <i class="fa-solid fa-trash"></i>         
            </div> 
        `;

        /* Görevleri silme fonksiyonu */

        var current_tasks = document.querySelectorAll(".delete");

        for (var i=0; i < current_tasks.length; i++)
            {
            current_tasks[i].onclick = function (){
               this.parentNode.remove();
            }
        }

        /* Tamamlanmış görevin üstünü çizmek ve yeşil renge dönüştürmek */

        var tasks = document.querySelectorAll(".task");

        for(var i=0; i < tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        /* Her görev eklendiğinde inputun temizlenmesi */

        document.querySelector("#newtask input").value="";
        
             
    }
}
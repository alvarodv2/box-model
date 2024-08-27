// 1. Esperamos a que el contenido del DOM se haya cargado completamente 
document.addEventListener('DOMContentLoaded', function () {
    // 2. Seleccionamos la "hamburguesa" con getElementById 
    var hamburguesa = document.getElementById('hamburguesa');
    // 2. Seleccionamos el "menú" con getElementById 
    var menu = document.getElementById('menu');

    // 3. Si ambos elementos existen... 
    if (hamburguesa && menu) {
        // 4. Añadimos un evento de click a la hamburguesa para desplegar el menú en caso de ser true 
        hamburguesa.addEventListener('click', function () {
            menu.classList.toggle('open');
        });

        // 5. Seleccionamos todos los elementos de lista dentro del menú. En este caso 'ul y li' 
        var menuItems = menu.querySelectorAll('ul li');

        // 6. Añadimos un evento de click a cada elemento de lista para cerrar el menú al hacer click en algún link*/
        menuItems.forEach(function (item) {
            item.addEventListener('click', function () {
                // 7. Hacemos click en un elemento de la lista y se elimina la clase 'open' del menú para hacerlo desaparecer 
                menu.classList.remove('open');
            });
        });
    }
});

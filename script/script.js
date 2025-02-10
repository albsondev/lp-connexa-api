$(document).ready(function() {
    loadLanguages(); // Carregar textos ao iniciar

    $('#languageSelector').change(function() {
        var selectedLanguage = $(this).val();
        changeLanguage(selectedLanguage);
    });

    function loadLanguages() {
        $.getJSON('script/languages.json', function(translations) {
            // Carregar inicialmente o idioma português
            window.translations = translations; // Armazenar traduções globalmente
            changeLanguage('pt'); 
        }).fail(function() {
            console.error("Erro ao carregar o arquivo languages.json");
        });
    }

    function changeLanguage(language) {
        const textsToTranslate = $('[data-key]');
        textsToTranslate.each(function() {
            const key = $(this).data('key');
            // Verifica se a chave existe
            if (translations[language] && translations[language][key]) {
                $(this).text(translations[language][key]);
            } else {
                console.warn(`Texto para a chave "${key}" não encontrado no idioma "${language}".`);
            }
        });
    }

    // Resto do código JavaScript para nav e scroll...
    var scrollpos = window.scrollY;
    var header = document.getElementById("header");
    var navcontent = document.getElementById("nav-content");
    var navaction = document.getElementById("navAction");
    var toToggle = document.querySelectorAll(".toggleColour");

    document.addEventListener("scroll", function () {
        scrollpos = window.scrollY;

        if (scrollpos > 10) {
            header.classList.add("bg-white", "bg-opacity-75");
            navaction.classList.remove("bg-white", "bg-opacity-75");
            navaction.classList.add("gradient", "text-white");

            toToggle.forEach(el => {
                el.classList.add("text-gray-800");
                el.classList.remove("text-white");
            });

            header.classList.add("shadow");
            navcontent.classList.remove("bg-gray-100");
            navcontent.classList.add("bg-white");
        } else {
            header.classList.remove("bg-white");
            navaction.classList.remove("gradient");
            navaction.classList.add("bg-white", "text-gray-800");
            
            toToggle.forEach(el => {
                el.classList.add("text-white");
                el.classList.remove("text-gray-800");
            });

            header.classList.remove("shadow");
            navcontent.classList.remove("bg-white");
            navcontent.classList.add("bg-gray-100");
        }
    });

    var navMenuDiv = document.getElementById("nav-content");
    var navMenu = document.getElementById("nav-toggle");

    document.onclick = check;

    function check(e) {
        var target = (e && e.target) || (event && event.srcElement);

        if (!checkParent(target, navMenuDiv)) {
            if (checkParent(target, navMenu)) {
                navMenuDiv.classList.toggle("hidden");
            } else {
                navMenuDiv.classList.add("hidden");
            }
        }
    }

    function checkParent(t, elm) {
        while (t.parentNode) {
            if (t === elm) return true;
            t = t.parentNode;
        }
        return false;
    }
});

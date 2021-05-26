Papa.parse("https://raw.githubusercontent.com/vtespinosa/diseno/master/clase-11/territorios-electorales.csv", {
    download: true,
    header: true,
    dynamicTyping: true,
    complete: function (respuesta) {
        console.log(respuesta);

        var regiones = respuesta.data.map(({ region }) => region);
        regiones.splice(0, regiones.length, ...new Set(regiones));
        console.log(regiones);
        regiones.forEach(function (region, i) {
            document.getElementById("aca").innerHTML +=
                '<div class="col-sm-6 col-md-4 col-lg-3"><div class="card h-100 shadow-sm"><img src="images/region-' +
                (i + 1) +
                '.jpg" class="card-img-top"/><div class="card-body"><a href="#" data-bs-toggle="modal" data-bs-target="#unModal"><h3 class="card-title fs-6">' +
                region +
                "</h3></div></div>";
        });

        var link = document.getElementsByTagName("main")[0].getElementsByTagName("a");
        console.log(link.length);

        // Busque la lógica y mejórela

        for (let i = 0; i < link.length; i++) {
            link[i].onclick = function () {
                var info = [];
                respuesta.data.forEach(function (datos) {
                    if (datos.region == regiones[i]) {
                        info.push(datos);
                    }
                });
                console.log(info);
                const imgSrc = `images/region-${i + 1}.jpg`
                document.getElementById("nombreRegion").innerHTML = regiones[i];
                document.getElementById("contenido").innerHTML = `<img src="${imgSrc}" class="modal-img" />` + '<table class="table"><thead><tr><th class="text-center">Distrito</th><th>Comuna</th><th class="text-end">Electores</th></tr></thead><tbody></tbody><table class="table">';
                var total = 0;
                info.forEach(function (elemento) {
                    document.getElementsByTagName("tbody")[0].innerHTML +=
                        "<tr><td class='text-center'>" + elemento.distrito + "</td><td>" + elemento.comuna + "</td><td class='text-end'>" + elemento.electores.toLocaleString("es") + "</td></tr>";
                });
            };
        }
    },
});
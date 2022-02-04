let page = 1;

function getTable() {
    $(document).ready(function () {

        $("body").append(
            $("<div/>").attr({
                id: "divPrincipal"
            }).append(
                $("<table/>").attr({
                    id: "tableCriptos"
                }).append(
                    $("<thead/>").append(
                        $("<tr/>").append(
                            $("<th/>"),
                            $("<th/>").text("Nombre"),
                            $("<th/>").text("Precio actual"),
                            $("<th/>").text("Precio más alto (24h)"),
                            $("<th/>").text("Precio más bajo (24h)"),
                            $("<th/>").text("Fecha de última actualización"),
                        )
                    ),
                    $("<tbody/>").attr("id", "bodyTable"),
                    getCriptoData(page),
                ),
            ),
            $("<div/>").append(
                $("<input/>").attr({
                    id: "btnMenos",
                    type: "button",
                    value: "Mostrar menos"
                }).click(function (e) {
                    page -= 1;
                    deleteBody();
                    $(this).css("display", "none");
                    $("#btnMas").css("display", "none");
                }).css({
                    display: "none",
                    "background-color": "#D9D7F1",
                    "border-radius": "15px",
                    padding: "10px"
                }),
                $("<input/>").attr({
                    id: "btnMas",
                    type: "button",
                    value: "Mostrar más"
                }).click(function (e) {
                    page += 1;
                    getCriptoData(page);
                }).css({
                    display: "none",
                    "background-color": "#D9D7F1",
                    "border-radius": "15px",
                    padding: "10px"
                })
            ).css({
                display: "flex",
                "justify-content": "space-evenly",
                margin: "20px",
            })
        )

    })
}

function deleteBody() {
    while ($("#bodyTable").children("tr").length > 0) {
        $("#bodyTable tr").remove();
    }

    getCriptoData(page);
}

function getBodyTable(criptos) {

    let body = $("#bodyTable");

    criptos.forEach(cripto => {
        body.append(
            $("<tr/>").append(
                $("<td/>").append(
                    $("<div/>").append(
                        $("<img/>").attr({
                            src: cripto.image,
                            height: "20px",
                            width: "20px",
                        }),
                    ).css({
                        display: "flex",
                        "justify-content": "center",
                        "align-items": "center"
                    })
                ),
                $("<td/>").append(
                    $("<div/>").append(
                        $("<p/>").text(cripto.name + " " + `(${cripto.symbol.toUpperCase()})`)
                    ).css({
                        display: "flex",
                        "justify-content": "center",
                        "align-items": "center"
                    })
                ),
                $("<td/>").append(
                    $("<div/>").append(
                        $("<p/>").text(
                            new Intl.NumberFormat('en-ES', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 }).format(cripto.current_price).replace("MX", "")
                        )
                    ).css({
                        display: "flex",
                        "justify-content": "center",
                        "align-items": "center"
                    })
                ),
                $("<td/>").append(
                    $("<div/>").append(
                        $("<p/>").text(
                            new Intl.NumberFormat('en-ES', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 }).format(cripto.high_24h).replace("MX", "")
                        )
                    ).css({
                        display: "flex",
                        "justify-content": "center",
                        "align-items": "center"
                    })
                ),
                $("<td/>").append(
                    $("<div/>").append(
                        $("<p/>").text(
                            new Intl.NumberFormat('en-ES', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 }).format(cripto.low_24h).replace("MX", "")
                        )
                    ).css({
                        display: "flex",
                        "justify-content": "center",
                        "align-items": "center"
                    })
                ),
                $("<td/>").append(
                    $("<div/>").append(
                        $("<p/>").text(
                            new Date(cripto.last_updated).toLocaleString()
                        )
                    ).css({
                        display: "flex",
                        "justify-content": "center",
                        "align-items": "center"
                    })
                ),
            )
        )
    });

    page > 1 ? $("#btnMenos").css("display", "block") : $("#btnMenos").css("display", "none");
}

function getCriptoData(page) {
    var settings = {
        url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&page=${page}`,
        method: "GET",
        timeout: 0,
        dataType: "json"
    };

    $.ajax(settings).done(function (response) {
        console.log(response)

        if (response != null) {
            getBodyTable(response);
            $("#btnMas").css("display", "block");
        } else {
            $("#btnMas").css("display", "none");
        }
    });
}


getTable();

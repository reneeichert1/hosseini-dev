$(document).ready(function () {
    if (document.getElementById("slider")) {
        var slider = new Vue({
            el: "#slider",
            data: {
                images: [{
                        headline: "Botox-Unterspritzung",
                        description: "Finden Sie die besten Anbieter für Botox-Unterspritzungen in Ihrer Nähe",
                        pricing: "199",
                        imgSrc: "img/woman 2.jpg",
                        thumbSrc: "img/woman 2.jpg",
                        moreLink: "#",
                        moreLinkText: "Finden Sie einen Arzt in Ihrer Nähe"
                    },
                    {
                        headline: "Hyaluron-Behandlung",
                        description: "Finden Sie die besten Anbieter für Hyaluron-Behandlungen in Ihrer Nähe",
                        pricing: "249",
                        imgSrc: "img/woman 3.jpg",
                        thumbSrc: "img/woman 3.jpg",
                        moreLink: "#",
                        moreLinkText: "Finden Sie einen Arzt in Ihrer Nähe"
                    },
                    {
                        headline: "Lorem Ipsum sit",
                        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
                        pricing: "149",
                        imgSrc: "img/woman 4.jpg",
                        thumbSrc: "img/woman 4.jpg",
                        moreLink: "#",
                        moreLinkText: "Finden Sie einen Arzt in Ihrer Nähe"
                    }, {
                        headline: "Lorem Ipsum sit",
                        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
                        pricing: "149",
                        imgSrc: "img/woman 5.jpg",
                        thumbSrc: "img/woman 5.jpg",
                        moreLink: "#",
                        moreLinkText: "Finden Sie einen Arzt in Ihrer Nähe"
                    }
                ]
            }
        })
    }
    if (document.getElementById("tiles")) {
        var tiles = new Vue({
            el: "#tiles",
            data: {
                tiles: [{
                        headline: "Stirn",
                        imgSrc: "img/stirn.jpg",
                        imgAlt: "Stirn",
                        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                    },
                    {
                        headline: "Augen",
                        imgSrc: "img/augen.jpg",
                        imgAlt: "Augen",
                        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                    },
                    {
                        headline: "Lippen",
                        imgSrc: "img/lippen.jpg",
                        imgAlt: "lippen",
                        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                    }
                ]
            }
        })
    }
    if (document.getElementById("treatments")) {
        var treatments = new Vue({
            el: "#treatments",
            data: {
                treatments: [{
                    headline: "Botox",
                    imgSrc: "img/botox.jpg",
                    imgAlt: "Botox",
                    description: "Die Namen für das Bakterium und das Toxin sind von dem lateinischen Wort botulus ‚Wurst‘ abgeleitet, ebenso wie die schon zuvor eingeführte Bezeichnung Botulismus für das Krankheitsbild bei einer Wurstvergiftung. Der Grund ist, dass Vergiftungen mit dem Botulinumtoxin früher häufig im Zusammenhang mit Wurst oder Wurstkonserven standen. Darauf beruht auch die historische Bezeichnung Wurstgift (englisch sausage poison). Das hauptsächlich den Botulismus verursachende Bakterium Clostridium botulinum ist ubiquitär als Spore anzutreffen. Das Bakterium benötigt nichtsaure, extrem sauerstoffarme Milieubedingungen, um auszukeimen und das Toxin zu produzieren. Solche Bedingungen sind in Wurst- und Gemüsekonserven sowie vakuumverpackten Lebensmitteln meist gegeben; zudem gilt die anaerobe Kernzone von Fleisch und Wurst meist als exzellentes Substrat für das Wachstum von Clostridium.",
                    moreInfoHref: "#"
                }, {
                    headline: "Hyaluron",
                    imgSrc: "img/hyaluron.jpg",
                    imgAlt: "Hyaluron",
                    description: "Medizinisch verwendet wird das Natrium-Salz der Hyaluronsäure (Natriumhyaluronat oder Sodium Hyaluronate). Hyaluronsäure wird aus tierischem Ausgangsmaterial (z. B. Hahnenkamm[8][9]) oder biotechnologisch aus Streptokokken-Kulturen gewonnen. Eine spezielle Modifikation stellen stabilisierte Hyaluronsäuren – beispielsweise mittels der sogenannten NASHA-Technologie (NASHA steht für „Nicht-animalische stabilisierte Hyaluronsäure“) – dar, die je nach Hersteller zwischen weniger als ein Prozent und bis zu ca. 20 bis 30 Prozent verändert werden. Für die Haltbarkeit der Produkte spielt der Prozentsatz der Stabilisierung keine große Rolle, wichtig ist die Art der Stabilisierung. Bei aus Hahnenkämmen gewonnenen Hyaluronsäureprodukten kann es zu allergischen Reaktionen kommen, wenn eine Allergie gegen Vogelproteine besteht.",
                    moreInfoHref: "#"
                }]
            }
        })
    }
    if (document.getElementById("doctors")) {
        var doctors = new Vue({
            el: "#doctors",
            data: {
                doctors: [{
                    docImgSrc: "img/arzt1.jpg",
                    docName: "Peter Maffey",
                    docDistance: "3",
                    docPosition: "",
                    shortDescription: "Peter Maffey ist Experte für Hyaluron-Behandlungen",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    treatments: [{
                        title: "Hyaluron-Behandlungen",
                        moreInfoLink: "#",
                        treatmentImgSrc: "img/hyaluron.jpg"
                    }],
                    rating: "5",
                    userVoices: [],
                    contactInfo: {
                        phone: "+49 30 1234 567",
                        mail: "kontakt@loremipsum.de",
                        chat: "https://wa.me/15551234567"
                    },
                    moreLink: ""
                }, {
                    docImgSrc: "img/arzt2.jpg",
                    docName: "Herbert Pfeiffer",
                    docDistance: "3,6",
                    docPosition: "",
                    shortDescription: "Herbert Pfeiffer ist Ihr Ansprechpartner für alle Fragen rund um Ihr Gesicht",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    treatments: [{
                        title: "Hyaluron-Behandlungen",
                        moreInfoLink: "#",
                        treatmentImgSrc: "img/hyaluron.jpg"
                    }],
                    rating: "5",
                    userVoices: [],
                    contactInfo: {
                        phone: "+49 30 1234 567",
                        mail: "kontakt@loremipsum.de",
                        chat: "https://wa.me/15551234567"
                    },
                    moreLink: ""
                }, {
                    docImgSrc: "img/arzt3.jpg",
                    docName: "Sandra Christiansen",
                    docDistance: "4,5",
                    docPosition: "",
                    shortDescription: "Sandra Christiansen hilft Ihnen bei der richtigen Auswahl Ihrer Behandlung.",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    treatments: [{
                        title: "Hyaluron-Behandlungen",
                        moreInfoLink: "#",
                        treatmentImgSrc: "img/hyaluron.jpg"
                    }],
                    rating: "4,5",
                    userVoices: [],
                    contactInfo: {
                        phone: "+49 30 1234 567",
                        mail: "kontakt@loremipsum.de",
                        chat: "https://wa.me/15551234567"
                    },
                    moreLink: ""
                }, {
                    docImgSrc: "img/arzt4.jpg",
                    docName: "Andrea Peters",
                    docDistance: "0,9",
                    docPosition: "",
                    shortDescription: "Andrea Peters ist auf dem Gebiet der Botox-Behandlungen Expertin.",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    treatments: [{
                        title: "Hyaluron-Behandlungen",
                        moreInfoLink: "#",
                        treatmentImgSrc: "img/hyaluron.jpg"
                    }],
                    rating: "3,5",
                    userVoices: [],
                    contactInfo: {
                        phone: "+49 30 1234 567",
                        mail: "kontakt@loremipsum.de",
                        chat: "https://wa.me/15551234567"
                    },
                    moreLink: ""
                }]
            },
            computed: {
                orderDoctoryBy : function(sortKey) {
                    return _.orderBy(this.doctors, sortKey)
                }
            },
            components: {

            }
        })
    }
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });

});
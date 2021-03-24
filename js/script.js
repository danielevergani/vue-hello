var app = new Vue ({
    el: "#root",
    data: {
        message: "",
        imgSrc: "https://www.tavolartegusto.it/wp/wp-content/uploads/2018/03/pizza-fatta-in-casa-buona-come-in-pizzeria-tutti-i-segreti-Ricetta-Pizza-fatta-in-casa-.jpg",
        imgAlt: "prova",
        imgDue: "",
        anim: "",
    },
    methods: {
        funzione: function(){
            this.anim = "resize";
            setTimeout(
                function (){
                    app.anim = "hide";
                    app.imgDue = "https://www.repstatic.it/content/nazionale/img/2017/02/23/111652560-4ea7ddfa-bd40-44bb-8236-e27fe17f5841.jpg";
                },
                1000);
        }
    }
})
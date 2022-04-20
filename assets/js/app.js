const app = new Vue({

    el: "#app",

    data: {
        message: "Test VueJS",
        image: "https://picsum.photos/400?random=1",
        random_image: ""
    },

    methods: {
        generateImages() {

            this.random_image = "https://picsum.photos/400?random=2";

        }
    }

})
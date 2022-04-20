const app = new Vue({

    el: "#app",

    data: {
        message: "Test VueJS",
        image: "https://picsum.photos/200?random=1",
        class_images: "images",
        random_index: 1
    },

    methods: {

        generateImages() {

            //console.log(typeof(this.class_images));
            const images = document.querySelector("." + this.class_images);

            this.random_index++;
            //console.log(this.random_index);

            const randomImage = document.createElement("img");
            randomImage.src = `https://picsum.photos/200?random=${this.random_index}`;

            images.appendChild(randomImage);

        }
    }

})
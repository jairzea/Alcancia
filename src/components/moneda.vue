<template>
  <div>    
    <img
      :src="getImgUrl(valor + 'pesos')"
      :alt="'monedaDe' + valor + 'pesos'"
      @click="moverMoneda"
      :id="'moneda' + valor + 'pesos'"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["valor"],
  data() {
    return {
      img: "../assets/50pesos.png",
    };
  },
  computed: {
    ...mapState({
      monedas: (state) => state.monedas,
    }),
  },
  methods: {
    ...mapActions(["addMoneda"]),
    getImgUrl(valor) {
      var images = require.context("../assets/", false, /\.png$/);
      return images("./" + valor + ".png");
    },
    moverMoneda() {
      const $ = require("jquery");
      if (this.valor == 50) {
        $("#moneda" + this.valor + "pesos").css(
          "transform",
          "translate(450px,200px)"
        );
      } else if (this.valor == 100) {
        $("#moneda" + this.valor + "pesos").css(
          "transform",
          "translate(200px,200px)"
        );
      } else if (this.valor == 200) {
        $("#moneda" + this.valor + "pesos").css(
          "transform",
          "translate(-30px,200px)"
        );
      } else if (this.valor == 500) {
        $("#moneda" + this.valor + "pesos").css(
          "transform",
          "translate(-230px,200px)"
        );
      } else if (this.valor == 1000) {
        $("#moneda" + this.valor + "pesos").css(
          "transform",
          "translate(-430px,200px)"
        );
      }

      this.addMoneda({ valor: this.valor });
      setTimeout(() => {
        $("#moneda" + this.valor + "pesos").css(
          "transform",
          "translate(100px,0px)"
        );
        $("#moneda" + this.valor + "pesos").css("display", "none");
      }, 1000);
      setTimeout(() => {
        $("#moneda" + this.valor + "pesos").css("display", "block");
      }, 2000);
      //$("#moneda" + this.valor + "pesos").css("transform", "translateY(200px)");
      /**console.log()             
        let posx = 700;
        let posy = 500;
        let intrv = setInterval(() => {
            element.style.left = (Number(element.style.left.split('px')[0])+5)+'px';            
            if(Number(element.style.left.split('px')[0]) == posx){
                clearInterval(intrv);
            }
        }, 10);**/
    },
  },
};
</script>

<style scoped>
img {
  width: 5em;
  cursor: pointer;
  position: absolute;
  transition: all 1s ease-in;
}
</style>
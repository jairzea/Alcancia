<template>
  <div
    id="app"
    :style="{
      backgroundImage: 'url(' + require('./assets/ALCANCIAback.png') + ')',
    }"
  >
    <b-modal id="modal-lg" size="lg" title="Informacion alcancia">
      <modalView />
    </b-modal>
    <b-container>
      <b-row>
        <b-col align="center">
          <b-button
            v-b-modal.modal-lg
            variant="outline-primary"
            id="btnHerramientas"
            >Estado de la alcancia</b-button
          >
        </b-col>
      </b-row>
      <b-row>
        <b-col v-for="(item, index) in basicCoins" :key="'coinStatic' + index">
          <moneda :valor="item.valor" />
        </b-col>
      </b-row>
      <b-row
        id="alcancia"
        :style="{
          backgroundImage: 'url(' + require('./assets/alcancia.png') + ')',
        }"
      >
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import moneda from "./components/moneda.vue";
import modalView from "./components/modalView.vue";
export default {
  name: "App",
  components: {
    moneda,
    modalView,
  },
  data() {
    return {
      basicCoins: [
        { valor: 50 },
        { valor: 100 },
        { valor: 200 },
        { valor: 500 },
        { valor: 1000 },
      ],
    };
  },
  methods: {
    ...mapActions(["setMonedas"]),
  },
  created() {
    if (localStorage.getItem("monedas")) {
      this.setMonedas(JSON.parse(localStorage.getItem("monedas")));
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: -150px;
  background-size: 130%;
}

#alcancia {
  margin-top: 8.95em;
  height: 25em;
  background-repeat: no-repeat;
  background-position-x: 10em;
}

#btnHerramientas {
  width: 12em;
  margin-bottom: 1em;
}
</style>

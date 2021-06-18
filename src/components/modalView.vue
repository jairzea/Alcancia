<template>
  <b-container>
    <b-row>
      <b-col align="center">
        <b-button
          variant="outline-success"
          @click="
            {
              status = 'total';
            }
          "
          >Dinero total</b-button
        >
      </b-col>
      <b-col align="center">
        <b-button
          variant="outline-success"
          @click="
            {
              status = 'denominacion';
            }
          "
          >Monedas por denominacion</b-button
        >
      </b-col>
    </b-row>
    <b-row v-if="status == 'total'" align="center">
      <h3>Dinero total: {{ getTotalMoney() }}$</h3>
    </b-row>
    <b-row v-if="status == 'denominacion'">
      <b-col v-for="item in monedasNom" :key="'moneda' + item">
        <img
          :src="getImgUrl(item)"
          :alt="item + 'pesos'"
          class="moneda"
          @click="moneda = item"
        />
      </b-col>
    </b-row>
    <b-row v-if="status == 'denominacion'">
      <h3 v-if="moneda == ''">SELECCIONA UNA MONEDA</h3>
      <h3 v-else>
        Hay {{ getTotalTipo(moneda) }} monedas de {{ moneda }}$
        <br />
        Valor total: {{ getTotalTipo(moneda) * moneda }}$
      </h3>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      status: "total",
      moneda: "",
      monedasNom: [50, 100, 200, 500, 1000],
    };
  },
  computed: {
    ...mapState({
      monedas: (state) => state.monedas,
    }),
  },
  methods: {
    getTotalMoney() {
      try {
        let suma = 0;
        this.monedas.map((e) => {
          suma += e.valor;
        });
        return suma;
      } catch (e) {
        return 0;
      }
    },
    getImgUrl(valor) {
      var images = require.context("../assets/", false, /\.png$/);
      return images("./" + valor + "pesos.png");
    },
    getTotalTipo(valor) {
      try {
        let suma = 0;
        this.monedas.map((e) => {
          if (e.valor == valor) {
            suma++;
          }
        });
        return suma;
      } catch (e) {
          return 0;
      }
    },  
  },
};
</script>

<style scoped>
.moneda {
  width: 5em;
}
.row {
  margin-bottom: 1em;
}
</style>
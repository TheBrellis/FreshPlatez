<template>
  <v-container>
    <v-row>
      <v-col >
        <CheckoutList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CheckoutList from "../components/CheckoutList";

export default {
  name: "Checkout",
  components: {
    CheckoutList
  }
};
</script>

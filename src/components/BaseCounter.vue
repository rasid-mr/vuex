<template>
  <div>
    <counter-slot>
      <slot name="first"></slot>
    </counter-slot>
    <p>The counter is {{ counter }}</p>
    <button @click="plus">increase</button>
    <button @click="timePlus">Time</button>
    <button @clearInt="stopTime">Stop</button>
  </div>
</template>

<script>
import CounterSlot from "./CounterSlot";
export default {
  components: {
    CounterSlot,
  },
  methods: {
    plus() {
      this.$store.commit("increment");
    },
    timePlus() {
      this.$store.dispatch("increment");
    },
    stopTime() {
      this.$store.dispatch("stopIncrement");
    },
  },
  computed: {
    counter() {
      return this.$store.getters.increase;
    },
  },
};
</script>

<style></style>

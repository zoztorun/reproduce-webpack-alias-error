<template>
  <div>
    <Hello></Hello>
  </div>
</template>

<script>
import Hello from '@/components/shared/hello/Hello';

export default {
  name: 'Home',
  components: {
    Hello,
  },
  data() {
    return {
      dummy: 0
    }
  },
};
</script>

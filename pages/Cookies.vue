<template>
  <div v-if="!accepted" class="cookie-consent">
    <p>ما از کوکی‌ها برای بهبود تجربه کاربری استفاده می‌کنیم.</p>
    <button @click="acceptCookies">موافقت با کوکی‌ها</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accepted: false,
    };
  },
  mounted() {
    this.checkCookieConsent();
  },
  methods: {
    checkCookieConsent() {
      if (typeof window !== 'undefined') { // چک کردن محیط
        this.accepted = this.$cookies.get('cookie-consent') === 'true';
      }
    },
    acceptCookies() {
      if (typeof window !== 'undefined') { // چک کردن محیط
        this.$cookies.set('cookie-consent', 'true', { expires: '365d' });
        this.accepted = true;
      }
    },
  },
};
</script>
<style>
.cookie-consent {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 15px;
  text-align: center;
  z-index: 1000;
  transition: transform 0.3s ease;
}

.cookie-consent p {
  margin: 0;
  font-size: 14px;
}

.cookie-consent button {
  background: #4CAF50; /* رنگ دکمه */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 16px;
}

.cookie-consent button:hover {
  background: #45a049; /* رنگ دکمه هنگام هاور */
}
</style>
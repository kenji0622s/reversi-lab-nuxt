// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  components: {
    dirs: ["~/components/header", "~/components/board"],
  },
  app: {
    head: {
      title: "Brain Lab",
      meta: [{ name: "description", content: "Brain Lab" }],
      link: [{ rel: "icon", href: "/icon.png" }],
    },
  },
});

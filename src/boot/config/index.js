// import something here

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ({ Vue }) => {
  // something to do
  Vue.prototype.$PUBLIC_PATH = process.env.VUE_ROUTER_BASE
}

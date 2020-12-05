import { defineComponent, h } from "vue";
import styles from "./app.scss";
const _styles = styles;

export default defineComponent({
  name: "App",
  setup(props) {
    const sections = [
      h("section", {}, [h("img", { src: require("../assets/profile.jpg") })]),
    ];
    return () => [...sections];
  },
});

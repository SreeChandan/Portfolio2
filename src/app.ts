import { defineComponent, h, VNode } from "vue";
import { DOM_TAG } from "./common-types";

export default defineComponent({
  name: "App",
  setup(props) {
    const imagePaths = {
      logoVue: require("./assets/logo.png"),
      profile: require("./assets/profile.jpg"),
      logFigma: require("./assets/figma.svg"),
      logoJavaScript: require("./assets/javascript.svg"),
      logoTypeScript: require("./assets/typescript.svg"),
      logoHtml5: require("./assets/html-5.svg"),
      logoCss3: require("./assets/css-3.svg"),
      logoSass: require("./assets/sass.svg"),
      logoTwitter: require("./assets/twitter.svg"),
      logoGithub: require("./assets/github.svg"),
      logoFiverr: require("./assets/fiverr.svg"),
      projectTictactoe: require("./assets/tictactoe.png"),
      projectConnect4: require("./assets/Connect4.png"),
      projectCalculator: require("./assets/Calculator.png"),
      project2048Game: require("./assets/2048Game.png"),
    };
    console.log(imagePaths);
    const titledContent = (
      title: string,
      content: string | VNode | (string | VNode)[],
      extraClasses: {
        section?: Array<string>;
        title?: Array<string>;
        content?: Array<string>;
      } = {
        section: [],
        title: [],
        content: [],
      }
    ) => {
      const getClasses = (name: "section" | "title" | "content") => {
        const classes = extraClasses[name];
        return classes ? classes : [];
      };
      return h(
        "section",
        {
          class: ["vertical", "titledContent", ...getClasses("section")],
        },
        [
          h(
            "p" as DOM_TAG,
            { class: ["title", ...getClasses("title")] },
            title
          ),
          Array.isArray(content)
            ? content.map((con) =>
                h(
                  typeof con === "string"
                    ? ("p" as DOM_TAG)
                    : ("div" as DOM_TAG),
                  { class: ["content", ...getClasses("content")] },
                  con
                )
              )
            : h(
                typeof content === "string"
                  ? ("p" as DOM_TAG)
                  : ("div" as DOM_TAG),
                { class: ["content", ...getClasses("content")] },
                content
              ),
        ]
      );
    };
    const containedImage = (imgPath: any, extraClasses: string[] = []) => {
      return h(
        "div" as DOM_TAG,
        { class: ["img-container", ...extraClasses] },
        h("img" as DOM_TAG, { src: imgPath })
      );
    };
    const projectShowcaseCard = (
      projectImgPath = imagePaths.logoVue,
      projectName = "Project Name",
      projectDescription = "project description project description project description project description project description project description project description project description project description project description"
    ) => {
      return h(
        "section" as DOM_TAG,
        {
          class: ["vertical", "project-showcase-card"],
        },
        [
          containedImage(projectImgPath),
          titledContent(projectName, projectDescription),
        ]
      );
    };
    const sections = [
      h(
        "section",
        {
          class: ["bio"],
        },
        [
          titledContent("Sree Chandan", [
            "Front-end developer, UI/UX designer, freelancer",
            "I am a self learner.",
          ]),
          containedImage(imagePaths.profile),
        ]
      ),
      titledContent(
        "Projects Showcase",
        h("section" as DOM_TAG, [
          projectShowcaseCard(imagePaths.projectTictactoe, "Tictactoe"),
          projectShowcaseCard(imagePaths.projectConnect4, "Connect4"),
          projectShowcaseCard(imagePaths.projectCalculator, "Calculator"),
          projectShowcaseCard(imagePaths.project2048Game, "2048 Game"),
        ]),
        { section: ["projects-showcase"] }
      ),
      titledContent(
        "My tech stack",
        [
          titledContent(
            "Languages",
            h("section" as DOM_TAG, [
              containedImage(imagePaths.logoJavaScript, ["object-fit-contain"]),
              containedImage(imagePaths.logoTypeScript, ["object-fit-contain"]),
              containedImage(imagePaths.logoHtml5, ["object-fit-contain"]),
              containedImage(imagePaths.logoCss3, ["object-fit-contain"]),
              containedImage(imagePaths.logoSass, ["object-fit-contain"]),
            ])
            //{ section: ["content"] }
          ),
          titledContent(
            "Frameworks & Tools",
            h("section" as DOM_TAG, [
              containedImage(imagePaths.logoVue, ["object-fit-contain"]),
              containedImage(imagePaths.logFigma, ["object-fit-contain"]),
            ])
            //{ section: ["content"] }
          ),
        ],
        { section: ["tech-stack"] }
      ),
      titledContent(
        "Socials",
        h("section" as DOM_TAG, [
          h(
            "a" as DOM_TAG,
            { href: "https://twitter.com/sreechandan98", target: "_blank" },
            containedImage(imagePaths.logoTwitter, ["object-fit-contain"])
          ),
          h(
            "a" as DOM_TAG,
            { href: "https://github.com/SreeChandan", target: "_blank" },
            containedImage(imagePaths.logoGithub, ["object-fit-contain"])
          ),
          h(
            "a" as DOM_TAG,
            { href: "https://www.fiverr.com/karmakast", target: "_blank" },
            containedImage(imagePaths.logoFiverr, ["object-fit-contain"])
          ),
        ]),
        { section: ["socials"] }
      ),
    ];
    return () =>
      h("div", { id: "theme-default", class: "theme-handler" }, sections);
  },
});

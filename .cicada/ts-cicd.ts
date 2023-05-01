import { Job, Pipeline } from "https://deno.land/x/cicada@v0.1.50/mod.ts";

const build = new Job({
    name: "Node Build",
    image: "node",
    steps: [
        {
            name: "Install Dependencies",
            run: "yarn install",
            cacheDirectories: ["node_modules"],
        },
        {
            name: "Run build",
            run: "yarn build",
            cacheDirectories: ["node_modules"],
        },
    ],
});

export default new Pipeline(
  [build],
  {
    on: {
      pullRequest: ["main"],
      push: ["main"],
    },
  },
);

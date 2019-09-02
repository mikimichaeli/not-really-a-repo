import { Application } from "probot";

export = (app: Application) => {
  app.on("issues.opened", async context => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!"
    });
    await context.github.issues.createComment(issueComment);
  });

  app.on("pull_request.opened", async context => {
    console.log("PR OPENED!");
    console.log(context);
  });
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};

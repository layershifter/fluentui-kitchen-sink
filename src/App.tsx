import { ThemeDecorator } from "./ThemeDecorator";
import { AvatarStory } from "./stories/Avatar";
import { ButtonStory } from "./stories/Button";
import { ImageStory } from "./stories/Image";
import { LinkStory } from "./stories/Link";

export default function App() {
  return (
    <ThemeDecorator
      header={
        <>
          <h1>Hello Fluent UI!</h1>
          <p>This is a kitchen sink with converged components!</p>
        </>
      }
    >
      <ButtonStory />
      <AvatarStory />
      <LinkStory />
      <ImageStory />
    </ThemeDecorator>
  );
}

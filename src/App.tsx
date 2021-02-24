import { Avatar, Link, Image } from "@fluentui/react-components";
import { ThemeDecorator } from "./ThemeDecorator";

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
      <h2>Avatar</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Avatar name="Robert Tolbert" size={64} />
        <Avatar
          image="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/RobertTolbert.jpg"
          name="Robert Tolbert"
          size={64}
        />
        <Avatar
          image="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/RobertTolbert.jpg"
          name="Robert Tolbert"
          square
          size={64}
        />
        <Avatar
          badge="warning"
          image="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/RobertTolbert.jpg"
          name="Robert Tolbert"
          size={64}
        />
      </div>

      <h2>Link</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Link href="#">Standalone link</Link>
        <Link disabled href="#">
          Disabled link
        </Link>
        <Link disabled disabledFocusable href="#">
          Standalone disabled focusable link
        </Link>
        <div>
          This is{" "}
          <Link href="#" inline>
            a link
          </Link>{" "}
          used alongside other text content
        </div>
      </div>

      <h2>Image</h2>
      <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
        <Image
          alt="Allan's avatar"
          src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/AllanMunger.jpg"
          height={150}
          width={150}
        />
        <Image
          alt="Amanda's avatar"
          rounded
          src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/AmandaBrady.jpg"
          height={150}
          width={150}
        />
        <Image
          alt="Erik's avatar"
          circular
          src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/ErikNason.jpg"
          height={150}
          width={150}
        />
      </div>
    </ThemeDecorator>
  );
}

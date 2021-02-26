import { Link } from "@fluentui/react-components";

export const LinkStory = () => (
  <>
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
  </>
);

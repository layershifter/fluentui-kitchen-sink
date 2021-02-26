import { Image } from "@fluentui/react-components";

export const ImageStory = () => (
  <>
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
  </>
);

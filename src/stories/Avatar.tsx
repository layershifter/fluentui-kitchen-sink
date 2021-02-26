import { Avatar } from "@fluentui/react-components";

export const AvatarStory = () => (
  <>
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
  </>
);

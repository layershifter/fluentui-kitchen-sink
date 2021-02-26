import { Button } from "@fluentui/react-components";

// TODO: this is here while waiting for react-icons to merge
const SVGIcon = () => (
  <span
    role="presentation"
    style={{
      width: "1em",
      height: "1em"
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2048 2048"
      style={{
        height: "100%",
        fill: "currentColor",
        verticalAlign: "top"
      }}
    >
      <path d="M768 768h128v128H768V768zm384 768h128v128h-128v-128zm384-768h128v128h-128V768zm-384 0h128v128h-128V768zm-384 256h128v128H768v-128zm-384 0h128v128H384v-128zm1152 0h128v128h-128v-128zm-384 0h128v128h-128v-128zm-384 256h128v128H768v-128zm-384 0h128v128H384v-128zm1152 0h128v128h-128v-128zm-384 0h128v128h-128v-128zm-384 256h128v128H768v-128zm-384 0h128v128H384v-128zM2048 128v1792H0V128h384V0h128v128h1024V0h128v128h384zM128 256v256h1792V256h-256v128h-128V256H512v128H384V256H128zm1792 1536V640H128v1152h1792z" />
    </svg>
  </span>
);

export const ButtonStory = () => (
  <>
    <h2>Button</h2>

    <div style={{ display: "flex", gap: 10, flexDirection: "column" }}>
      <div style={{ display: "flex", gap: 10 }}>
        <Button>A button</Button>
        <Button primary>A primary button</Button>
        <Button disabled>A disabled button</Button>
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <Button size="small">A small button</Button>
        <Button size="large">A large button</Button>
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <Button icon={<SVGIcon />} size="small">
          A small icon button
        </Button>
        <Button icon={<SVGIcon />}>An icon button</Button>
        <Button icon={<SVGIcon />} size="large">
          A large icon button
        </Button>
      </div>
    </div>
  </>
);

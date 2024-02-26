export function Tile({ content: Content, flip, state }) {
  switch (state) {
    case "start":
      return (
        <Back
          className="inline-block h-8 w-8 bg-blue-300"
          flip={flip}
        />
      );
    case "flipped":
      return (
        <Front className="inline-block h-8 w-8 bg-blue-500 text-white">
          <Content
            style={{
              width: "80%",
              height: "80%",
            }}
          />
        </Front>
      );
    case "matched":
      return (
        <Matched className="inline-block h-8 w-8 text-blue-200">
          <Content
            style={{
              width: "80%",
              height: "80%",
            }}
          />
        </Matched>
      );
    default:
      throw new Error("Invalid state " + state);
  }
}

function Back({ className, flip }) {
  return (
    <div style={{
      width: '20%',
      height: '70px',
      margin:5,
      borderRadius: 10,
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center'
    }} onClick={flip} className={className}>
      
    </div>
  );
}

function Front({ className, children }) {
  return <div style={{
      width: '20%',
      height: '70px',
      margin:5,
      borderRadius: 10,
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center'
    }} className={className}>{children}</div>;
}

function Matched({ className, children }) {
  return <div style={{
      width: '20%',
      height: '70px',
      margin:5,
      borderRadius: 10,
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center'
    }} className={className}>{children}</div>;
}

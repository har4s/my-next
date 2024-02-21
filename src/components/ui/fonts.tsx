export const FontGlobalCSS = () => (
  <style jsx global>
    {`
      :root {
        // --font-NAME: \${__NEXT_FONT__.style.fontFamily};
      }
    `}
  </style>
)

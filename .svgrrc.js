module.exports = {
  outDir: './components/icons',
  filenameCase: 'kebab',
  typescript: true,
  native: true,
  icon: true,
  memo: true,
  index: false,
  ignoreExisting: true,
  jsxRuntime: 'automatic',
  singleQuote: true,
  template: (variables, { tpl }) => {
    const componentName = variables.componentName.slice(3);

    return tpl`
    ${variables.imports};

    ${variables.interfaces};

    const SVG = (${variables.props}) => (${variables.jsx});

    export const ${componentName} = memo(SVG);
    ${componentName}.displayName = "${componentName}"`;
  },
};

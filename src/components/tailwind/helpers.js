const DIR_MAP = {
  t: `Top`,
  tr: `TopRight`,
  tl: `TopLeft`,
  b: `Bottom`,
  br: `BottomRight`,
  bl: `BottomLeft`,
  l: `Left`,
  r: `Right`,
  x: `Horizontal`,
  y: `Vertical`,
};

const Unit = {
  rem: `rem`,
  em: `em`,
  px: `px`,
  percent: `%`,
  vw: `vw`,
  vh: `vh`,
  none: ``,
};

const COLOR_STYLE_PROPS = {
  bg: { opacity: `__opacity_bg`, color: `backgroundColor` },
  text: { opacity: `__opacity_text`, color: `color` },
  border: { opacity: `__opacity_border`, color: `borderColor` },
  borderTop: { opacity: `__opacity_border`, color: `borderTopColor` },
  borderBottom: { opacity: `__opacity_border`, color: `borderBottomColor` },
  borderLeft: { opacity: `__opacity_border`, color: `borderLeftColor` },
  borderRight: { opacity: `__opacity_border`, color: `borderRightColor` },
  shadow: { opacity: `__opacity_shadow`, color: `shadowColor` },
  tint: { opacity: `__opacity_tint`, color: `tintColor` },
};

const MATCH_SHORT_HEX = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
const MATCH_FULL_HEX = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

export function getDirection(string) {
  return DIR_MAP[string ?? ``] || ``;
}

export function parseNumericValue(value) {
  //   const {fractions} = context;
  //   if (fractions && value.includes(`/`)) {
  //     const [numerator = ``, denominator = ``] = value.split(`/`, 2);
  //     const parsedNumerator = parseNumericValue(numerator);
  //     const parsedDenominator = parseNumericValue(denominator);
  //     if (!parsedNumerator || !parsedDenominator) {
  //       return null;
  //     }
  //     return [parsedNumerator[0] / parsedDenominator[0], parsedDenominator[1]}`;
  //   }

  const number = parseFloat(value);
  if (Number.isNaN(number)) {
    return null;
  }

  const match = value.match(/(([a-z]{2,}|%))$/);
  if (!match) {
    return number;
  }

  switch (match?.[1]) {
    case `rem`:
      return `${number}${Unit.rem}`;
    case `px`:
      return `${number}${Unit.px}`;
    case `em`:
      return `${number}${Unit.em}`;
    case `%`:
      return `${number}${Unit.percent}`;
    case `vw`:
      return `${number}${Unit.vw}`;
    case `vh`:
      return `${number}${Unit.vh}`;
    default:
      return null;
  }
}

export function mergeStyle(prop, value, style) {
  const styleVal = parseStyleVal(value);
  if (styleVal !== null) {
    style[prop] = styleVal;
  }
  return style;
}

export function parseStyleVal(value, context = {}) {
  if (value === undefined) {
    return null;
  }
  const parsed = parseNumericValue(String(value), context);
  if (parsed) {
    return toStyleVal(...parsed, context);
  } else {
    return null;
  }
}

export function toStyleVal(number, unit, context = {}) {
  const { isNegative, device } = context;
  switch (unit) {
    case Unit.rem:
      return number * 16 * (isNegative ? -1 : 1);
    case Unit.px:
      return number * (isNegative ? -1 : 1);
    case Unit.percent:
      return `${isNegative ? `-` : ``}${number}%`;
    case Unit.none:
      return number * (isNegative ? -1 : 1);
    case Unit.vw:
      if (!device?.windowDimensions) {
        //warn(`\`vw\` CSS unit requires configuration with \`useDeviceContext()\``);
        return null;
      }
      return device.windowDimensions.width * (number / 100);
    case Unit.vh:
      if (!device?.windowDimensions) {
        //warn(`\`vh\` CSS unit requires configuration with \`useDeviceContext()\``);
        return null;
      }
      return device.windowDimensions.height * (number / 100);
    default:
      return null;
  }
}

export function toPx(value) {
  const parsed = parseNumericValue(value);
  if (!parsed) {
    return null;
  }
  const [number, unit] = parsed;
  switch (unit) {
    case Unit.rem:
      return number * 16;
    case Unit.px:
      return number;
    default:
      return null;
  }
}

function addOpacity(color, opacity) {
  if (color.startsWith(`#`)) {
    color = hexToRgba(color);
  } else if (color.startsWith(`rgb(`)) {
    color = color.replace(/^rgb\(/, `rgba(`).replace(/\)$/, `, 1)`);
  }
  // @TODO: support hls/hlsa if anyone opens an issue...
  return color.replace(/, ?\d*\.?(\d+)\)$/, `, ${opacity})`);
}

function hexToRgba(hex) {
  // const orig = hex;
  hex = hex.replace(MATCH_SHORT_HEX, (_, r, g, b) => r + r + g + g + b + b);
  const result = MATCH_FULL_HEX.exec(hex);
  if (!result) {
    //warn(`invalid config hex color value: ${orig}`);
    return `rgba(0, 0, 0, 1)`;
  }

  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  return `rgba(${r}, ${g}, ${b}, 1)`;
}

export function getColorStyle(type, part) {
  const secondPart = part.slice(part.indexOf(`-`) + 1);
  if (secondPart.startsWith(`opacity-`)) {
    return colorOpacity(type, secondPart);
  } else {
    // support opacity shorthand: `bg-red-200/50`
    return color(type, secondPart);
  }
}

function color(type, secondPart) {
  let shorthandOpacity = null;
  let value = secondPart;
  let color = ``;
  if (secondPart.includes(`/`)) {
    [value = ``, shorthandOpacity] = secondPart.split(`/`, 2);
  }

  // for arbitrary support: `bg-[#eaeaea]`, `text-[rgba(1, 1, 1, 0.5)]`
  if (value.startsWith(`[#`) || value.startsWith(`[rgb`)) {
    color = value.slice(1, -1);
  } else {
    color = value;
  }
  //`bg-red-200/50`
  if (shorthandOpacity) {
    const opacity = Number(shorthandOpacity);
    if (!Number.isNaN(opacity)) {
      color = addOpacity(color, opacity / 100);
    }
  }
  return { [COLOR_STYLE_PROPS[type].color]: color };
}

export function colorOpacity(type, part) {
  const percentage = parseInt(part, 10);
  if (Number.isNaN(percentage)) {
    return null;
  }

  const opacity = percentage / 100;
  return { [COLOR_STYLE_PROPS[type].opacity]: opacity };
}

export function removeOpacityHelpers(style) {
  for (const key in style) {
    if (key.startsWith(`__opacity_`)) {
      delete style[key];
    }
  }
}

export function getBorderStyle(part) {
  if (part.indexOf(`-`) === -1) return { borderWidth: 1 };
  const secondPart = part.slice(part.indexOf(`-`) + 1);
  if (secondPart.startsWith(`opacity-`)) {
    return colorOpacity(`border`, secondPart);
  } else {
    let direction = ``;
    let restPart = secondPart.replace(
      /^(t|b|r|l|tr|tl|br|bl)(-|$)/,
      (_, dir) => {
        direction = getDirection(dir);
        return ``;
      }
    );
    const widthUtilityMatch = restPart.match(/^(-?(\d)+)?$/);
    if (widthUtilityMatch) {
      return borderWidth(restPart, direction);
    }
    restPart = restPart.replace(/^-/, ``);

    if ([`dashed`, `solid`, `dotted`].includes(restPart)) {
      return { borderStyle: restPart };
    }

    let colorType = `border`;
    switch (direction) {
      case `Bottom`:
        colorType = `borderBottom`;
        break;
      case `Top`:
        colorType = `borderTop`;
        break;
      case `Left`:
        colorType = `borderLeft`;
        break;
      case `Right`:
        colorType = `borderRight`;
        break;
      default:
        colorType = "";
    }
    return color(colorType, restPart);
  }
}

function borderWidth(part, direction) {
  return {
    [`border${direction === "" ? `` : direction}Width`]: parseNumericValue(
      part.replace(/^-/, ``) ?? 1
    ),
  };
}

export function getBorderRadius(part, direction) {
  const value = parseNumericValue(part.replace(/^-/, ``) ?? 1);
  if (direction === `Top`)
    return { borderTopLeftRadius: value, borderTopRightRadius: value };
  else if (direction === `Botom`)
    return { borderBottomLeftRadius: value, borderBottomRightRadius: value };
  else if (direction === `Left`)
    return { borderTopLeftRadius: value, borderBottomLeftRadius: value };
  else if (direction === `Right`)
    return { borderTopRightRadius: value, borderBottomRightRadius: value };
  else return { [`border${direction === "" ? `` : direction}Radius`]: value };
}

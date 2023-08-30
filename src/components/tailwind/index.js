import {
  getDirection,
  parseNumericValue,
  getColorStyle,
  getBorderRadius,
  getBorderStyle,
} from "./helpers";
import styles from "./styles";
import themes from "./themes";

export function getStyle(theme) {
  if (theme) {
    const Styles = new Map(styles);
    const Themes = new Map(themes);
    let completeStyle = {};

    const parts = theme.trim().split(` `);
    parts.forEach((part) => {
      // Default
      let selectedStyle = {};
      //console.log('part', part, completeStyle)
      if (part.startsWith("mbb") && (selectedStyle = Themes.get(part))) {
        // Custom Dynamo theme
        //console.log('Themes', selectedStyle)
        completeStyle = {
          ...completeStyle,
          ...selectedStyle,
        };
      } else if ((selectedStyle = Styles.get(part))) {
        // Default Styling
        //console.log('Styles', selectedStyle)
        completeStyle = {
          ...completeStyle,
          ...selectedStyle,
        };
      } else if ((selectedStyle = customStyle(part))) {
        // Custom Styling
        //console.log('customStyle', selectedStyle)
        completeStyle = {
          ...completeStyle,
          ...selectedStyle,
        };
      }
    });
    //console.log(completeStyle)
    return completeStyle;
  }
  return null;
}

function customStyle(part) {
  // Width & Height
  if (part.startsWith(`h-`)) {
    const value = part.slice(part.indexOf(`-`) + 1);
    return {
      [`height`]: parseNumericValue(value),
    };
  } else if (part.startsWith(`w-`)) {
    const value = part.slice(part.indexOf(`-`) + 1);
    return {
      [`width`]: parseNumericValue(value),
    };
  } else if (part.startsWith(`min-w-`)) {
    const value = part.slice(part.indexOf(`-w-`) + 3);
    return {
      [`minWidth`]: parseNumericValue(value),
    };
  } else if (part.startsWith(`max-w-`)) {
    const value = part.slice(part.indexOf(`-w-`) + 3);
    return {
      [`maxWidth`]: parseNumericValue(value),
    };
  } else if (part.startsWith(`min-h-`)) {
    const value = part.slice(part.indexOf(`-h-`) + 3);
    return {
      [`minHeight`]: parseNumericValue(value),
    };
  } else if (part.startsWith(`max-h-`)) {
    const value = part.slice(part.indexOf(`-h-`) + 3);
    return {
      [`maxHeight`]: parseNumericValue(value),
    };
  }
  // Padding & Margin
  else if (part.startsWith(`p`) || part.startsWith(`m`)) {
    const direction = part.slice(1, part.indexOf(`-`));
    const value = part.slice(part.indexOf(`-`) + 1);

    return {
      [`${part.startsWith(`p`) ? "padding" : "margin"}${getDirection(
        direction
      )}`]: parseNumericValue(value),
    };
  }
  // Flex
  else if (part.startsWith(`flex-`)) {
    const balancePart = part.slice(part.indexOf(`-`) + 1);
    const value = balancePart;
    if (balancePart.startsWith(`grow`)) {
      return {
        [`flexGrow`]: parseNumericValue(
          balancePart.slice(balancePart.indexOf(`-`) + 1)
        ),
      };
    } else if (balancePart.startsWith(`shrink`)) {
      return {
        [`flexShrink`]: parseNumericValue(
          balancePart.slice(balancePart.indexOf(`-`) + 1)
        ),
      };
    } else {
      return {
        [`flex`]: parseNumericValue(value),
      };
    }
  } else if (part.startsWith(`grow`)) {
    return {
      [`flexGrow`]: parseNumericValue(part.slice(part.indexOf(`-`) + 1)),
    };
  } else if (part.startsWith(`shrink`)) {
    return {
      [`flexShrink`]: parseNumericValue(part.slice(part.indexOf(`-`) + 1)),
    };
  }
  // Fonts
  // if (part.consumePeeked(`text-`)) {
  //     style = fontSize(this.rest, theme?.fontSize, this.context);
  //     if (style) return style;

  //     style = color(`text`, this.rest, theme?.textColor);
  //     if (style) return style;

  //     if (this.consumePeeked(`opacity-`)) {
  //         style = colorOpacity(`text`, this.rest);
  //         if (style) return style;
  //     }
  // }
  // Background Color
  else if (part.startsWith(`bg-`)) {
    return getColorStyle(`bg`, part);
  }
  // tint
  else if (part.startsWith(`tint-`)) {
    return getColorStyle(`tint`, part);
  }
  //border
  else if (part.startsWith(`border`)) {
    return getBorderStyle(part);
  }
  //rounded
  else if (part.startsWith(`rounded`)) {
    return getBorderRadius(part);
  }
}

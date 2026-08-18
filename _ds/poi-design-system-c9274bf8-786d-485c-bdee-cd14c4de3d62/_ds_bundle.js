/* @ds-bundle: {"format":4,"namespace":"POIDesignSystem_c9274b","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CircleButton","sourcePath":"components/core/CircleButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"Header","sourcePath":"components/layout/Header.jsx"},{"name":"SectionHero","sourcePath":"components/layout/SectionHero.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"6a07aa812509","components/core/Button.jsx":"b3bc4cb2804e","components/core/CircleButton.jsx":"11f4ce92da12","components/core/Logo.jsx":"e362d1e8b467","components/forms/Input.jsx":"575d8306f645","components/layout/Card.jsx":"551b2d96d23b","components/layout/Header.jsx":"59004affc055","components/layout/SectionHero.jsx":"2727e30a73f6","ui_kits/website/app.jsx":"84b47d198ff4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.POIDesignSystem_c9274b = window.POIDesignSystem_c9274b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * POI Badge — a small uppercase, wide-tracked label chip in the supporting
 * grotesque. Used for eyebrows, categories, and status tags.
 */
function Badge({
  children,
  tone = 'ink',
  variant = 'outline',
  style = {},
  ...rest
}) {
  const tones = {
    ink: {
      fg: 'var(--poi-ink)',
      bd: 'var(--color-border-strong)',
      bg: 'var(--poi-ink)',
      on: 'var(--poi-oyster)'
    },
    sky: {
      fg: 'var(--poi-sky-dark)',
      bd: 'var(--poi-sky)',
      bg: 'var(--poi-sky)',
      on: 'var(--poi-ink)'
    },
    hazel: {
      fg: 'var(--poi-hazel-dark)',
      bd: 'var(--poi-hazel)',
      bg: 'var(--poi-hazel)',
      on: 'var(--poi-oyster)'
    },
    cream: {
      fg: 'var(--poi-oyster)',
      bd: 'rgba(242,234,220,0.5)',
      bg: 'var(--poi-oyster)',
      on: 'var(--poi-ink)'
    }
  };
  const t = tones[tone] || tones.ink;
  const solid = variant === 'solid';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      lineHeight: 1,
      padding: solid ? '6px 11px' : '5px 10px',
      color: solid ? t.on : t.fg,
      background: solid ? t.bg : 'transparent',
      border: solid ? 'none' : `1px solid ${t.bd}`,
      borderRadius: 'var(--radius-sm)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: '8px 16px',
    fontSize: '11px'
  },
  md: {
    padding: '13px 24px',
    fontSize: '12px'
  },
  lg: {
    padding: '17px 34px',
    fontSize: '13px'
  }
};

/**
 * POI Button — uppercase, letter-spaced label in the supporting grotesque,
 * near-square corners. Flat and print-led, no gloss.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  tone = 'light',
  full = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const onDark = tone === 'dark';
  const ink = 'var(--poi-ink)';
  const cream = 'var(--poi-oyster)';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    width: full ? '100%' : 'auto',
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.16em',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '1.5px solid transparent',
    transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), opacity var(--dur-fast)',
    opacity: disabled ? 0.4 : 1,
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: onDark ? cream : ink,
      color: onDark ? ink : cream,
      borderColor: onDark ? cream : ink
    },
    secondary: {
      background: 'transparent',
      color: onDark ? cream : ink,
      borderColor: onDark ? 'rgba(242,234,220,0.5)' : 'var(--color-border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: onDark ? cream : ink,
      borderColor: 'transparent',
      padding: sizes[size].padding.replace(/\d+px$/, '0px')
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = onDark ? '#ffffff' : 'var(--poi-ink-80)';
      if (variant === 'secondary') e.currentTarget.style.borderColor = onDark ? '#fff' : 'var(--poi-ink)';
      if (variant === 'ghost') e.currentTarget.style.color = 'var(--poi-sky-dark)';
    },
    onMouseLeave: e => {
      if (disabled) return;
      const v = variants[variant];
      e.currentTarget.style.background = v.background;
      e.currentTarget.style.borderColor = v.borderColor;
      e.currentTarget.style.color = v.color;
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CircleButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * POI CircleButton — the round outline control from the website (e.g. the
 * "next" arrow at the edge of a hero). Icon or short glyph inside a ring.
 */
function CircleButton({
  children = '\u2192',
  size = 56,
  tone = 'light',
  variant = 'outline',
  'aria-label': ariaLabel = 'Next',
  style = {},
  ...rest
}) {
  const onDark = tone === 'dark';
  const stroke = onDark ? 'rgba(242,234,220,0.55)' : 'var(--color-border-strong)';
  const fg = onDark ? 'var(--poi-oyster)' : 'var(--poi-ink)';
  const solid = variant === 'solid';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    height: size,
    borderRadius: '50%',
    background: solid ? onDark ? 'var(--poi-oyster)' : 'var(--poi-ink)' : 'transparent',
    color: solid ? onDark ? 'var(--poi-ink)' : 'var(--poi-oyster)' : fg,
    border: solid ? 'none' : `1.5px solid ${stroke}`,
    fontFamily: 'var(--font-sans)',
    fontSize: size * 0.34,
    cursor: 'pointer',
    flex: 'none',
    transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), transform var(--dur-fast)',
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    style: base,
    onMouseEnter: e => {
      if (solid) return;
      e.currentTarget.style.borderColor = onDark ? '#fff' : 'var(--poi-ink)';
      e.currentTarget.style.background = onDark ? 'rgba(242,234,220,0.1)' : 'rgba(30,31,29,0.05)';
    },
    onMouseLeave: e => {
      if (solid) return;
      e.currentTarget.style.borderColor = stroke;
      e.currentTarget.style.background = 'transparent';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { CircleButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CircleButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * POI Logo — renders the official "PO»" wordmark image asset with the
 * identity's clear-space built in. Never redraw the mark; always use the file.
 *
 * `src` must point at the wordmark PNG relative to the host page. Use the
 * `tone` prop to pick dark (ink on light) vs light (cream/white on colour).
 */
function Logo({
  tone = 'dark',
  height = 34,
  src,
  clearSpace = false,
  alt = 'POI',
  style = {},
  ...rest
}) {
  const resolved = src || (tone === 'light' ? 'assets/poi-logo-white.png' : 'assets/poi-logo.png');
  const module = height * 0.5;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: clearSpace ? `${module * 2}px ${module * 1.5}px` : 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: resolved,
    alt: alt,
    style: {
      height,
      width: 'auto',
      display: 'block'
    }
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * POI Input — a quiet, print-led text field: hairline underline (or boxed),
 * uppercase label in the grotesque, generous line height.
 */
function Input({
  label,
  variant = 'line',
  tone = 'light',
  type = 'text',
  hint,
  id,
  style = {},
  ...rest
}) {
  const onDark = tone === 'dark';
  const fg = onDark ? 'var(--poi-oyster)' : 'var(--poi-ink)';
  const muted = onDark ? 'rgba(242,234,220,0.6)' : 'var(--poi-ink-60)';
  const line = onDark ? 'rgba(242,234,220,0.4)' : 'var(--color-border-strong)';
  const boxed = variant === 'box';
  const fieldId = id || `poi-input-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '11px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      color: muted
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '16px',
      color: fg,
      background: boxed ? onDark ? 'rgba(242,234,220,0.06)' : 'var(--poi-white)' : 'transparent',
      border: boxed ? `1px solid ${line}` : 'none',
      borderBottom: `1.5px solid ${line}`,
      borderRadius: boxed ? 'var(--radius-sm)' : 0,
      padding: boxed ? '12px 14px' : '8px 0',
      outline: 'none',
      width: '100%',
      transition: 'border-color var(--dur-fast) var(--ease-standard)'
    },
    onFocus: e => {
      e.currentTarget.style.borderBottomColor = 'var(--color-focus)';
      if (boxed) e.currentTarget.style.borderColor = 'var(--color-focus)';
    },
    onBlur: e => {
      e.currentTarget.style.borderBottomColor = line;
      if (boxed) e.currentTarget.style.borderColor = line;
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      color: muted
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * POI Card — a location / fountain card: a full-bleed image with a caption
 * block below (eyebrow tag, serif title, meta). Sharp corners, no gloss.
 */
function Card({
  title,
  eyebrow,
  meta,
  image,
  imageColor = 'var(--poi-storm)',
  ratio = '4 / 3',
  badgeTone = 'ink',
  onClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--poi-white)',
      border: 'var(--border-hairline)',
      cursor: onClick ? 'pointer' : 'default',
      overflow: 'hidden',
      transition: 'box-shadow var(--dur-med) var(--ease-standard)',
      ...style
    },
    onMouseEnter: e => {
      if (onClick) e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      background: image ? `#000 center/cover url("${image}")` : imageColor,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badgeTone
  }, eyebrow)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--fs-title)',
      lineHeight: 'var(--lh-snug)',
      color: 'var(--poi-ink)'
    }
  }, title), meta && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--poi-ink-60)',
      lineHeight: 'var(--lh-body)'
    }
  }, meta)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/Header.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * POI Header — the site masthead: wordmark on the left, an optional eyebrow
 * (location descriptor) and a wide-tracked uppercase nav on the right.
 */
function Header({
  items = ['poidełka', 'o nas', 'sklep', 'kontakt'],
  active,
  eyebrow = ['zdroje uliczne', 'Trójmiasto / Polska'],
  tone = 'light',
  logoSrc,
  onNavigate,
  style = {},
  ...rest
}) {
  const onDark = tone === 'dark';
  const fg = onDark ? 'var(--poi-oyster)' : 'var(--poi-ink)';
  const muted = onDark ? 'rgba(242,234,220,0.6)' : 'var(--poi-ink-60)';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      padding: 'var(--space-5) var(--space-7)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    tone: onDark ? 'light' : 'dark',
    height: 30,
    src: logoSrc
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '14px'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      fontSize: '11px',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: muted,
      lineHeight: 1.5
    }
  }, (Array.isArray(eyebrow) ? eyebrow : [eyebrow]).map((line, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, line))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)'
    }
  }, items.map(item => {
    const isActive = active === item;
    return /*#__PURE__*/React.createElement("a", {
      key: item,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(item);
      },
      style: {
        fontSize: '12px',
        fontWeight: 600,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: isActive ? fg : muted,
        paddingBottom: '4px',
        borderBottom: isActive ? `1.5px solid ${fg}` : '1.5px solid transparent',
        transition: 'color var(--dur-fast) var(--ease-standard)'
      },
      onMouseEnter: e => {
        e.currentTarget.style.color = fg;
      },
      onMouseLeave: e => {
        e.currentTarget.style.color = isActive ? fg : muted;
      }
    }, item);
  }))));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Header.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * POI SectionHero — the identity's signature layout: a full-bleed colour block
 * with an editorial serif headline, supporting copy, and an image panel. This
 * is the recurring "poi N: <city>" hero from poi.eco and the collateral.
 */
function SectionHero({
  eyebrow,
  title,
  body,
  bg = 'var(--poi-hazel)',
  tone = 'dark',
  image,
  imageColor = 'rgba(30,31,29,0.15)',
  imageSide = 'right',
  cta,
  onCta,
  style = {},
  ...rest
}) {
  const onDark = tone === 'dark';
  const fg = onDark ? 'var(--poi-oyster)' : 'var(--poi-ink)';
  const muted = onDark ? 'rgba(242,234,220,0.72)' : 'var(--poi-ink-60)';
  const textCol = /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 0',
      minWidth: 0,
      padding: 'var(--space-8) var(--space-7)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 'var(--space-5)'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: onDark ? 'cream' : 'ink'
  }, eyebrow)), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(30px, 3.4vw, var(--fs-display-lg))',
      lineHeight: 'var(--lh-tight)',
      color: fg,
      textWrap: 'balance'
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '46ch',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: muted
    }
  }, body), cta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CircleButton, {
    tone: tone,
    onClick: onCta,
    "aria-label": typeof cta === 'string' ? cta : 'Dalej'
  }, cta)));
  const imageCol = /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 0',
      minWidth: 0,
      alignSelf: 'stretch',
      minHeight: 320,
      background: image ? `center/cover url("${image}")` : imageColor,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  });
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      background: bg,
      overflow: 'hidden',
      ...style
    }
  }, rest), imageSide === 'left' ? /*#__PURE__*/React.createElement(React.Fragment, null, imageCol, textCol) : /*#__PURE__*/React.createElement(React.Fragment, null, textCol, imageCol));
}
Object.assign(__ds_scope, { SectionHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* POI website UI kit — click-through recreation of poi.eco.
   Composes the design-system primitives from window.POIDesignSystem_c9274b. */
const NS = window.POIDesignSystem_c9274b;
const {
  Header,
  SectionHero,
  Card,
  Button,
  CircleButton,
  Badge,
  Input,
  Logo
} = NS;
const {
  useState
} = React;
const L = "../../assets/poi-logo.png";
const FOUNTAINS = [{
  id: 1,
  city: 'Gdańsk',
  name: 'poi 1 — Długi Targ',
  meta: 'Zdrój uliczne · czynny III–XI',
  color: 'var(--poi-hazel)',
  tone: 'dark'
}, {
  id: 2,
  city: 'Gdańsk',
  name: 'poi 2 — Targ Węglowy',
  meta: 'Zdrój uliczne · całoroczny',
  color: 'var(--poi-ink)',
  tone: 'dark'
}, {
  id: 3,
  city: 'Gdynia',
  name: 'poi 3 — Skwer Kościuszki',
  meta: 'Zdrój uliczne · sezonowy',
  color: 'var(--poi-almond)',
  tone: 'light'
}, {
  id: 4,
  city: 'Sopot',
  name: 'poi 4 — Molo',
  meta: 'Zdrój uliczne · sezonowy',
  color: 'var(--poi-sky)',
  tone: 'light'
}, {
  id: 5,
  city: 'Gdańsk',
  name: 'poi 5 — Motława',
  meta: 'Zdrój uliczne · czynny III–XI',
  color: 'var(--poi-grape)',
  tone: 'light'
}, {
  id: 6,
  city: 'Gdynia',
  name: 'poi 6 — Bulwar',
  meta: 'Zdrój uliczne · całoroczny',
  color: 'var(--poi-lightblue)',
  tone: 'light'
}];
const QUOTE = 'Woda jest jedną z najlepszych powszechnych substancji w przyrodzie.';
const QUOTE2 = 'Jest symbolem życia, żywiołem, podstawą naszej rzeczywistości.';
function Section({
  children,
  bg = 'var(--poi-oyster)',
  pad = 'var(--space-9) var(--space-7)',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: pad,
      ...style
    }
  }, children);
}
function Eyebrow({
  children,
  muted
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: muted ? 'var(--poi-ink-60)' : 'var(--poi-ink)'
    }
  }, children);
}

/* ---------- Footer ---------- */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--poi-ink)',
      color: 'var(--poi-oyster)',
      padding: 'var(--space-9) var(--space-7) var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-8)',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 360,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "light",
    height: 30,
    src: "../../assets/poi-logo-white.png"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      lineHeight: 1.5,
      color: 'rgba(242,234,220,0.8)',
      margin: 0
    }
  }, QUOTE)), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 300,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Newsletter"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'rgba(242,234,220,0.6)',
      margin: 0,
      lineHeight: 1.6
    }
  }, "Nowe zdroje i sezonowe otwarcia \u2014 raz w miesi\u0105cu."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Adres e-mail",
    tone: "dark",
    type: "email",
    placeholder: "ty@przyklad.pl"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    tone: "dark"
  }, "Zapisz")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid rgba(242,234,220,0.14)',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'rgba(242,234,220,0.5)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "www.poi.eco"), /*#__PURE__*/React.createElement("span", null, "zdroje uliczne \xB7 Tr\xF3jmiasto / Polska"), /*#__PURE__*/React.createElement("span", null, "\xA9 2019 POI")));
}

/* ---------- Home ---------- */
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionHero, {
    eyebrow: "poi 1: Gda\u0144sk",
    bg: "var(--poi-hazel)",
    title: QUOTE,
    body: QUOTE2,
    cta: "\u2192",
    onCta: () => go('poidełka'),
    imageColor: "rgba(30,31,29,0.2)"
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    muted: true
  }, "Zdroje uliczne"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 40,
      margin: 0,
      color: 'var(--poi-ink)'
    }
  }, "Poide\u0142ka w Tr\xF3jmie\u015Bcie")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('poidełka')
  }, "Wszystkie \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)'
    }
  }, FOUNTAINS.slice(0, 3).map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.id,
    eyebrow: f.city,
    title: f.name,
    meta: f.meta,
    imageColor: f.color,
    badgeTone: "ink",
    onClick: () => go('detail', f)
  })))), /*#__PURE__*/React.createElement(SectionHero, {
    bg: "var(--poi-sky)",
    tone: "light",
    imageSide: "left",
    eyebrow: "O projekcie",
    title: "Miejska woda, dost\u0119pna dla ka\u017Cdego.",
    imageColor: "rgba(30,31,29,0.12)",
    body: "POI przywraca miastu publiczne poide\u0142ka \u2014 czysta woda pitna w przestrzeni wsp\xF3lnej, bez plastiku i bez koszt\xF3w.",
    cta: "\u2192",
    onCta: () => go('o nas')
  }), /*#__PURE__*/React.createElement(Footer, null));
}

/* ---------- Locations ---------- */
function Locations({
  go
}) {
  const [city, setCity] = useState('Wszystkie');
  const cities = ['Wszystkie', 'Gdańsk', 'Gdynia', 'Sopot'];
  const list = city === 'Wszystkie' ? FOUNTAINS : FOUNTAINS.filter(f => f.city === city);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    bg: "var(--poi-oyster)",
    pad: "var(--space-8) var(--space-7) var(--space-6)"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    muted: true
  }, "Tr\xF3jmiasto / Polska"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 56,
      margin: '14px 0 24px',
      color: 'var(--poi-ink)',
      maxWidth: '16ch',
      lineHeight: 1.05
    }
  }, "Znajd\u017A poide\u0142ko w pobli\u017Cu."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, cities.map(c => /*#__PURE__*/React.createElement(Badge, {
    key: c,
    tone: c === city ? 'ink' : 'ink',
    variant: c === city ? 'solid' : 'outline',
    onClick: () => setCity(c),
    style: {
      cursor: 'pointer'
    }
  }, c)))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--poi-white)",
    pad: "var(--space-7) var(--space-7) var(--space-9)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)'
    }
  }, list.map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.id,
    eyebrow: f.city,
    title: f.name,
    meta: f.meta,
    imageColor: f.color,
    badgeTone: "ink",
    onClick: () => go('detail', f)
  })))), /*#__PURE__*/React.createElement(Footer, null));
}

/* ---------- Detail ---------- */
function Detail({
  item,
  go
}) {
  const f = item || FOUNTAINS[0];
  const specs = [['Lokalizacja', f.city], ['Typ', 'Zdrój uliczne / pitny'], ['Materiał', 'Stal nierdzewna, mosiądz'], ['Zasilanie', 'Sieć miejska'], ['Sezon', f.meta.includes('całoroczny') ? 'Cały rok' : 'III–XI'], ['Dostępność', 'Publiczna, bezpłatna']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionHero, {
    eyebrow: `poi ${f.id}: ${f.city}`,
    bg: f.color,
    tone: f.tone,
    title: QUOTE,
    body: QUOTE2,
    imageColor: "rgba(30,31,29,0.16)",
    cta: "\u2190",
    onCta: () => go('poidełka')
  }), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--poi-oyster)",
    pad: "var(--space-9) var(--space-7)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '120px 1fr',
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 64,
      fontWeight: 500,
      color: 'var(--poi-ink)',
      lineHeight: 1
    }
  }, String(f.id).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "dane techniczne"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--poi-hairline)',
      marginTop: 16
    }
  }, specs.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '16px 0',
      borderBottom: '1px solid var(--poi-hairline)',
      fontFamily: 'var(--font-sans)',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--poi-ink-60)',
      letterSpacing: '0.04em'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--poi-ink)',
      fontWeight: 500
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Nawiguj \u2192"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go('poidełka')
  }, "Wr\xF3\u0107 do listy"))))), /*#__PURE__*/React.createElement(Footer, null));
}

/* ---------- About ---------- */
function About({
  go
}) {
  const insp = [['człowiek', 'var(--poi-almond)'], ['woda', 'var(--poi-sky)'], ['miasto', 'var(--poi-grape)']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    bg: "var(--poi-ink)",
    pad: "var(--space-10) var(--space-7)"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "O nas"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(34px,4.4vw,68px)',
      fontWeight: 500,
      lineHeight: 1.08,
      color: 'var(--poi-oyster)',
      margin: '20px 0 0',
      maxWidth: '18ch'
    }
  }, "Woda jest ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic'
    }
  }, "symbolem \u017Cycia"), " \u2014 oddajemy j\u0105 miastu.")), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--poi-oyster)"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    muted: true
  }, "Inspiracje"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-5)'
    }
  }, insp.map(([label, c]) => /*#__PURE__*/React.createElement("div", {
    key: label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1/1',
      background: c
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--poi-ink-60)',
      marginTop: 12
    }
  }, label)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      lineHeight: 1.6,
      color: 'var(--poi-ink)',
      maxWidth: '52ch',
      marginTop: 'var(--space-8)'
    }
  }, "Projekt POI \u0142\u0105czy cz\u0142owieka, wod\u0119 i miasto. Poide\u0142ka to punkty spotka\u0144 w przestrzeni publicznej \u2014 proste, trwa\u0142e, dost\u0119pne dla wszystkich."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go('poidełka')
  }, "Zobacz poide\u0142ka \u2192"))), /*#__PURE__*/React.createElement(Footer, null));
}

/* ---------- App shell ---------- */
function App() {
  const [page, setPage] = useState('home');
  const [item, setItem] = useState(null);
  const go = (p, data) => {
    if (data) setItem(data);
    setPage(p);
    window.scrollTo && window.__scroller && (window.__scroller.scrollTop = 0);
  };
  const active = page === 'detail' ? 'poidełka' : page;
  const headerTone = page === 'home' ? 'light' : 'light';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--poi-oyster)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'var(--poi-oyster)',
      borderBottom: '1px solid var(--poi-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    active: active,
    logoSrc: L,
    tone: headerTone,
    onNavigate: item => {
      if (item === 'o nas') go('o nas');else if (item === 'poidełka') go('poidełka');else go('home');
    }
  })), page === 'home' && /*#__PURE__*/React.createElement(Home, {
    go: go
  }), page === 'poidełka' && /*#__PURE__*/React.createElement(Locations, {
    go: go
  }), page === 'detail' && /*#__PURE__*/React.createElement(Detail, {
    item: item,
    go: go
  }), page === 'o nas' && /*#__PURE__*/React.createElement(About, {
    go: go
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CircleButton = __ds_scope.CircleButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.SectionHero = __ds_scope.SectionHero;

})();

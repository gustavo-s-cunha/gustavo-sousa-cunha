export const calcRgbaColor = (hexColor, percentage) => {
  const hex = hexColor.replace('#', '');

  // Suporta #RGB ou #RRGGBB
  const r = parseInt(hex.length === 3 ? hex[0] + hex[0] : hex.slice(0, 2), 16);
  const g = parseInt(hex.length === 3 ? hex[1] + hex[1] : hex.slice(2, 4), 16);
  const b = parseInt(hex.length === 3 ? hex[2] + hex[2] : hex.slice(4, 6), 16);

  // Converte percentual (ex: '50%') para número entre 0 e 1
  const alpha = parseFloat(percentage) / 100;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const handlescrollIntoView = (id: string) => {
  const element = document.getElementById(id);
  element && element.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};

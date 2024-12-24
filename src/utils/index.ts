import { routerPath } from "../constants";

const getPageTitleByPathName = (pathName: string): string => {
  const routeEntry = Object.values(routerPath).find(
    (item) => item.ROUTE === pathName
  );
  return routeEntry?.TITLE || "Page Not Found";
};

export {getPageTitleByPathName}
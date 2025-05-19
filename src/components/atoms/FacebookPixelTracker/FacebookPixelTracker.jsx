import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  LANDING_PAGE,
  LANDING_EBOOKS,
  CONTACT_FORM,
  OUR_PROGRAM,
  DOWNLOAD_EBOOK,
  ADMIN_PANEL,
  CUMPLIMIENTO,
  ACERCA_DE,
  LANDING_IA,
  CONFIRM_DOWNLOAD,
  POLITICS,
} from "../../../constants/routes";

const MetaPixelRouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const eventMapping = {
      [LANDING_PAGE]: "ViewHomePage",
      [LANDING_EBOOKS]: "ViewResourcePage",
      [CONTACT_FORM]: "ViewAuditPage",
      [OUR_PROGRAM]: "ViewMethodVideoPage",
      [DOWNLOAD_EBOOK]: "ViewEbookPage",
      [ADMIN_PANEL]: "ViewAdminPage",
      [CUMPLIMIENTO]: "ViewCumplimientoPage",
      [ACERCA_DE]: "ViewAcercaDePage",
      [LANDING_IA]: "ViewLandingIAPage",
      [CONFIRM_DOWNLOAD]: "ViewConfirmDownloadPage",
      [POLITICS]: "ViewPoliticsPage",
    };

    const currentPath = Object.keys(eventMapping).find((path) => {
      if (path.includes(":")) {
        const baseRoute = path.split("/:")[0];
        return location.pathname.startsWith(baseRoute);
      }
      return path === location.pathname;
    });

    const eventName = eventMapping[currentPath];

    if (
      eventName &&
      typeof window.fbq === "function" &&
      window.__lastFbqEvent !== eventName
    ) {
      window.fbq("trackCustom", eventName);
      window.__lastFbqEvent = eventName;
    }
  }, [location.pathname]);

  return null;
};

export default MetaPixelRouteTracker;

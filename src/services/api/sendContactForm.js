const WEBHOOK = import.meta.env.VITE_ZAPIER_WEBHOOK_URL;
const WEBHOOK_DOWNLOAD_EBOOK = import.meta.env
  .VITE_ZAPIER_WEBHOOK_URL_DOWNLOAD_EB0OK;

export const sendContactForm = async (data) => {
  const response = await fetch(WEBHOOK, {
    method: "POST",
    body: JSON.stringify(data),
  });
  const bodyResponse = await response.json();
  if (bodyResponse.status !== "success") throw new Error("Error :c");
  return bodyResponse;
};

export const sendContactFormDownloadEbook = async (data) => {
  const response = await fetch(WEBHOOK_DOWNLOAD_EBOOK, {
    method: "POST",
    body: JSON.stringify(data),
  });
  const bodyResponse = await response.json();
  if (bodyResponse.status !== "success") throw new Error("Error :c");
  return bodyResponse;
};

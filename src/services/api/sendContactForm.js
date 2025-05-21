import { createClient } from "@supabase/supabase-js";
const VITE_APP_SUPABASE_URL = import.meta.env.VITE_APP_SUPABASE_URL;
const VITE_APP_SUPABASE_ANON_KEY = import.meta.env.VITE_APP_SUPABASE_ANON_KEY;

const supabase = createClient(
  VITE_APP_SUPABASE_URL,
  VITE_APP_SUPABASE_ANON_KEY
);

export const sendContactForm = async (data) => {
  const { firstName, email, phone, location, website } = data;

  const { data: existingUser } = await supabase
    .from("Hackdental")
    .select("*")
    .eq("email", email)
    .single();

  const fecha_interaccion = new Date().toISOString();

  const updateData = {
    nombre: firstName,
    email,
    telefono: phone,
    pais: location,
    sitio_web: website,
    fecha_interaccion,
    auditoria: true,
  };

  if (existingUser) {
    const { error } = await supabase
      .from("Hackdental")
      .update(updateData)
      .eq("email", email);
    if (error) throw error;
  } else {
    const { error } = await supabase.from("Hackdental").insert(updateData);
    if (error) throw error;
  }

  return { status: "success" };
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
export const registerEbookDownload = async (ebookKey, email) => {
  if (!email) {
    throw new Error("No se encontró el email del usuario");
  }

  const { data: existingUser, error } = await supabase
    .from("Hackdental")
    .select("*")
    .eq("email", email)
    .single();

  const fecha_interaccion = new Date().toISOString();

  if (error || !existingUser) {
    throw new Error("El usuario no existe en la base de datos");
  }

  const updateData = {
    fecha_interaccion,
    [ebookKey]: true,
  };

  const { error: updateError } = await supabase
    .from("Hackdental")
    .update(updateData)
    .eq("email", email);

  if (updateError) {
    throw new Error("Error al actualizar usuario");
  }

  return { status: "success" };
};

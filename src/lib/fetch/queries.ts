import { supabase } from "@/lib/supabase/client";

export async function getHeroMeta() {
  const { data, error } = await supabase
    .from("hero_capabilities")
    .select("*")
    .order("order_index");

    if (error) {
        console.error(error);
    }
    
    return data;
}

export async function getHeroImages() {

  const { data, error } = await supabase
    .from("section_images")
    .select("*")
    .eq("section","hero")
    .order("order_index");

    if (error) {
        console.error(error);
    }
    
    return data;
}

export async function getProjectItems() {
  const { data, error } = await supabase
    .from("project_item")
    .select("*, project_img(*)")
    .order("order_index");

    if (error) {
        console.error(error);
        return null
    }
    
   return data?.map(item => ({
    ...item,
    project_img: item.project_img?.sort((a, b) => a.order_index - b.order_index)
  }));
}

export async function getServices() {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .order("order_index");

    if (error) {
        console.error(error);
        return null
    }
    
    return data
}

export async function getTestimonials() {
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .order("order_index");

    if (error) {
        console.error(error);
        return null
    }
    
    return data
}

export async function getSections() {
    const { data, error }= await supabase
        .from("sections")
        .select("*, section_content(*), section_images(*)")
        .order("id");

    if (error) {
        console.error(error);
        return null
    }
    
    return data
}


export async function getGlobalAssets() {
    const { data, error }= await supabase
        .from("global_assets")
        .select("*")
        .order("id");

    if (error) {
        console.error(error);
        return null
    }

    return data
}
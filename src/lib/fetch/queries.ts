import { supabase } from "@/lib/supabase/client";

export async function getHeroContent() {
    const { data, error } = await supabase
    .from("hero_content")
    .select("*")
    .single();

    if (error) {
        console.error(error);
    }
    
    return data;
}

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

export async function getAboutContent() {

  const { data, error } = await supabase
    .from("about_content")
    .select("*")
    .single();

    if (error) {
        console.error(error);
        return null
    }
    
    return data
}

export async function getProjectOverview() {

  const { data, error } = await supabase
    .from("project_overview")
    .select("*")
    .single();

    if (error) {
        console.error(error);
        return null
    }
    
    return data
}

export async function getProjectItems() {

  const { data, error } = await supabase
    .from("project_item")
    .select("*")
    .order("order_index");

    if (error) {
        console.error(error);
        return null
    }
    
    return data
}

export async function getServicesHeader() {

  const { data, error } = await supabase
    .from("services_header")
    .select("*")
    .single();

    if (error) {
        console.error(error);
        return null
    }
    
    return data
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


export async function getServiceImages() {

  const { data, error } = await supabase
    .from("section_images")
    .select("*")
    .eq("section","service")
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

export async function getCTAContent() {

    const { data, error } = await supabase 
        .from("cta_content")
        .select("*")
        .single();

    if (error) {
        console.error(error);
        return null
    }
    
    return data
}

export async function getCTAImages() {

    const { data, error }= await supabase
        .from("section_images")
        .select("*")
        .eq("section", "cta")
        .order("order_index");

    if (error) {
        console.error(error);
        return null
    }
    
    return data
}



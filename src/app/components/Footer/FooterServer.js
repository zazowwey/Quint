import { supabase } from "@/lib/supabase/client";
import Footer from "./Footer";

export default async function FooterServer(){

    const {data : footer} = await supabase
        .from("footer_content")
        .select("*")
        .single();

    return <Footer footer={footer} />;
}
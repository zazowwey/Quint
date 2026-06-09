import Footer from "./Footer";
import  { getSections, getGlobalAssets } from "@/lib/fetch/queries";

export default async function FooterServer(){
    const footer_section = await getSections();
    const footer = footer_section?.find(section => section.id === 7);
    const globalAssets = await getGlobalAssets();
    const logo_black = globalAssets?.find(asset => asset.key === "logo-black");
    const character = globalAssets?.find(asset => asset.key === "character");

    return <Footer footer={footer} logo_black={logo_black} character={character} />;
}
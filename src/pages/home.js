import Homebox from "../components/homebox";

export default function Home(){
    return(
        <div>
            <div className="flex h-screen"> 
                <Homebox title="Buyer Login" link="/buyerlogin"/>
                <Homebox title="Catalog-Team Login" link="/Cataloglogin"/>
                <Homebox title="MDM-Team Login" link="/Mdmlogin"/>
                
            </div>
        </div>
    );
}
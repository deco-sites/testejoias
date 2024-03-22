import { Model as AuctionDetail } from "apps/linx/utils/types/auctionDetailJSON.ts"; 

export interface Props { 
    leilao: AuctionDetail | null; 
}   
 
export default function ({leilao}:Props,) {    
    console.log(leilao)
    return (
        <>  
            <h2>teste</h2>  
        </>
    );
}
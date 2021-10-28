import { onSnapshot, query, collection } from "@firebase/firestore";
import { useEffect, useState }  from "react"
import { db }                   from "../firebase/config"

const useFirestore = ( target ) => {
    
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        
        const q = query(collection(db, target));

        const unsub = onSnapshot(q, (querySnapshot) => {

            const docs_returned = [];
    
            querySnapshot.forEach((doc) => {
                docs_returned.push(doc.data());
            });

            setDocs(docs_returned);

        });

    }, [target])

    return docs;

}

export default  useFirestore 
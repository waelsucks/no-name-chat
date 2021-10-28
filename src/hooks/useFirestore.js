import { onSnapshot, query, collection, orderBy } from "@firebase/firestore";
import { useEffect, useState }  from "react"
import { db }                   from "../firebase/config"

const useFirestore = ( target, ordered ) => {
    
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        
        const q = query(collection(db, target), orderBy(ordered));

        const unsub = onSnapshot(q, (querySnapshot) => {

            const docs_returned = [];
    
            querySnapshot.forEach((doc) => {
                docs_returned.push(doc.data());
            });

            setDocs(docs_returned);

        });

        return () => unsub();

    }, [target, ordered])

    return docs;

}

export default  useFirestore 


import { db } from './../firebaseConfig';
import { collection, getDocs } from "firebase/firestore";


export const getProjects = async () => {
    let projects = [];
    const data = await getDocs(
        collection(db, 'Projects/')
    );

    //Agregar cada doc al array docs
    data.forEach((childSnapshot) => {
        var id = childSnapshot.id;
        var data = childSnapshot.data();
        projects.push({
            id: id,
            title: data.title,
            description: data.description,
            image: data.image,
            tags: data.tags,
            accomplishments: data.accomplishments,
            source: data.source,
            visit: data.visit,
        });
    });
    return projects;
};
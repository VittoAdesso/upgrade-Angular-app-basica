// aquí creo el modelo y tipo de contenido que llevarán las variables public 

export interface Iheader {

    logo: Ilogo; // ya que contendrá un titulo y una url (por eso le englobo una nueva interface )
    links : string[]; // será un array de strings, porque serán links 
}

export interface Ilogo{ // siempre se verá es la imagen 

    title: string;
    img: string; 
}
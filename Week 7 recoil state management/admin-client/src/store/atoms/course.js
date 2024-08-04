// const [title, setTitle] = useState("");
// const [description, setDescription] = useState("");
// const [image, setImage] = useState("");
// const [price, setPrice] = useState(0)

import { atom } from "recoil";


const courseState = atom({
    key: 'courseState', // unique ID (with respect to other atoms/selectors)
    default: {
        
    },
});
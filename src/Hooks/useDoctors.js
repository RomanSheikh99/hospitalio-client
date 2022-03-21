import { useEffect, useState } from "react"

const useDoctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://serene-hamlet-92817.herokuapp.com/doctor')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);

    return {doctors};
}

export default useDoctors;